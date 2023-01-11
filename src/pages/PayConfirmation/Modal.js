import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Grid, Typography, Divider, Button } from "@material-ui/core";
import Payment from "../Payment/Payment";
import CheckmarkStatic from "../../../src/assets/Icons/CheckmarkStatic.png";
import errorMarkStatic from "../../../src/assets/Icons/errorMarkStatic.png";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 540,
    borderRadius: 20,
    border: 0,
    backgroundColor: "#fff",
    padding: "30px 60px",
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
  },
}));

const successModal = () => {
  return (
    <>
      <img src={CheckmarkStatic} alt="checkmark" style={{ width: "80px" }} />
      <Typography style={{ color: "#27AE60", fontSize: "32px" }}>
        Tack för ditt köp!
      </Typography>
    </>
  );
};

const failureModal = () => {
  return (
    <>
      <img
        src={errorMarkStatic}
        alt="checkmark"
        style={{ width: "60px", marginBottom: "20px" }}
      />
      <Typography style={{ color: "#FF3E3E", fontSize: "32px" }}>
        Betalning misslyckades
      </Typography>
    </>
  );
};

const CustomModal = ({ order_id, handleClose, isComplete }) => {
  const classes = useStyles();
  return (
    <div>
      <Modal open={true} onClose={handleClose} className={classes.modal}>
        <Grid container className={classes.box} direction={"column"}>
          {isComplete ? successModal() : failureModal()}
          <Typography
            style={{ color: "#505050", fontSize: "15px", marginTop: "20px" }}
          >
            Transaktionsnummer:
          </Typography>
          <Typography style={{ color: "#505050", fontSize: "15px" }}>
            {order_id}
            <hr style={{ marginTop: "30px", marginBottom: "30px" }} />
          </Typography>
          <Grid container direction={"row"} justify={"space-between"}>
            <Typography style={{ color: "#505050", fontSize: "15px" }}>
              Belopp:
            </Typography>
            <Typography style={{ color: "#505050", fontSize: "15px" }}>
              450kr
            </Typography>
          </Grid>
          <Grid container direction={"row"} justify={"space-between"}>
            <Typography style={{ color: "#505050", fontSize: "15px" }}>
              Bank:
            </Typography>
            <Typography style={{ color: "#505050", fontSize: "15px" }}>
              Klarna
            </Typography>
          </Grid>
          <button
            onClick={() => handleClose()}
            style={{
              color: "#ffffff",
              backgroundColor: "#333333",
              display: "inline-block",
              padding: "10px 40px",
              border: "0px",
              borderRadius: "8px",
              fontSize: "14px",
              marginTop: "20px",
            }}
          >
            {isComplete ? "Slutför" : "Testa igen"}
          </button>
        </Grid>
      </Modal>
      <Payment />
    </div>
  );
};

export default CustomModal;
