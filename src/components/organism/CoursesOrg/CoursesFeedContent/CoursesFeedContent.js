import React, { useState, useEffect } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Button,
  Tab,
  Tabs,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "../../../../assets/Icons/SearchIcon.svg";
import Heading from "../../../atom/Heading/Heading";
import BodyText from "../../../atom/BodyText/BodyText";
import CoursesCard from "../../../molecule/CoursesCard/CoursesCard";
import CoursesRightBar from "../CoursesRightBar/CoursesRightBar";
import { Input } from "reactstrap";
import { EndPoints, instance, instance2 } from "../../../service/Route";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
      border: '1px solid green'
    },
    [theme.breakpoints.down(820)]: {
      // display: 'block'
    },
  },
}));

const CoursesFeedContent = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [tabValue, setTabValue] = useState(0);

  let previousExams = props.previousExams;

  const handleTabs = (e, val) => {
    setTabValue(val);
  };

  useEffect(() => {
    console.log(props.seasons, 'rhis is season')
  }, [])
  

  const TabPanel = (props) => {
    const { children, value, index } = props;
    return <div>{value === index && <div>{children}</div>}</div>;
  };

  return (
    <Container className={classes.root}>
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
            }}
          >
            <Tabs
              value={tabValue}
              onChange={handleTabs}
              variant="scrollable"
              scrollButtons={false}
              aria-label="scrollable prevent tabs example"
              TabIndicatorProps={{ style: { background: "#0A1596" } }}
              // style={{ backgroundColor:'blue' }}
            >
              <Tab style={{ textTransform: "initial" }} label="Alla" />
              <Tab
                style={{ textTransform: "initial" }}
                label="Tidigare högskoleprov"
              />
              <Tab
                style={{ textTransform: "initial" }}
                label="Slumpmässigt prov"
              />
              <Tab
                style={{ textTransform: "initial" }}
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
              placeholder="Sök prov mellan 2015-2021"
              style={{ border: "none" }}
            />
            <Box>
              <img style={{ marginLeft: ".5rem" }} src={SearchIcon} alt="" />
            </Box>
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
            sx={{ marginBottom: "1rem", gap: '5rem' }}
            // onClick={() => navigate("/provpassinfo")}
          >
            {previousExams &&
              previousExams.map((item) => {
                console.log(props?.seasons && props?.seasons[item?.simuleraSeason._id]?.season, 'props.provHistoryData[item?.simuleraSeason._id].season')
                return (
                  <CoursesCard
                    id={item?.simuleraSeason._id}
                    item={item}
                    progress={item.progress}
                    quizzes={props?.seasons && props?.seasons[item?.simuleraSeason._id]?.season}
                  />
                );
              })}
          </Box>
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
            style={{ backgroundColor: "#0A1596", color: "#fff" }}
            onClick={() => props.loadMore()}
          >
            Fler prov
            <KeyboardArrowDownIcon />
          </Button>
        </Box>
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
        <Box sx={{ marginBottom: "1rem" }}>
          {/* <CoursesCard /> */}
        </Box>
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
          <Box sx={{ marginBottom: "1rem" }}>
            {/* <CoursesCard /> */}
          </Box>
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
            style={{ backgroundColor: "#0A1596", color: "#fff" }}
          >
            Fler prov
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
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
        <Box sx={{ marginBottom: "1rem" }}>
          {/* <CoursesCard /> */}
        </Box>
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        <CoursesRightBar />
      </TabPanel>
    </Container>
  );
};

export default CoursesFeedContent;
