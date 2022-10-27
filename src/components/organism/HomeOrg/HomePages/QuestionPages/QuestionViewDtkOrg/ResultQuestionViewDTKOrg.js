import {
  Box,
  Container,
  CssBaseline,
  Paper,
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
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ResultQuestionViewDtkOrg = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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
  const { user, token } = useSelector((state) => state.value);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      .catch(() => {});
    // instance2.get(URL, data).then(response => {
    //   console.log(response.data, 'responsessssssss')
    //   setParagraph(response.data.question)
    // })
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

          {paragraph &&
            paragraph?.map((item, index) => {
              return (
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
                  <Box
                    paddingX={4}
                    mt={2}
                    mb={2}
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
                        style={{ height: "2rem", marginTop: "1.8rem" }}
                      />
                    ) : (
                      <img
                        src={Wrong}
                        style={{ height: "2rem", marginTop: "1.8rem" }}
                      />
                    )}
                    <Box padding={1} mt={2} mb={2} style={{ width: 500 }}>
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
                        style={{ fontSize: "1rem", fontWeight: "600" }}
                      >
                        {item.questionStatement}
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          marginBottom: 10,
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
                </Container>
              );
            })}

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
                backgroundColor: "#0A1596",
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
