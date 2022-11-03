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
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { makeStyles } from "@material-ui/core/styles";
import swal from "sweetalert";
import { login } from "../../../redux/reducers";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();


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
          const { user, token } = response.data;
          if (!response.data.user.is_verified) {
            swal("Warning!", "User is not verfied", "warning");
          } else if (response.data.token) {
            dispatch(login({ user, token }));
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.user._id);
            localStorage.setItem("role", response.data.user.role);
            localStorage.setItem("fullName", response.data.user.fullName);
            localStorage.setItem("email", response.data.user.email);
            MixpanelTracking.getInstance().login(
              "success",
              response.data.user?._id
            );
            new Date(response.data.user.createdAt) < new Date("2022-10-7") &&
              MixpanelTracking.getInstance().oldUsersRegistration(
                response.data.user._id,
                response.data.user.fullName,
                response.data.user.email,
                response.data.user.createdAt
              );
            if (window.innerWidth < 600) {
              document.getElementById("link").click();
            } else {
              window.location.href = "/home";
            }
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
      email: user.email,
    };
    instance2.post(URL, payLoad).then((response) => {
      if (response.status === 200) {
        swal("Success!", response.data, "success");
      }
    });
  };

  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        boxSizing: "border-box",
        display: "flex",
      }}
    >
      <a
        style={{ display: "none" }}
        target="_blank"
        href="https://www.hpappen.se/mobil"
        id="link"
      >
        link
      </a>
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
              <Box flexBasis={"100%"}>
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
              </Box>
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
              <Filled_btn type="submit" title="Logga in" onClick={loginFunc} />
            </Box>
          </form>
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}></Box>
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
