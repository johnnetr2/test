import {
  Box,
  Container,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import { EndPoints, instance2 } from "../../../../../service/Route";
import React, { useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Correct from "../../../../../../assets/Imgs/correct.png";
import DownArrow from "../../../../../../assets/Icons/DownArrow.svg";
import MultiAnswer from "../../../../../molecule/MultiAnswer/MultiAnswer";
import TopArrow from "../../../../../../assets/Icons/TopArrow.svg";
import Wrong from "../../../../../../assets/Imgs/wrong.png";
import MarkLatex from "../../../../../atom/Marklatex/MarkLatex";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { appColors, scrollTop } from "../../../../../../utils/commonService";

const ResultQuestionViewDtkOrg = (props) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: "100vh",
      backgroundColor: "#fff",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    header: {
      minHeight: "10vh",
      backgroundColor: "#fff",
      border: "1px solid #b4b4b4",
    },
    appbar: {
      border: "1px solid #E1E1E1",
      backgroundColor: "#f9f9f9",
    },
    size: {
      width: 15,
      height: 15,
    },
    center_align: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    color_progress: {
      backgroundColor: "#B4B4B4",
      color: "#6FCF97",
    },
    content: {
      minHeight: "90vh",
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "90vw",
    },
  }));

  const classes = useStyles(10);
  const [paragraph, setParagraph] = useState();
  const [showLoader, setShowLoader] = useState(false);
  const [enterSubmitted, setEnterSubmitted] = useState(false)
  const { token } = useSelector((state) => state.value);

  useEffect(() => {
    const handleEnterClick = (e) => {
      if (e.keyCode === 13) {
        changeQuestion();
        setEnterSubmitted(true)
      }
    }
    document.addEventListener("keydown", handleEnterClick);
    return () => {
      document.removeEventListener("keydown", handleEnterClick);
    }
  }, [enterSubmitted])


  const changeQuestion = () => {
    scrollTop();
    props.startTimer();
    props.nextQuestion();
  };

  useEffect(() => {
    setShowLoader(true);
    const data = {
      quiz: props?.quizId,
    };

    const URL = EndPoints.getParagraphResult + props?.paragraph?._id;
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    instance2
      .post(URL, data, { headers })
      .then((response) => {
        setShowLoader(false);
        setParagraph(response.data.question);
      })
      .catch(() => { });
  }, []);

  const showResult = (index) => {
    const quiz = [...paragraph];
    let question = quiz[index];
    if (question?.showResult) {
      question.showResult = false;
      setParagraph(quiz);
    } else {
      question.showResult = true;
      setParagraph(quiz);
    }
  };

  return (
    <>
      {showLoader ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        <div style={{ width: "100%" }}>
          <CssBaseline />
          <Container
            maxWidth="lg"
            style={{
              backgroundColor: "#fff",
              border: "1px solid #e1e1e1",
              height: "fit-content",
              padding: "1rem",
              marginTop: "5%",
              maxWidth: 600,
              width: "100%",
              cursor: "pointer",
            }}
          >
            {paragraph &&
              paragraph?.map((item, index) => {
                return (
                  <Box>
                    <Box
                      paddingX={4}
                      mt={4}
                      sx={{
                        backgroundColor: "#fff",
                        border: "1px solid #e1e1e1",
                        display: "flex",
                      }}
                      onClick={() => showResult(index)}
                    >
                      {item.optionId === item?.answer?.option ? (
                        <img
                          src={Correct}
                          style={{ width: '28px', height: "28px", marginTop: "1.8rem" }}
                        />
                      ) : (
                        <img
                          src={Wrong}
                          style={{ width: '28px', height: "28px", marginTop: "1.8rem" }}
                        />
                      )}
                      <Box padding={1} marginY={"1rem"} style={{ width: 500, position: 'relative', paddingLeft: '.5rem' }}>
                        <Typography
                          style={{
                            textTransform: "uppercase",
                            fontSize: "0.75rem",
                          }}
                          variant="body1"
                          component="body1"
                        >
                          {"Uppgift " +
                            `${index + 1}` +
                            " av " +
                            paragraph?.length}
                        </Typography>
                        <Typography
                          variant="h6"
                          component="h6"
                          className={item?.questionStatement?.includes("hp-appen.s3.eu-north-1.amazonaws.com") ? "questionImage" : ""}
                          style={{ fontSize: "1rem", fontWeight: "600" }}
                        >
                          <MarkLatex content={item.questionStatement} />
                        </Typography>
                        <Box
                          style={{
                            position: 'absolute',
                            right: '-21px',
                            bottom: '-11px',
                          }}
                        >

                          {item.showResult ? (
                            <img
                              src={TopArrow}
                              style={{ cursor: "pointer" }}
                              className={classes.size}
                              alt=""
                            />
                          ) : (

                            <img
                              src={DownArrow}
                              style={{ cursor: "pointer" }}
                              className={classes.size}
                              alt=""
                            />
                          )}
                        </Box>
                      </Box>
                    </Box>

                    {item.showResult && (
                      <MultiAnswer question={item} selectOption={item.optionId} />
                    )}

                  </Box>
                );
              })}
          </Container>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              padding={1}
              mt={2}
              style={{
                backgroundColor: appColors.blueColor,
                color: "#FFFFFF",
                height: "2.7rem",
                borderRadius: ".4rem",
                width: 600,
                marginTop: "2%",
                marginBottom: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={changeQuestion}
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: "0.75rem",
                  width: "3rem",
                }}
              >
                Nästa
              </Typography>
            </Box>
          </Box>
        </div>
      )}
    </>
  );
};

export default ResultQuestionViewDtkOrg;
