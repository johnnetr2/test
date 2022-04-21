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
import Breadcrumbs from "@mui/material/Breadcrumbs";
import PropTypes from "prop-types";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SearchIcon from "../../../../../../assets/Icons/SearchIcon.svg";
import Heading from "../../../../../atom/Heading/Heading";
import BodyText from "../../../../../atom/BodyText/BodyText";
import FilledBtn from "../../../../../atom/FilledBtn/FilledBtn";
import HomeCard from "../../../../../molecule/HomeCard/HomeCard";
import OutlineField from "../../../../../atom/OutlineField/OutlineField";
import OutlineBox from "../../../../../atom/OutlineBox/OutlineBox";
import CoursesCard from "../../../../../molecule/CoursesCard/CoursesCard";
import {
  CategoryTable,
  LongMenu,
} from "../../../../../molecule/CategoryTable/CategoryTable";
import { Input } from "reactstrap";
import Alert from "@mui/material/Alert";
import { EndPoints, instance2 } from "../../../../../service/Route";
import swal from "sweetalert";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import CategoryPagesRightBar from "../CategoryPagesRightBar/CategoryPagesRightBar";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  test: {
    border: "2px solid #212121",
  },
  hideStatistics: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const CategoryPagesFeedContent = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [questionCategories, setQuestionCategories] = useState();
  const [timer, setTimer] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [chekedValue, setCheckedValue] = useState();
  const [title, setTitle] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [checkType, setCheckType] = useState();
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [categoryError, SetCategoryError] = useState();
  const [checkedData, setCheckData] = useState([]);
  const [tableHistory, setTableHistory] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [selectAll, setSelectAll] = useState([]);
  const params = useLocation();

  const quiz = params?.state?.quiz;
  console.log(quiz, "category page: quiz");

  useEffect(() => {
    const URL = EndPoints.questionCategoryBysectionCategory + props.item._id;
    instance2.get(URL).then((response) => {
      setQuestionCategories(response.data);
      const URLHistory = EndPoints.testHistory + props.item._id;
      instance2.get(URLHistory).then((response) => {
        setTableHistory(response?.data);
      });
    });
  }, []);

  const [tabValue, setTabValue] = useState(0);

  const handleTabs = (e, val) => {
    setTabValue(val);
  };

  const TabPanel = (props) => {
    const { children, value, index } = props;
    return <div>{value === index && <div>{children}</div>}</div>;
  };

  const setCheckedFunc = (value) => {
    if (value) {
      setCheckedValue(value);
      setError(false);
    }
  };

  const selectedItem = (e, item) => {
    setSelectAll([]);
    setAllChecked(false);

    const already = checkedData.some((obj) => obj === item._id);
    if (already) {
      const index = checkedData.findIndex((obj) => obj === item._id);
      let newArray = [...checkedData];
      newArray.splice(index, 1);
      setCheckData(newArray);
    } else {
      setCheckData([...checkedData, item._id]);
    }
  };

  const selectAllCategories = (e) => {
    if (e.target.checked) {
      setAllChecked(true);
      setCheckData([]);

      let newArray = [...selectAll];
      questionCategories?.map((item) => {
        newArray.push(item._id);
      });
      setSelectAll(newArray);
    } else {
      setSelectAll([]);
    }
  };
  const isChecked = (id) => {
    return checkedData.some((obj) => obj === id);
  };

  const onSubmit = () => {
    if (chekedValue == undefined) {
      setError(true);
    } else {
      // if (checkType) {
      setOpen(true);
      const data = {
        questionCategory: allChecked ? selectAll : checkedData,
        question: parseInt(chekedValue),
        value: timer,
        user: localStorage.getItem("userId"),
      };
      const URL = EndPoints.storeQuiz;
      instance2.post(URL, data).then((response) => {
        if (response.data.quiz.length < 1) {
          setOpen(false);
          swal("varning", "Det finns inga frågor mot denna kurs", "warning");
        } else {
          setOpen(false);
          navigate("/question", {
            state: {
              quiz: response.data.quiz,
              data: response.data,
              sectionCategory: props.item,
              quizId: response.data._id,
            },
          });
        }
      });

      // } else {
      //   SetCategoryError(true)
      // }
    }
  };

  return (
    <Container className={classes.root}>
      <Box>
        <Heading title={"Kvantitativa jämförelser - " + props.item.title} />
        <BodyText title="Prövar din förmåga att göra kvantitativa jämförelser inom aritmetik, algebra, geometri, funktionslära och statistik." />
      </Box>
      <Box sx={{ marginBottom: "1rem", marginTop: "4rem" }}>
        <Typography variant="h5" component="h5">
          Övningsuppgifter för {props.item.title}
          <Box>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
            >
              <CircularProgress color="inherit" size="5rem" />
            </Backdrop>
          </Box>
        </Typography>
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Box>
            <Typography
              variant="body2"
              style={{
                textTransform: "uppercase",
                fontSize: "0.75rem",
                width: "12rem",
              }}
            >
              Välj om du vill köra på tid
            </Typography>
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <OutlineField
              title="Tidspress"
              type="checkbox"
              onClickCheck={(e) => setTimer(e.target.checked)}
            />
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography
              variant="body2"
              style={{ textTransform: "uppercase", fontSize: "0.75rem" }}
            >
              Välj antal frågor
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginTop: "1rem" }}>
            <OutlineBox
              checked={checked}
              title="5"
              onChangeCheck={(value) => {
                setChecked(true);
                setChecked2(false);
                setChecked3(false);
                setChecked4(false);
                setTitle(false);
                setCheckedFunc(value);
              }}
            />
            <OutlineBox
              checked={checked2}
              title="10"
              onChangeCheck={(value) => {
                setChecked(false);
                setChecked2(true);
                setChecked3(false);
                setChecked4(false);
                setTitle(false);
                setCheckedFunc(value);
              }}
            />
            <OutlineBox
              title="15"
              checked={checked3}
              onChangeCheck={(value) => {
                setChecked(false);
                setChecked2(false);
                setChecked3(true);
                setChecked4(false);
                setTitle(false);
                setCheckedFunc(value);
              }}
            />
            <OutlineBox
              title="20"
              checked={checked4}
              onChangeCheck={(value) => {
                setChecked(false);
                setChecked2(false);
                setChecked3(false);
                setChecked4(true);
                setTitle(false);
                setCheckedFunc(value);
              }}
            />
            <Box
              sx={{
                width: "10rem",
                height: "4rem",
                backgroundColor: "#fff",
                boxShadow: "1px 1px 8px #dfdfdf",
                borderRadius: ".25rem",
                marginLeft: ".25rem",
                marginRight: ".25rem",
                border: "1px solid #e1e1e1",
                display: "flex",
                flexWrap: "wrap",
                color: "#555555",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Ett delprov
            </Box>
          </Box>
          {error && (
            <Typography
              variant="body1"
              style={{
                width: "15rem",
                height: "3rem",
                marginLeft: ".25rem",
                marginRight: ".25rem",
                display: "flex",
                flexWrap: "wrap",
                color: "red",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              vänligen välj ett nummer
            </Typography>
          )}
        </Box>
      </Box>
      <Box>
        <Box sx={{ marginTop: "4rem" }}>
          <Box>
            <Typography
              variant="body2"
              style={{ textTransform: "uppercase", fontSize: "0.75rem" }}
            >
              Välj frågetyper
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              width: "100%",
              height: "fit-content",
              flexWrap: "wrap",
              cursor: "pointer",
            }}
          >
            <OutlineField
              title="Alla"
              onClickCheck={(e) => selectAllCategories(e)}
              checked={selectAll.length > 0 ? true : false}
            />

            {questionCategories &&
              questionCategories.map((item, index) => {
                return (
                  <OutlineField
                    title={item.title}
                    onClickCheck={(e) => {
                      selectedItem(e, item);
                      // setSelectedIndex(index);
                      // setCheckType(item._id);
                    }}
                    checked={isChecked(item._id)}
                  />
                );
              })}
          </Box>
          {categoryError && (
            <Typography
              variant="body1"
              style={{
                width: "15rem",
                height: "3rem",
                marginLeft: ".25rem",
                marginRight: ".25rem",
                display: "flex",
                flexWrap: "wrap",
                color: "red",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              vänligen välj frågetyper
            </Typography>
          )}
        </Box>
      </Box>
      <Box
        variant="contained"
        sx={{
          marginTop: "2rem",
          backgroundColor: "#0A1596",
          color: "#fff",
          borderRadius: "6px",
          height: "3rem",
          alignItems: "center",
          paddingTop: "1%",
        }}
        onClick={onSubmit}
      >
        <FilledBtn title="Starta övningar" />
      </Box>
      <Box sx={{ marginTop: "4rem" }}>
        <Tabs
          value={tabValue}
          onChange={handleTabs}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
          TabIndicatorProps={{ style: { background: "#fff" } }}
        >
          <Tab style={{ textTransform: "initial" }} label="Historia" />
          <Tab
            style={{ textTransform: "initial" }}
            label="/ Statistik"
            className={classes.hideStatistics}
          />
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ marginTop: "1rem" }}>
            <CategoryTable
              sectionCategory={props.item}
              tableHistory={tableHistory}
              quiz={params?.state?.quiz}
            />
          </Box>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Box>
            <CategoryPagesRightBar item={params?.state?.item} />
          </Box>
        </TabPanel>
      </Box>
    </Container>
  );
};

export default CategoryPagesFeedContent;
