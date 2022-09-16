import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography } from "@mui/material";
import { Label } from "reactstrap";
import Label_field from "../../molecule/LabelField/LabelField";
import Filled_btn from "../../atom/FilledBtn/FilledBtn";
import Outline_btn from "../../atom/OutlineBtn/OutlineBtn";
import swal from "sweetalert";
import { instance, EndPoints, instance2 } from "../../service/Route";
import { signInWithGoogle } from "../../service/firebase";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import firebase from "../../service/firebase";
import Logo from "../../../assets/Icons/whiteLogo.svg";
import InputField from "../../atom/InputField/InputField";
import { useNavigate } from "react-router-dom";

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
}));

const LoginOrg = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);

  const getVal = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginFunc = (e) => {
    e.preventDefault();
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
          if (response.data.token) {
            localStorage.setItem("userId", response.data.user._id);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.user.role);
            localStorage.setItem("fullName", response.data.user.fullName);
            localStorage.setItem("email", response.data.user.email);
            // navigate("/home");
            window.location.href = "/home";
          } else {
            swal("Warning!", "Invalid Credentials", "error");
          }
        })
        .catch((error) => {
          swal("Warning!", "Invalid Credentials", "error");
        });
    }
  };

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
          paddingTop: "6rem",
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
        className={classes.mobileView}
      >
        <Box sx={{ padding: "1rem 0" }}>
          <Box sx={{ marginBottom: "1rem" }}>
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
              value={user.email}
              style={{
                width: "100%",
                height: "3rem",
                padding: "1rem",
                border: "1px solid #e1e1e1",
                marginTop: ".5rem",
                borderRadius: "5px",
                marginBottom: "1rem",
                outline: "none",
                WebkitBoxShadow: "0 0 0 1000px white inset",
              }}
            />
            <Label for="password">Lösenord</Label>
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
                borderRadius: "5px",
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
                className={classes.autoFillColor}
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
                  <VisibilityOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </Label>
            </Box>
            <Link to="#" onClick={forgotPassword}>
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
          <Box style={{ display: "flex", justifyContent: "center" }}>
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
