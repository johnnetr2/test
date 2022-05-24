import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import { Rating, TextareaAutosize } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "../../../../assets/Icons/SearchIcon.svg";
import Heading from "../../../atom/Heading/Heading";
import BodyText from "../../../atom/BodyText/BodyText";
import CoursesCard from "../../../molecule/CoursesCard/CoursesCard";
import { Input } from "reactstrap";
import { width } from "@mui/system";
import FeedbackPopup from "../../../molecule/FeedbackPopup/FeedbackPopup";
import { EndPoints, instance2 } from "../../../service/Route";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  test: {
    border: "2px solid #212121",
  },
  iconFilled: {
    "& .MuiRating-iconFilled": {
      color: "#0A1596",
    },
    "& .MuiRating-iconHover": {
      color: "#0A1596",
    },
  },
  enableButton: {
    backgroundColor: "#0A1596",
    color: "#fff",
    textTransform: "capitalize",
    fontWeight: "regular",
    padding: ".55rem 2rem",
    marginBottom: "2rem",
    "& .hover": {
      cursor: "pointer",
      backgroundColor: "#0A1596",
    },
  },
  disableButton: {
    backgroundColor: "#f2f2f2",
    color: "#252525",
    textTransform: "capitalize",
    fontWeight: "regular",
    padding: ".55rem 2rem",
    marginBottom: "2rem",
  },
}));

const MessageFeedContent = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [feedbackPopup, setFeedbackPopup] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const changeHandler = (e) => {
    setFeedback(e.target.value);
    setWordCount(e.target.value.length);
  };

  const clickHandler = () => {
    const URL = EndPoints.feedbackSubmit;
    const payLoad = {
      userId: localStorage.getItem("userId"),
      rating: value,
      statement: feedback,
    };
    instance2.post(URL, payLoad).then((response) => {
      if (response.status === 200) {
        setFeedbackPopup(true);
        setValue(0);
        setFeedback("");
        setWordCount(0);
      }
    });
  };

  return (
    <Container className={classes.root} disableGutters>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "20rem",
        }}
      >
        <FeedbackPopup
          show={feedbackPopup}
          onClose={() => setFeedbackPopup(false)}
        />
        <Typography variant="h5" component="h5" style={{ textAlign: "center" }}>
          Berätta för oss vad du tycker! Prov
        </Typography>
        <Box sx={{ marginTop: "3rem", marginBottom: "1rem" }}>
          <BodyText title="Hur nöjd är du med HP-Appen just nu?" />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Rating
            className={classes.iconFilled}
            size="large"
            name="simple-controlled"
            value={value}
            color="primary"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginTop: "1rem",
            marginBottom: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body1">Din feedback</Typography>
          <Typography
            variant="body2"
            style={{ color: "#999", marginLeft: "0.5rem" }}
          >
            ({wordCount}/500)
          </Typography>
        </Box>
        <textarea
          aria-label="empty textarea"
          placeholder="Hej Beta-användare! Din feedback är jättevärdefull för oss. Vi kollar nogrannt igenom all feedback och använder det sen för att förbättra vår app. Du kan ge feedback hur många gånger du vill, vi läser alltid!"
          style={{
            backgroundColor: "#f2f2f2",
            border: "none",
            padding: "2rem 2rem",
            borderRadius: "5px",
            display: "flex",
            flexWrap: "wrap",
            minWidth: "50ch",
          }}
          onChange={changeHandler}
          value={feedback}
          maxLength={500}
        />
        <Box
          sx={{
            marginTop: "2rem",
            marginBottom: "2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            className={classes.enableButton}
            disabled={!value}
            onClick={clickHandler}
          >
            Fler prov
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default MessageFeedContent;
