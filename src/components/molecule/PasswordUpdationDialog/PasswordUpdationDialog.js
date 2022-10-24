import React, { useState, useEffect } from "react";
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
  Snackbar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InputField from "../../atom/InputField/InputField";
import FilledBtn from "../../atom/FilledBtn/FilledBtn";
import { EndPoints, instance2 } from "../../service/Route";
import axios from "axios";
import swal from "sweetalert";
import { useSelector } from "react-redux";

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

export default function PasswordUpdationDialog(props) {
  const [updatePassword, setUpdatePassword] = useState({
    currentPassword: "",
    updatedPassword: "",
  });
  const { user, token } = useSelector((state) => state.value);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUpdatePassword({ ...updatePassword, [name]: value });
  };

  const clickHandler = () => {
    const payLoad = {
      oldPassword: updatePassword.currentPassword,
      password: updatePassword.updatedPassword,
    };
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const URL = EndPoints.changePassword + user._id;
    instance2
      .post(URL, payLoad, { headers })
      .then((response) => {
        if (response.data.message === "success") {
          props.hidePopup();
          props.showSnackbar();
        } else {
          swal({
            title: response.data.message,
            icon: "warning",
            dangerMode: true,
          });
          props.hidePopup();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <BootstrapDialog
        onClose={props.hidePopup}
        aria-labelledby="customized-dialog-title"
        open={props.showPopup}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={props.hidePopup}
        ></BootstrapDialogTitle>
        <DialogContent>
          <Box marginX={15} paddingY={2}>
            <Typography variant="body1">Nuvarande lösenord</Typography>
            <Box sx={{ width: "100%" }}>
              <InputField
                placeholder="6+ Characters, 1 Capital letter"
                name="currentPassword"
                onChange={changeHandler}
                type="password"
                value={updatePassword.currentPassword}
              />
            </Box>
            <Typography variant="body1">Nytt lösenord</Typography>
            <InputField
              placeholder="6+ Characters, 1 Capital letter"
              name="updatedPassword"
              onChange={changeHandler}
              type="password"
              value={updatePassword.updatedPassword}
            />
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <Box>
            <FilledBtn
              disabled={!updatePassword.updatedPassword}
              title="Uppdatera lösenord"
              onClick={clickHandler}
            />
          </Box>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
