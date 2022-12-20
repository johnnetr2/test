import react, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getWeekNumbers } from "../../atom/percentageCalculator/Utils";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { appColors } from "../../service/commonService";
const LinesChart = (props) => {
  // const progressOfUserAllCategories = []
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: appColors.whiteColor,
            border: "1px solid #e1e1e1",
            borderRadius: "5px",
            padding: ".65rem .75rem",
          }}
        >
          <p>{`Prognos: ${payload[0].value}`}</p>
        </div>
      );
    }

    // useEffect(()=> {
    //   if(!props.showProgress) { 
    //     const weekNames = getWeekNumbers().reverse()
    //     weekNames.forEach((weekName) => {
    //       progressOfUserAllCategories.push({ name: weekName, Prognos: null })
    //     })
    //   }

    // }, [props.showProgress])

    return null;
  };

  return (
    <Box>
      <LineChart
        width={396}
        height={200}
        // align="center"
        style={{
          fontSize: "0.75rem",
        }}
        data={props.weekWiseProgressGraph}
        syncId="anyId"
        margin={{
          top: 10,
          right: 10,
          left: -20,
          bottom: 0,
        }}
      >
        <CartesianGrid vertical="" horizontal="true" />
        <XAxis dataKey="name" dy={10} tickLine={false} />
        <YAxis
          type="number"
          dx={-10}
          domain={[0, 2]}
          allowDecimals={true}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          content={<CustomTooltip />}
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #e1e1e1",
            borderRadius: "5px",
          }}
          itemStyle={{ color: "#000" }}
          cursor={false}
        />
        <Line
          type="monotone"
          dataKey="Prognos"
          stroke={appColors.blueColor}
          strokeWidth="3"
          isAnimationActive={false}
          activeDot={{
            fill: appColors.blueColor,
            stroke: appColors.blueColor,
            strokeWidth: 2,
            r: 6,
          }}
          align="center"
          dot={{ fill: appColors.blueColor, stroke: appColors.blueColor, strokeWidth: 2, r: 6 }}
        />
      </LineChart>
    </Box>
  );
};

export default LinesChart;
