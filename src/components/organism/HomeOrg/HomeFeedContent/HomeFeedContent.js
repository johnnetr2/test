import React, { useEffect, useState } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Tab,
  Tabs,
} from "@material-ui/core";
import Heading from "../../../atom/Heading/Heading";
import HomeCard from "../../../molecule/HomeCard/HomeCard";
import { useNavigate } from "react-router-dom";
import { EndPoints, instance2 } from "../../../service/Route";
import HomeRightBar from "../HomeRightBar/HomeRightBar";
import swal from 'sweetalert'


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  newItem: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  navItemSm: {
    display: "block",
    [theme.breakpoints.down("500px")]: {
      display: "none",
    },
  },
  test: {
    border: "2px solid #212121",
  },
  navBelowBarColor: {
    "& .PrivateTabIndicator-colorSecondary-19": {
      backgroundColor: "#0A1596",
    },
  },
}));

const HomeFeedContent = () => {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);

  const handleTabs = (e, val) => {
    setTabValue(val);
  };

  const TabPanel = (props) => {
    const { children, value, index } = props;
    return <div>{value === index && <div>{children}</div>}</div>;
  };

  const navigate = useNavigate();
  // const [categories, setCategories] = useState();
  const [sections, setSections] = useState();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const url = EndPoints.getAllSections;
      instance2.get(url).then((response) => {
        setSections(response.data.data);
      });
    } else {
      swal({ title: "Please login to continue", icon: "warning", dangerMode: true, })
        .then((willDelete) => {
          if (willDelete) {
            window.location.href = '/login'
          } else {
            window.location.href = '/login'
          }
        });
    }

  }, []);

  return (
    <Container className={classes.root}>
      <Box>
        <Heading title="Dashboard" />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", marginBottom: "2rem", marginTop: "1rem" }}>
            <Box>
              <Tabs
                value={tabValue}
                onChange={handleTabs}
                variant="scrollable"
                scrollButtons={false}
                aria-label="scrollable prevent tabs example"
                TabIndicatorProps={{ style: { background: "#0A1596" } }}
              >
                <Tab
                  style={{ textTransform: "initial" }}
                  label="Alla kategorier"
                />
                <Tab
                  style={{ textTransform: "initial" }}
                  label="Kvantitativ del"
                />
                <Tab style={{ textTransform: "initial" }} label="Verbal del" />
                <Tab
                  style={{ textTransform: "initial" }}
                  label="My Peformance"
                  className={classes.newItem}
                />
              </Tabs>
            </Box>
          </Box>
        </Box>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography variant="h5" component="h5">
            Kvantitativ del
          </Typography>
        </Box>
        <Box>
          <Box sx={{ marginBottom: "1rem" }}>
            {sections &&
              sections.map((item) => {
                if (item.section.title === "Kvantitativ del") {
                  return <HomeCard item={item} />;
                }
              })}
          </Box>
        </Box>
        <Box sx={{ marginTop: "2rem" }}>
          <Typography variant="h5" component="h5">
            Verbal del
          </Typography>
          <Box sx={{ marginBottom: "3rem", marginTop: "2rem" }}>
            {sections &&
              sections.map((item) => {
                if (item.section.title === "Verbal del") {
                  return <HomeCard item={item} />;
                }
              })}
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography variant="h5" component="h5">
            Kvantitativ del
          </Typography>
        </Box>
        <Box>
          <Box sx={{ marginBottom: "1rem" }}>
            {sections &&
              sections.map((item) => {
                if (item.section.title === "Kvantitativ del") {
                  return <HomeCard item={item} />;
                }
              })}
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography variant="h5" component="h5">
            Verbal del
          </Typography>
          <Box sx={{ marginBottom: "1rem", marginTop: "2rem" }}>
            {sections &&
              sections.map((item) => {
                if (item.section.title === "Verbal del") {
                  return <HomeCard item={item} />;
                }
              })}
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        <Box>
          <HomeRightBar />
        </Box>
      </TabPanel>
    </Container>
  );
};

export default HomeFeedContent;
