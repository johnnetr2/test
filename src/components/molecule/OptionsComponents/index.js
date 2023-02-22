import React from "react";
import { Typography, Container, FormControlLabel } from "@material-ui/core";
import { Box } from "@mui/material";
import RadioButtonOptions from "../RadioButtonsOptions";
import { optionsCharectors } from "../../service/commonService";
import MarkLatex from "../../atom/Marklatex/MarkLatex";

const OptionsComponent = (props) => {
    console.log("questions", props)
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
                    <Box sx={{ display: 'flex' }}>
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
                                        ? 600
                                        : 300,
                                // color:
                                //     index === props.question.selectedOptionIndex &&
                                //     appColors.blueColor,

                                display: "flex",
                                // flexDirection: "row",
                                alignItems: "center",
                                backgroundColor: '#FFF',
                                paddingRight: '10px'

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
                                            content={option?.value.replace("\f", "\\f")}
                                        />
                                    )}{" "}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                );
            })}
        </Container>
    )
}

export default OptionsComponent