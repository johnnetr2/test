import React, { useEffect, useState } from "react";
import { Container, makeStyles, Typography, Box } from "@material-ui/core";
import QuestionProgressBox from "../../../../components/molecule/QuestionProgressBox/QuestionProgressBox";
import GoalBox from "../../../../components/molecule/GoalBox/GoalBox";
import ImpDatesCard from "../../../../components/molecule/ImpDatesCard/ImpDatesCard";
import LineChart from "../../../molecule/Charts/LineChart";
import { EndPoints, instance2 } from "../../../service/Route";
import { set } from "date-fns";

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
              <QuestionProgressBox totalPrognos={props?.totalPrognos} />
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
              style={{ fontSize: "0.75rem", fontWeight: 540 }}
            >
              POANG
            </Typography>
            <LineChart />
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
