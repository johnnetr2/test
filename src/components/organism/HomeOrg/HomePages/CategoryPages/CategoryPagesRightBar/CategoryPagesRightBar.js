import React, { useEffect, useState } from "react";
import { Container, makeStyles, Typography, Box } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import BarChart from "../../../../../molecule/Charts/BarChart";
import LineChart from "../../../../../molecule/Charts/LineChart";
import {
  EndPoints,
  instance2,
} from "../../../../../../components/service/Route";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .css-5xe99f-MuiLinearProgress-bar1": {
      backgroundColor: "#27AE60",
    },
  },
}));

const CategoryPagesRightBar = (props) => {
  const classes = useStyles();
  const [progressData, setProgressData] = useState("")
  const [lastWeekTasks, setLastWeekTasks] = useState("")



  useEffect(() => {
    const URL = EndPoints.testHistory + props.item._id
    instance2.get(URL).then((response) => {
      console.log(response, " token this is the response of the category page rightbar api url");
      setProgressData(response.data, 'token response')
    });

    const LastWeekURL = EndPoints.lastWeekTasks + localStorage.getItem('userId')
    instance2.get(LastWeekURL).then((response)=>{
      console.log(response.data.totalData, "lastweek tasks")
      setLastWeekTasks(response.data.totalData)
    })
  }, []);

  return (
    <Container disableGutters maxWidth={false}>
      {console.log(progressData, "this si main")}
      <Box
        sx={{
          height: "fit-content",
          marginTop: "6rem",
        }}
      >
        <Box style={{ marginLeft: "1rem" }}>
          <Typography variant="h5">Statistik</Typography>
          <Typography variant="body2">
            Du har klarat {progressData.length} av 1000 uppgifter
          </Typography>
        </Box>
        <Box
          sx={{ marginTop: "2rem", marginLeft: "1rem", marginRight: "1rem" }}
        >
          <Box
            sx={{
              width: "100%",
              mr: 1,
              border: "1px solid #dddddd",
              boxShadow: "1px 1px 8px #dfdfdf",
              borderRadius: 5,
              padding: "2rem",
            }}
          >
            <LinearProgress
              className={classes.root}
              sx={{
                height: 12,
                borderRadius: "5rem",
                backgroundColor: "#e1e1e1",
              }}
              variant="determinate"
              value={progressData.length}
            />
          </Box>
        </Box>
        <Box style={{ marginTop: "2rem" }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "50%", marginLeft: "1rem" }}>
              <Typography variant="h5">{lastWeekTasks}</Typography>
              <Typography variant="body2">
                Gjorda uppgifter förra veckan
              </Typography>
            </Box>
            <Box sx={{ width: "50%", marginLeft: "1rem", marginRight: "1rem" }}>
              <Typography variant="h5">{progressData.length}</Typography>
              <Typography variant="body2">Gjorda uppgifter totalt</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              marginLeft: "1rem",
              marginRight: "1rem",
              marginTop: "3rem",
            }}
          >
            {/* <LineGraph /> */}
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
              <BarChart />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            marginLeft: "1rem",
            marginRight: "1rem",
            marginTop: "4rem",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h5">0.8</Typography>
          <Typography variant="body2">
            Prognostiserad normerad poäng KVA
          </Typography>
        </Box>
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
    </Container>
  );
};

export default CategoryPagesRightBar;
