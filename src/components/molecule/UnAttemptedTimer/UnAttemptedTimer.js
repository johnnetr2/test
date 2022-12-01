import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    width: "60%",
    maxWidth: "800px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
      {children}
      
    </DialogTitle>
  );
};


export default function UnAttemptedTimer(props) {
  const [openTimer, setOpenTimer] = React.useState(false);

  const handleClickOpen = () => {
    setOpenTimer(props.popUpstatus);
  };

  const handleClose = () => {
    setOpenTimer(false);
  };

  return (
    <>
      <Box>
        <BootstrapDialog
          open={props.popUpstatus}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          fullWidth
          maxWidth="xl"
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={props.redirect}
            style={{
              textAlign: "center",
            }}
          >
            <Typography style={{marginTop: "3rem", fontSize: "2rem"}}>
              {props.title}
            </Typography>
          </BootstrapDialogTitle>
          <DialogContent style={{ paddingRight: "5rem", paddingLeft: "5rem", paddingBottom: "2rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
          <Typography gutterBottom variant="body2">
            {props.description}
          </Typography>
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
              onClick={props.redirect}
              autoFocus
              style={{
                backgroundColor: "#0A1596",
                color: "#fff",
                textTransform: "capitalize",
                fontWeight: "regular",
                padding: ".60rem 3rem",
                marginBottom: "2rem",
              }}
            >
              {props.btnName}
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </Box>
    </>
  );
}
