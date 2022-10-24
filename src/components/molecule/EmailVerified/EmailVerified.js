import { Box, Typography } from "@material-ui/core";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import CheckIcon from "../../../assets/Icons/check.png";
import { Container } from "reactstrap";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EndPoints, instance2 } from "../../service/Route";
import { useSelector } from "react-redux";

const EmailVerified = () => {
  const params = useParams();
  const navigate = useNavigate();
  const userToken = useSelector((state) => state.value.token);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${userToken}`,
      "Content-Type": "application/json",
    };
    const URL = EndPoints.emailVerified + "?id=" + params.id;
    instance2.get(URL, { headers }).then((response) => {
      if (response) {
        setLoader(false);
      }
    });
  }, []);

  return (
    <div>
      {loader ? (
        <Box>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loader}
          >
            <CircularProgress color="inherit" size="5rem" />
          </Backdrop>
        </Box>
      ) : (
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
                  src={CheckIcon}
                  style={{ width: "100px", padding: "0 1rem 1rem 1rem" }}
                  alt="check icon"
                />
              </Box>
              <Typography variant="h6" style={{ textAlign: "center" }}>
                Your Email has been verfied
              </Typography>
              <Typography
                variant="body1"
                style={{ textAlign: "center", marginTop: "1rem" }}
              >
                You're almost there! Please login to continue
              </Typography>
              <Button
                style={{
                  marginTop: "2rem",
                  color: "#fff",
                  fontWeight: 400,
                  padding: ".5rem 1rem",
                  backgroundColor: "#0A1596",
                  textTransform: "capitalize",
                }}
                onClick={() => navigate("/login")}
              >
                Go To Login
              </Button>
            </Box>
          </Box>
        </Container>
      )}
    </div>
  );
};

export default EmailVerified;
