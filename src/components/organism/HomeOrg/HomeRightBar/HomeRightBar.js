import React, { useEffect, useState } from "react";
import { Container, makeStyles, Typography, Box } from "@material-ui/core";
import QuestionProgressBox from "../../../../components/molecule/QuestionProgressBox/QuestionProgressBox";
import GoalBox from "../../../../components/molecule/GoalBox/GoalBox";
import ImpDatesCard from "../../../../components/molecule/ImpDatesCard/ImpDatesCard";
import LinesChart from "../../../molecule/Charts/LinesChart";
import { EndPoints, instance2 } from "../../../service/Route";
import { set } from "date-fns";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area,
} from "recharts";
// import { synchronizedLineChartData } from "../data/Data";

const useStyles = makeStyles((theme) => ({
  root: {
    backgrounColor: "#fff",
  },
}));

const HomeRightBar = (props) => {
  const classes = useStyles();
  const [studentPreference, setStudentPreference] = useState();
  useEffect(() => {
    const studentPrefenenceURL =
      EndPoints.getStudentPreference + localStorage.getItem("userId");
    instance2.get(studentPrefenenceURL).then((response) => {
      if (response?.data?.StudentPreference) {
        setStudentPreference(response.data.StudentPreference);
      }
    });
  }, [props.StudentPreference]);

  return (
    <Container
      maxWidth={false}
      style={{
        backgrounColor: "#fafafa",
        width: "27rem",
        border: "1px solid #00f",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fafafa",
          height: "auto",
          marginTop: "6rem",
        }}
      >
        <Box style={{ marginTop: "10.5rem" }}>
          <Typography
            variant="h6"
            component="h6"
            style={{
              marginTop: "2rem",
              marginBottom: "1.5rem",
            }}
          >
            Analys
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "49%" }}>
              <QuestionProgressBox />
            </Box>
            <Box sx={{ width: "49%" }}>
              <GoalBox
                goalPoint={
                  props.studentPreference && props.studentPreference
                    ? props.studentPreference.point
                    : studentPreference?.point
                }
              />
            </Box>
          </Box>
        </Box>
        <Box style={{ marginTop: "2rem" }}>
          <Typography
            variant="h6"
            component="h6"
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Utveckling
          </Typography>
          <Box
            sx={{
              display: "flex",
              height: "18rem",
              borderRadius: 3,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
              border: "1px solid #dddddd",
              boxShadow: "0px 5px 10px #f2f2f2",
              padding: "2rem",
            }}
          >
            <Typography
              variant="body1"
              style={{
                fontSize: "0.75rem",
                fontWeight: 540,
                marginBottom: ".5rem",
              }}
            >
              POANG
            </Typography>
            <LinesChart
              width={550}
              height={200}
              // padding={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              // data={synchronizedLineChartData}
              syncId="anyId"
              // margin={{
              //   top: 10,
              //   right: 30,
              //   left: 0,
              //   bottom: 0,
              // }}
            />
          </Box>

          <Box style={{ marginTop: "2rem" }}>
            <Typography
              variant="h6"
              component="h6"
              style={{
                marginTop: "2rem",
                marginBottom: "1rem",
              }}
            >
              Viktiga datum
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ width: "100%" }}>
                <ImpDatesCard />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HomeRightBar;
