import React, { useEffect, useState } from "react";
import { Container, makeStyles, Typography, Box } from "@material-ui/core";
import QuestionProgressBox from "../../../../components/molecule/QuestionProgressBox/QuestionProgressBox";
import GoalBox from "../../../../components/molecule/GoalBox/GoalBox";
import ImpDatesCard from "../../../../components/molecule/ImpDatesCard/ImpDatesCard";
import LinesChart from "../../../molecule/Charts/LinesChart";
import { EndPoints, instance2 } from "../../../service/Route";
// import { synchronizedLineChartData } from "../data/Data";

const useStyles = makeStyles((theme) => ({
  root: {
    backgrounColor: "#fff",
  },
}));

const HomeRightBar = (props) => {
  const classes = useStyles();
  const [studentPreference, setStudentPreference] = useState();
  let [showPrognos, seTShowPrognos] = useState(true)

  useEffect(() => {
    const URL = EndPoints.studentPerviousProgress + localStorage.getItem("userId");
    instance2.get(URL).then(response => {
      console.log(response.data, 'student previos result')
      response.data.Data.map(item => {
        console.log(item)
        if (item.CorrectQuestion < 1) {
          seTShowPrognos(false)
          return
        }
      })
    })
  }, [])
  

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
    <Container maxWidth={false} style={{ padding: "0 3rem" }}>
      <Box
        sx={{
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
            <Box sx={{ width: "49%", backgroundColor: "#fff" }}>
              <QuestionProgressBox totalPrognos={props?.totalPrognos} showPrognos={showPrognos} />
            </Box>
            <Box sx={{ width: "49%", backgroundColor: "#fff" }}>
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
              backgroundColor: "#fff",

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
            <LinesChart syncId="anyId" />
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
            <Box sx={{ display: "flex", marginBottom: "1rem" }}>
              <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
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
