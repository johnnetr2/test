import { EndPoints, instance2 } from "../../service/Route";
import React, { useState } from "react";

import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CrossIcon = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, height: "1rem" }} {...other}>
      {children}
      {onClose ? (
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon
            sx={{
              color: "#B5B5B5",
            }}
            fontSize="large"
          />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

CrossIcon.propTypes = {
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
    <div
      style={{
        width: "100%",
      }}
    >
      <BootstrapDialog
        BackdropProps={{ invisible: true }}
        hideBackdrop
        onClose={props.onClose}
        aria-labelledby="customized-dialog-title"
        open={props.show}
        PaperProps={{
          style: {
            border: "2px solid #e1e1e1",
            boxShadow: "0 4px 10px #f2f2f2",
            position: "absolute",
            borderRadius: "5px",
            right: 0,
            bottom: 0,
            maxWidth: 600,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CrossIcon id="customized-dialog-title" onClose={props.onClose} />
        </Box>
        <Box
          sx={{ p: "0 2rem 2rem 2rem" }}
          display="flex"
          flexDirection="column"
          alignItem="canter"
        >
          <DialogContent>
            <Typography sx={{ color: "#505050", fontSize: "14px" }}>
              Tack, din feedback sparades
            </Typography>
            <Typography sx={{ color: "#505050", fontSize: "14px" }}>
              Lägg gärna till något nedan. Det hjälper oss att förbättra oss
            </Typography>
            <Typography
              gutterBottom
              sx={{ color: "#505050", fontSize: "14px" }}
            >
              (frivilligt).
            </Typography>
            {/* <Box
              style={{
                width: "auto",

                height: "10rem",
              }}
            > */}
            <TextareaAutosize
              aria-label="empty textarea"
              style={{
                backgroundColor: "#f9f9f9",
                border: "none",
                width: "100%",
                maxWidth: "30rem",
                padding: "1rem",
                height: "7rem",
                resize: "none",
              }}
              onChange={(e) => setQuestionFeedback(e.target.value)}
              value={questionFeedback}
            />
            {/* </Box> */}
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={cardSubmittion}
              disabled={!questionFeedback}
              style={{
                backgroundColor: `#${
                  questionFeedback.length === 0 ? "E1E1E1" : "0A1596"
                }`,
                color: `#${
                  questionFeedback.length === 0 ? "505050" : "FFFFFF"
                }`,
                display: "block",
                margin: "auto",
                width: "100%",
                maxWidth: "30rem",
                height: "3rem",
                fontSize: "1rem",
                textTransform: "initial",
                fontWeight: "400",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Skicka in
            </Button>
          </DialogActions>
        </Box>
      </BootstrapDialog>
    </div>
  );
}
