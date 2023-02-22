import { FormControlLabel, Container, Typography } from "@material-ui/core";
import React, { useState } from "react";

import { Box } from "@mui/material";
import FeedbackCard from "../../molecule/FeedbackCard/FeedbackCard";
import FeedbackButtons from "../../atom/FeedbackButtons/FeedbackButtons";
import { MixpanelTracking } from "../../../tools/mixpanel/Mixpanel";
import AnswerStatement from "../AnswerStatement/AnswerStatement";
import RadioButtonOptions from "../RadioButtonsOptions";
import MarkLatex from "../../atom/Marklatex/MarkLatex";
import { optionsCharectors } from "../../service/commonService";
import OptionsComponent from "../OptionsComponents";

const MultiAnswer = (props) => {
  const [feedbackPopup, setFeedbackPopup] = useState(false);
  const [count, setCount] = useState();
  const PlusPoint = () => {
    setCount(1);
    MixpanelTracking.getInstance().feedbackButtonClicked(
      localStorage.email,
      props.question.sectionCategories.title,
      props.question.questionCategory,
      props.question.questionId,
      "positive"
    );
    setFeedbackPopup(true);
  };

  const MinusPoint = () => {
    setCount(0);
    MixpanelTracking.getInstance().feedbackButtonClicked(
      localStorage.email,
      props.question.sectionCategories.title,
      props.question.questionCategory,
      props.question.questionId,
      "negative"
    );
    setFeedbackPopup(true);
  };

  return (
    <>
      {/* <Box> */}
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      > */}
      <OptionsComponent question={props?.question} />
      {/* <Container
            disableGutters
            maxWidth="sm"
            style={{
              // marginTop: "1rem",
              display: "flex",
              flexWrap: "wrap",
              backgroundColor: "#fff",
            }}
          // ref={props.onScrollBottom}
          >
            {props?.question.option[0]?.options.map((item, index) => {
              return (
                <Box sx={{ display: 'flex' }} >
                  <Box
                    sx={{
                      height:
                        props?.question.option[0]?.options.length > 4 ||
                          !item.value.includes(
                            "hp-appen.s3.eu-north-1.amazonaws.com"
                          )
                          ? 60
                          : 150,
                      padding:
                        props?.question.option[0]?.options.length > 4 ||
                          !item.value.includes(
                            "hp-appen.s3.eu-north-1.amazonaws.com"
                          )
                          ? 0
                          : 10,
                      border: "1px solid #e1e1e1",
                      maxWidth:
                        props?.question.option[0]?.options.length > 4 ||
                          !item.value.includes(
                            "hp-appen.s3.eu-north-1.amazonaws.com"
                          )
                          ? 600
                          : 300,

                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: '#FFF'
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <FormControlLabel
                          value={item._id}
                          style={{
                            marginLeft: ".5rem",
                          }}
                          control={RadioButtonOptions(props.question, item, index)}
                        />
                        <Typography
                          style={{
                            marginTop: "1.25rem",
                            marginLeft: "-1.7rem",
                            fontSize: "0.6rem",
                          }}
                          variant="body2"
                        >
                          {optionsCharectors(index)}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        marginLeft:
                          props?.question?.options[0].options.length > 4 ||
                            item.image === ""
                            ? "1rem"
                            : "0",
                        width: !item.value.includes(
                          "hp-appen.s3.eu-north-1.amazonaws.com"
                        )
                          ? 600
                          : 300,
                        justifyContent:
                          props?.question?.options[0].options.length > 4 ||
                            !item.value.includes(
                              "hp-appen.s3.eu-north-1.amazonaws.com"
                            )
                            ? "flex-start"
                            : "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography className={item.value.includes("hp-appen.s3.eu-north-1.amazonaws.com") ? "optionImage" : ""} style={{ fontSize: "0.9rem" }}>
                        {item?.value && (
                          <MarkLatex
                            content={item?.value.replace("\f", "\\f")}
                          />
                        )}{" "}
                      </Typography>
                    </Box>
                    {/* <FormControlLabel
                      style={{
                        marginLeft: ".5rem", color: props?.question?.answer.option !== item._id && props?.question.optionId === item._id ? "#EB5757" : props?.question?.answer &&
                          props?.question?.answer?.option === item._id ? "#27AE60" : "#505050"
                      }}
                      control={RadioButtonOptions(item, props?.question, index)}
                      label={<MarkLatex
                        content={item?.value.replace("\f", "\\f")}
                      />}
                    />
                  </Box>
                </Box>
              );
            })}
          </Container> */}
      {/* </Box> */}

      {/* <Box mt={2} ml={5}></Box> */}
      {/* </Box> */}
      <Box
        sx={{
          border: "1px solid #e1e1e1",
          padding: { xs: "1rem", sm: "2rem" },
          width: "100%",
          overflow: "auto",
        }}
      >
        <FeedbackCard
          count={count}
          show={feedbackPopup}
          onClose={() => setFeedbackPopup(false)}
          questionId={props.question._id}
        />

        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {props?.question && (
            <AnswerStatement
              answer={props?.question?.answer?.answer}
              image={props?.question?.answer?.image}
            />
          )}
        </Box>
        <FeedbackButtons onClickPlus={PlusPoint} onClickMinus={MinusPoint} />
      </Box>
    </>
  );
};

export default MultiAnswer;
