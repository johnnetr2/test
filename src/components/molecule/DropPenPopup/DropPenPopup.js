import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { appColors } from "../../service/commonService";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    width: "50%",
    maxWidth: "700px"
  },
}));

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
        <BootstrapDialog
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
              marginBottom: "1rem",
            }}
          >
            <Button
              onClick={props?.redirect}
              style={{
                backgroundColor: appColors.blueColor,
                color: "#fff",
                textTransform: "capitalize",
                fontWeight: "regular",
                padding: ".60rem 3rem",
                marginBottom: "1rem",
              }}
            >
              {/* Se resultat */}
              {props?.btnName}
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </Box>
    </>
  );
}
