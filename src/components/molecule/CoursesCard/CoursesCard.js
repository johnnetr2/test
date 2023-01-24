import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import { EndPoints, instance2 } from "../../service/Route";
import React, { useState } from "react";

import CustomizedTooltip from "../../atom/Tooltip/Tooltip";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import informationIcon from "../../../assets/Imgs/informationIcon.png";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { appColors } from "../../service/commonService";

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

const CoursesCard = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const isInTrial = JSON.parse(localStorage.getItem("isInTrial"))
  const isPremium = JSON.parse(localStorage.getItem("isPremium"))

  const percentage = () => {
    switch (props?.quizzes?.simuleraQuizResult?.length) {
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
    instance2.post(URL, data).then((response) => {
      navigate("/testInformation", {
        state: {
          id: props.id,
          session: props?.item,
          provpass: response.data.simuleraSeasonResult,
          provpassOrder: props?.provpassOrder ?? null,
        },
      });
    });
  };

  function Dropdown(prop) {
    return (
      <div
        className="result_popup"
        onClick={() => prop.onClick()}
        style={{ marginTop: "70px" }}
      >
        STARTA OM
        <div className="popup"></div>
      </div>
    );
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
          maxWidth: { xs: "unset", lg: "48rem" },
        }}
      >
        <Box
          sx={{ paddingLeft: "1rem", paddingBottom: "1rem" }}
          onClick={() => {
            if (
              props?.quizzes?.simuleraQuizResult.length < 4 ||
              !props?.quizzes?.simuleraQuizResult
            ) {
              navigate("/testInformation", {
                state: {
                  id: props.id,
                  session: props?.item,
                  provpass: props?.quizzes,
                  provpassOrder: props.provpassOrder,
                },
              });
            } else {
              navigate("/provresultat", {
                state: {
                  seasonId: props?.quizzes?.simuleraSeason?._id,
                  simuleraQuizResultId: props?.quizzes?._id,
                  quizId: props?.quizzes?._id,
                },
              });
            }
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                width: "1.1rem",
              }}
            >
              {!(isPremium || isInTrial) && percentage() === 100 ?
                (
                  <Box sx={{
                    borderRadius: '0px 4px 0px 0px',
                    textAlign: 'center', width: '63px', height: '23px', backgroundColor: '#FFE482', color: appColors.blackColor
                  }}>
                    LÅST
                  </Box>

                ) : (
                  <MoreVertIcon
                    style={{
                      color: "grey",
                      marginRight: "0.5px",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowPopup(!showPopup);
                    }}
                  />
                )}

              {showPopup && (
                <Dropdown
                  style={{
                    backgroundColor: "blue",
                  }}
                  onClick={() => restartQuiz()}
                />
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
            onClick={() => {
              console.log("this");
              if (props?.quizzes.simuleraQuizResult.length < 4) {
                navigate("/testInformation", {
                  state: {
                    id: props.id,
                    session: props?.item,
                    provpass: props?.quizzes,
                  },
                });
              } else {
                navigate("/provresultat", {
                  state: {
                    seasonId: props?.quizzes.simuleraSeason._id,
                    simuleraQuizResultId: props?.quizzes._id,
                  },
                });
              }
            }}
          >
            <Box>
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
                          backgroundColor:
                            props.quizzes &&
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
            {props.quizzes !== undefined &&
              props?.quizzes?.simuleraQuizResult.length > 3 ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign: 'center',
                  marginRight: (isPremium || isInTrial) ? "1.3rem" : "6rem",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h4" component="h4">
                    {" "}
                    {props?.progress.totalAnswer
                      ? (
                        (props?.progress?.totalAnswer /
                          props?.progress?.totalQuestions) *
                        2
                      )
                        .toFixed(1)
                        .replace(/\.0+$/, "")
                      : 0}
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
                  {(isPremium || isInTrial) &&
                    <Button
                      variant="outlined"
                      style={{
                        width: "12rem",
                        textTransform: "capitalize",
                        border: `2px solid ${appColors.blueColor}`,
                        color: appColors.blueColor,
                      }}
                      onClick={() => restartQuiz()}
                    >
                      Gör om prov
                    </Button>
                  }
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  // alignItems: "center",
                  flexDirection: "column",
                  marginRight: "6rem",
                  marginBottom: "1.5rem",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    style={{
                      display: "flex",
                      fontSize: "3rem",
                      color: "#505050",
                      marginBottom: "1rem",
                    }}
                  >
                    -
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "3.5rem",
                    }}
                  >
                    <CustomizedTooltip
                      title="Du behöver göra klart hela provet för att få poängprognos"
                      placement="top"
                    >
                      <img
                        src={informationIcon}
                        style={{
                          display: "flex",
                          height: "14px",
                          width: "14px",
                          alignSelf: "flex-end",
                        }}
                        alt="info"
                      />
                    </CustomizedTooltip>
                    <Typography
                      variant="body2"
                      component="body2"
                      style={{
                        marginLeft: ".5rem",
                        marginTop: ".5rem",
                        color: "#505050",
                      }}
                    >
                      {"Poäng"}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CoursesCard;
