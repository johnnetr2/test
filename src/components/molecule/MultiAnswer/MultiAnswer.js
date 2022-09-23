import React, { useEffect } from "react";
import { Typography, Box, FormControlLabel, Radio } from "@material-ui/core";
import Increment from "../../../assets/Icons/Increment.svg";
import Decrement from "../../../assets/Icons/Decrement.svg";
import Correct from "../../../assets/Imgs/correct.png";
import Wrong from "../../../assets/Imgs/wrong.png";
import MarkLatex from "../../atom/Marklatex/MarkLatex";

const MultiAnswer = (props) => {
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
      <Box sx={{ display: "flex" }}>
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
                  width: 565,
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
      <Box style={{ border: "1px solid #e1e1e1", padding: "2rem" }}>
        <Box
          sx={{ width: 500, display: "flex", justifyContent: "space-between" }}
        >
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
                width: props?.question?.answer.image ? "auto" : 500,
              }}
            >
              <MarkLatex content={props?.question?.answer?.answer} />
            </Typography>
          </Box>
          <Box
            mt={2}
            style={{
              marginTop: "2rem",
            }}
          >
            <img
              style={{ height: 110 }}
              src={props?.question?.answer.image}
              alt=""
            />
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
              fontSize: "0.7rem",
              display: "flex",
              justifySelf: "flex-end",
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
    </>
  );
};

export default MultiAnswer;
