import { Box, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

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
import { EndPoints, instance2 } from "../../service/Route";

const HomeCard = (props) => {
  const data = props?.item;
  const navigate = useNavigate();
  const [totalCategoryQuestions, setTotalCategoryQuestions] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lastWeeksData = EndPoints.lastWeekTasks + props.item._id;
    instance2.get(lastWeeksData).then((response) => {
      setTotalCategoryQuestions(response.data.totalQuestions);
      setLoading(false);
    });
  }, []);

  const percentageCalculation = () => {
    const calculatePercentage = (props?.previousRecord?.correctedFromLastHundred / props?.previousRecord?.totalAttemptedHundred) * 100
    if (props?.item.title === "XYZ") {
      return XYZNormeringValueFor(calculatePercentage);
    } else if (props?.item.title === "KVA") {
      return KVANormeringValueFor(calculatePercentage);
    } else if (props?.item.title === "NOG") {
      return NOGNormeringValueFor(calculatePercentage);
    } else if (props?.item.title === "DTK") {
      return DTKNormeringValueFor(calculatePercentage);
    } else if (props?.item.title === "ELF") {
      return ELFNormeringValueFor(calculatePercentage);
    } else if (props?.item.title === "LÄS") {
      return LASNormeringValueFor(calculatePercentage);
    } else if (props?.item.title === "ORD") {
      return ORDNormeringValueFor(calculatePercentage);
    } else if (props?.item.title === "MEK") {
      return MEKNormeringValueFor(calculatePercentage);
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
          {loading ? (
            <ProgressBarLoader />
          ) : (
            <ProgressBar
              average={
                props?.previousRecord
                  ? (props?.previousRecord.CorrectQuestion /
                      totalCategoryQuestions) *
                    100
                    ? (props?.previousRecord.CorrectQuestion /
                        totalCategoryQuestions) *
                      100
                    : 0
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
          {props?.previousRecord?.TotalQuestion >= 20
            ? percentageCalculation()
            : "-"}
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
            <CustomizedTooltip
              title="Gör minst 20 frågor på tid för att få poängprognos"
              placement="top"
            >
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
