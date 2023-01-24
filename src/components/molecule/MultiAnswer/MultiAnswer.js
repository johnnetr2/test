import { FormControlLabel } from "@material-ui/core";
import React, { useState } from "react";

import { Box } from "@mui/material";
import FeedbackCard from "../../molecule/FeedbackCard/FeedbackCard";
import FeedbackButtons from "../../atom/FeedbackButtons/FeedbackButtons";
import { MixpanelTracking } from "../../../tools/mixpanel/Mixpanel";
import AnswerStatement from "../AnswerStatement/AnswerStatement";
import RadioButtonOptions from "../RadioButtonsOptions";

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
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {props?.question.option[0]?.options.map((item, index) => {
            return (
              <Box
                style={{
                  border: "1px solid #e1e1e1",
                  padding: "1rem",
                  width: "100%",
                  maxWidth: 565,
                }}
              >
                <FormControlLabel
                  style={{
                    marginLeft: ".5rem", color: props?.question?.answer.option !== item._id && props?.question.optionId === item._id ? "#EB5757" : props?.question?.answer &&
                      props?.question?.answer?.option === item._id ? "#27AE60" : "#505050"
                  }}
                  control={RadioButtonOptions(item, props?.question, index)}
                  label={item.value}
                />
              </Box>
            );
          })}
        </Box>

        {/* <Box mt={2} ml={5}></Box> */}
      </Box>
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
