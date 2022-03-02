import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Button,
  Tab,
  Tabs,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SearchIcon from "../../../../assets/Icons/SearchIcon.svg";
import Heading from "../../../atom/Heading/Heading";
import BodyText from "../../../atom/BodyText/BodyText";
import HomeCard from "../../../molecule/HomeCard/HomeCard";
import CoursesCard from "../../../molecule/CoursesCard/CoursesCard";
import { Input } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  test: {
    border: "2px solid #212121",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const HomeFeedContent = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.root}>
      <Box>
        <Heading title="Dashboard" />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", marginBottom: "2rem", marginTop: "1rem" }}>
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Alla kategorier" {...a11yProps(0)} />
                <Tab label="Kvantitativ del" {...a11yProps(1)} />
                <Tab label="Verbal del" {...a11yProps(2)} />
              </Tabs>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography variant="h5" component="h5">
          Tidigare högskoleprov
        </Typography>
      </Box>
      <Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <HomeCard />
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <HomeCard />
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <HomeCard />
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <HomeCard />
        </Box>
      </Box>
      <Box sx={{ marginBTop: "2rem", marginBottom:'1rem' }}>
        <Typography variant="h5" component="h5">
          Verbal del
        </Typography>
        <Box sx={{ marginBottom: "1rem" }}>
          <HomeCard />
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <HomeCard />
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <HomeCard />
        </Box>
      </Box>
    </Container>
  );
};

export default HomeFeedContent;
