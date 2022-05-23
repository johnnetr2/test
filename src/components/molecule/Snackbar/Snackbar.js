import React, { forwardRef, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars(props) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={props.show}
        autoHideDuration={6000}
        onClose={props.onClose}
      >
        <Alert
          onClose={props.onClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Password has been updated successfully
        </Alert>
      </Snackbar>
    </Stack>
  );
}
