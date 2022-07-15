import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import {
  Container,
  Box,
  Typography,
  Stack,
  Chip,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { EndPoints, instance2 } from "../../service/Route";
import Image70 from '../../../assets/Imgs/image70.png'
import useWindowDimensions from "../WindowDimensions/dimension";

const useStyles = makeStyles((theme) => ({
  global: {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },
  root: {
    paddingRight: theme.spacing(0),
    paddingLeft: theme.spacing(0),
  },
  box: {
    paddingRight: theme.spacing(0),
    paddingLeft: theme.spacing(0),
  },
}));

// const MenuIcon = (props) => {
//   const options = "STARTA OM";
//   const ITEM_HEIGHT = 48;
//   const [anchorEl, setAnchorEl] = useState(null);

//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <IconButton
//         aria-label="more"
//         id="long-button"
//         aria-controls={open ? "long-menu" : undefined}
//         aria-expanded={open ? "true" : undefined}
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         <MoreVertIcon />
//       </IconButton>
//       <Menu
//         id="long-menu"
//         MenuListProps={{
//           "aria-labelledby": "long-button",
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           style: {
//             maxHeight: ITEM_HEIGHT * 4.5,
//             width: "12ch",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           },
//         }}
//       >
//         <MenuItem
//           onClick={() => props.onClick()}
//         >{options}</MenuItem>
//       </Menu>
//     </div>
//   );
// };

const CoursesCard = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false)


  const percentage = () => {
    switch (props?.quizzes?.length) {
      case 1:
        return 25;
      case 2:
        return 50;
      case 3:
        return 75;
      case 4:
        return 100;
      default:
        return 0;
    }
  };

  const restartQuiz = () => {
    const URL = EndPoints.createNewResultForSeason;
    const data = {
      simuleraSeason: props.item._id,
      user: localStorage.getItem("userId"),
    };
    console.log(data);
    instance2.post(URL, data).then((response) => {
      console.log(response.data);
      navigate("/provpassinfo", {
        state: {
          id: props.id,
          session: props.item,
          provpass: props?.quizzes
        },
      })
    });
  };

  function Dropdown(props) {
    const { height, width } = useWindowDimensions();

    return (
      <div className='result_popup'
        onClick={() => props.onClick()}
        style={{ marginRight: width > 900 ? '42.8%' : '2.3%', marginTop: width > 900 ? '2%' : '4%', cursor: 'pointer', color: '#505050' }}
      >STARTA OM
        <div className='popup' ></div>
      </div>
    )
  }

  return (
    <Container style={{ marginTop: "1.3rem" }} disableGutters maxWidth={false}>
      <Box
        className={classes.box}
        sx={{
          border: "1px solid #e1e1e1",
          borderRadius: ".25rem",
          boxShadow: "0px 5px 10px #f2f2f2",
          backgroundColor: "transparent",
          cursor: "pointer",
          maxWidth: "48rem",
        }}
      >
        <Box
          sx={{ margin: "0.25rem", paddingLeft: "1rem", paddingBottom: "1rem" }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {/* <MenuIcon onClick={() => restartQuiz()} /> */}
            <MoreVertIcon
              style={{
                color: 'grey'
              }} onClick={() => setShowPopup(!showPopup)}
            />

            {showPopup && <Dropdown onClick={() => restartQuiz()} />}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              onClick={() =>
                navigate("/provpassinfo", {
                  state: {
                    id: props.id,
                    session: props.item,
                    provpass: props?.quizzes
                  },
                })
              }
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  height: "6.5rem",
                }}
              >
                <Typography variant="h5" component="h5">
                  {" "}
                  {props?.item?.title}{" "}
                </Typography>
                <Typography variant="body2" component="body2">
                  {" "}
                  {props?.item?.month}{" "}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.1rem" }}
                >
                  {[1, 2, 3, 4].map((item) => {
                    return (
                      <Chip
                        label={"Provpass " + item}
                        style={{
                          backgroundColor: props.quizzes &&
                            item <= props?.quizzes.simuleraQuizResult?.length
                            ? "#6FCF97"
                            : "#E1E1E1",
                          color: "#505050",
                        }}
                        size="small"
                      />
                    );
                  })}
                  <Typography variant="body2" component="body2">
                    {percentage()}%
                  </Typography>
                </Stack>
              </Box>
            </Box>
            {
              props.quizzes === undefined && props?.quizzes?.simuleraQuizResult.length > 3 ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginRight: "1.5rem",
                    // backgroundColor: 'blue'
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h4" component="h4">
                      {" "}
                      {props.progress}{" "}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="body2"
                      style={{ marginLeft: ".5rem", marginTop: ".5rem" }}
                    >
                      {" "}
                      {"Poäng"}{" "}
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      variant="outlined"
                      style={{
                        width: "10rem",
                        textTransform: "capitalize",
                        border: "2px solid #0A1596",
                        color: "#0A1596",
                      }}
                      onClick={() => restartQuiz()}
                    >
                      Gör om prov
                    </Button>
                  </Box>
                </Box>

              ) :
                (
                  <Box
                    sx={{
                      display: "flex",
                      // alignItems: "center",
                      flexDirection: "column",
                      marginRight: '6rem',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        style={{
                          display: 'flex', fontSize: '3rem', color: '#505050',
                          marginBottom: '1rem',
                        }} >
                        -
                      </Typography>
                      <Typography
                        variant="body2"
                        component="body2"
                        style={{ marginLeft: ".5rem", marginTop: ".5rem", color: '#505050', }}
                      >
                        {" "}
                        {'Poäng'}{" "}
                      </Typography>
                      <img src={Image70} style={{ marginLeft: '1.5rem', marginBottom: '1rem' }} />
                    </Box>
                  </Box>
                )
            }
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CoursesCard;
