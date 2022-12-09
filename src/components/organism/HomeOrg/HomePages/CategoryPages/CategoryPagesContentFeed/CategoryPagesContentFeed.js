import { Box, Typography } from "@mui/material";
import { Container, Tab, Tabs, makeStyles } from "@material-ui/core";
import { EndPoints, instance2 } from "../../../../../service/Route";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import BodyText from "../../../../../atom/BodyText/BodyText";
import CategoryPagesRightBar from "../CategoryPagesRightBar/CategoryPagesRightBar";
import { CategoryTable } from "../../../../../molecule/CategoryTable/CategoryTable";
import CircularProgress from "@mui/material/CircularProgress";
import FilledBtn from "../../../../../atom/FilledBtn/FilledBtn";
import Heading from "../../../../../atom/Heading/Heading";
import { MixpanelTracking } from "../../../../../../tools/mixpanel/Mixpanel";
import OutlineBox from "../../../../../atom/OutlineBox/OutlineBox";
import OutlineField from "../../../../../atom/OutlineField/OutlineField";
import swal from "sweetalert";
import useWindowDimensions from "../../../../../molecule/WindowDimensions/dimension";
import categoryDescription from "../../../../../../assets/Static/CategoryDescription.json"
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  test: {
    border: "2px solid #212121",
  },
  hideStatistics: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  ShowTitle: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
  tabsSection: {
    marginTop: "4rem",
    backgroundColor: "#fff",
    [theme.breakpoints.down("md")]: {
      backgroundColor: "#fafafa",
      padding: "1rem",
      marginBottom: "3rem",
      borderRadius: "3px",
    },
  },
}));

const CategoryPagesFeedContent = (props) => {
  const categoryName = props?.item?.title
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
  const { height, width } = useWindowDimensions();
  const [alla, setAlla] = useState(true);
  const [categoryTitle, setCategoryTitle] = useState("");
  const { user } = useSelector((state) => state.value);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

      setDefaultNuberOfQuestions()

    });



    switch (categoryName) {
      case "KVA":
        setCategoryTitle("Kvantitativa jämförelser");
        break;
      case 'MEK':
        setCategoryTitle("Meningskomplettering");
        break;
      case 'NOG':
        setCategoryTitle("Kvantitativa resonemang");
        break;
      case 'XYZ':
        setCategoryTitle("Matematisk problemlösning");
        break;
      case 'LÄS':
        setCategoryTitle("Svensk läsförståelse");
        break;
      case 'DTK':
        setCategoryTitle("Diagram, tabeller och kartor");
        break;
      case 'ORD':
        setCategoryTitle("Ordförståelse");
        break;
      case 'ELF':
        setCategoryTitle("Engelsk läsförståelse");
        break;
      default:
        break;
    }

    scrollTop();
  }, []);

  const [tabValue, setTabValue] = useState(0);
  const handelChange = (event, newTabValue) => {
    setTabValue(newTabValue);
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

  const setDefaultNuberOfQuestions = () => {
    setTitle(true);
    setChecked(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
    let defaultNumberOfQuestion = 10

    switch (categoryName) {
      case 'XYZ':
        defaultNumberOfQuestion = 12
        break;
      case 'KVA':
        defaultNumberOfQuestion = 10
        break;
      case 'NOG':
        defaultNumberOfQuestion = 6
        break;
      case 'DTK':
        defaultNumberOfQuestion = 12
        break;
      default:
        defaultNumberOfQuestion = 10
        break;
    }
    setCheckedFunc(defaultNumberOfQuestion)
  }

  const isChecked = (id) => {
    return checkedData.some((obj) => obj === id);
  };

  const onSubmit = () => {
    if (chekedValue == undefined) {
      setError(true);
    } else {
      if (checkedData.length > 0) {
        localStorage.removeItem("time");
        localStorage.removeItem("quiz");
        setOpen(true);
        const data = {
          questionCategory: checkedData,
          sectionCategory: props.item._id,
          totalQuestion: parseInt(chekedValue),
          value: timer,
          user: user._id,
          multipartQuestion: null,
          isTimeRestricted: timer ? true : false,
        };
        const URL = EndPoints.storeQuiz;
        instance2.post(URL, data).then((response) => {
          if (response.data == "" || response.data.quiz.length < 1) {
            setOpen(false);
            swal("varning", "Det finns inga frågor mot denna kurs", "warning");
          } else {
            setOpen(false);
            const quizobj = response.data;
            const { quiz: quistions } = quizobj;
            const questionswithSuffeldOptions = quistions.map((question) => {
              if (question.type == "multiple") {
                const options0Array = question.question.map((item) => {
                  const options = item.options[0].options
                    .map((value) => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value);

                  const optionsShuffeld = [
                    {
                      options,
                    },
                  ];

                  return {
                    ...item,
                    options: optionsShuffeld,
                  };
                });
                return {
                  ...question,
                  question: options0Array,
                };
              } else if (categoryName === 'NOG' || categoryName === 'KVA') {
                return question
              } else {
                const options = question?.options[0]?.options
                  .map((value) => ({ value, sort: Math.random() }))
                  .sort((a, b) => a.sort - b.sort)
                  .map(({ value }) => value)
                  .filter((option) => option.value);
                const optionsShuffeld = [
                  {
                    options,
                  },
                ];
                return {
                  ...question,
                  options: optionsShuffeld,
                };
              }
            });
            quizobj.quiz = questionswithSuffeldOptions;
            MixpanelTracking.getInstance().startTest(props.item.images, [
              quizobj.quiz.length,
              quizobj.isTimeRestricted,
            ]);
            navigate("/question", {
              state: {
                data: quizobj,
                sectionCategory: props.item,
                quizId: quizobj._id,
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
        <Heading title={categoryTitle + " - " + categoryName} />
        <BodyText title={categoryDescription[categoryName]} />
      </Box>
      <Box
        sx={{ marginBottom: "1rem", marginTop: "4rem", marginLeft: "0.1rem" }}
      >
        <Typography variant="h5" component="h5">
          Övningsuppgifter för {categoryName}
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
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          rowGap: ".5rem",
        }}
      >
        <Box>
          <Box>
            <Typography
              variant="body2"
              style={{
                textTransform: "capitalize",
                fontSize: "0.75rem",
                width: "12rem",
                marginLeft: "0.2rem",
              }}
            >
              Välj övningsläge
            </Typography>
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <OutlineField
              title={"Tid & Prognos"}
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
                textTransform: "capitalize",
                fontSize: "0.75rem",
                marginLeft: "0.2rem",
              }}
            >
              Välj antal frågor
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              marginTop: "1rem",
              flexWrap: "wrap",
              rowGap: ".5rem",
            }}
          >
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
            <OutlineBox
              size="large"
              checked={title}
              title={"Ett delprov"}
              onChangeCheck={() => setDefaultNuberOfQuestions()}
            />
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
                textTransform: "capitalize",
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
      <Box className={classes.tabsSection}>
        <Tabs
          className={classes.hideStatistics}
          TabIndicatorProps={{
            style: { backgroundColor: "#0A1596", height: "4px" },
          }}
          value={tabValue}
          onChange={handelChange}
          variant="fullWidth"
        >
          <Tab
            label="Historik"
            style={{
              textTransform: "initial",
              color: tabValue == 0 ? "black" : "#B5B5B5",
            }}
            onClick={() => {
              width < 900 &&
                setTabValue(0);
            }}
          />

          <Tab
            label="Statistik"
            className={classes.hideStatistics}
            style={{
              textTransform: "initial",
              color: tabValue == 1 ? "black" : "#B5B5B5",
            }}
            onClick={() => {
              width < 900 &&
                setTabValue(1);
            }}
          />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Box className={classes.ShowTitle}>
            <Typography variant="h5" component="h5">
              HISTORIK
            </Typography>
          </Box>

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
