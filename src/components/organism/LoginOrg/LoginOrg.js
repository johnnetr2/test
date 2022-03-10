import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";
import Label_field from "../../molecule/LabelField/LabelField";
import Filled_btn from "../../atom/FilledBtn/FilledBtn";
import Outline_btn from "../../atom/OutlineBtn/OutlineBtn";
import swal from "sweetalert";
import { instance, EndPoints } from '../../service/Route'


const Login_org = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

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
          localStorage.setItem('userId',response.data.user._id)
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

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ boxSizing: "border-box", display: "flex" }}
    >
      <Container
        disableGutters
        sx={{
          minHeight: "fit-content",
          width: "40%",
          backgroundColor: "#0A1596",
        }}
      ></Container>
      <Container
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
          <Link to="#">Glomt losenord?</Link>
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Link style={{ textDecoration: "none" }} to="/home">
              <Filled_btn title="Logga in"
              onClick={loginFunc}
              />
            </Link>
          </Box>
          <Typography variant="body1">eller</Typography>
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Outline_btn title="Logga in Med Google" />
          </Box>
          <Typography variant="body1">
            Har du ingte konto? <Link to="#">Skapa konto har</Link>
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};

export default Login_org;
