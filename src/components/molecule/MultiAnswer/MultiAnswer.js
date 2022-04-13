import React from "react";
import { Typography, Box, FormControlLabel, Radio } from "@material-ui/core";
import Increment from "../../../assets/Icons/Increment.svg";
import Decrement from "../../../assets/Icons/Decrement.svg";

const MultiAnswer = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            style={{
              border: "1px solid #e1e1e1",
              padding: "1rem",
              width: 580
            }}
          >
            <FormControlLabel
              style={{ marginLeft: ".5rem" }}
              value="female"
              control={<Radio />}
              label="1998"
            />
          </Box>
          <Box
            style={{
              border: "1px solid #e1e1e1",
              padding: "1rem",
              width: 580
            }}
          >
            <FormControlLabel
              style={{ marginLeft: ".5rem" }}
              value="female"
              control={<Radio />}
              label="1998"
            />
          </Box>
          <Box
            style={{
              border: "1px solid #e1e1e1",
              padding: "1rem",
              width: 580
            }}
          >
            <FormControlLabel
              style={{ marginLeft: ".5rem" }}
              value="female"
              control={<Radio />}
              label="1998"
            />
          </Box>
          <Box
            style={{
              border: "1px solid #e1e1e1",
              padding: "1rem",
              width: 580
            }}
          >
            <FormControlLabel
              style={{ marginLeft: ".5rem" }}
              value="female"
              control={<Radio />}
              label="1998"
            />
          </Box>
        </Box>

        <Box mt={2} ml={5}></Box>
      </Box>
      <Box style={{ border: "1px solid #e1e1e1", padding: "2rem", width: 580 }}>
        <Box sx={{ width: 500, display: "flex" }}>
          <Box>
            <Typography
              variant="h5"
              component="h5"
              style={{
                fontSize: ".75rem",
                fontWeight: "600",
                marginTop: 20,
              }}
            >
              Förklaring:
            </Typography>
            <Typography
              variant="body1"
              component="div"
              style={{
                fontSize: ".75rem",
                fontWeight: "500",
                marginTop: 10,
                width: "30rem",
              }}
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              deserunt, nam optio nesciunt amet dicta non blanditiis eum.
              Veritatis est culpa porro ullam quod voluptatibus explicabo
              assumenda sit similique?{" "}
            </Typography>
          </Box>
          <Box
            mt={2}
            style={{
              backgroundColor: "blue",
              marginLeft: "15rem",
              marginTop: "2rem",
            }}
          >
            <img style={{ height: 110 }} src="" alt="" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            height: 60,
          }}
        >
          <Typography
            variant="body1"
            component="body1"
            style={{
              fontSize: "0.7rem",
              display: "flex",
              justifySelf: "flex-end",
            }}
          >
            Berätta för oss om du var nöjd med lösningen
          </Typography>
          <Box ml={1} mr={0.5}>
            <img src={Increment} alt="" />
          </Box>
          <Box mr={1}>
            <img src={Decrement} alt="" />
          </Box>
        </Box>
        
      </Box>
    </>
  );
};

export default MultiAnswer;
