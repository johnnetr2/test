import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Label_field from "../../molecule/LabelField/LabelField";
import Filled_btn from "../../atom/FilledBtn/FilledBtn";
import Outline_btn from "../../atom/OutlineBtn/OutlineBtn";
import swal from "sweetalert";
import { instance, EndPoints } from "../../service/Route";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight: theme.spacing(0),
    paddingLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    marginLeft: theme.spacing(0),
  },
}));

const Signup_org = () => {
  const classes = useStyles();

  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
  });

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
        if (response.data.message == "success") {
          if (response.data.user.token) {
            localStorage.setItem('userId', response.data.user.user._id)
            localStorage.setItem('token', response.data.user.token)
            swal("Success!", response.data.message, "success");
            window.location.href = "/login";
          }
        } else {
          swal("Warning!", response.data.message, 'warning');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ boxSizing: "border-box", display: "flex" }}
    >
      <Container
        maxWidth="500"
        sx={{
          minHeight: "fit-content",
          width: "40%",
          backgroundColor: "#0A1596",
        }}
      ></Container>
      <Container
        sx={{
          width: "60%",
          padding: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="h3" sx={{ marginBottom: "1rem" }}>
              Registrering
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Box>
          <Label_field
            type="text"
            title="Full Name"
            placeholder="Full Name"
            onChange={changeHandler}
            value={register.fullName}
            name="fullName"
          />
          <Label_field
            type="email"
            title="Email"
            placeholder="Email"
            onChange={changeHandler}
            value={register.email}
            name="email"
          />
          <Label_field
            type="password"
            title="Password"
            placeholder="Password"
            onChange={changeHandler}
            value={register.password}
            name="password"
          />
          <Typography variant="body1">Glomt losenord?</Typography>
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Filled_btn
                onClick={clickHandler}
                title="Skapa konto" />
            </Link>
          </Box>
          <Typography variant="body1">eller</Typography>
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Outline_btn title="Konto med Google" />
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

export default Signup_org;
