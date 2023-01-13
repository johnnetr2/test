import { Box, Container, Typography } from "@mui/material";
import { EndPoints, instance } from "../../service/Route";
import React, { useEffect, useState } from "react";

import FilledBtn from "../../atom/FilledBtn/FilledBtn";
import InputField from "../../atom/InputField/InputField";
import { Label } from "reactstrap";
import LabelField from "../../molecule/LabelField/LabelField";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Icons/whiteLogo.svg";
import { MixpanelTracking } from "../../../tools/mixpanel/Mixpanel";
import OutlineBtn from "../../atom/OutlineBtn/OutlineBtn";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { makeStyles } from "@material-ui/core/styles";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { appColors } from "../../service/commonService";

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
    "&:placeholder": {
      color: "#E1E1E1",
    },
  },
  // InputFieldPlaceholder: {
  //   "&::placeholder": {
  //     color: "#E1E1E1"
  //   }
  // }
  // InputFieldPlaceholder: {
  //   "&::placeholder": {
  //     color: "#E1E1E1"
  //   }
  // }
}));

const SignupOrg = () => {
  const navigate = useNavigate();
  useEffect(() => {
    MixpanelTracking.getInstance().visitedPage("SignUp");

    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, []);

  const classes = useStyles();
  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);

  let isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{7,}$/;

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
    } else if (!isValidPassword.test(register.password)) {
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
          if (response?.data?.token) {
            MixpanelTracking.getInstance().registration(
              "Success",
              response?.data?.user?._id,
              response?.data?.user?.fullName,
              response?.data?.user?.email,
              response?.data?.user?.createdAt
            );
            // setRegister({ ...register, fullName: "", email: "", password: "" });
            // window.reload()
            swal({
              icon: "success",
              title: "Success",
              text: `Please confirm your email! We sent an email to ${response.data.user.email}`,
            }).then(() => navigate("/login"));
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
          MixpanelTracking.getInstance().registration("Fail");
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
          backgroundColor: appColors.blueColor,
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
          // paddingTop: "6rem",
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          alignSelf: "center",
        }}
        className={classes.mobileView}
      >
        <Box sx={{ padding: "1rem 0" }}>
          <Box
            sx={{
              marginBottom: "2rem",
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
          <form type="submit" onSubmit={clickHandler}>
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
                borderRadius: "8px",
                marginBottom: "1rem",
                outline: "none",
                fontFamily: "Poppins",
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
                borderRadius: "8px",
                marginBottom: "1rem",
                outline: "none",
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
                  flexBasis: "100%",
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
                  <VisibilityOutlinedIcon style={{ color: "#B5B5B5" }} />
                ) : (
                  <VisibilityOffOutlinedIcon style={{ color: "#B5B5B5" }} />
                )}
              </Label>
            </Box>
            {/* <Box>Enter valid password</Box> */}
            <Typography
              variant="body1"
              style={{ color: "#505050", textDecorationLine: "underline" }}
            >
              Glömt lösenord?
            </Typography>
            <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <FilledBtn type="submit" title="Skapa konto" />
            </Box>
          </form>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="body1">eller</Typography>
          </Box>
          <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
            {/* <OutlineBtn title="Konto med Google" /> */}
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              // marginBottom: "2rem",
            }}
          >
            <Typography variant="body1" style={{ textTransform: "uppercase" }}>
              Har du redan ett konto?
              <Link
                to="/login"
                style={{
                  textDecorationLine: "none",
                  color: appColors.blueColor,
                }}
              >
                {" "}
                Logga in
              </Link>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "2.5rem",
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
                maxWidth: "60ch",
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
