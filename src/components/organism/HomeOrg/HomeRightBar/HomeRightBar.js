import React from "react";
import { Container, makeStyles, Typography, Box } from "@material-ui/core";
import QuestionProgressBox from "../../../../components/molecule/QuestionProgressBox/QuestionProgressBox";
import GoalBox from "../../../../components/molecule/GoalBox/GoalBox";
import ImpDatesCard from "../../../../components/molecule/ImpDatesCard/ImpDatesCard";
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
        <Box style={{ marginTop: "10.5rem" }}>
          <Typography
            variant="h6"
            component="h6"
            style={{
              marginLeft: "1rem",
              marginTop: "2rem",
              marginBottom: "1.5rem",
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
              marginRight: "1rem",
              marginLeft: "1rem",
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
          <Box sx={{ width: "100%", marginLeft: "1rem", marginRight: "1rem" }}>
            <ImpDatesCard />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HomeRightBar;
