import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import ProgressBar from "../../atom/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import image70 from "../../../assets/Imgs/image70.png";
import { XYZNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { ORDNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { NOGNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { ELFNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { MEKNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { LASNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { DTKNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { KVANormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";

const HomeCard = (props) => {
  const data = props?.item;
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("17: ", KVANormeringValueFor(16.83));

    // console.log(props?.previousRecord?.AttemptedQuestion, 'first one ')


  }, []);

  const percentageCalculation = () => {
    if (props?.item.title == "XYZ") {
      return XYZNormeringValueFor(
        (props?.previousRecord?.CorrectQuestion /
          props?.previousRecord?.AttemptedQuestion) *
          100
      );
    } else if (props?.item.title == "KVA") {
      return KVANormeringValueFor(
        (props?.previousRecord?.CorrectQuestion /
          props?.previousRecord?.AttemptedQuestion) *
          100
      );
    } else if (props?.item.title == "NOG") {
      return (
        NOGNormeringValueFor(
            (props?.previousRecord?.CorrectQuestion /
              props?.previousRecord?.AttemptedQuestion) *
            100)
          
      );
    } else if (props?.item.title == "DTK") {
      return (
        DTKNormeringValueFor(
            (props?.previousRecord?.CorrectQuestion /
              props?.previousRecord?.AttemptedQuestion) *
            100)
      );
    } else if (props?.item.title == "ELF") {
      return (
        ELFNormeringValueFor(
            (props?.previousRecord?.CorrectQuestion /
              props?.previousRecord?.AttemptedQuestion) *
            100)
      );
    } else if (props?.item.title == "LÄS") {
      return (
        LASNormeringValueFor(
            (props?.previousRecord?.CorrectQuestion /
              props?.previousRecord?.AttemptedQuestion) *
            100)
      );
    } else if (props?.item.title == "ORD") {
      return (
        ORDNormeringValueFor(
            (props?.previousRecord?.CorrectQuestion /
              props?.previousRecord?.AttemptedQuestion) *
            100)
      );
    } else if (props?.item.title == "MEK") {
      return (
        MEKNormeringValueFor(
            (props?.previousRecord?.CorrectQuestion /
              props?.previousRecord?.AttemptedQuestion) *
          100)
      );
    }
  };

  return (
    <Box
      sx={{
        height: "20%",
        maxWidth: "41rem",
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid #e1e1e1",
        boxShadow: "0px 5px 10px #f2f2f2",
        padding: 3,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 1,
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#f9f9f9",
        },
      }}
      onClick={() =>
        navigate("/category", {
          state: {
            item: data,
            progress: percentageCalculation(),
          },
        })
      }
    >
      <Box sx={{ width: "60%" }}>
        <Typography variant="h5">{data.title}</Typography>
        <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
          {data?.information}
        </Typography>
        <Box>
          <ProgressBar
            average={
              props?.previousRecord
                ? (props?.previousRecord.CorrectQuestion /
                    props?.previousRecord.AttemptedQuestion) *
                  100
                  ? (props?.previousRecord.CorrectQuestion /
                      props?.previousRecord.AttemptedQuestion) *
                    100
                  : 0
                : 0
            }
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "20%",
        }}
      >
        <Typography variant="h4" style={{ paddingRight: ".75rem" }}>
          {percentageCalculation()}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "3.5rem",
          }}
        >
          {props?.previousRecord?.AttemptedQuestion < 20 && (
            <img
              src={image70}
              style={{
                display: "flex",
                height: "0.5rem",
                width: "0.5rem",
                alignSelf: "flex-end",
              }}
            />
          )}
          <Typography
            variant="body1"
            style={{
              fontSize: ".75rem",
              marginTop: ".75rem",
            }}
          >
            Prognos
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeCard;
