import React, { useState } from "react";
import { Button, Modal, Grid, Item } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PayImage from "../../../assets/Imgs/PayImage.png";
import ListValues from "../PaymentOrg/ListValues";
import Cross from "../../../assets/Icons/Cross.svg";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    width: "70rem",
    height: "34rem",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3),
    overflow: "hidden",
    "&:focus": {
      outline: "none",
    },
  },
}));

export default function PaymentModal({ open, handleClose }) {
  const classes = useStyles();

  const navigate = useNavigate();

  const navigateCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Modal
      open={open} //Ändra här för att öppna/stänga popup
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className={classes.paper}
      >
        <Button
          onClick={() => handleClose()}
          style={{
            backgroundColor: "transparent",
            padding: 0,
            textTransform: "none",
            boxShadow: "none",
            marginLeft: "-20px",
            marginTop: "-10px",
          }}
        >
          <img src={Cross} alt="" />
        </Button>
        <Grid
          container
          spacing={2}
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            container
            display="flex"
            direction="column"
            spacing={2}
            xs={6}
            style={{ paddingLeft: 50 }}
          >
            <Grid
              item
              alignItems="left"
              justifyContent="left"
              alignContent="left"
              style={{ paddingRight: "3rem" }}
            >
              <p
                style={{
                  marginBottom: "1rem",
                  color: "grey",
                  fontSize: "15px",
                }}
              >
                Denna kategori är endast öppen för premiumanvändare
              </p>
              <p style={{ marginBottom: "1rem", fontSize: "17px" }}>
                Premium ger dig exklusiva förmåner och fördelar som förbereder
                dig för Högskoleprovet.
              </p>
              <ListValues />
            </Grid>
            <button
              onClick={() => navigateCheckout()}
              style={{
                color: "white",
                backgroundColor: "#5263EB",
                height: "50px",
                border: 0,
                borderRadius: "6.62px",
                paddingRight: "50px",
                paddingLeft: "50px",
                maxWidth: "250px",
                fontSize: "20px",
                marginTop: "20px",
              }}
            >
              Läs mer
            </button>
          </Grid>
          <Grid item xs={6}>
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                marginTop: "-20px",
              }}
              src={PayImage}
              alt=""
            />
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
}
