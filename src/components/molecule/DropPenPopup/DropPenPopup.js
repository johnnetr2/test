import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box, Typography } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DropPenPopup(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(props.popUpstatus);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box>
        <Dialog
          open={props?.popUpstatus}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          fullWidth
          maxWidth="md"

        >
          <DialogTitle
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "2rem",
              marginTop: "2rem",
            }}
          >
            {/* Dags att droppa pennan! */}
            {props?.title}
          </DialogTitle>
          <DialogContent style={{ height: "3rem" }}>
            <DialogContentText
              style={{ display: "flex", justifyContent: "center" }}
              id="alert-dialog-slide-description"
            >
              {/* Dags att droppa pennan! */}
              <Typography gutterTop>
                {props.description}
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <Button
              onClick={props?.redirect}
              style={{
                backgroundColor: "#0A1596",
                color: "#fff",
                textTransform: "capitalize",
                fontWeight: "regular",
                padding: ".60rem 3rem",
                marginBottom: "2rem",
              }}
            >
              {/* Se resultat */}
              {props?.btnName}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}
