import React, { useEffect, useState } from "react";
import { Container, makeStyles, Typography, Box } from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import Heading from "../../../../../atom/Heading/Heading";
import BodyText from "../../../../../atom/BodyText/BodyText";
import FilledBtn from "../../../../../atom/FilledBtn/FilledBtn";
import OutlineField from "../../../../../atom/OutlineField/OutlineField";
import OutlineBox from "../../../../../atom/OutlineBox/OutlineBox";
import { CategoryTable } from "../../../../../molecule/CategoryTable/CategoryTable";
import { EndPoints, instance2 } from "../../../../../service/Route";
import swal from "sweetalert";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import CategoryPagesRightBar from "../CategoryPagesRightBar/CategoryPagesRightBar";
import useWindowDimensions from "../../../../../molecule/WindowDimensions/dimension";

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
  const [questionCategories, setQuestionCategories] = useState([]);
  const [timer, setTimer] = useState(true);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [chekedValue, setCheckedValue] = useState();
  const [title, setTitle] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [categoryError, SetCategoryError] = useState();
  const [checkedData, setCheckData] = useState([]);
  const [tableHistory, setTableHistory] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [selectAll, setSelectAll] = useState([]);
  const params = useLocation();
  const [historyText, setHistoryText] = useState(false);
  const [resultText, setResultText] = useState(false);
  const { height, width } = useWindowDimensions();
  const [alla, setAlla] = useState(true);

  useEffect(() => {
    const URL = EndPoints.questionCategoryBysectionCategory + props.item._id;
    instance2.get(URL).then((response) => {
      if (!response.data.message) {
        setQuestionCategories(response.data);
        setAllChecked(true);
        setCheckData([]);
        SetCategoryError(false);
      }

      let newArray = [...checkedData];
      response.data.length > 0 &&
        response.data?.map((item) => {
          newArray.push(item._id);
        });
      setCheckData(newArray);

      const URLHistory = EndPoints.testHistory + props.item._id;
      instance2.get(URLHistory).then((response) => {
        setTableHistory(response?.data);
      });

      setTitle(true);
      setChecked(false);
      setChecked2(false);
      setChecked3(false);
      setChecked4(false);
      if (props?.item?.title === "XYZ") {
        setCheckedFunc(12);
      } else if (props?.item?.title === "KVA") {
        setCheckedFunc(10);
      } else if (props?.item?.title === "NOG") {
        setCheckedFunc(6);
      } else if (props?.item?.title === "DTK") {
        setCheckedFunc(12);
      } else {
        setCheckedFunc(10);
      }
    });
  }, []);

  const [tabValue, setTabValue] = useState(0);

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
    SetCategoryError(false);
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

  useEffect(() => {
    setAllChecked(!allChecked);
    if (alla) {
      SetCategoryError(false);

      let newArray = [...selectAll];
      questionCategories?.map((item) => {
        newArray.push(item._id);
      });
      setCheckData(newArray);
    } else {
      setCheckData([]);
    }
  }, [alla]);

  const realQuestionFunc = () => {
    setTitle(true);
    setChecked(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
    if (props?.item?.title === "XYZ") {
      setCheckedFunc(12);
    } else if (props?.item?.title === "KVA") {
      setCheckedFunc(10);
    } else if (props?.item?.title === "NOG") {
      setCheckedFunc(6);
    } else if (props?.item?.title === "DTK") {
      setCheckedFunc(12);
    } else {
      setCheckedFunc(10);
    }
  };

  const isChecked = (id) => {
    return checkedData.some((obj) => obj === id);
  };

  const onSubmit = () => {
    if (chekedValue == undefined) {
      setError(true);
    } else {
      if (checkedData.length > 0) {
        localStorage.removeItem("time");
        localStorage.removeItem("quiz")
        setOpen(true);
        const data = {
          questionCategory: checkedData,
          sectionCategory: props.item._id,
          totalQuestion: parseInt(chekedValue),
          value: timer,
          user: localStorage.getItem("userId"),
          multipartQuestion: null,
        };
        const URL = EndPoints.storeQuiz;
        instance2.post(URL, data).then((response) => {
          if (response.data == "" || response.data.quiz.length < 1) {
            setOpen(false);
            swal("varning", "Det finns inga frågor mot denna kurs", "warning");
          } else {
            console.log('response', response)
            setOpen(false);
            navigate("/question", {
              state: {
                data: response.data,
                sectionCategory: props.item,
                quizId: response.data._id,
                time: timer,
              },
            });
          }
        });
      } else {
        SetCategoryError(true);
      }
    }
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <Box>
        <Heading title={"Kvantitativa jämförelser - " + props.item.title} />
        <BodyText title="Prövar din förmåga att göra kvantitativa jämförelser inom aritmetik, algebra, geometri, funktionslära och statistik." />
      </Box>
      <Box
        sx={{ marginBottom: "1rem", marginTop: "4rem", marginLeft: "0.1rem" }}
      >
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
                marginLeft: "0.2rem",
              }}
            >
              Välj om du vill köra på tid
            </Typography>
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <OutlineField
              title="Tid & poäng"
              type="checkbox"
              checked={timer}
              onClickCheck={(e) => setTimer(!timer)}
            />
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography
              variant="body2"
              style={{
                textTransform: "uppercase",
                fontSize: "0.75rem",
                marginLeft: "0.2rem",
              }}
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
                backgroundColor: title ? "#0a1596" : "#fff",
                boxShadow: "1px 1px 8px #dfdfdf",
                borderRadius: ".25rem",
                marginLeft: ".25rem",
                marginRight: ".25rem",
                border: "1px solid #e1e1e1",
                display: "flex",
                flexWrap: "wrap",
                color: title ? "#fff" : "#555555",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => realQuestionFunc()}
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
              style={{
                textTransform: "uppercase",
                fontSize: "0.75rem",
                marginLeft: "0.2rem",
              }}
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
              // justifyContent: 'space-between'
            }}
          >
            {questionCategories.length > 0 && (
              <OutlineField
                title="Alla"
                onClickCheck={() => setAlla(!alla)}
                checked={
                  questionCategories &&
                  questionCategories?.length === checkedData.length
                    ? true
                    : false
                }
              />
            )}

            {questionCategories &&
              questionCategories?.map((item, index) => {
                // console.log(item, "this is the console of categories");
                return (
                  <>
                    {item?.sectionCategory?.title === "MEK" &&
                    item?.title === "others" ? (
                      ""
                    ) : (
                      <OutlineField
                        title={item.title}
                        onClickCheck={(e) => {
                          selectedItem(e, item);
                        }}
                        checked={isChecked(item._id)}
                      />
                    )}
                  </>
                  // <OutlineField
                  //   title={item.title !== 'others'}
                  //   onClickCheck={(e) => {
                  //     selectedItem(e, item);
                  //   }}
                  //   checked={isChecked(item._id)}
                  // />
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
        sx={{
          marginTop: "2rem",
          backgroundColor: "#0A1596",
          color: "#fff",
          borderRadius: "6px",
          height: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          width: "99.35%",
        }}
        onClick={checkedData.length > 0 && onSubmit}
      >
        <FilledBtn title="Starta övningar" />
      </Box>
      <Box sx={{ marginTop: "4rem" }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            style={{
              fontSize: "28px",
              fontWeight: 400,
              height: "fit-content",
              textDecorationLine: width < 900 && historyText && "underline",
              textDecorationThickness: "1.5px",
              cursor: width < 900 && "pointer",
            }}
            onClick={() => {
              width < 900 && setHistoryText(true);
              setResultText(false);
              setTabValue(0);
            }}
          >
            Historia
          </Typography>

          <Typography
            style={{
              fontSize: "28px",
              fontWeight: 400,
              height: "fit-content",
              textDecorationLine: width < 900 && resultText && "underline",
              textDecorationThickness: "1.5px",
              textDecorationWidth: "80%",
              cursor: width < 900 && "pointer",
            }}
            className={classes.hideStatistics}
            onClick={() => {
              width < 900 && setResultText(true);
              setHistoryText(false);
              setTabValue(1);
            }}
          >
            {" "}
            / Statistik
          </Typography>
        </Box>

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
