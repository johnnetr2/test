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
            Prognos: 2,
            // point:
            //   (props.homeRightBar || props.mondayData) &&
            //   (props.categoryRightBar || props.mondayData),
          },
          {
            name: "v39",
            Prognos:
              (props.homeRightBar || props.tuesdayData) &&
              (props.categoryRightBar || props.tuesdayData),
          },
          {
            name: "v37",
            Prognos:
              (props.homeRightBar || props.wednesdayData) &&
              (props.categoryRightBar || props.wednesdayData),
          },
          {
            name: "v38",
            Prognos:
              (props.homeRightBar || props.thursdayData) &&
              (props.categoryRightBar || props.thursdayData),
          },
          {
            name: "v39",
            Prognos:
              (props.homeRightBar || props.fridayData) &&
              (props.categoryRightBar || props.fridayData),
          },
          {
            name: "v40",
            Prognos:
              (props.homeRightBar || props.saturdayData) &&
              (props.categoryRightBar || props.saturdayData),
          },
          {
            name: "v41",
            Prognos:
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
        <CartesianGrid vertical="" horizontal="true" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #e1e1e1",
            borderRadius: "10px",
          }}
          itemStyle={{ color: "#000" }}
          cursor={false}
        />
        <Line
          type="monotone"
          dataKey="Prognos"
          stroke="#0A1596"
          strokeWidth="3"
          activeDot={{
            fill: "#0A1596",
            stroke: "#0A1596",
            strokeWidth: 2,
            r: 6,
          }}
          dot={{ fill: "#0A1596", stroke: "#0A1596", strokeWidth: 2, r: 6 }}
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
