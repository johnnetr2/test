import { Box, Container, Typography } from "@mui/material";
import { EndPoints, instance, instance2 } from "../../service/Route";
import React, { useEffect, useState } from "react";

import Filled_btn from "../../atom/FilledBtn/FilledBtn";
import InputField from "../../atom/InputField/InputField";
import { Label } from "reactstrap";
import Label_field from "../../molecule/LabelField/LabelField";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Icons/whiteLogo.svg";
import { MixpanelTracking } from "../../../tools/mixpanel/Mixpanel";
import Outline_btn from "../../atom/OutlineBtn/OutlineBtn";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import firebase from "../../service/firebase";
import { makeStyles } from "@material-ui/core/styles";
import { signInWithGoogle } from "../../service/firebase";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { ElectricScooterTwoTone } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  hideOnMobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
  },
  mobileView: {
    [theme.breakpoints.down("sm")]: {
      margin: "0rem !important",
      padding: "2rem !important",
      width: "100% !important",
    },
  },
  placeholder: {
    "&:placeholder": {
      color: "#E1E1E1",
    },
  },
}));

const LoginOrg = () => {
  useEffect(() => {
    MixpanelTracking.getInstance().visitedPage("Login");
  }, []);

  const classes = useStyles();
  const navigate = useNavigate();

  const [enterPressed, setEnterPressed] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);

  const getVal = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        setEnterPressed(true);
      }
    };
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const loginFunc = (e) => {
    e && e.preventDefault();
    if (user.email == "" || user.password == "") {
      swal({
        icon: "warning",
        title: "Alert!",
        text: "Please Fill the required Fields",
      });
    } else {
      const data = {
        email: user.email,
        password: user.password,
      };
      const URL = EndPoints.Login;
      instance
        .post(URL, data)
        .then((response) => {
          console.log(response, "response");
          if (!response.data.user.is_verified) {
            swal("Warning!", "User is not verfied", "warning");
          } else if (response.data.token) {
            localStorage.setItem("userId", response.data.user._id);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.user.role);
            localStorage.setItem("fullName", response.data.user.fullName);
            localStorage.setItem("email", response.data.user.email);
            MixpanelTracking.getInstance().login(
              "success",
              response.data.user?._id
            );
            navigate("/home");
            // window.location.href = "/home";
          } else {
            swal("Warning!", "Invalid Credentials", "error");
          }
        })
        .catch((error) => {
          swal("Warning!", "Invalid Credentials", "error");
        });
    }
  };

  if (enterPressed) {
    loginFunc();
  }

  const forgotPassword = () => {
    const URL = EndPoints.resetPassword;
    const payLoad = {
      email: localStorage.getItem("email"),
    };
    instance2.post(URL, payLoad).then((response) => {
      if (response.status === 200) {
        swal("Success!", response.data, "success");
      }
    });
  };

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(data => {
  //     if(data.user) {

  //     }
  //     setData(data);
  //   })
  // }, [])

  // const signInWithGoogle = () => {
  //   const provider = new firebase.auth.GoogleAuthProvider
  //   auth.signInwithPopup(provider)
  // }
  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        boxSizing: "border-box",
        display: "flex",
      }}
    >
      <Container
        maxWidth="false"
        disableGutters
        sx={{
          minHeight: "100vh",
          width: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0A1596",
        }}
        className={classes.hideOnMobile}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Logo} style={{ width: "10rem" }} alt="" />
          <Typography
            variant="body2"
            style={{
              color: "white",
              marginTop: "2rem",
            }}
          >
            Din väg mot Högskoleprovet.
          </Typography>
        </Box>
      </Container>
      <Container
        maxWidth="false"
        disableGutters
        sx={{
          width: "60%",
          // paddingTop: "6rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
        className={classes.mobileView}
      >
        <Box sx={{ padding: "1rem 0" }}>
          <Box sx={{ marginBottom: "2rem" }}>
            <Typography variant="h3" sx={{ marginBottom: "1rem" }}>
              Logga in
            </Typography>
            <Typography variant="body2">
              Välkommen tillbaka! Logga för att sätta igång med plugget.
            </Typography>
          </Box>
          <form type="submit" onSubmit={loginFunc}>
            <Label_field
              type="text"
              placeholder="Email"
              title="Email"
              name="email"
              onChange={getVal}
              className={classes.placeholder}
              value={user.email}
              style={{
                width: "100%",
                height: "3rem",
                padding: "1rem",
                border: "1px solid #e1e1e1",
                marginTop: ".5rem",
                borderRadius: "8px",
                marginBottom: "1rem",
                outline: "none",
                WebkitBoxShadow: "0 0 0 1000px white inset",
              }}
            />
            <Label for="password" style={{ color: "#B5B5B5" }}>
              Lösenord
            </Label>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "3rem",
                marginTop: ".5rem",
                marginBottom: "1rem",
                border: "1px solid #e1e1e1",
                backgroundColor: "transparent",
                borderRadius: "8px",
              }}
            >
              <InputField
                type={showPassword ? "password" : "text"}
                title="Password"
                placeholder="Lösenord"
                onChange={getVal}
                value={user.password}
                name="password"
                id="password"
                className={classes.placeholder}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "2rem",
                  padding: "1rem",
                  width: "100%",
                  backgroundColor: "transparent",
                  outline: "none",
                  border: "none",
                  WebkitBoxShadow: "0 0 0 1000px white inset",
                }}
              />
              <Label
                for="password"
                style={{
                  paddingRight: "1rem",
                  margin: "0",
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? (
                  <VisibilityOutlinedIcon style={{ color: "#B5B5B5" }} />
                ) : (
                  <VisibilityOffOutlinedIcon style={{ color: "#B5B5B5" }} />
                )}
              </Label>
            </Box>
            <Link
              to="#"
              onClick={forgotPassword}
              style={{ color: "#505050", textDecorationLine: "underline" }}
            >
              Glömt lösenord?
            </Link>
            <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Filled_btn title="Logga in" onClick={loginFunc} />
            </Box>
          </form>
          {/* <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="body1">eller</Typography>
          </Box> */}
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            {/* <Outline_btn
              onClick={signInWithGoogle}
              title="Logga in Med Google"
            /> */}
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <Typography variant="body1">
              Har du inget konto? <Link to="/">Skapa konto här</Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default LoginOrg;
