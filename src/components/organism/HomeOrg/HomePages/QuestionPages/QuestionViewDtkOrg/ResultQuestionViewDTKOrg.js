import React, { useEffect, useState } from "react";
import DownArrow from "../../../../../../assets/Icons/DownArrow.svg";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Paper,
  Box,
  CssBaseline,
  Container,
} from "@material-ui/core";
import MultiAnswer from "../../../../../molecule/MultiAnswer/MultiAnswer";
import TopArrow from '../../../../../../assets/Icons/TopArrow.svg'
import Correct from '../../../../../../assets/Imgs/correct.png'
import Wrong from '../../../../../../assets/Imgs/wrong.png'
import { EndPoints, instance2 } from "../../../../../service/Route";
import axios from "axios";

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
  const [explanation, setExplanation] = useState()
  const [paragraph, setParagraph] = useState()

  const changeQuestion = () => {
    props.startTimer()
    props.nextQuestion()
  }

  useEffect(() => {

    const data = {
      quiz: props?.quizId
    }

    const URL = EndPoints.getParagraphResult + props?.paragraph?._id
    console.log(URL, 'urlllllll', data, 'dataaaaaaaaa')
    instance2.post(URL, data).then((response) => {
      setParagraph(response.data.question)
      console.log(response, 'this is the console of response of api')
    })
    // instance2.get(URL, data).then(response => {
    //   console.log(response.data, 'responsessssssss')
    //   setParagraph(response.data.question)
    // })
  }, [])
  
  const showResult = (item, index) => {
    const quiz = [...paragraph]
    const question = quiz[index]
    question.showResult = true
    setParagraph(quiz)
  }

  const hideResult = (item, index) => {
    const quiz = [...paragraph]
    const question = quiz[index]
    question.showResult = false
    setParagraph(quiz)
  }

  return (
    <div>
      <CssBaseline />

      {paragraph && paragraph?.map((item, index) => {
        return <Container
          maxWidth="lg"
          style={{ backgroundColor: "#fff", height: "fit-content", padding: '.5rem', marginTop: '5%', width: 600 }}
        >
          <Box
            paddingX={4}
            mt={5}
            sx={{
              backgroundColor: "#fff",
              width: 580,
              height: 120,
              border: "1px solid #e1e1e1",
              display: "flex",
            }}
          >

            {item.optionId === item?.answer?.option ? (<img src={Correct} style={{ height: '2rem', marginTop: '1.8rem' }} />)
              :
              (<img src={Wrong} style={{ height: '2rem', marginTop: '1.8rem' }} />)
            }
            <Box
              padding={1}
              mt={2}
              mb={2}
              style={{ width: 500}}
            >
              <Typography
                style={{ textTransform: "uppercase", fontSize: "0.75rem" }}
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
                style={{ fontSize: ".75rem", fontWeight: "600" }}
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
                {
                  item.showResult ? (<img src={TopArrow} style={{ cursor: 'pointer' }} onClick={() => hideResult(item, index)} className={classes.size} alt="" />)
                    : (
                      <img src={DownArrow} style={{ cursor: 'pointer' }} onClick={() => showResult(item, index)} className={classes.size} alt="" />
                    )
                }

              </Box>
            </Box>
          </Box>

          {item.showResult && <MultiAnswer question={item} selectOption={item.optionId} />}

        </Container>
      })}

       <Box
          padding={1}
          mt={2}
          style={{
            backgroundColor: '#0A1596', color: "#FFFFFF", height: '2.7rem',
            borderRadius: '.4rem', width: '100%', marginTop: '2%',
            marginBottom: '2%', marginLeft: '1%', display: 'flex',
            justifyContent: 'center', alignItems: 'center', cursor: 'pointer'
          }}
          onClick={changeQuestion}
        >
          <Typography
            variant="h6"
            style={{
              fontSize: "0.75rem",
              marginRight: "0.5rem",
              width: '3rem',
            }}
          >
          Nästa
          </Typography>
        </Box>
      

    </div>
  );
};

export default ResultQuestionViewDtkOrg;
