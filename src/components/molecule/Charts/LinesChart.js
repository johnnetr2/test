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
            name: props?.weeks[0] ? props.weeks[0] : null,
            Prognos: props?.mondayData ? props?.mondayData : null,
            // point:props.mondayData
            // (props.homeRightBar && props.mondayData) ||
            // (props.categoryRightBar && props.mondayData),
          },
          {
            name: props?.weeks[1] ? props.weeks[1] : null,
            Prognos: props?.tuesdayData ? props?.tuesdayData : null,
            // (props.homeRightBar && props.tuesdayData) ||
            // (props.categoryRightBar && props.tuesdayData),
          },
          {
            name: props?.weeks[2] ? props?.weeks[2] : null,
            Prognos: props?.wednesdayData ? props?.wednesdayData : null,
            // (props?.homeRightBar && props.wednesdayData) ||
            // (props?.categoryRightBar && props.wednesdayData),
          },
          {
            name: props?.weeks[3] ? props.weeks[3] : null,
            Prognos: props?.thursdayData ? props?.thursdayData : null,
          },
          {
            name: props?.weeks[4] ? props.weeks[4] : null,
            Prognos: props?.fridayData ? props?.fridayData : null,
          },
          {
            name: props?.weeks[5] ? props.weeks[5] : null,
            Prognos: props?.saturdayData ? props?.saturdayData : null,
          },
          {
            name: props?.weeks[6] ? props.weeks[6] : null,
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
        <YAxis type="number" dx={-10} tickLine={false} axisLine={false} />
        <Tooltip
          content={<CustomTooltip />}
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
          isAnimationActive={false}
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
