import React from "react";
import { Typography, Container, FormControlLabel } from "@material-ui/core";
import { Box } from "@mui/material";
import RadioButtonOptions from "../RadioButtonsOptions";
import { optionsCharacters } from "../../service/commonService";
import MarkLatex from "../../atom/Marklatex/MarkLatex";

const OptionsComponent = (props) => {
    const options = props.resultComponent ? props?.question?.options[0]?.options : props?.question?.option[0]?.options
    return (
        <Container
            disableGutters
            maxWidth="sm"
            style={{
                display: "flex",
                flexWrap: "wrap",
                backgroundColor: "#fff",
            }}
        >
            {options.map((option, index) => {
                return (
                    // <Box sx={{ display: 'flex' }}>
                    <Box
                        padding={1}
                        sx={{
                            height:
                                !option.value.includes(
                                    "hp-appen.s3.eu-north-1.amazonaws.com"
                                )
                                    ? 60
                                    : 150,
                            padding:
                                !option.value.includes(
                                    "hp-appen.s3.eu-north-1.amazonaws.com"
                                )
                                    ? 0
                                    : 10,
                            border: "1px solid #e1e1e1",
                            maxWidth:
                                !option.value.includes(
                                    "hp-appen.s3.eu-north-1.amazonaws.com"
                                )
                                    ? props.resultComponent ? 600 : 566
                                    : 300,
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: '#FFF',
                            paddingRight: '10px',
                            color: props.question?.answer.option !== option._id && props.question.optionId === option._id ? "#EB5757" : props.question?.answer &&
                                props.question?.answer?.option === option._id ? "#27AE60" : "#505050"

                        }}
                    // onClick={(e) => {
                    //   !question.answerSubmited &&
                    //     SelectFunc(option, optionIndex);
                    // }}
                    // onMouseOver={() => setOnHover(option._id)}
                    // onMouseLeave={() => setOnHover()}
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
                                    value={option._id}
                                    style={{
                                        marginLeft: ".5rem",
                                    }}
                                    control={RadioButtonOptions(option, props.question, index)}
                                />
                                <Typography
                                    style={{
                                        marginTop: "1.25rem",
                                        marginLeft: (props.question?.answer.option !== option._id && props.question.optionId === option._id || props.question?.answer &&
                                            props.question?.answer?.option === option._id) ? "-1.2rem" : "-1.7rem",
                                        fontSize: "0.6rem",
                                    }}
                                    variant="body2"
                                >
                                    {optionsCharacters(index)}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                marginLeft:
                                    option.image === ""
                                        ? "1rem"
                                        : "0",
                                width: !option.value.includes(
                                    "hp-appen.s3.eu-north-1.amazonaws.com"
                                )
                                    ? 600
                                    : 300,
                                justifyContent:
                                    !option.value.includes(
                                        "hp-appen.s3.eu-north-1.amazonaws.com"
                                    )
                                        ? "flex-start"
                                        : "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography className={option.value.includes("hp-appen.s3.eu-north-1.amazonaws.com") ? "optionImage" : ""} style={{ fontSize: "0.9rem" }}>
                                {option?.value && (
                                    <MarkLatex
                                        content={option?.value}
                                    />
                                )}{" "}
                            </Typography>
                        </Box>
                    </Box>
                );
            })}
        </Container>
    )
}

export default OptionsComponent