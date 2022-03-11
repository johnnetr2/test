import React from "react";
import { Container, makeStyles, Typography, Box } from "@material-ui/core";
import QuestionProgressBox from "../../../../components/molecule/QuestionProgressBox/QuestionProgressBox";
import GoalBox from "../../../../components/molecule/GoalBox/GoalBox";
import DevelopmentGraph from "../../../../components/molecule/DevelopmentGraph/DevelopmentGraph";
import ImpDatesCard from "../../../../components/molecule/ImpDatesCard/ImpDatesCard";
import LearnMoreCard from "../../../../components/molecule/LearnMoreCard/LearnMoreCard";
import LineChart from "../../../molecule/Charts/LineChart";

const useStyles = makeStyles((theme) => ({
  root: {
    backgrounColor: "#fff",
  },
}));

const HomeRightBar = () => {
  const classes = useStyles();

  return (
    <Container
      disableGutters
      maxWidth={false}
      style={{ backgrounColor: "#fafafa" }}
    >
      <Box
        sx={{
          backgroundColor: "#fafafa",
          height: "auto",
          marginTop: "6rem",
        }}
      >
        <Box style={{ marginTop: "6rem" }}>
          <Typography
            variant="h6"
            component="h6"
            style={{
              marginLeft: "1rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Analys
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "50%", marginLeft: "1rem" }}>
              <QuestionProgressBox />
            </Box>
            <Box sx={{ width: "50%", marginLeft: "1rem", marginRight: "1rem" }}>
              <GoalBox />
            </Box>
          </Box>
        </Box>
        <Box style={{ marginTop: "2rem" }}>
          <Typography
            variant="h6"
            component="h6"
            style={{
              marginLeft: "1rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Utveckling
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              <Box
                sx={{
                  height: "20%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #dddddd",
                  boxShadow: "1px 1px 8px #dfdfdf",
                  borderRadius: 5,
                  padding: "2rem",
                }}
              >
                <LineChart />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box style={{ marginTop: "2rem" }}>
          <Typography
            variant="h6"
            component="h6"
            style={{
              marginLeft: "1rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Viktiga datum
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{ width: "100%", marginLeft: "1rem", marginRight: "1rem" }}
            >
              <ImpDatesCard />
            </Box>
          </Box>
        </Box>
        <Box style={{ marginTop: "2rem" }}>
          <Box sx={{ marginRight: "1rem", marginLeft: "1rem" }}>
            <LearnMoreCard />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HomeRightBar;
