import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography } from "@mui/material";
import Label_field from "../../molecule/LabelField/LabelField";
import Filled_btn from "../../atom/FilledBtn/FilledBtn";
import Outline_btn from "../../atom/OutlineBtn/OutlineBtn";
import swal from "sweetalert";
import { instance, EndPoints, instance2 } from "../../service/Route";
import { signInWithGoogle } from "../../service/firebase";
import firebase from "../../service/firebase";

const useStyles = makeStyles((theme) => ({
  hideOnMobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
  },
}));

const LoginOrg = () => {
  const classes = useStyles();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState();

  const getVal = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginFunc = (e) => {
    e.preventDefault();
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
          window.location.href = "/home";
        } else {
          swal("Warning!", "Invalid Credentials", "error");
        }
      })
      .catch((error) => {
        swal("Warning!", "Invalid Credentials", "error");
      });
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
  //     console.log(data)
  //     setData(data);
  //   })
  // }, [])

  // console.log(data);

  // const signInWithGoogle = () => {
  //   const provider = new firebase.auth.GoogleAuthProvider
  //   auth.signInwithPopup(provider)
  // }

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        boxSizing: "border-box",
        display: "flex",
      }}
    >
      <Container
        xs={1}
        disableGutters
        sx={{
          minHeight: "100vh",
          width: "40%",
          backgroundColor: "#0A1596",
        }}
        className={classes.hideOnMobile}
      ></Container>
      <Container
        xs={11}
        disableGutters
        sx={{
          width: "60%",
          padding: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <Box>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="h3" sx={{ marginBottom: "1rem" }}>
              Logga in
            </Typography>
            <Typography variant="body2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </Typography>
          </Box>
          <Label_field
            type="text"
            placeholder="Email"
            title="Email"
            name="email"
            onChange={getVal}
            value={user.email}
          />
          <Label_field
            onChange={getVal}
            value={user.password}
            name="password"
            type="password"
            placeholder="Password"
            title="Password"
          />
          <Link to="#" onClick={forgotPassword}>
            Glomt losenord?
          </Link>
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Link style={{ textDecoration: "none" }} to="/home">
              <Filled_btn title="Logga in" onClick={loginFunc} />
            </Link>
          </Box>
          <Typography variant="body1">eller</Typography>
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Outline_btn
              onClick={signInWithGoogle}
              title="Logga in Med Google"
            />
          </Box>
          <Typography variant="body1">
            Har du ingte konto? <Link to="/">Skapa konto har</Link>
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};

export default LoginOrg;
