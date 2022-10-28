import { Box, Typography } from "@material-ui/core";
import { Button } from "@mui/material";
import React from "react";
import VerificationIcon from "../../../assets/Icons/emailVerificationIcon.png";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";

const EmailVerification = () => {
  const { user, token } = useSelector((state) => state.value);
  return (
    <div>
      <Container
        maxWidth="false"
        disableGutters
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            border: "1px solid #e1e1e1",
            width: "30rem",
            backgroundColor: "#fff",
            borderRadius: "5px",
            boxShadow: "0px 4px 10px #f2f2f2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              padding: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box>
              <img
                src={VerificationIcon}
                style={{ width: "100px", padding: "0 1rem 1rem 1rem" }}
                alt="email verification icon"
              />
            </Box>
            <Typography variant="h6" style={{ textAlign: "center" }}>
              Please Verify Your Email
            </Typography>
            <Typography
              variant="body1"
              style={{ textAlign: "center", marginTop: "1rem" }}
            >
              You're almost there! We sent an email to{" "}
              <span style={{ fontWeight: 500 }}>{user.email}</span>
            </Typography>

            <Typography
              variant="body2"
              style={{ textAlign: "center", marginTop: "1rem" }}
            >
              To confirm your email address. Please{" "}
              <span style={{ fontWeight: 500 }}>click on the link</span> in the
              email we sent you.
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default EmailVerification;
