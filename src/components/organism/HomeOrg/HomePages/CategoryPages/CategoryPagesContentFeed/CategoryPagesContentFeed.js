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
import {
  EndPoints,
  instance2,
} from "../../../../../../components/service/Route";
import Alert from "@mui/material/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  test: {
    border: "2px solid #212121",
  },
}));

const CategoryPagesFeedContent = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [questionCategories, setQuestionCategories] = useState();
  const [timer, setTimer] = useState();
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [chekedValue, setCheckedValue] = useState();
  const [title, setTitle] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [checkType, setCheckType] = useState();
  const [error, setError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [tableHistory, setTableHistory] = useState([])

  useEffect(() => {
    console.log(props.item, "this is the response of category pages content feed");
    const URL = EndPoints.questionCategoryBysectionCategory + props.item._id;
    instance2.get(URL).then((response) => {
      setQuestionCategories(response.data);
      console.log(response.data, "response after first api setter call on category pages content feed");
      const URLHistory = EndPoints.testHistory;
      instance2.get(URLHistory).then(response => {
        console.log(response.data, "response of the second api calculation on category pages content feed")
        setTableHistory(response.data) 
      })
    });
    
  }, []);

  const setCheckedFunc = (value) => {
    if (value) {
      setCheckedValue(value);
      setError(false);
      console.log(value, "no of question");
    }
  };

  const questions = {
    quiz: [
      {
        _id: "621750023cbac80f1421bef8",
        question: {
          _id: "6204c0eb0f6791208cb90b3f",
          questionCategory: {
            _id: "6203d0aab8a43736188935b9",
            title: "Geometry",
            sectionCategory: "61f2903f35d8e6277cc2d6e6",
            createdAt: "2022-02-09T14:33:14.094Z",
            updatedAt: "2022-02-09T14:33:14.094Z",
            __v: 0,
          },
          year: "61f23e1b13adf21b2014b648",
          sectionCategories: "61f2903f35d8e6277cc2d6e6",
          questionStatement: "what is css",
          images: "abc123",
          createdAt: "2022-02-10T07:38:19.806Z",
          updatedAt: "2022-02-10T07:38:19.806Z",
          __v: 0,
        },
        options: [
          {
            _id: "621750023cbac80f1421bef9",
            value: "option1",
            image: "abc1",
            type: "HTML1",
          },
          {
            _id: "621750023cbac80f1421befa",
            value: "option2",
            image: "abc2",
            type: "HTML2",
          },
          {
            _id: "621750023cbac80f1421befb",
            value: "options3",
            image: "abc3",
            type: "HTML3",
          },
          {
            _id: "621750023cbac80f1421befc",
            value: "option4",
            image: "abc4",
            type: "HTML4",
          },
        ],
        createdAt: "2022-02-24T09:29:38.348Z",
        updatedAt: "2022-02-24T09:29:38.348Z",
        __v: 0,
      },
      {
        _id: "621750143cbac80f1421bf02",
        question: {
          _id: "6204c11d0f6791208cb90b46",
          questionCategory: {
            _id: "6203d0aab8a43736188935b9",
            title: "Geometry",
            sectionCategory: "61f2903f35d8e6277cc2d6e6",
            createdAt: "2022-02-09T14:33:14.094Z",
            updatedAt: "2022-02-09T14:33:14.094Z",
            __v: 0,
          },
          year: "61f23e1b13adf21b2014b648",
          sectionCategories: "61f2903f35d8e6277cc2d6e6",
          questionStatement: "what is geometry",
          images: "abc123",
          createdAt: "2022-02-10T07:39:09.816Z",
          updatedAt: "2022-02-10T07:39:09.816Z",
          __v: 0,
        },
        options: [
          {
            _id: "621750143cbac80f1421bf03",
            value: "option1",
            image: "abc1",
            type: "HTML1",
          },
          {
            _id: "621750143cbac80f1421bf04",
            value: "option2",
            image: "abc2",
            type: "HTML2",
          },
          {
            _id: "621750143cbac80f1421bf05",
            value: "options3",
            image: "abc3",
            type: "HTML3",
          },
          {
            _id: "621750143cbac80f1421bf06",
            value: "option4",
            image: "abc4",
            type: "HTML4",
          },
        ],
        createdAt: "2022-02-24T09:29:56.722Z",
        updatedAt: "2022-02-24T09:29:56.722Z",
        __v: 0,
      },
      {
        _id: "621750273cbac80f1421bf0c",
        question: {
          _id: "6204c1310f6791208cb90b4d",
          questionCategory: {
            _id: "6203d0aab8a43736188935b9",
            title: "Geometry",
            sectionCategory: "61f2903f35d8e6277cc2d6e6",
            createdAt: "2022-02-09T14:33:14.094Z",
            updatedAt: "2022-02-09T14:33:14.094Z",
            __v: 0,
          },
          year: "61f23e1b13adf21b2014b648",
          sectionCategories: "61f2903f35d8e6277cc2d6e6",
          questionStatement: "what is geometry2",
          images: "abc123",
          createdAt: "2022-02-10T07:39:29.880Z",
          updatedAt: "2022-02-10T07:39:29.880Z",
          __v: 0,
        },
        options: [
          {
            _id: "621750273cbac80f1421bf0d",
            value: "option1",
            image: "abc1",
            type: "HTML1",
          },
          {
            _id: "621750273cbac80f1421bf0e",
            value: "option2",
            image: "abc2",
            type: "HTML2",
          },
          {
            _id: "621750273cbac80f1421bf0f",
            value: "options3",
            image: "abc3",
            type: "HTML3",
          },
          {
            _id: "621750273cbac80f1421bf10",
            value: "option4",
            image: "abc4",
            type: "HTML4",
          },
        ],
        createdAt: "2022-02-24T09:30:15.767Z",
        updatedAt: "2022-02-24T09:30:15.767Z",
        __v: 0,
      },
      {
        _id: "621750393cbac80f1421bf16",
        question: {
          _id: "6204c1390f6791208cb90b54",
          questionCategory: {
            _id: "6203d0aab8a43736188935b9",
            title: "Geometry",
            sectionCategory: "61f2903f35d8e6277cc2d6e6",
            createdAt: "2022-02-09T14:33:14.094Z",
            updatedAt: "2022-02-09T14:33:14.094Z",
            __v: 0,
          },
          year: "61f23e1b13adf21b2014b648",
          sectionCategories: "61f2903f35d8e6277cc2d6e6",
          questionStatement: "what is geometry3",
          images: "abc123",
          createdAt: "2022-02-10T07:39:37.088Z",
          updatedAt: "2022-02-10T07:39:37.088Z",
          __v: 0,
        },
        options: [
          {
            _id: "621750393cbac80f1421bf17",
            value: "option1",
            image: "abc1",
            type: "HTML1",
          },
          {
            _id: "621750393cbac80f1421bf18",
            value: "option2",
            image: "abc2",
            type: "HTML2",
          },
          {
            _id: "621750393cbac80f1421bf19",
            value: "options3",
            image: "abc3",
            type: "HTML3",
          },
          {
            _id: "621750393cbac80f1421bf1a",
            value: "option4",
            image: "abc4",
            type: "HTML4",
          },
        ],
        createdAt: "2022-02-24T09:30:33.417Z",
        updatedAt: "2022-02-24T09:30:33.417Z",
        __v: 0,
      },
    ],
    value: true,
  };

  const onSubmit = () => {
    if (chekedValue == undefined) {
      setError(true);
    } else {
      const data = {
        questionCategories: checkType,
        question: parseInt(chekedValue),
        value: timer,
        user: localStorage.getItem("id"),
      };
      // const URL = EndPoints.storeQuiz
      // instance2.post(URL, data).then(response => {
      //   if (response.data) {
      navigate("/question", {
        state: {
          quiz: questions.quiz,
          category_name: props.item.title,
        },
      });
      // }
      // })
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
        </Typography>
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Box>
            <Typography
              variant="body2"
              style={{ textTransform: "uppercase", fontSize: "0.75rem" }}
            >
              Välj om du vill köra på tid
            </Typography>
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <OutlineField
              title="Tidspress"
              type="checkbox"
              onClickCheck={(value) => setTimer(value)}
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
            }}
          >
            {questionCategories &&
              questionCategories.map((item, index) => {
                return (
                  <OutlineField
                    title={item.title}
                    onClickCheck={() => {
                      setSelectedIndex(index);
                      setCheckType(item._id);
                    }}
                    checked={index == selectedIndex ? true : false}
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
              vänligen välj en kategori
            </Typography>
          )}
        </Box>
      </Box>
      <Box sx={{ marginTop: "2rem" }} onClick={onSubmit}>
        <FilledBtn title="Starta övningar" />
      </Box>
      <Box sx={{ marginTop: "4rem" }}>
        <Typography variant="h5">Historia</Typography>
        <Box sx={{ marginTop: "1rem" }}>
          <CategoryTable tableHistory={tableHistory} />
        </Box>
      </Box>
    </Container>
  );
};

export default CategoryPagesFeedContent;
