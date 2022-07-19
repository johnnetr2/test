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
import swal from "sweetalert";

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

  const navigate = useNavigate();
  // const [categories, setCategories] = useState();
  const [sections, setSections] = useState();
  const [previousRecordProgress, setPreviousRecordProgress] = useState();
  const [totalPrognos, setTotalPrognos] = useState();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const url = EndPoints.getAllSections;
      instance2.get(url).then((response) => {
        setSections(response.data.data);
      });

      //get pervious record
      const previousRecordURL =
        EndPoints.studentPerviousProgress + localStorage.getItem("userId");
      instance2.get(previousRecordURL).then((response) => {
        if (response.data.success == true) {
          setPreviousRecordProgress(response.data.Data);
          console.log(response.data, "previousRecord");
        }
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
    let prognos;
    previousRecordProgress &&
      previousRecordProgress.map((item) => {
        prognos = (item.CorrectQuestion / item.TotalQuestion) * 2;
        count = count + prognos;
      });
    let avgPrognos =
      previousRecordProgress && count / previousRecordProgress.length;
    // avgPrognos=  count /previousRecordProgress.length;
    previousRecordProgress && setTotalPrognos(avgPrognos.toFixed(2));
    previousRecordProgress && props.getPrognos(avgPrognos.toFixed(2));
    console.log(count.toFixed(2), "total prognos");
  }, [previousRecordProgress]);

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
                  style={{ textTransform: "initial" }}
                  label="Alla delprov"
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
        <Box sx={{ marginBottom: "1rem" }}>
          <Typography variant="h5" component="h5">
            Kvantitativ del
          </Typography>
        </Box>
        <Box>
          <Box sx={{ marginBottom: "1rem" }}>
            {sections &&
              previousRecordProgress &&
              sections.map((item, index) => {
                if (item.section.title === "Kvantitativ del") {
                  let progressResult;
                  let prognos;
                  if (item._id === previousRecordProgress[index]._id) {
                    progressResult =
                      (previousRecordProgress[index].AttemptedQuestion /
                        previousRecordProgress[index].TotalQuestion) *
                      100;
                    prognos =
                      (previousRecordProgress[index].CorrectQuestion /
                        previousRecordProgress[index].TotalQuestion) *
                      2;
                  }
                  return (
                    <HomeCard
                      item={item}
                      previousRecord={progressResult}
                      prognos={prognos.toFixed(1)}
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
              previousRecordProgress &&
              sections.map((item, index) => {
                if (item.section.title === "Verbal del") {
                  let progressResult;
                  let prognos;
                  if (item._id === previousRecordProgress[index]._id) {
                    progressResult =
                      (previousRecordProgress[index].AttemptedQuestion /
                        previousRecordProgress[index].TotalQuestion) *
                      100;
                    prognos =
                      (previousRecordProgress[index].CorrectQuestion /
                        previousRecordProgress[index].TotalQuestion) *
                      2;
                    console.log(
                      progressResult.toFixed(),
                      "Progress percentage"
                    );
                  }
                  return (
                    <HomeCard
                      item={item}
                      previousRecord={progressResult}
                      prognos={prognos.toFixed(1)}
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
              previousRecordProgress &&
              sections.map((item, index) => {
                if (item.section.title === "Kvantitativ del") {
                  let progressResult;
                  let prognos;
                  if (item._id === previousRecordProgress[index]._id) {
                    progressResult =
                      (previousRecordProgress[index].AttemptedQuestion /
                        previousRecordProgress[index].TotalQuestion) *
                      100;
                    prognos =
                      (previousRecordProgress[index].CorrectQuestion /
                        previousRecordProgress[index].TotalQuestion) *
                      2;
                    console.log(
                      progressResult.toFixed(),
                      "Progress percentage"
                    );
                  }
                  return (
                    <HomeCard
                      item={item}
                      previousRecord={progressResult}
                      prognos={prognos.toFixed(1)}
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
              previousRecordProgress &&
              sections.map((item, index) => {
                if (item.section.title === "Verbal del") {
                  let progressResult;
                  let prognos;
                  if (item._id === previousRecordProgress[index]._id) {
                    progressResult =
                      (previousRecordProgress[index].AttemptedQuestion /
                        previousRecordProgress[index].TotalQuestion) *
                      100;
                    prognos =
                      (previousRecordProgress[index].CorrectQuestion /
                        previousRecordProgress[index].TotalQuestion) *
                      2;
                    console.log(
                      progressResult.toFixed(),
                      "Progress percentage"
                    );
                  }
                  return (
                    <HomeCard
                      item={item}
                      previousRecord={progressResult}
                      prognos={prognos.toFixed(1)}
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
