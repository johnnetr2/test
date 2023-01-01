import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Grid, Typography, Divider, Button } from "@material-ui/core";
import Payment from "../Payment/Payment";
import CheckmarkStatic from "../../../src/assets/Icons/CheckmarkStatic.png";

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
  },
}));

const CustomModal = ({ order_id, handleClose }) => {
  const classes = useStyles();

  return (
    <div>
      <Modal open={true} onClose={handleClose} className={classes.modal}>
        <Grid container className={classes.box} direction={"column"}>
          <img
            src={CheckmarkStatic}
            alt="checkmark"
            style={{ width: "88px" }}
          />
          <Typography style={{ color: "#27AE60", fontSize: "32px" }}>
            Tack för ditt köp!
          </Typography>
          <Typography
            style={{ color: "#505050", fontSize: "15px", marginTop: "20px" }}
          >
            Transaktionsnummer: {order_id}
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
            Slutför
          </button>
        </Grid>
      </Modal>
      <Payment />
    </div>
  );
};

export default CustomModal;
