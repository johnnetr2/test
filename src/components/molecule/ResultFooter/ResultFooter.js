import React from "react";
import { Box, Typography} from "@material-ui/core";
import RightArrow from '../../../assets/Icons/RightArrow.svg'
import LeftArrow from '../../../assets/Icons/LeftArrow.svg'

const ResultFooter = () => {
  return (
    <div>
      <Box
        padding={1}
        mt={2}
        sx={{ width: 615, display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <img src={LeftArrow} alt="" />{" "}
          <Typography
            variant="h6"
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              marginLeft: "0.5rem",
            }}
          >
            Föregående
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            style={{ fontSize: "0.75rem", textTransform: "uppercase" }}
          >
            Resultatsida
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
            variant="h6"
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              marginRight: "0.5rem",
            }}
          >
            Nästa
          </Typography>
          <img src={RightArrow} alt="" />
        </Box>
      </Box>
    </div>
  );
};

export default ResultFooter;
