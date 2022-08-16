import react, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
const LinesChart = (props) => {
  return (
    <Box>
      <LineChart
        width={396}
        height={200}
        style={{
          fontSize: "0.75rem",
        }}
        data={[
          {
            name: "v35",
            point:
              (props.homeRightBar || props.mondayData) &&
              (props.categoryRightBar || props.mondayData),
          },
          {
            name: "v39",
            point:
              (props.homeRightBar || props.tuesdayData) &&
              (props.categoryRightBar || props.tuesdayData),
          },
          {
            name: "v37",
            point:
              (props.homeRightBar || props.wednesdayData) &&
              (props.categoryRightBar || props.wednesdayData),
          },
          {
            name: "v38",
            point:
              (props.homeRightBar || props.thursdayData) &&
              (props.categoryRightBar || props.thursdayData),
          },
          {
            name: "v39",
            point:
              (props.homeRightBar || props.fridayData) &&
              (props.categoryRightBar || props.fridayData),
          },
          {
            name: "v40",
            point:
              (props.homeRightBar || props.saturdayData) &&
              (props.categoryRightBar || props.saturdayData),
          },
          {
            name: "v41",
            point:
              (props.homeRightBar || props.sundayData) &&
              (props.categoryRightBar || props.sundayData),
          },
        ]}
        syncId="anyId"
        margin={{
          top: 10,
          right: 10,
          left: -30,
          bottom: 0,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="point"
          stroke="#0A1596"
          strokeWidth="3"
          fill="#0A1596"
          dot={{ stroke: "#0A1596", strokeWidth: 3, r: 4, strokeDasharray: "" }}
          options={{
            scales: {
              x: {
                grid: {
                  display: "false",
                },
              },
            },
          }}
        />
      </LineChart>
    </Box>
  );
};

export default LinesChart;
