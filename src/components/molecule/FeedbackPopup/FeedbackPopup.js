import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function FeedbackPopup(props) {
  return (
    <div>
      <BootstrapDialog
        onClose={props.onClose}
        aria-labelledby="customized-dialog-title"
        open={props.show}
        style={{
          textAlign: "center",
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={props.onClose}
        ></BootstrapDialogTitle>
        <DialogContent style={{ padding: "2rem 5rem" }}>
          <Typography gutterTop variant="h4">
            Tack för din feedback.
          </Typography>
          <Typography gutterBottom variant="body2" style={{ margin: "1rem 0" }}>
            Vi kommer att använda den för att förbättra vår app i framtiden.
          </Typography>
        </DialogContent>
        <DialogActions style={{ display: "flex", justifyContent: "center" }}>
          <Button
            autoFocus
            onClick={props.onClose}
            style={{
              backgroundColor: "#0A1596",
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: "regular",
              padding: ".55rem 2rem",
              marginBottom: "2rem",
            }}
          >
            Tillbaka
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
