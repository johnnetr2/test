import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import { Rating } from "@mui/material";
import BodyText from "../../../atom/BodyText/BodyText";
import FeedbackPopup from "../../../molecule/FeedbackPopup/FeedbackPopup";
import { EndPoints, instance2 } from "../../../service/Route";
import { appColors } from "../../../service/commonService";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  test: {
    border: "2px solid #212121",
  },
  iconFilled: {
    "& .MuiRating-iconFilled": {
      color: appColors.blueColor,
    },
    "& .MuiRating-iconHover": {
      color: appColors.blueColor,
    },
  },
  enableButton: {
    backgroundColor: appColors.blueColor,
    color: "#fff",
    textTransform: "capitalize",
    fontWeight: "regular",
    padding: ".55rem 2rem",
    marginBottom: "2rem",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: appColors.hoverBlue,
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
        setFeedback("");
        setWordCount(0);
      }
    });
  };

  const handleClose = () => {
    setFeedbackPopup(false)
    setValue(0);

  }

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
          onClose={() => handleClose()}
        />
        <Typography variant="h5" component="h5" style={{ textAlign: "center" }}>
          Berätta för oss vad du tycker! Prov
        </Typography>
        <Box
          sx={{
            marginTop: "3rem",
            marginBottom: "1rem",
            // maxWidth: "20vw",
            // backgroundColor: "coral",
            // display: "flex",
            // justifyContent: "center",
          }}
        >
          <BodyText title="Hur nöjd är du med HP-Appen just nu?" />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Rating
            className={classes.iconFilled}
            size="large"
            name="simple-controlled"
            value={value}
            color="primary"
            precision={1}
            style={{
              fontSize: '3rem',
              display: "flex",
              WebkitInitialLetter: '2rem'
            }}
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
          // padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            // backgroundColor: 'coral',
            marginTop: "1rem",
            marginBottom: "1.3rem",
            flexWrap: "wrap",
            width: "40vw",
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
            borderRadius: "10px",
            display: "flex",
            flexWrap: "wrap",
            minHeight: "45vh",
            minWidth: "40vw",
            resize: "none",
            outline: 'none'
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
