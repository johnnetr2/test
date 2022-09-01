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
            name: props?.weeks[0] ? props.weeks[0] : "",
            Prognos: props?.mondayData,
            // point:props.mondayData
            // (props.homeRightBar && props.mondayData) ||
            // (props.categoryRightBar && props.mondayData),
          },
          {
            name: props?.weeks[1] ? props.weeks[1] : "",
            Prognos: props?.tuesdayData,
            // (props.homeRightBar && props.tuesdayData) ||
            // (props.categoryRightBar && props.tuesdayData),
          },
          {
            name: props?.weeks[2] ? props?.weeks[2] : "",
            Prognos:
              (props?.homeRightBar && props.wednesdayData) ||
              (props?.categoryRightBar && props.wednesdayData),
          },
          {
            name: props?.weeks[3] ? props.weeks[3] : "",
            Prognos: props?.mondayData,
          },
          {
            name: props?.weeks[4] ? props.weeks[4] : "",
            Prognos: props?.mondayData,
          },
          {
            name: props?.weeks[5] ? props.weeks[5] : "",
            Prognos: props?.mondayData,
          },
          {
            name: props?.weeks[6] ? props.weeks[6] : "",
            Prognos: props?.mondayData,
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
        <XAxis dataKey="name" dy={10} tickLine={false} />
        <YAxis dx={-10} tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #e1e1e1",
            borderRadius: "5px",
          }}
          // dataKey="x"
          // viewBox={{ y: 0 }}
          // labelFormatter={() => undefined}
          // formatter={(okay) => [
          //   new Intl.NumberFormat("en").format(okay),
          //   undefined,
          // ]}
          // content={ dataKey: name }}
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
