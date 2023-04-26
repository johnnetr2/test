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
import { useNavigate } from "react-router-dom";
import { appColors } from "../../../utils/commonService";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiPaper-root": {
    width: "50%",
    maxWidth: "700px"
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 1 }} {...other}>
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

export default function QuestionBackButtonPopup(props) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

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
        onClose={props.closePopup}
        aria-labelledby="customized-dialog-title"
        open={props.status}
        style={{
          textAlign: "center",
        }}
        maxWidth="xxl"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={props.closePopup}
          style={{ textAlign: "right" }}
        ></BootstrapDialogTitle>
        <DialogContent style={{ padding: "2rem 5rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <Typography gutterTop variant="h4" style={{ width: "100%" }}>
            {props.title}
          </Typography>
          <Typography gutterBottom variant="body2" style={{ margin: "1rem 0", width: "100%" }}>
            {props.description}
          </Typography>
        </DialogContent>
        <DialogActions style={{ display: "flex", justifyContent: "center", gap: "6%" }}>
          <Button
            onClick={props.closePopup}
            style={{
              backgroundColor: "transparent",
              color: appColors.blueColor,
              border: `1px solid ${appColors.blueColor}`,
              textTransform: "capitalize",
              fontWeight: "regular",
              padding: ".60rem 3rem",
              marginBottom: "2rem",
              borderRadius: "5px",
            }}
          >
            {props.cancelBtnName}
          </Button>
          <Button
            onClick={() => props.redirect()}
            style={{
              backgroundColor: appColors.blueColor,
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: "regular",
              border: "2px solid #0A1596",
              padding: ".6rem 3rem",
              marginBottom: "2rem",
              borderRadius: "5px",
            }}
          >
            {props.agreeBtnName}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
