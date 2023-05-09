import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Box } from "@material-ui/core";
import { appColors } from "../../../utils/commonService";

const LineDemo = (props) => {
  const [rangeOfGraph, setRangeOfGraph] = useState(4);

  useEffect(() => {
    const weekWiseCorrectedAnswers = props?.weeklyCoreectedGraph.map(
      ((correctedInWeek) => correctedInWeek?.correct)
    );
    const maxNumberOfCorrected = Math.max(...weekWiseCorrectedAnswers);
    if (maxNumberOfCorrected > 4) {
      let checkMaxNumber = maxNumberOfCorrected % 4;
      if (checkMaxNumber > 0) {
        const noToAdd = 4 - checkMaxNumber;
        setRangeOfGraph(noToAdd + maxNumberOfCorrected);
      }
    }
  }, []);

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
          <p>{`Antal rätt: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Box>
      {props.weeklyCoreectedGraph.length > 0 && (
        <BarChart
          width={396}
          height={200}
          style={{
            fontSize: "0.75rem",
          }}
          data={props?.weeklyCoreectedGraph}
          syncId="snycId"
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="0 0" vertical="" horizontal="true" />
          <XAxis dataKey="name" dy={10} tickLine={false} />
          <YAxis
            type="number"
            dx={-10}
            domain={[0, rangeOfGraph]}
            allowDecimals={false}
            axisLine={false}
            tickCount={5}
            tickLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            contentStyle={{
              backgroundColor: appColors.whiteColor,
              border: "1px solid #e1e1e1",
              borderRadius: "5px",
            }}
            itemStyle={{ color: appColors.blackColor }}
            cursor={false}
          />
          <Bar
            dataKey="correct"
            fill={appColors.blueColor}
            barSize={5}
            radius={[10, 10, 0, 0]}

          />
        </BarChart>
      )}
    </Box>
  );
};

export default LineDemo;
