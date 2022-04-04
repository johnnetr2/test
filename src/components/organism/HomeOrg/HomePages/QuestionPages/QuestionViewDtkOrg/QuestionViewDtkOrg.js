import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BarChart from "../../../../../../assets/Icons/BarChart.svg";
import LeftArrow from "../../../../../../assets/Icons/LeftArrow.svg";
import RightArrow from "../../../../../../assets/Icons/RightArrow.svg";
import DtkImg from "../../../../../../assets/Imgs/DtkImg.png";
import Clock from "../../../../../../assets/Icons/Clock.svg";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Paper,
  Box,
  CssBaseline,
  Grid,
  Radio,
  FormControlLabel,
  Container,
} from "@material-ui/core";
import ExerciseBtn from "../../../../../atom/ExerciseBtn/ExerciseBtn";

const QuestionViewDTKOrg = (props) => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const question = props.question



  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: "100vh",
      backgroundColor: "#fff",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    header: {
      minHeight: "10vh",
      backgroundColor: "#fff",
      border: "1px solid #b4b4b4",
    },
    appbar: {
      border: "1px solid #E1E1E1",
      backgroundColor: "#f9f9f9",
    },
    size: {
      width: 15,
      height: 15,
    },
    center_align: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    color_progress: {
      backgroundColor: "#B4B4B4",
      color: "#6FCF97",
    },
    content: {
      minHeight: "90vh",
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "90vw",
    },
  }));

  const classes = useStyles(10);

  return (
    <div>
      {console.log(props.question, 'propssssssssssssssss')}
      <CssBaseline />

      <Container
        maxWidth="lg"
        style={{ backgroundColor: "#fff", height: "fit-content" }}
      >

        <Container
          maxWidth="md"
          style={{
            marginTop: 0,
            backgroundColor: "#f9f9f9",
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            mt={5}
            paddingX={6}
            paddingY={2}
            sx={{
              backgroundColor: "#fff",
              width: 600,
              height: 373,
              border: '1px solid #e1e1e1'
            }}
          >
            <Typography
              variant="subtitle1"
              style={{
                textTransform: "uppercase",
                fontSize: ".7rem",
                fontWeight: "500",
              }}
            >
              {question.questions.length + ' uppgifter:'}
            </Typography>
            <Typography variant="h6" component="h6">
              {question.title}
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: ".7rem", fontWeight: "500" }}
            >
              { }
            </Typography>
            <Box>
              <img src={DtkImg} style={{ width: '100%' }} alt="" />
            </Box>
          </Box>
          {question.questions && question.questions.map((item, index) => {
            if (index == selectedIndex) {
              return <Box>
                <Box
                  paddingX={4}
                  mt={5}
                  sx={{
                    backgroundColor: "#fff",
                    width: 600,
                    height: 120,
                    border: "1px solid #e1e1e1",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <Typography variant="body1" component="body1">
                      {selectedIndex + 1 + '/' + question.questions.length}
                    </Typography>
                    <img onClick={() => setSelectedIndex(selectedIndex + 1) } src={RightArrow} style={{ cursor: 'pointer' }} className={classes.size} alt="" />
                  </Box>
                  <Typography
                    variant="h6"
                    component="h6"
                    style={{ fontSize: ".75rem", fontWeight: "600", marginTop: 20 }}
                  >
                    {/* {console.log(item, 'this is item')} */}
                    {item.question.questionStatement}
                  </Typography>
                </Box>
                {item.options.map(option => {
                  return <Box
                    padding={1}
                    sx={{
                      backgroundColor: "#fff",
                      width: 600,
                      border: "1px solid #e1e1e1",
                    }}
                  >
                    <FormControlLabel value="female" control={<Radio color="primary" />} label={option.value} />
                  </Box>
                })}
              </Box>
            }
          })}

          {/* <Box
            padding={1}
            sx={{
              backgroundColor: "#fff",
              width: 600,
              border: "1px solid #e1e1e1",
            }}
          >
            <FormControlLabel value="female" control={<Radio />} label="2000" />
          </Box> */}
          {/* <Box
            padding={1}
            sx={{
              backgroundColor: "#fff",
              width: 600,
              border: "1px solid #e1e1e1",
            }}
          >
            <FormControlLabel value="female" control={<Radio />} label="2002" />
          </Box> */}
          {/* <Box
            padding={1}
            sx={{
              backgroundColor: "#fff",
              width: 600,
              border: "1px solid #e1e1e1",
            }}
          >
            <FormControlLabel value="female" control={<Radio />} label="2004" /> */}
          {/* </Box> */}
          {/* <Box padding={1} m={2} sx={{ width: 615 }}>
            <Link to="/resultquesviewdtkorg">
              <ExerciseBtn title="Nästa" />
            </Link>
          </Box> */}
        </Container>
      </Container>
    </div>
  );
};

export default QuestionViewDTKOrg;
