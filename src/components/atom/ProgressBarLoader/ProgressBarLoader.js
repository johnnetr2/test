import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";

const ProgressBarLoader = () => {

  return (
    <Box sx={{ 
      color: "#e1e1e1", 
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: ".5rem"
    }}>
      <Box sx={{ width: "100%", height: "1.25rem", marginRight: 1}} >
        <LinearProgress
          sx= {{ height: "1.25rem", borderRadius: "5rem" }}
          color="inherit"     
        />
      </Box>
      <Box sx={{ height: "1.25rem", width: "1.5rem"}} >
        <Typography variant="body2" color="text.secondary">--%</Typography>
      </Box>
    </Box>
  );
};

export default ProgressBarLoader;
