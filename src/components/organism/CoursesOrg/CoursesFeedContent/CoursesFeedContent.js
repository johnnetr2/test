import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SearchIcon from "../../../../assets/Icons/SearchIcon.svg";
import Heading from "../../../atom/Heading/Heading";
import BodyText from "../../../atom/BodyText/BodyText";
import CoursesCard from "../../../molecule/CoursesCard/CoursesCard";
import { Input } from 'reactstrap'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  test: {
    border: "2px solid #212121",
  },
}));

const CoursesFeedContent = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box>
        <Heading title="Simulera Prov" />
        <BodyText title="Gör prov från tidigare år eller välj att slumpa ett helt prov med uppgifter från gamla prov du inte stött på tidigare. " />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            style={{
              maxWidth: "30rem",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "3rem",
              marginBottom: "3rem",
              marginRight: "2rem",
            }}
          >
            <Link
              to="/all"
              style={{ color: "#252525", textDecoration: "none" }}
            >
              Alla
            </Link>
            <Link
              to="/tidigareHögskoleprov"
              style={{
                color: "#252525",
                textDecoration: "none",
                marginLeft: "2rem",
              }}
            >
              Tidigare högskoleprov
            </Link>
            <Link
              to="slumpmässigtProv"
              style={{
                color: "#252525",
                textDecoration: "none",
                marginLeft: "2rem",
              }}
            >
              Slumpmässigt prov
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #e5e5e5",
              borderRadius: ".5rem",
              width: "15rem",
              padding: ".5rem",
            }}
          >
            <Input
              type="search"
              placeholder="Sök prov mellan 2015-2021"
              style={{ border: "none" }}
            />
            <Box>
              <img style={{ marginLeft: ".5rem" }} src={SearchIcon} alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography variant="h5" component="h5">
          Tidigare högskoleprov
        </Typography>
        <Typography
          variant="body2"
          component="body2"
          style={{ fontSize: "0.75rem", lineHeight: "1.5" }}
        >
          Välj ett specifikt prov och gör samma frågor som kom på just det
          provet.
        </Typography>
      </Box>
      <Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <CoursesCard />
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <CoursesCard />
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <CoursesCard />
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <CoursesCard />
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <CoursesCard />
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <CoursesCard />
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <CoursesCard />
        </Box>
      </Box>
      <Box
        sx={{
          marginBottom: "3rem",
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          style={{ backgroundColor: "#0A1596", color: "#fff" }}
        >
          Fler prov
        </Button>
      </Box>
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography variant="h5" component="h5">
          Slumpmässigt prov
        </Typography>
        <Typography
          variant="body2"
          component="body2"
          style={{ fontSize: "0.75rem", lineHeight: "1.5" }}
        >
          Genererar ett prov endast med frågor du inte tidigare stött på i
          övningsdelen.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "1rem" }}>
        <CoursesCard />
      </Box>
    </Container>
  );
};

export default CoursesFeedContent;
