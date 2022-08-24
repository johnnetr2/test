import React, { useEffect, useState } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Tabs,
  Tab,
} from "@material-ui/core";
// import { Tabs, Tab } from '@mui/material';
import Heading from "../../../atom/Heading/Heading";
import HomeCard from "../../../molecule/HomeCard/HomeCard";
import { useNavigate } from "react-router-dom";
import { EndPoints, instance2 } from "../../../service/Route";
import HomeRightBar from "../HomeRightBar/HomeRightBar";
import swal from "sweetalert";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  newItem: {
    [theme.breakpoints.up("1000")]: {
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
  tabIndicatorWidth: {
    "& .PrivateTabIndicator-root-28": {
      width: "75%",
    },
  },
}));

const HomeFeedContent = (props) => {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);
  const [progress, setProgress] = useState(0);
  const [prognos, setPrognos] = useState(0);

  const handleTabs = (e, val) => {
    setTabValue(val);
  };

  const TabPanel = (props) => {
    const { children, value, index } = props;
    return <div>{value === index && <div>{children}</div>}</div>;
  };

  const navigate = useNavigate();
  const [sections, setSections] = useState();
  const [previousRecordProgress, setPreviousRecordProgress] = useState();
  const [totalPrognos, setTotalPrognos] = useState();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // const previousRecordURL =
      //   EndPoints.studentPerviousProgress + localStorage.getItem("userId");
      // instance2.get(previousRecordURL).then((response) => {
      //   console.log(response, 'this is the console of response of overall prognosis values')
      //   if (response.data.success == true) {
      //     setPreviousRecordProgress(response.data.Data);
      //   }
      // });
      const loginUserID = localStorage.getItem("userId");
      const NormeringValueOfBothMainCategories = EndPoints.OverAllNormeringValue + loginUserID;
      instance2.get(NormeringValueOfBothMainCategories).then((response) => {
        // console.log(response, 'this is the console of response of overAll Normering Values')
        if (response?.data?.success){
          setPreviousRecordProgress(response.data.Data)
        }
      })

      const url = EndPoints.getAllSections;
      instance2.get(url).then((response) => {
        let newArr = [];
        response.data.data.map((item) => {
          if (item.title == "XYZ") {
            item.time = 1;
            newArr.push(item);
          }
          if (item.title == "KVA") {
            item.time = 1;
            newArr.push(item);
          }
          if (item.title == "NOG") {
            item.time = 10/6;
            newArr.push(item);
          }
          if (item.title == "DTK") {
            item.time = 23/12;
            newArr.push(item);
          }
          if (item.title == "ELF") {
            item.time = 0.3;
            newArr.push(item);
          }
          if (item.title === "LÄS") {
            item.time = 2.2;
            newArr.push(item);
          }
          if (item.title == "MEK") {
            item.time = 0.8;
            newArr.push(item);
          }
          if (item.title == "ORD") {
            item.time = 2.2;
            newArr.push(item);
          }
        });
        setSections(newArr);
      });
    } else {
      swal({
        title: "Please login to continue",
        icon: "warning",
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          window.location.href = "/login";
        } else {
          window.location.href = "/login";
        }
      });
    }
  }, []);

  useEffect(() => {
    let count = 0;
    let totalQuestion = 0;
    let show = true;
    previousRecordProgress &&
      previousRecordProgress.map((item) => {
        if (item.TotalQuestion <= 20) {
          show = false;
        }
      });
    props.show(show);

    previousRecordProgress &&
      previousRecordProgress.map((item) => {
        // prognos = (item.CorrectQuestion / item.TotalQuestion) * 2;
        count = count + item.CorrectQuestion;
        totalQuestion = totalQuestion + item.TotalQuestion
      });
      // console.log(totalQuestion, 'totalQuestion')
      // console.log(count, 'count')
    let avgPrognos =
      previousRecordProgress && (count / totalQuestion)*2;
      // console.log(avgPrognos, 'total avaerageee')
    previousRecordProgress && setTotalPrognos(avgPrognos.toFixed(2));
    previousRecordProgress && props.getPrognos(avgPrognos.toFixed(2));
  }, [previousRecordProgress]);

  function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <Container className={classes.root} maxWidth="false">
      <Box>
        <Heading title="Övningar" />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              marginBottom: "2rem",
              marginTop: "1rem",
            }}
          >
            <Box>
              <Tabs
                className={classes.indicator}
                value={tabValue}
                onChange={handleTabs}
                variant="scrollable"
                scrollButtons={false}
                // textColor="#252525"
                // indicatorColor="primary"
                aria-label="scrollable prevent tabs example"
                TabIndicatorProps={{
                  style: {
                    background: "#0A1596",
                    border: "4px solid #0A1596",
                  },
                }}
              >
                <Tab
                  style={{
                    textTransform: "initial",
                    color: tabValue == 0 ? "black" : "#B5B5B5",
                  }}
                  className={classes.tabIndicatorWidth}
                  label="Alla delprov"
                />
                <Tab
                  style={{
                    textTransform: "initial",
                    color: tabValue == 1 ? "black" : "#B5B5B5",
                  }}
                  label="Kvantitativ del"
                />
                <Tab
                  style={{
                    textTransform: "initial",
                    color: tabValue == 2 ? "black" : "#B5B5B5",
                  }}
                  label="Verbal del"
                />
                <Tab
                  style={{
                    textTransform: "initial",
                    color: tabValue == 3 ? "black" : "#B5B5B5",
                  }}
                  label="My Peformance"
                  className={classes.newItem}
                />
              </Tabs>
            </Box>
          </Box>
        </Box>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <Box sx={{ marginBottom: "1rem" }}>
          <Typography variant="h5" component="h5">
            Kvantitativ del
          </Typography>
        </Box>
        <Box>
          <Box sx={{ marginBottom: "1rem" }}>
            {sections &&
              sections.map((item, index) => {
                if (item.section.title === "Kvantitativ del") {
                  return (
                    <HomeCard
                      item={item}
                      previousRecord={
                        previousRecordProgress &&
                        previousRecordProgress[index]?._id == item._id
                          ? previousRecordProgress[index]
                          : ""
                      }
                      data={previousRecordProgress}
                    />
                  );
                }
              })}
          </Box>
        </Box>
        <Box sx={{ marginTop: "5rem" }}>
          <Typography variant="h5" component="h5">
            Verbal del
          </Typography>
          <Box
            sx={{
              marginTop: "1rem",
            }}
          >
            {sections &&
              sections.map((item, index) => {
                if (item.section.title === "Verbal del") {
                  return (
                    <HomeCard
                      item={item}
                      previousRecord={
                        previousRecordProgress &&
                        previousRecordProgress[index]?._id == item._id &&
                        previousRecordProgress[index]
                      }
                    />
                  );
                }
              })}
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Box sx={{ marginBottom: "1rem" }}>
          <Typography variant="h5" component="h5">
            Kvantitativ del
          </Typography>
        </Box>
        <Box>
          <Box sx={{ marginBottom: "1rem" }}>
            {sections &&
              sections.map((item, index) => {
                if (item.section.title === "Kvantitativ del") {
                  return (
                    <HomeCard
                      item={item}
                      previousRecord={
                        previousRecordProgress &&
                        previousRecordProgress[index]?._id == item._id &&
                        previousRecordProgress[index]
                      }
                    />
                  );
                }
              })}
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <Box>
          <Typography variant="h5" component="h5">
            Verbal del
          </Typography>
          <Box sx={{ marginTop: "1rem" }}>
            {sections &&
              sections.map((item, index) => {
                if (item.section.title === "Verbal del") {
                  return (
                    <HomeCard
                      item={item}
                      previousRecord={
                        previousRecordProgress &&
                        previousRecordProgress[index]?._id == item._id &&
                        previousRecordProgress[index]
                      }
                    />
                  );
                }
              })}
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        <Box
          sx={{
            marginTop: "-10.5rem",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          {totalPrognos && <HomeRightBar totalPrognos={totalPrognos} />}
        </Box>
      </TabPanel>
    </Container>
  );
};

export default HomeFeedContent;
