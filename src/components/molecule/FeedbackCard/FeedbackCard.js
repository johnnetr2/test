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

const CrossIcon = (props) => {
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
    <div>
      <BootstrapDialog
        BackdropProps={{ invisible: true }}
        hideBackdrop
        onClose={props.onClose}
        aria-labelledby="customized-dialog-title"
        open={props.show}
        PaperProps={{
          style: {
            border: "1px solid #e1e1e1",
            boxShadow: "0 4px 10px #f2f2f2",
            position: "absolute",
            right: 50,
            bottom: 0,
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
        <Box sx={{ p: "0 2rem 2rem 2rem" }}>
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
                width: "25rem",
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
                backgroundColor: "#0A1596",
                color: "#fff",
                display: "block",
                margin: "auto",
                width: "25rem",
                height: "2.5rem",
                textTransform: "initial",
                fontWeight: "400",
                borderRadius: "5px",
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
