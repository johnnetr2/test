import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

import CustomizedTooltip from "../../atom/Tooltip/Tooltip";
import { DTKNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { ELFNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { KVANormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { LASNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { MEKNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { NOGNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { ORDNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import ProgressBar from "../../atom/ProgressBar/ProgressBar";
import { XYZNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import informationIcon from "../../../assets/Imgs/informationIcon.png";
import { useNavigate } from "react-router-dom";

const HomeCard = (props) => {
  const data = props?.item;
  const navigate = useNavigate();

  const percentageCalculation = () => {
    if (props?.item.title == "XYZ") {
      return XYZNormeringValueFor(
        (props?.previousRecord?.CorrectQuestion /
          props?.previousRecord?.TotalQuestion) *
        100
      );
    } else if (props?.item.title == "KVA") {
      return KVANormeringValueFor(
        (props?.previousRecord?.CorrectQuestion /
          props?.previousRecord?.TotalQuestion) *
        100
      );
    } else if (props?.item.title == "NOG") {
      return (
        NOGNormeringValueFor(
          (props?.previousRecord?.CorrectQuestion /
            props?.previousRecord?.TotalQuestion) *
          100)

      );
    } else if (props?.item.title == "DTK") {
      return (
        DTKNormeringValueFor(
          (props?.previousRecord?.CorrectQuestion /
            props?.previousRecord?.TotalQuestion) *
          100)
      );
    } else if (props?.item.title == "ELF") {
      return (
        ELFNormeringValueFor(
          (props?.previousRecord?.CorrectQuestion /
            props?.previousRecord?.TotalQuestion) *
          100)
      );
    } else if (props?.item.title == "LÄS") {
      return (
        LASNormeringValueFor(
          (props?.previousRecord?.CorrectQuestion /
            props?.previousRecord?.TotalQuestion) *
          100)
      );
    } else if (props?.item.title == "ORD") {
      return (
        ORDNormeringValueFor(
          (props?.previousRecord?.CorrectQuestion /
            props?.previousRecord?.TotalQuestion) *
          100)
      );
    } else if (props?.item.title == "MEK") {
      return (
        MEKNormeringValueFor(
          (props?.previousRecord?.CorrectQuestion /
            props?.previousRecord?.TotalQuestion) *
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
                  props?.previousRecord.TotalQuestion) *
                  100
                  ? (props?.previousRecord.CorrectQuestion /
                    props?.previousRecord.TotalQuestion) *
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
          {props?.previousRecord?.TotalQuestion >= 20 ? percentageCalculation() : '-'}
          {/* {props?.previousRecord?.AttemptedQuestion >= 20 ? ((props?.previousRecord?.CorrectQuestion / props?.previousRecord?.TotalQuestion)*2).toFixed(1) : '-'} */}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "3.5rem",
          }}
        >
          {props?.previousRecord?.TotalQuestion < 20 && (
            <CustomizedTooltip title="Gör minst 20 frågor på tid för att få poängprognos" placement="top">
              <img
                src={informationIcon}
                style={{
                  display: "flex",
                  height: "0.625rem",
                  width: "0.625rem",
                  alignSelf: "flex-end",
                }}
              />
            </CustomizedTooltip>
          )}
          <Typography
            variant="body1"
            style={{
              fontSize: ".75rem",
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
