import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  // React.useEffect(() => {
  //   setOpen(props.popUpstatus)
  // }, [])

  return (
    <>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Box
      // style={{ padding: "5rem" }}
      >
        <Dialog
          open={props.popUpstatus}
          TransitionComponent={Transition}
          keepMounted
          onClose={props.handleClose}
          aria-describedby="alert-dialog-slide-description"
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "2rem",
              marginTop: "2rem",
            }}
          >
            {props.title}
          </DialogTitle>
          <DialogContent style={{ height: "3rem" }}>
            <DialogContentText
              style={{ display: "flex", justifyContent: "center" }}
              id="alert-dialog-slide-description"
            >
              {props.description}
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
              onClick={props.handleClose}
              variant="outlined"
              style={{
                width: "10rem",
                color: "#0A1596",
                border: "1px solid #0A1596",
              }}
            >
              {props.cancelBtnName}
            </Button>
            <Button
              onClick={props.redirect}
              variant="contained"
              style={{
                width: "10rem",
                color: "#0A1596",
                backgroundColor: "#0A1596",
                color: "#fff",
              }}
            >
              {props.agreeBtnName}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}
