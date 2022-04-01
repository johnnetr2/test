import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { EndPoints, instance2 } from "../../../service/Route";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  navItemLg:{
    display:'none',
    [theme.breakpoints.up('500px')]: {
      backgroundColor: '#f00'
    },
  },
  navItemSm:{
    display:'block',
    [theme.breakpoints.down('500px')]:{
      display:'none'
    }
  },
  test: {
    border: "2px solid #212121",
  },
  navBelowBarColor: {
    "& .PrivateTabIndicator-colorSecondary-19": {
      backgroundColor: "#0A1596",
      border: "2px solid #f0f",
    },
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
  const navigate = useNavigate();
  const [categories, setCategories] = useState();
  const [sections, setSections] = useState();

  useEffect(() => {
    const URL = EndPoints.getAllCategories;
    instance2.get(URL).then((response) => {
      if (response.data) {
        setCategories(response.data.data);
      }
    });

    const url = EndPoints.getAllSections;
    instance2.get(url).then(response => {
      setSections(response.data.data)
    })

  }, []);

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
                TabIndicatorProps={{ style: { background: "#0A1596" } }}
              >
                <Tab
                  style={{ textTransform: "initial" }}
                  label="Alla kategorier"
                  {...a11yProps(0)}
                  // className={classes.NavItemLg}
                />
                <Tab
                  style={{ textTransform: "initial" }}
                  label="Kvantitativ del"
                  {...a11yProps(1)}
                  // className={classes.NavItemLg}
                />
                <Tab
                  style={{ textTransform: "initial" }}
                  label="Verbal del"
                  {...a11yProps(2)}
                  // className={classes.NavItemLg}
                />
                <Tab
                  style={{ textTransform: "initial" }}
                  label="My Peformance"
                  {...a11yProps(3)}
                  // className={classes.NavItemLg}
                />
              </Tabs>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography variant="h5" component="h5">
          Kvantitativ del
        </Typography>
      </Box>
      <Box>
        <Box sx={{ marginBottom: "1rem" }}>
          {sections && sections.map((item) => {
            if (item.section.title === "Kvantitativ del") {
              return <HomeCard item={item} />;
            }
          })}
        </Box>
      </Box>
      <Box sx={{ marginBTop: "2rem", marginBottom: "1rem" }}>
        <Typography variant="h5" component="h5">
          Verbal del
        </Typography>
        <Box
          sx={{ marginBottom: "1rem" }}
        >
          {sections && sections.map((item) => {
            if (item.section.title === "Kvantitativ del") {
              return <HomeCard item={item} />;
            }
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default HomeFeedContent;
