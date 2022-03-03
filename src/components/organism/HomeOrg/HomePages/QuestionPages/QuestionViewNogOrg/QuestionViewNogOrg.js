import React from "react";
import { Radio, Box, Typography } from "@mui/material";
import BarChart from "../../../assets/Icons/BarChart.svg";
import Clock from "../../../assets/Icons/Clock.svg";
import ExerciseBtn from "../../atom/ExerciseBtn/ExerciseBtn";
import NogFigure from "../../../assets/Icons/NogFigure.svg";

const QuestionViewNogOrg = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70px",
          width: "100%",
          backgroundColor: "#F9F9F9",
          border: "1px solid #e1e1e1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #e1e1e1",
            width: "70px",
            height: "69px",
          }}
        >
          <ion-icon
            name="chevron-back-outline"
            style={{ color: "#99999" }}
          ></ion-icon>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          NOG
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #e1e1e1",
            width: "70px",
            height: "69px",
          }}
        >
          ?
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "space-between",
            width: "80%",
            height: "70px",
            backgroundColor: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={BarChart} alt="" />
            <Typography variant="body2" style={{ fontSize: "15px" }}>
              1 av 12
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={Clock} alt="" />
            <Typography variant="body2" style={{ fontSize: "15px" }}>
              12:00 min
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ width: "80%", height: "8px", backgroundColor: "#B4B4B4" }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "80%",
            height: "fit-content",
            backgroundColor: "#F9F9F9",
          }}
        >
          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
              width: "60%",
              height: "300px",
              backgroundColor: "#fff",
              border: "1px solid #E1E1E1",
            }}
          >
            <Typography variant="body2" style={{ fontSize: "15px" }}>
              Vilka koordinater har punkten A?
            </Typography>
            <img src={NogFigure} alt="" style={{ maxWidth: "50%" }} />
            <Typography variant="body2" style={{ fontSize: "15px" }}>
              (1) Triangelns area är 30 areaenheter.
            </Typography>
            <Typography variant="body2" style={{ fontSize: "15px" }}>
              (2) Sträckan AC är 13 längdenheter.
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "left",
              width: "60%",
              height: "350px",
              backgroundColor: "#fff",
              border: "1px solid #E1E1E1",
            }}
          >
            <Box sx={{ margin: "5%" }}>
              <Typography variant="body2" style={{ fontSize: "15px" }}>
                Tillräcklig information för lösningen erhålls
              </Typography>
            </Box>
            <Box
              sx={{
                justifyContent: "flex-start",
                alignItems: "center",
                height: "20%",
                display: "flex",
                border: "1px solid #e1e1e1",
              }}
            >
              <Radio />
              <Typography variant="body2" style={{ fontSize: "15px" }}>
                i (1) men ej i (2)
              </Typography>
            </Box>
            <Box
              sx={{
                justifyContent: "flex-start",
                alignItems: "center",
                height: "20%",
                display: "flex",
                border: "1px solid #e1e1e1",
              }}
            >
              <Radio />
              <Typography variant="body2" style={{ fontSize: "15px" }}>
                i (1) tillsammans med (2)
              </Typography>
            </Box>
            <Box
              sx={{
                justifyContent: "flex-start",
                alignItems: "center",
                height: "20%",
                display: "flex",
                border: "1px solid #e1e1e1",
              }}
            >
              <Radio />
              <Typography variant="body2" style={{ fontSize: "15px" }}>
                i (1) och (2) var för sig
              </Typography>
            </Box>
            <Box
              sx={{
                justifyContent: "flex-start",
                alignItems: "center",
                height: "20%",
                display: "flex",
                border: "1px solid #e1e1e1",
              }}
            >
              <Radio />
              <Typography variant="body2" style={{ fontSize: "15px" }}>
                ej genom de båda påståendena
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              margin: "2%",
              width: "60%",
            }}
          >
            <ExerciseBtn title="Nasta" />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default QuestionViewNogOrg;
