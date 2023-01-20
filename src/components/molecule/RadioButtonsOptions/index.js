import React from "react";

import Correct from "../../../assets/Imgs/correct.png";
import Wrong from "../../../assets/Imgs/wrong.png";
import { Radio } from "@material-ui/core";

const RadioButtonOptions = (option, question, optionIndex) => {
    if (question.answer && question.answer.option !== option._id && question.optionId === option._id) {
        return (
            <img
                src={Wrong}
                style={{
                    marginRight: "0.5rem",
                    marginLeft: ".5rem",
                    marginBottom: ".6rem",
                }}
            />
        );
    } else if (
        question.answer &&
        option._id === question.answer.option
    ) {
        return (
            <img
                src={Correct}
                style={{
                    marginRight: "0.5rem",
                    marginLeft: ".5rem",
                    marginBottom: ".6rem",
                }}
            />
        );
    } else if (question.answer && option._id !== question?.optionId) {
        return (
            <Radio
                disabled
                checked={false}
                style={{ marginRight: "0.5rem", color: "#E1E1E1" }}
            />
        );
    }
    if (optionIndex == question.selectedIndex) {
        return (
            <Radio
                color="primary"
                checked={true}
                style={{ marginBottom: ".5rem" }}
            />
        );
    } else {
        return (
            <Radio
                color="primary"
                checked={false}
                style={{ marginBottom: ".5rem" }}
            />
        );
    }
};

export default RadioButtonOptions
