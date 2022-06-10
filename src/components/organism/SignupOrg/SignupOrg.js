import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import LabelField from "../../molecule/LabelField/LabelField";
import FilledBtn from "../../atom/FilledBtn/FilledBtn";
import OutlineBtn from "../../atom/OutlineBtn/OutlineBtn";
import swal from "sweetalert";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Label } from "reactstrap";
import { instance, EndPoints } from "../../service/Route";
import InputField from "../../atom/InputField/InputField";

const useStyles = makeStyles((theme) => ({
  hideOnMobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
  },
  autoFillColor: {
    ":-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px white inset",
      backgroundColor: "#fff !important",
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

const SignupOrg = () => {
  const classes = useStyles();

  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const data = {
      fullName: register.fullName,
      email: register.email,
      password: register.password,
    };

    const URL = EndPoints.SignUp;
    instance
      .post(URL, data)
      .then((response) => {
        if (response.data.message === "success") {
          if (response.data.user.token) {
            localStorage.setItem("userId", response.data.user.user._id);
            localStorage.setItem("token", response.data.user.token);
            swal("Success!", response.data.message, "success");
            window.location.href = "/login";
          }
        } else {
          swal("Warning!", response.data.message, "warning");
        }
      })
      .catch((error) => {
        console.log(error);
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
      <Container
        maxWidth="false"
        disableGutters
        className={classes.hideOnMobile}
        sx={{
          minHeight: "100vh",
          width: "40%",
          backgroundColor: "#0A1596",
        }}
      ></Container>
      <Container
        maxWidth="false"
        disableGutters
        sx={{
          width: "60%",
          padding: "4rem 12rem",
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
        className={classes.mobileView}
      >
        <Box>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{ marginBottom: "1rem" }}
            >
              Registrering
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Box>
          <LabelField
            type="text"
            title="Full Name"
            placeholder="Full Name"
            onChange={changeHandler}
            value={register.fullName}
            name="fullName"
            style={{
              width: "100%",
              height: "3rem",
              marginTop: ".5rem",
              marginBottom: "1rem",
            }}
          />
          <LabelField
            type="email"
            title="Email"
            placeholder="Email"
            onChange={changeHandler}
            value={register.email}
            name="email"
            style={{
              width: "100%",
              height: "3rem",
              marginTop: ".5rem",
              marginBottom: "1rem",
            }}
          />
          <Label for="password">Password</Label>
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
              placeholder="Password"
              onChange={changeHandler}
              value={register.password}
              name="password"
              id="password"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "3rem",
                border: "none",
                backgroundColor: "transparent",
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
                <VisibilityOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </Label>
          </Box>
          <Typography variant="body1">Glomt losenord?</Typography>
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <FilledBtn onClick={clickHandler} title="Skapa konto" />
            </Link>
          </Box>
          <Typography variant="body1">eller</Typography>
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <OutlineBtn title="Konto med Google" />
          </Box>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", width: "100%" }}
          >
            Har du redan ett konto?<Link to="/login">Logga in</Link>
          </Typography>
          <Typography
            variant="body1"
            mt={2}
            sx={{
              textTransform: "uppercase",
              fontSize: ".75rem",
              textAlign: "center",
              width: "100%",
            }}
          >
            This site is protected by recaptcha and the Google privacy policy
            and terms of service apply
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};

export default SignupOrg;
