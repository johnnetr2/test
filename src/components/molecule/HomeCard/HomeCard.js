import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import ProgressBar from "../../atom/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import image70 from '../../../assets/Imgs/image70.png'
import XYZPercentageCalculator from '../../atom/percentageCalculator/xyz'
import ORDPercentageCalculator from '../../atom/percentageCalculator/ord'
import KVAPercentageCalculator from '../../atom/percentageCalculator/kva'
import NOGPercentageCalculator from '../../atom/percentageCalculator/nog'
import ELFPercentageCalculator from '../../atom/percentageCalculator/elf'
import MEKPercentageCalculator from '../../atom/percentageCalculator/mek'
import LASPercentageCalculator from '../../atom/percentageCalculator/las'
import DTKPercentageCalculator from '../../atom/percentageCalculator/dtk'


const HomeCard = (props) => {
  const data = props?.item;
  const navigate = useNavigate();

  const percentageCalculation = () => {
    if (props?.item.title == "XYZ") {
      return <XYZPercentageCalculator percentage={(props?.previousRecord?.CorrectQuestion / props?.previousRecord?.AttemptedQuestion) * 100} />
    } else if (props?.item.title == "KVA") {
      return <KVAPercentageCalculator percentage={(props?.previousRecord?.CorrectQuestion / props?.previousRecord?.AttemptedQuestion) * 100} />
    }
    else if (props?.item.title == "NOG") {
      return <NOGPercentageCalculator percentage={(props?.previousRecord?.CorrectQuestion / props?.previousRecord?.AttemptedQuestion) * 100} />
    }
    else if (props?.item.title == "DTK") {
      return <DTKPercentageCalculator percentage={(props?.previousRecord?.CorrectQuestion / props?.previousRecord?.AttemptedQuestion) * 100} />
    }
    else if (props?.item.title == "ELF") {
      return <ELFPercentageCalculator percentage={(props?.previousRecord?.CorrectQuestion / props?.previousRecord?.AttemptedQuestion) * 100} />
    }
    else if (props?.item.title == "LÄS") {
      return <LASPercentageCalculator percentage={(props?.previousRecord?.CorrectQuestion / props?.previousRecord?.AttemptedQuestion) * 100} />
    }
    else if (props?.item.title == "ORD") {
      return <ORDPercentageCalculator percentage={(props?.previousRecord?.CorrectQuestion / props?.previousRecord?.AttemptedQuestion) * 100} />
    }
    else if (props?.item.title == "MEK") {
      return <MEKPercentageCalculator percentage={(props?.previousRecord?.CorrectQuestion / props?.previousRecord?.AttemptedQuestion) * 100} />
    }
  }

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
            progress: percentageCalculation().props.percentage
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
          <ProgressBar average={props?.previousRecord ? ((props?.previousRecord.CorrectQuestion / props?.previousRecord.AttemptedQuestion) * 100) : 0} />
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
            display: 'flex',
            flexDirection: 'column',
            width: '3.5rem'
          }}
        >
          {props?.previousRecord?.AttemptedQuestion < 20 && <img src={image70} style={{ display: 'flex', height: '0.5rem', width: '0.5rem', alignSelf: 'flex-end' }} />}
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
