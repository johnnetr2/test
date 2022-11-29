import React, { useRef, useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { EndPoints, instance2 } from "../../service/Route";
import { Box } from "@material-ui/core";
import moment from "moment";
import { getWeekNumbers } from "../../atom/percentageCalculator/Utils";

// const data = [
//   {
//     name: "V35",
//     correct: 8,
//   },
//   {
//     name: "V36",
//     correct: 10,
//   },
//   {
//     name: "V37",
//     correct: 12,
//   },
//   {
//     name: "V38",
//     correct: 15,
//   },
//   {
//     name: "V39",
//     correct: 20,
//   },
//   {
//     name: "V40",
//     correct: 33,
//   },
//   {
//     name: "V41",
//     correct: 40,
//   },
// ];

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

  // const lineChartParams = [];

  // const weekNameArray = weeksArray.reverse();

  // const data = props?.weeklyProgress;
  // weekNameArray.forEach((weekName) => {
  //   const perWeekData = data.find(
  //     (perWeekProgress) => perWeekProgress.name === weekName
  //   );
  //   if (perWeekData) {
  //     lineChartParams.push({
  //       name: weekName,
  //       correct: perWeekData.weekWiseCorrected,
  //     });
  //   } else {
  //     lineChartParams.push({ name: weekName, correct: "" });
  //   }
  // });

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
          <p>{`Correct: ${payload[0].value}`}</p>
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
            left: -28,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="0 0" vertical="" horizontal="true" />
          <XAxis dataKey="name" dy={10} tickLine={false} />
          <YAxis
            type="number"
            dx={-10}
            domain={[0, rangeOfGraph]}
            tickLine={false}
            allowDecimals={false}
            axisLine={false}
            tickCount={5}
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
          <Bar
            dataKey="correct"
            fill="#0A1596"
            barSize={5}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      )}
    </Box>
  );
};

export default LineDemo;
