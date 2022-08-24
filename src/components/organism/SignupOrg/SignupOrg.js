import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
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
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/Icons/whiteLogo.svg";

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
  focusTest: {
    "&:focus": {
      outline: "none !important",
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
    "&::placeholder": {
      color: "#E1E1E1",
    },
  },
}));

const SignupOrg = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(true);

  let isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/;

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
    if (
      register.fullName == "" ||
      register.email == "" ||
      register.password == ""
    ) {
      swal({
        icon: "warning",
        title: "Alert!",
        text: "Please Fill the Required Fields",
      });
    } else if (!isValid.test(register.password)) {
      swal({
        icon: "warning",
        title: "Alert!",
        text: "6+ bokstäver, 1 stor bokstav, 1 siffra",
      });
    } else {
      const URL = EndPoints.SignUp;
      instance
        .post(URL, data)
        .then((response) => {
          console.log(response);
          if (response?.data?.token) {
            localStorage.setItem("role", response?.data?.user?.role);
            localStorage.setItem("fullName", response?.data?.user?.fullName);
            localStorage.setItem("email", response?.data?.user?.email);
            localStorage.setItem("userId", response?.data?.user?._id);
            localStorage.setItem("token", response?.data?.token);
            navigate("/home");
          } else if (response?.data?.result == "fail") {
            swal({
              icon: "warning",
              title: "Warning",
              text: response?.data?.message,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0A1596",
        }}
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
          <Box
            sx={{
              marginBottom: "1rem",
            }}
          >
            <Typography
              variant="h3"
              component="h3"
              sx={{ marginBottom: "1rem" }}
            >
              Registrera dig
            </Typography>
            <Typography variant="body2">
              Påbörja resan mot Högskoleprovet idag.
            </Typography>
          </Box>
          <LabelField
            type="text"
            title="Namn"
            placeholder="Namn"
            onChange={changeHandler}
            value={register.fullName}
            name="fullName"
            style={{
              width: "100%",
              height: "3rem",
              padding: "1rem",
              border: "1px solid #e1e1e1",
              marginTop: ".5rem",
              borderRadius: "5px",
              marginBottom: "1rem",
              outline: "none",
            }}
          />
          <LabelField
            type="email"
            title="E-mail"
            placeholder="Email"
            onChange={changeHandler}
            value={register.email}
            name="email"
            style={{
              width: "100%",
              height: "3rem",
              padding: "1rem",
              border: "1px solid #e1e1e1",
              marginTop: ".5rem",
              borderRadius: "5px",
              marginBottom: "1rem",
              outline: "none",
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
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              type={showPassword ? "password" : "text"}
              title="6+ bokstäver, 1 stor bokstav, 1 siffra"
              placeholder="6+ bokstäver, 1 stor bokstav, 1 siffra"
              onChange={changeHandler}
              value={register.password}
              // placeholder="6+ bokstäver, 1 stor bokstav, 1 siffra"
              className={classes.placeholder}
              name="password"
              id="password"
              style={{
                width: "20vw",
                backgroundColor: "coral",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "3rem",
                border: "none",
                padding: "1rem",
                backgroundColor: "transparent",
                outline: "none",
              }}
            />
            <Label
              for="password"
              style={{
                padding: "0 1rem",
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
          {/* <Box>Enter valid password</Box> */}
          <Typography variant="body1">Glömt lösenord?</Typography>
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <FilledBtn onClick={clickHandler} title="Skapa konto" />
            </Link>
          </Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="body1">eller</Typography>
          </Box>
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            {/* <OutlineBtn title="Konto med Google" /> */}
          </Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body1"
              style={{ textTransform: "uppercase  " }}
              // sx={{ textAlign: "center", width: "100%" }}
            >
              Har du redan ett konto?<Link to="/login"> Logga in</Link>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="body1"
              component="span"
              mt={2}
              sx={{
                textTransform: "uppercase",
                fontSize: ".75rem",
                textAlign: "center",
                width: "60ch",
              }}
            >
              This site is protected by recaptcha and the Google privacy policy
              and terms of service apply
            </Typography>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default SignupOrg;
