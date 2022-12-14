import { Box, Typography } from "@mui/material";
import React from "react";

import CustomizedTooltip from "../../atom/Tooltip/Tooltip";
import { DTKNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { ELFNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { KVANormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { LASNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { MEKNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { NOGNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { ORDNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import ProgressBar from "../../atom/ProgressBar/ProgressBar";
import ProgressBarLoader from "../../atom/ProgressBarLoader/ProgressBarLoader";
import { XYZNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import informationIcon from "../../../assets/Imgs/informationIcon.png";
import { useNavigate } from "react-router-dom";

const HomeCard = (props) => {
  const data = props?.item;
  const navigate = useNavigate();

  const percentageCalculation = () => {
    const calculatePercentage =
      (props?.previousRecord?.correctedFromLastHundred /
        props?.previousRecord?.totalAttemptedHundred) *
      100;
    switch (props?.item.title) {
      case "XYZ":
        return XYZNormeringValueFor(calculatePercentage);
      case "KVA":
        return KVANormeringValueFor(calculatePercentage);
      case "NOG":
        return NOGNormeringValueFor(calculatePercentage);
      case "DTK":
        return DTKNormeringValueFor(calculatePercentage);
      case "ELF":
        return ELFNormeringValueFor(calculatePercentage);
      case "ORD":
        return ORDNormeringValueFor(calculatePercentage);
      case "MEK":
        return MEKNormeringValueFor(calculatePercentage);
      case "LÄS":
        return LASNormeringValueFor(calculatePercentage);
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        height: "20%",
        maxWidth: { md: "unset", lg: "41rem" },
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
            item: data
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
          {!props.isLoading ? (
            <ProgressBarLoader />
          ) : (
            <ProgressBar
              average={
                props?.previousRecord
                  ? (props?.previousRecord.totalCorrectQuestion /
                    props?.previousRecord.totalQuestionPerCategory) *
                  100
                  : 0
              }
            />
          )}
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
          {props?.previousRecord?.totalAttemptedHundred >= 20
            ? percentageCalculation()
            : "-"}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "3.5rem",
          }}
        >
          {props?.previousRecord?.totalAttemptedHundred < 20 && (
            <CustomizedTooltip
              title="Gör minst 20 frågor på tid för att få poängprognos"
              placement="top"
            >
              <img
                src={informationIcon}
                style={{
                  display: "flex",
                  height: "14px",
                  width: "14px",
                  alignSelf: "flex-end",
                }}
                alt="info"
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
