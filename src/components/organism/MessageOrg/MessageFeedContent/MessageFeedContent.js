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
}));

const MessageFeedContent = () => {
  const classes = useStyles();

  const [value, setValue] = useState();

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
            onChange={(event, newValue) => {
              setValue(newValue);
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
            (0/500)
          </Typography>
        </Box>
        <textarea
          aria-label="empty textarea"
          placeholder="Hej Beta-användare! Din feedback är jättevärdefull för oss. Vi kollar nogrannt igenom all feedback och använder det sen för att förbättra vår app. Du kan ge feedback hur många gånger du vill, vi läser alltid!"
          // minRows={3}
          style={{
            backgroundColor: "#f2f2f2",
            border: "none",
            padding: "2rem 2rem",
            borderRadius: "5px",
            display: "flex",
            flexWrap: "wrap",
            minWidth: "50ch",
          }}
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
            style={{
              backgroundColor: "#f2f2f2",
              color: "#252525",
              textTransform: "initial",
              boxShadow: "none",
              fontWeight: "400",
            }}
          >
            Fler prov
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default MessageFeedContent;
