import React, { useEffect, useState } from 'react'
import {
    Typography,
    Box,
    FormControlLabel,
    Container,
    Radio,
} from "@material-ui/core";
import MarkLatex from "../../../../../atom/Marklatex/MarkLatex";
import Increment from '../../../../../../assets/Icons/Increment.svg';
import Decrement from '../../../../../../assets/Icons/Decrement.svg';
import ResultFooter from '../../../../../molecule/ResultFooter/ResultFooter';
import Correct from '../../../../../../assets/Imgs/correct.png';
import Wrong from '../../../../../../assets/Imgs/wrong.png';
import BarChart from '../../../../../../assets/Icons/BarChart.svg'
import Clock from "../../../../../../assets/Icons/Clock.svg";
import Timer from '../../../../../atom/Timer/timer';


function MultiQuestionSummary(props) {

    const [question, setQuestion] = useState()

    useEffect(() => {
        setQuestion(props.question)
    }, [])

    const Options = (question, curentOption, optionIndex) => {
        if (question.answer && question.optionId == curentOption._id) {
            return <img src={Correct} style={{ marginRight: "0.5rem", marginLeft:'.5rem', marginBottom:'.6rem' }} />;
        } else if (question.answer && curentOption._id === question.answer.option) {
            return <img src={Wrong} style={{ marginRight: "0.5rem", marginLeft: '.5rem', marginBottom: '.6rem' }} />;
        } 
        // else {
        //     return <Radio color="primary" checked={false} style={{ marginBottom: '.5rem' }} />;
        // }
        if (optionIndex == question.selectedIndex) {
            return <Radio color="primary" checked={true} style={{ marginBottom: '.5rem' }} />;
        } else {
            return <Radio color="primary" checked={false} style={{ marginBottom: '.5rem' }} />;
        }
    };
    

  return (
      <Container
          maxWidth="md"
          style={{
              marginTop: 0,
              backgroundColor: "#f9f9f9",
              height: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
          }}
      >
          {/* <Container
              disableGutters
            //   maxWidth="Xl"
              style={{ backgroundColor: "#fff", width: '100%' }}
          >
              <Box mt={8} sx={{ display: "flex", flexDirection: 'row', justifyContent: "space-between", }}>
                  <Box mt={2} width={100} sx={{ color: "#222" }}>
                      <img src={BarChart} alt="" />
                      {props.selectedIndex + 1} av {props.totalQuestions}
                  </Box>
                  {console.log('I am mapng')}
                  {props.params && props.params.value == true && (
                      <Box
                          mt={2}
                          sx={{ color: "#222", display: "flex", flexDirection: "row" }}
                      >
                          <img src={Clock} alt="" />
                          <Timer
                              continueStatus={props.status}
                              time={props.time}
                              timeleft={(timer) => {
                                  if (!props.status) {
                                      props.timeLeft(timer)
                                      props.nextPress()
                                  }
                              }}
                              onCloseTimer={() => props.onCloseTimer()}
                          />
                      </Box>
                  )}
              </Box>

              <Box
                  mt={2}
                  sx={{
                      backgroundColor: "#b4b4b4",
                      height: "8px",
                      display: "flex",
                      flexDirection: "row",
                  }}
              >
                  {props?.quiz &&
                      props.quiz?.map((item, index) => {
                          if (item.type === 'multiple') {
                              return item.question.map(question =>
                                  <Box
                                      key={index}
                                      style={{
                                          backgroundColor: 'question.answer'
                                              ? "#6fcf97"
                                              : "#B4B4B4",
                                          marginLeft: "2px",
                                          flex: "1",
                                      }}
                                  ></Box>
                              )
                          } else {
                              return <Box
                                  // key={index}
                                  style={{
                                      backgroundColor: 'item.answer'
                                          ? "#6fcf97"
                                          : "#B4B4B4",
                                      marginLeft: "2px",
                                      flex: "1",
                                  }}
                              ></Box>
                              // })
                          }
                      }

                      )}
              </Box>
          </Container> */}
          <Box
              mt={5}
              paddingX={6}
              paddingY={2}
              sx={{
                  width: 600,
                  height: 280,
                  border: "1px solid #e1e1e1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: '#fff',
                  overflow: 'auto' 
              }}
          >

              <Typography
                  variant="h6"
                  component="h6"
                  style={{ fontSize: "0.75rem", fontWeight: "600", display: 'flex'}}
              >
                  {question?.multipartQuestion.description}
              </Typography>

              <Typography
                  variant="h6"
                  component="h6"
                  style={{ height: '12rem', display: 'flex', justifyContent: 'center' }}
              >
                  {question?.multipartQuestion?.image &&  <img style={{ height: '100%' }} src={question?.multipartQuestion?.image} />}

              </Typography>

          </Box>
          <Box>
              <Box
                  paddingX={4}
                  mt={5}
                  sx={{
                      backgroundColor: "#fff",
                      width: 600,
                      border: "1px solid #e1e1e1",
                      marginLeft: '.5rem'
                  }}
              >
                  <Box
                      style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          marginTop: 10,
                      }}
                  >
                  </Box>
                  <Typography
                      variant="h6"
                      component="h6"
                      style={{ fontSize: ".75rem", fontWeight: "600", marginTop: 20, display: 'flex', flexDirection: 'column' }}
                  >
                      <MarkLatex content={question?.questionStatement} />

                      {question?.images && 
                        <img src={question.images[0]} style={{ marginBottom: '.4rem' }} />
                       }
                  </Typography>
              </Box>
              {question?.options[0].options.map((curentOption, optionIndex) => {
                  return <Box
                      padding={1}
                      sx={{
                          backgroundColor: "#fff",
                          width: 600,
                          border: "1px solid #e1e1e1",
                          marginLeft: '.5rem'
                      }}
                  >
                      <FormControlLabel onClick={(e) => {
                      }} value={curentOption._id}
                          style={{ marginLeft: '.5rem', marginTop: '.3rem'}}
                          control={Options(question, curentOption, optionIndex)
                          }
                          label={<MarkLatex content={curentOption.value.replace("\f", "\\f")} />} />
                  </Box>

               })}
              {/* {Button(question) } */}
          </Box>
              <Box
                  paddingX={4}
                  mt={3}
                  sx={{
                      backgroundColor: "#fff",
                      width: 600,
                      height: 220,
                      border: "1px solid #e1e1e1",
                      overflow: 'auto',
                      '&::-webkit-scrollbar': { display: 'none' }
                      //   '&::-webkit-scrollbar': { width : 0 },
                  }}
              >
                  <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                      <Box>
                          <Typography
                              variant="h5"
                              component="h5"
                              style={{
                                  fontSize: ".75rem",
                                  fontWeight: "600",
                                  marginTop: 20,
                              }}
                          >
                              Förklaring:
                          </Typography>
                          <Typography
                              variant="body1"
                              component="div"
                              style={{
                                  fontSize: ".75rem",
                                  fontWeight: "500",
                                  marginTop: 10,
                                  width: question?.answer.image ? 'auto' : 540,
                              }}
                          >
                              <MarkLatex content={question?.answer.answer} />
                          </Typography>
                      </Box>
                      <Box
                          mt={2}
                          style={{
                            //   marginLeft: "15rem",
                              marginTop: "2rem",
                          }}
                      >
                      {question?.answer.image && (
                              <img
                                  style={{ height: 110 }}
                              src={question?.answer.image}
                                  alt=""
                              />
                          )}
                      </Box>
                  </Box>
                  <Box
                      sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                          height: 60,
                      }}
                  >
                      <Typography
                          variant="body1"
                          component="body1"
                          style={{
                              fontSize: ".75rem",
                              fontWeight: "500",
                              marginTop: 10,
                            //   width: "32rem",
                              
                          }}
                      >
                          Berätta för oss om du var nöjd med lösningen
                      </Typography>
                      <Box ml={1} mr={0.5}>
                          <img src={Increment} alt="" />
                      </Box>
                      <Box mr={1}>
                          <img src={Decrement} alt="" />
                      </Box>
                  </Box>
              </Box>

          {/* <ResultFooter/> */}
          <ResultFooter
              questionLength={props.quiz.length}
              questionIndex={props.selectedIndex}
              onResultHandler={() => props.onResultHandler()}
              onLeftClick={() => {
                  props.onLeftClick();
              }}
              onRightClick={() => {
                  props.onRightClick();
              }}
          />
      </Container>
  )
}

export default MultiQuestionSummary