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

export default function TestSubmitPopup(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={() => props.closePopUp()}
        aria-labelledby="customized-dialog-title"
        open={props.status}
        style={{
          textAlign: "center",
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={() => props.closePopUp()}
          sx={{ textAlign: "end" }}
        ></BootstrapDialogTitle>
        <DialogContent style={{ padding: "1.5rem 5rem" }}>
          <Typography gutterTop variant="h4">
            Vill du lämna in?
          </Typography>
          <Typography gutterBottom variant="body2" style={{ margin: "1rem 0" }}>
            Efter att du lämnat in kan du ta en paus innan du börjar nästa
            provpass. Ditt resultat sparas.
          </Typography>
        </DialogContent>
        <DialogActions style={{ display: "flex", justifyContent: "center" }}>
          <Button
            autoFocus
            // onClick={handleClose}
            style={{
              backgroundColor: "#0A1596",
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: "regular",
              padding: ".60rem 3rem",
              marginBottom: "2rem",
            }}
            onClick={() => props.testSubmit()}
          >
            Lämna in provpasset
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
