import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Box,
  Button,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InputField from "../../atom/InputField/InputField";
import FilledBtn from "../../atom/FilledBtn/FilledBtn";

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
    <>
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
    </>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <DialogContent>
          <Box marginX={15} paddingY={2}>
            <Typography variant="body1">Nuvarande lösenord</Typography>
            <Box sx={{ width: "100%" }}>
              <InputField placeholder="6+ Characters, 1 Capital letter" />
            </Box>
            <Typography variant="body1"> Nytt lösenord</Typography>
            <InputField placeholder="6+ Characters, 1 Capital letter" />
          </Box>
        </DialogContent>
        <DialogActions sx={{display:'flex', justifyContent:'center', marginBottom:'1rem'}}>
          <Box>
            <FilledBtn title="Uppdatera lösenord" />
          </Box>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
