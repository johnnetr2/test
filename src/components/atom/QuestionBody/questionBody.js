import React, { useEffect, useState } from "react";
import Increment from '../../../assets/Icons/Increment.svg'
import Decrement from '../../../assets/Icons/Decrement.svg'
import QuestionViewDTKOrg from "../../organism/HomeOrg/HomePages/QuestionPages/QuestionViewDtkOrg/QuestionViewDtkOrg";
import {
    Typography,
    Box,
    FormControlLabel,
    Container,
} from "@material-ui/core";
import MarkLatex from "../Marklatex/MarkLatex";


const QuestionBody = (props) => {

    const [question, setQuestion] = useState(props?.question)
    useEffect(() => {
      console.log(props.question, 'this is a question')
    }, [])
    

    if (props.question.type == "multiple") {
        return <QuestionViewDTKOrg
            question={props.question} selectedOption={props.selectedOption}
            selectedIndex={props.selectedIndex} onRightClick={() => props.onRightClick()}
            onLeftClick={() => props.onLeftClick()} onResultHandler={() => props.onResultHandler()}
            paragraphIndex={props.paragraphIndex} questionIndex={props.questionIndex}
            timeLeft={props.timeLeft} quizId={props.quizId}
            totalTime={props.totalTime} quiz={props.quiz} sectionCategory={props?.sectionCategory}
            nextQuestion={() => props.nextQuestion()}
            stopTimer={() => props.stopTime()}
            startTimer={() => props.startTime() }
        />
    } else {
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
                        backgroundColor: '#fff'
                    }}
                >

                    <Typography
                        variant="h6"
                        component="h6"
                        style={{ fontSize: "0.75rem", fontWeight: "600", display: 'flex' }}
                    >
                        <MarkLatex content={question?.question?.questionStatement} />
                    </Typography>

                    {question?.question?.images[0] && <Typography
                        variant="h6"
                        component="h6"
                        style={{ height: '12rem', display: 'flex', justifyContent: 'center' }}
                    >
                        <img style={{ height: '100%' }} src={question?.question?.images[0]} />

                    </Typography>}

                    {question?.question?.information1 && <Typography
                        variant="h6"
                        component="h6"
                        style={{ fontSize: "0.75rem", fontWeight: "600" }}
                    >
                        <MarkLatex content={question?.question?.information1} />
                    </Typography>}

                    {question?.question?.information1 && <Typography
                        variant="h6"
                        component="h6"
                        style={{ fontSize: "0.75rem", fontWeight: "600" }}
                    >
                        <MarkLatex content={question?.question?.information2} />
                    </Typography>}

                </Box>
                <Box
                    mt={5}
                    sx={{
                        backgroundColor: "#fff",
                        width: 600,
                        height: 240,
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                    }}
                >
                    {question?.options?.map((item, optionIndex) => {
                        if (item.value) {
                            return (
                                <Box
                                    sx={{
                                        //   height: 120,
                                        border: "1px solid #e1e1e1",
                                        width: 300,
                                    }}
                                >
                                    <Box sx={{ display: "flex" }}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <FormControlLabel
                                                onClick={(e) => {
                                                    !question?.answerSubmited && props.SelectOption(e, optionIndex);
                                                }}
                                                style={{ marginLeft: ".5rem" }}
                                                value={item?._id}
                                                control={props.showOptions(question, item, optionIndex)}
                                                label={props.OptionValue(optionIndex)}
                                            />
                                        </Box>

                                        <Box mt={2} ml={5}>
                                            {item.image ? (
                                                <img src={item.image} />

                                            ) : (
                                                <Typography><MarkLatex content={item.value.replace("\f", "\\f")} /> </Typography>
                                            )}
                                        </Box>
                                    </Box>
                                </Box>
                            );
                        }
                    })}
                </Box>

                {question.answer && (
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
                        <Box sx={{ width: 500, display: "flex" }}>
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
                                    }}
                                >
                                    {/* {question.answer.answer} */}
                                    <MarkLatex content={question.answer.answer} />
                                </Typography>
                            </Box>
                            <Box
                                mt={2}
                                style={{
                                    backgroundColor: "blue",
                                    marginLeft: "15rem",
                                    marginTop: "2rem",
                                }}
                            >
                                {question.answer.image && (
                                    <img
                                        style={{ height: 110 }}
                                        src={question.answer.image}
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
                                    width: "32rem",
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
                )}

                {/* {(params.state.questionIndex != undefined) ? (<ResultFooter/>) :  */}
                {props.submitButton(question)}
                {/* }  */}
            </Container>
        );
    }
};

export default QuestionBody