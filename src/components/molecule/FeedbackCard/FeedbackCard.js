import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { EndPoints, instance2 } from "../../service/Route";

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

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);
  const [questionFeedback, setQuestionFeedback] = useState("");

  const cardSubmittion = () => {
    const payLoad = {
      point: props.count,
      explanation: questionFeedback,
      question: props.questionId,
      user: localStorage.getItem("userId"),
    };
    const URL = EndPoints.questionRating;
    instance2.post(URL, payLoad).then((response) => {
      if (response.status === 200) {
        props.onClose();
        setQuestionFeedback("");
      }
    });
  };

  return (
    <div>
      <BootstrapDialog
        onClose={props.onClose}
        aria-labelledby="customized-dialog-title"
        open={props.show}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={props.onClose}
        ></BootstrapDialogTitle>
        <DialogContent>
          <Typography gutterBottom sx={{ marginTop: "2rem", color: "#999" }}>
            {props.count} Tack för din feedback! Vill du även berätta några ord
            för oss vad som inte var bra så att vi kan förbättra det?
            (frivilligt)
          </Typography>
          <Box
            style={{
              width: "auto",
              height: "10rem",
              backgroundColor: "#f9f9f9",
            }}
          >
            <TextareaAutosize
              aria-label="empty textarea"
              style={{ width: "35.5rem", padding: "1rem", height: "10rem" }}
              onChange={(e) => setQuestionFeedback(e.target.value)}
              value={questionFeedback}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={cardSubmittion}
            disabled={!questionFeedback}
            style={{
              backgroundColor: "#0A1596",
              color: "#fff",
              display: "block",
              margin: "auto",
              width: "35rem",
              height: "2.25rem",
              textTransform: "initial",
              fontWeight: "400",
              borderRadius: "5px",
            }}
          >
            Skicka in
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
