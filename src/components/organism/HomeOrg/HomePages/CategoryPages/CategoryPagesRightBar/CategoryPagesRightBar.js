import React from "react";
import { Container, makeStyles, Typography, Box } from "@material-ui/core";
import DevelopmentGraph from "../../../../../molecule/DevelopmentGraph/DevelopmentGraph";
import LineGraph from "../../../../../molecule/LineGraph/LineGraph";
import CourseProgress from '../../../../../molecule/CourseProgress/CourseProgress'

const useStyles = makeStyles((theme) => ({
  root: {
    backgrounColor: "#fff",
  },
}));

const CategoryPagesRightBar = () => {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth={false}>
      <Box
        sx={{
          height: "fit-content",
          marginTop: "6rem",
        }}
      >
        <Box style={{marginLeft:'1rem'}}>
          <Typography variant="h5">Statistik</Typography>
          <Typography variant="body2">
            Du har klarat 830 av 1000 uppgifter
          </Typography>
        </Box>
        <Box sx={{marginTop:'2rem', marginLeft:'1rem', marginRight:'1rem'}}>
          <CourseProgress />
        </Box>
        <Box style={{ marginTop: "2rem" }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "50%", marginLeft: "1rem" }}>
              <Typography variant="h5">4</Typography>
              <Typography variant="body2">
                Gjorda uppgifter förra veckan
              </Typography>
            </Box>
            <Box sx={{ width: "50%", marginLeft: "1rem", marginRight: "1rem" }}>
              <Typography variant="h5">830</Typography>
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
            <LineGraph />
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
            <DevelopmentGraph />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CategoryPagesRightBar;
