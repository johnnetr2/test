import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Button,
  Tab,
  Tabs,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon  from "../../../../../../assets/Icons/SearchIcon.svg";
import Heading from "../../../../../atom/Heading/Heading";
import BodyText from "../../../../../atom/BodyText/BodyText";
import FilledBtn from "../../../../../atom/FilledBtn/FilledBtn";
import HomeCard from "../../../../../molecule/HomeCard/HomeCard";
import OutlineField from "../../../../../atom/OutlineField/OutlineField";
import OutlineBox from "../../../../../atom/OutlineBox/OutlineBox";
import CoursesCard from "../../../../../molecule/CoursesCard/CoursesCard";
import {CategoryTable, LongMenu} from "../../../../../molecule/CategoryTable/CategoryTable";
import { Input } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  test: {
    border: "2px solid #212121",
  },
}));

const CategoryPagesFeedContent = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Container className={classes.root}>
      <Box>
        <Heading title="Kvantitativa jämförelser - KVA" />
        <BodyText title="Prövar din förmåga att göra kvantitativa jämförelser inom aritmetik, algebra, geometri, funktionslära och statistik." />
      </Box>
      <Box sx={{ marginBottom: "1rem", marginTop: "4rem" }}>
        <Typography variant="h5" component="h5">
          Övningsuppgifter för KVA
        </Typography>
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Box>
            <Typography
              variant="body2"
              style={{ textTransform: "uppercase", fontSize: "0.75rem" }}
            >
              Välj om du vill köra på tid
            </Typography>
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <OutlineField title="Tidspress" type="checkbox" />
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography
              variant="body2"
              style={{ textTransform: "uppercase", fontSize: "0.75rem" }}
            >
              Välj antal frågor
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginTop: "1rem" }}>
            <OutlineBox title="5" />
            <OutlineBox title="10" />
            <OutlineBox title="15" />
            <OutlineBox title="20" />
            <Box
              sx={{
                width: "10rem",
                height: "4rem",
                backgroundColor: "#fff",
                boxShadow: "1px 1px 8px #dfdfdf",
                borderRadius: ".25rem",
                marginLeft: ".25rem",
                marginRight: ".25rem",
                border: "1px solid #e1e1e1",
                display: "flex",
                flexWrap: "wrap",
                color: "#555555",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Ett delprov
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box sx={{ marginTop: "4rem" }}>
          <Box>
            <Typography
              variant="body2"
              style={{ textTransform: "uppercase", fontSize: "0.75rem" }}
            >
              Välj frågetyper
            </Typography>
          </Box>
          <Box sx={{ marginTop: "1rem", display: "flex" }}>
            <OutlineField title="Alla" type="checkbox" />
            <OutlineField title="Geometri" type="checkbox" />
            <OutlineField title="Funktionslära" type="checkbox" />
            <OutlineField title="Aritmetik" type="checkbox" />
          </Box>
          <Box sx={{ marginTop: "0.5rem", display: "flex" }}>
            <OutlineField title="Algebra" type="checkbox" />
            <OutlineField title="Statistik" type="checkbox" />
          </Box>
        </Box>
      </Box>
      <Box sx={{marginTop:'2rem'}} onClick={()=>{navigate('/question')}}>
        <FilledBtn title="Starta övningar" />
      </Box>
      <Box sx={{marginTop:'4rem'}}>
        <Typography variant="h5">Historia</Typography>
        <Box sx={{marginTop:'1rem'}}>
          <CategoryTable/>
        </Box>
      </Box>
    </Container>
  );
};

export default CategoryPagesFeedContent;
