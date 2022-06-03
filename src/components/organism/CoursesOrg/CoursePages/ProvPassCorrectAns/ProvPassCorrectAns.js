import React, { useEffect, useState } from "react";
import RightArrow from "../../../../../assets/Icons/RightArrow.svg";
import { styled } from "@mui/material/styles";
import LeftArrow from "../../../../../assets/Icons/LeftArrow.svg";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BarChart from "../../../../../assets/Icons/BarChart.svg";
import Clock from "../../../../../assets/Icons/Clock.svg";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Checkbox,
  AppBar,
  Paper,
  Box,
  CssBaseline,
  Toolbar,
  Container,
} from "@material-ui/core";

const ProvPassCorrectAns = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
      <CssBaseline />
      <AppBar
        color="#fff"
        className={classes.appbar}
        style={{ boxShadow: "none" }}
        position="absolute"
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "8vh",
              width: "2.3rem",
              display: "flex",
              alignItems: "center",
              borderRight: "1px solid #E1E1E1",
              cursor: "pointer",
            }}
          >
            <img style={{ height: "1.1rem" }} src={LeftArrow} alt="" />
          </Box>
          <Typography variant="body1" className={classes.center_align}>
            Rättad överblick
          </Typography>
          <HelpOutlineIcon sx={{ width: 100 }} />
        </Toolbar>
      </AppBar>

      <Container
        maxWidth={false}
        disableGutters
        style={{ backgroundColor: "#fff", height: "fit-content" }}
      >
        <Container
          disableGutters
          padding={0}
          maxWidth={"md"}
          style={{ backgroundColor: "#fff" }}
        >
          <Box mt={8} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box mt={2} width={100} sx={{ color: "#222" }}>
              <img src={BarChart} alt="" />1 av 10
            </Box>
            <Box mt={2} sx={{ color: "#222" }}>
              <img src={Clock} alt="" />
              20:00 min
            </Box>
          </Box>
          <Box
            mt={2}
            sx={{
              backgroundColor: "#b4b4b4",
              height: "8px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              mt={2}
              sx={{
                backgroundColor: "#6fcf97",
                height: "8px",
                display: "flex",
                flexDirection: "row",
              }}
            ></Box>
          </Box>
        </Container>
        <Container
          maxWidth="md"
          style={{
            backgroundColor: "#f9f9f9",
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            mt={3}
            sx={{ display: "flex", width: 600, flexDirection: "column" }}
          >
            <Typography variant="h6" component="h6">
              Provpass 1 Kvantitativ del{" "}
            </Typography>
            <Typography variant="body2" component="body2">
              Har kan du titta närmre på din resultat för varje uppgift
            </Typography>
          </Box>
          <Box
            mt={3}
            padding={6}
            sx={{
              backgroundColor: "#fff",
              width: 615,
              height: "min-content",
              overflow: "auto",
              display: "flex",
              justifyContent: "center",
              border: "1px solid #e1e1e1",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "32rem",
                  height: "4rem",
                  marginBottom: "1rem",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "32rem",
                  height: "4rem",
                  marginBottom: "1rem",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "32rem",
                  height: "4rem",
                  marginBottom: "1rem",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "32rem",
                  height: "4rem",
                  marginBottom: "1rem",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "32rem",
                  height: "4rem",
                  marginBottom: "1rem",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "32rem",
                  height: "4rem",
                  marginBottom: "1rem",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "32rem",
                  height: "4rem",
                  marginBottom: "1rem",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "32rem",
                  height: "4rem",
                  marginBottom: "1rem",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "32rem",
                  height: "4rem",
                  marginBottom: "1rem",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #e1e1e1",
                    width: "15rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    <Typography
                      variant="body2"
                      style={{ textTransform: "uppercase" }}
                    >
                      Uppgift 1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textTransform: "uppercase",
                        marginRight: "1rem",
                      }}
                    >
                      Tid: 04:51
                    </Typography>
                    <img
                      style={{ width: ".65rem", marginRight: ".75rem" }}
                      src={RightArrow}
                      alt=""
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
    </div>
  );
};

export default ProvPassCorrectAns;
