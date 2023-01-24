import {
  Box,
  Button,
  Container,
  Tab,
  Tabs,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { EndPoints, instance, instance2 } from "../../../service/Route";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import BodyText from "../../../atom/BodyText/BodyText";
import CoursesCard from "../../../molecule/CoursesCard/CoursesCard";
import CoursesRightBar from "../CoursesRightBar/CoursesRightBar";
import Heading from "../../../atom/Heading/Heading";
import { Input } from "reactstrap";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "../../../../assets/Icons/SearchIcon.svg";
import { appColors } from "../../../service/commonService";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  test: {
    border: "2px solid #212121",
  },
  hideSearch: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  tabToggle: {
    [theme.breakpoints.up(820)]: {
      display: "none",
      border: "1px solid green",
    },
    [theme.breakpoints.down(820)]: {
      // display: 'block'
    },
  },
  indicator: {},
}));

const CoursesFeedContent = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [tabValue, setTabValue] = useState(0);
  //Search query
  const [query, setQuery] = useState("");

  let previousExams = props.previousExams;

  const handleTabs = (e, val) => {
    setTabValue(val);
  };

  console.log(props?.data)

  const getSeasonQuizzzes = (seasons, item) => {
    return seasons.find((elem) => item?._id === elem.simuleraSeason?._id);
  };

  const TabPanel = (props) => {
    const { children, value, index } = props;
    return <div>{value === index && <div>{children}</div>}</div>;
  };

  return (
    <Container className={classes.root} maxWidth="false">
      <Box>
        <Heading title="Simulera Prov" />
        <BodyText title="Gör prov från tidigare år eller välj att slumpa ett helt prov med uppgifter från gamla prov du inte stött på tidigare. " />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            style={{
              // maxWidth: "30rem",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "3rem",
              marginBottom: "3rem",
              marginRight: "2rem",
              overflow: "hidden",
            }}
          >
            <Tabs
              className={classes.indicator}
              value={tabValue}
              onChange={handleTabs}
              variant="scrollable"
              scrollButtons={false}
              aria-label="scrollable prevent tabs example"
              TabIndicatorProps={{
                style: {
                  background: appColors.blueColor,
                  border: `4px solid ${appColors.blueColor}`,
                },
              }}
            >
              <Tab
                style={{
                  textTransform: "initial",
                  color: tabValue === 0 ? "black" : "#B5B5B5",
                }}
                label="Alla"
              />
              <Tab
                style={{
                  textTransform: "initial",
                  color: tabValue === 1 ? "black" : "#B5B5B5",
                }}
                label="Tidigare högskoleprov"
              />
              {/* <Tab
                style={{
                  textTransform: "initial",
                  color: tabValue === 2 ? "black" : "#B5B5B5",
                }}
                label="Slumpmässigt prov"
              /> */}
              <Tab
                style={{
                  textTransform: "initial",
                  color: tabValue === 3 ? "black" : "#B5B5B5",
                }}
                label="Slutförda prov"
                className={classes.tabToggle}
              />
            </Tabs>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #e5e5e5",
              borderRadius: ".5rem",
              width: "15rem",
              padding: ".5rem",
            }}
            className={classes.hideSearch}
          >
            <Input
              type="search"
              placeholder="Sök prov här..."
              style={{ border: "none" }}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Box>
              <img src={SearchIcon} alt="" />
            </Box>
            {/* {console.log(props?.seasons, "seasons")} */}
          </Box>
        </Box>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography variant="h5" component="h5">
            Tidigare högskoleprov
          </Typography>
          <Typography
            variant="body2"
            component="body2"
            style={{ fontSize: "0.75rem", lineHeight: "1.5" }}
          >
            Välj ett specifikt prov och gör samma frågor som kom på just det
            provet.
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{ marginBottom: "1rem", gap: "5rem" }}
            // onClick={() => navigate("/provpassinfo")}
          >
            {previousExams &&
              previousExams
                .filter((exam) => exam.title.toLowerCase().includes(query))
                .map((item) => {
                  return (
                    <CoursesCard
                      id={item?._id}
                      item={item}
                      progress={props?.data && props?.data?.find(
                        (provHistory) =>
                          provHistory?.simuleraSeason?._id === item?._id
                      )}
                      quizzes={
                        props.seasons && getSeasonQuizzzes(props.seasons, item)
                      }
                      provpassOrder={
                        props?.provpassOrderBySeason[item?._id] ?? null
                      }
                    />
                  );
                })}
          </Box>
          {/*  */}
        </Box>
        <Box
          sx={{
            marginBottom: "3rem",
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
            maxWidth: { xs: "unset", lg: "48rem" },
          }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: appColors.blueColor,
              color: appColors.whiteColor,
            }}
            onClick={() => props.loadMore()}
          >
            Fler prov
            <KeyboardArrowDownIcon />
          </Button>
        </Box>
        {/* <Box sx={{ marginBottom: "2rem" }}>
          <Typography variant="h5" component="h5">
            Slumpmässigt prov
          </Typography>
          <Typography
            variant="body2"
            component="body2"
            style={{ fontSize: "0.75rem", lineHeight: "1.5" }}
          >
            Genererar ett prov endast med frågor du inte tidigare stött på i
            övningsdelen.
          </Typography>
        </Box> */}
        <Box sx={{ marginBottom: "1rem" }}>{/* <CoursesCard /> */}</Box>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography variant="h5" component="h5">
            Tidigare högskoleprov
          </Typography>
          <Typography
            variant="body2"
            component="body2"
            style={{ fontSize: "0.75rem", lineHeight: "1.5" }}
          >
            Välj ett specifikt prov och gör samma frågor som kom på just det
            provet.
          </Typography>
        </Box>
        <Box>
          <Box sx={{ marginBottom: "1rem" }}>{/* <CoursesCard /> */}</Box>
        </Box>
        <Box
          sx={{
            marginBottom: "3rem",
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: appColors.blueColor,
              color: appColors.whiteColor,
            }}
          >
            Fler prov
          </Button>
        </Box>
      </TabPanel>
      {/* <TabPanel value={tabValue} index={2}>
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography variant="h5" component="h5">
            Slumpmässigt prov
          </Typography>
          <Typography
            variant="body2"
            component="body2"
            style={{ fontSize: "0.75rem", lineHeight: "1.5" }}
          >
            Genererar ett prov endast med frågor du inte tidigare stött på i
            övningsdelen.
          </Typography>
        </Box>
      </TabPanel> */}
      <TabPanel value={tabValue} index={3}>
        <Box sx={{ marginTop: "-9.5rem" }}>
          <CoursesRightBar
            data={props.data}
            previousExams={props.previousExams}
          />
        </Box>
      </TabPanel>
    </Container>
  );
};

export default CoursesFeedContent;
