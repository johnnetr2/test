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
const LinesChart = (props) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #e1e1e1",
            borderRadius: "5px",
            padding: ".65rem .75rem",
          }}
        >
          <p>{`Prognos: ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  const weeksArray = getWeekNumbers();

  return (
    <Box>
      <LineChart
        width={396}
        height={200}
        // align="center"
        style={{
          fontSize: "0.75rem",
        }}
        data={[
          {
            name: weeksArray[6],
            Prognos: props?.mondayData ? props?.mondayData : null,
            // point:props.mondayData
            // (props.homeRightBar && props.mondayData) ||
            // (props.categoryRightBar && props.mondayData),
          },
          {
            name: weeksArray[5],
            Prognos: props?.tuesdayData ? props?.tuesdayData : null,
            // (props.homeRightBar && props.tuesdayData) ||
            // (props.categoryRightBar && props.tuesdayData),
          },
          {
            name: weeksArray[4],
            Prognos: props?.wednesdayData ? props?.wednesdayData : null,
            // (props?.homeRightBar && props.wednesdayData) ||
            // (props?.categoryRightBar && props.wednesdayData),
          },
          {
            name: weeksArray[3],
            Prognos: props?.thursdayData ? props?.thursdayData : null,
          },
          {
            name: weeksArray[2],
            Prognos: props?.fridayData ? props?.fridayData : null,
          },
          {
            name: weeksArray[1],
            Prognos: props?.saturdayData ? props?.saturdayData : null,
          },
          {
            name: weeksArray[0],
            Prognos: props?.sundayData ? props?.sundayData : null,
          },
        ]}
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
          stroke="#0A1596"
          strokeWidth="3"
          isAnimationActive={false}
          activeDot={{
            fill: "#0A1596",
            stroke: "#0A1596",
            strokeWidth: 2,
            r: 6,
          }}
          align="center"
          dot={{ fill: "#0A1596", stroke: "#0A1596", strokeWidth: 2, r: 6 }}
        />
      </LineChart>
    </Box>
  );
};

export default LinesChart;
