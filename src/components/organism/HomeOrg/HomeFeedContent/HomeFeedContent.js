import {
  Box,
  Container,
  Tab,
  Tabs,
  Typography,
  makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";
import swal from "sweetalert";
import React, { useEffect, useState } from "react";

import { EndPoints, instance2 } from "../../../service/Route";
import Heading from "../../../atom/Heading/Heading";
import HomeCard from "../../../molecule/HomeCard/HomeCard";
import HomeRightBar from "../HomeRightBar/HomeRightBar";
import { verbalPercentageCalculator } from "../../../atom/percentageCalculator/verbal";
import { quantitativePercentageCalculator } from "../../../atom/percentageCalculator/kvantitative";

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
  tabIndicatorWidth: {
    "& .PrivateTabIndicator-root-28": {
      width: "75%",
    },
  },
}));

const HomeFeedContent = (props) => {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);
  const handleTabs = (e, val) => {
    setTabValue(val);
  };
  const TabPanel = (props) => {
    const { children, value, index } = props;
    return <div>{value === index && <div>{children}</div>}</div>;
  };
  const [sections, setSections] = useState();
  const [previousRecordProgress, setPreviousRecordProgress] = useState();
  const [totalPrognos, setTotalPrognos] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const loginUserID = localStorage.getItem("userId");
      const NormeringValueOfBothMainCategories =
        EndPoints.OverAllNormeringValue + loginUserID;

      instance2.get(NormeringValueOfBothMainCategories).then((response) => {
        if (response?.data?.success) {
          setLoading(true);
          setPreviousRecordProgress(response.data.Data);
        }
      });
      const url = EndPoints.getAllSections;
      instance2.get(url).then((response) => {
        let newArr = [];
        response.data.data.map((item) => {
          if (item.title === "XYZ") {
            item.time = 1;
            newArr.push(item);
          }
          if (item.title === "KVA") {
            item.time = 1;
            newArr.push(item);
          }
          if (item.title === "NOG") {
            item.time = 10 / 6;
            newArr.push(item);
          }
          if (item.title === "DTK") {
            item.time = 23 / 12;
            newArr.push(item);
          }
          if (item.title === "ELF") {
            item.time = 2.2;
            newArr.push(item);
          }
          if (item.title === "LÄS") {
            item.time = 2.2;
            newArr.push(item);
          }
          if (item.title === "MEK") {
            item.time = 0.8;
            newArr.push(item);
          }
          if (item.title === "ORD") {
            item.time = 0.3;
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
    const verbalCategories = [
      "62627dd77a4f7b3068eaa825",
      "62627de67a4f7b3068eaa82a",
      "62627df17a4f7b3068eaa82f",
      "62627dfe7a4f7b3068eaa834",
    ];
    let verbalCorrected = 0;
    let quantitativeCorrected = 0;
    let verbalAttempted = 0;
    let quantitativeAttempted = 0;
    let verbalTotalNormValue = 0;
    let quantitativeTotalNormValue = 0;
    previousRecordProgress &&
      previousRecordProgress.map((item, index) => {
        const isVerbal = verbalCategories.find(sectionCategoryId => sectionCategoryId === item._id);
        if (isVerbal) {
          verbalCorrected += item.totalCorrectTimePressure;
          verbalAttempted += item.totalAttemptedTimePressure
        } else {
          quantitativeCorrected += item.totalCorrectTimePressure;
          quantitativeAttempted += item.totalAttemptedTimePressure
        }
      });
    quantitativeTotalNormValue = (quantitativeCorrected / quantitativeAttempted) * 100;
    verbalTotalNormValue = (verbalCorrected / verbalAttempted) * 100;
    quantitativeTotalNormValue = quantitativePercentageCalculator(
      quantitativeTotalNormValue
    );
    verbalTotalNormValue = verbalPercentageCalculator(verbalTotalNormValue);
    let avgProgressQuantitativeAndVerbal =
      (quantitativeTotalNormValue + verbalTotalNormValue) / 2;

    if (avgProgressQuantitativeAndVerbal > 0) {
      setTotalPrognos(avgProgressQuantitativeAndVerbal.toFixed(2));
      props.getPrognos(avgProgressQuantitativeAndVerbal.toFixed(2));
    }

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
                      isLoading={loading}
                    // data={previousRecordProgress}
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
                      isLoading={loading}
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
                      isLoading={loading}
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
                      isLoading={loading}
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
          <HomeRightBar
            studentPreference={
              props?.studentPreference
            }
            totalPrognos={totalPrognos} />
        </Box>
      </TabPanel>
    </Container>
  );
};

export default HomeFeedContent;
