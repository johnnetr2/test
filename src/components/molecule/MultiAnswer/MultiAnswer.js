import { FormControlLabel, Radio, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import Correct from "../../../assets/Imgs/correct.png";
import FeedbackCard from "../../molecule/FeedbackCard/FeedbackCard";
import MarkLatex from "../../atom/Marklatex/MarkLatex";
import Wrong from "../../../assets/Imgs/wrong.png";
import FeedbackButtons from "../../atom/FeedbackButtons/FeedbackButtons";
import { MixpanelTracking } from "../../../tools/mixpanel/Mixpanel";
import AnswerStatement from "../AnswerStatement/AnswerStatement";

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
  const options = (item, index) => {
    if (
      props?.question?.answer &&
      props?.question?.answer?.option === item._id
    ) {
      return (
        <img
          src={Correct}
          style={{
            height: "1.4rem",
            marginRight: ".5rem",
            marginLeft: ".8rem",
            marginTop: ".5rem",
            marginBottom: ".5rem",
          }}
        />
      );
    } else if (props?.question.optionId == item._id) {
      return (
        <img
          src={Wrong}
          style={{
            height: "1.4rem",
            marginRight: ".5rem",
            marginLeft: ".8rem",
            marginTop: ".5rem",
            marginBottom: ".5rem",
          }}
        />
      );
    } else {
      return <Radio checked={false} />;
    }
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
                  style={{ marginLeft: ".5rem" }}
                  control={options(item, index)}
                  label={item.value}
                />
              </Box>
            );
          })}
        </Box>

        <Box mt={2} ml={5}></Box>
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
