import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import { EndPoints, instance2 } from "../../service/Route";
import React, { useMemo, useState } from "react";

import CustomizedTooltip from "../../atom/Tooltip/Tooltip";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import informationIcon from "../../../assets/Imgs/informationIcon.png";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { appColors } from "../../../utils/commonService";
import PaymentModal from "../../organism/PayWallOrg/PaymentModal";

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
  const isPremium = JSON.parse(localStorage.getItem("isPremium"));
  const [showPaywallPopup, setShowPaywallPopup] = useState(false);

  const isFirstQuiz = useMemo(() => props.latestExam, [props.latestExam])

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
    if (isFirstQuiz || isPremium) {
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
    }
  };

  function Dropdown(prop) {
    return (
      <div
        className="result_popup"
        onClick={() => prop.onClick()}
        style={{ marginTop: isPremium ? "70px" : "35px" }}
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
        <PaymentModal
          open={showPaywallPopup}
          handleClose={() => {
            setShowPaywallPopup(false);
          }
          }
        />
        <Box
          sx={{ paddingLeft: "1rem", paddingBottom: "1rem" }}
          onClick={() => {
            if (isFirstQuiz || isPremium) {
              if (
                props?.quizzes?.simuleraQuizResult.length < 4 ||
                !props?.quizzes?.simuleraQuizResult
              ) {
                navigate("/testInformation", {
                  state: {
                    id: props.id,
                    session: props?.item,
                    provpass: props?.quizzes,
                    provpassOrder: props?.provpassOrder,
                  },
                });
              } else {
                navigate("/provresultat", {
                  state: {
                    seasonId: props?.quizzes?.simuleraSeason?._id,
                    simuleraQuizResultId: props?.quizzes?._id,
                    quizId: props?.quizzes?._id,
                    provpassOrder: props?.provpassOrder,
                  },
                });
              }
            } else {
              setShowPaywallPopup(true);
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
              {!(isFirstQuiz || isPremium) ? (
                <Box
                  sx={{
                    borderRadius: "0px 4px 0px 4px",
                    textAlign: "center",
                    width: "100px",
                    height: "23px",
                    backgroundColor: "#FFE482",
                    color: appColors.blackColor,
                  }}
                >
                  Premium
                </Box>
              ) : (
                <div style={{ display: "flex" }}>
                  {!isPremium && <span style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: '0px 10px',
                    borderRadius: "0px 4px 0px 4px",
                    textAlign: "center",
                    width: "100px",
                    // height: "23px",
                    backgroundColor: "#F2F2F2",
                    color: appColors.blackColor,
                  }}>
                    Gratis
                  </span>}
                  {(isPremium) && <MoreVertIcon
                    style={{
                      color: "grey",
                      marginRight: "0.5px",
                      marginTop: "2px",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowPopup(!showPopup);
                    }}
                  />}
                </div>
              )}

              {(showPopup && isPremium) && (
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
              if (isFirstQuiz || isPremium) {
                if (
                  props?.quizzes?.simuleraQuizResult &&
                  props?.quizzes?.simuleraQuizResult?.length < 4
                ) {
                  navigate("/testInformation", {
                    state: {
                      id: props.id,
                      session: props?.item,
                      provpass: props?.quizzes,
                      provpassOrder: props?.provpassOrder,
                    },
                  });
                } else {
                  navigate("/provresultat", {
                    state: {
                      seasonId: props?.quizzes?.simuleraSeason?._id,
                      simuleraQuizResultId: props?.quizzes?._id,

                    },
                  });
                }
              } else {
                setShowPaywallPopup(true);
              }
            }}
          >
            <Box
              onClick={() => {
                if (isFirstQuiz || isPremium) {
                  if (props?.quizzes?.simuleraQuizResult.length < 4 || !props?.quizzes?.simuleraQuizResult) {
                    navigate("/testInformation", {
                      state: {
                        id: props.id,
                        session: props?.item,
                        provpass: props?.quizzes,
                        provpassOrder: props?.provpassOrder,

                      },
                    });
                  } else {
                    navigate("/provresultat", {
                      state: {
                        seasonId: props?.quizzes?.simuleraSeason?._id,
                        simuleraQuizResultId: props?.quizzes?._id,
                      },
                    });
                  }
                } else {
                  setShowPaywallPopup(true);
                }
              }
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
                  {props?.provpassOrder?.map(year => year.split("-")[2].replace(/[^0-9]/g, "")).map((item, index) => {
                    return (
                      <Chip
                        label={"Provpass " + item}
                        style={{
                          backgroundColor:
                            props.quizzes &&
                              (index + 1) <= props?.quizzes.simuleraQuizResult?.length
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
                  textAlign: "center",
                  marginRight: isPremium ? "1.3rem" : "6rem",
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
                  {(isFirstQuiz || isPremium) && (
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
                  )}
                </Box>
                {isFirstQuiz && <MoreVertIcon
                  style={{
                    color: "grey",
                    marginRight: "0.5px",
                    marginTop: "2px",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowPopup(!showPopup);
                  }}
                />}
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
          {(isFirstQuiz && !isPremium) && <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {(showPopup && !isPremium) && (
              <Dropdown
                style={{
                  backgroundColor: "blue",
                }}
                onClick={() => restartQuiz()}
              />
            )}
            <MoreVertIcon
              style={{
                color: "grey",
                marginRight: "0.5px",
                marginTop: "2px",

              }}
              onClick={(e) => {
                e.stopPropagation();
                setShowPopup(!showPopup);
              }}
            />
          </div>}
        </Box>
      </Box>
    </Container>
  );
};

export default CoursesCard;
