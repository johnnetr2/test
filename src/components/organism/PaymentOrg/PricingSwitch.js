import styled from "@mui/material/styles/styled";
import {
  Switch
} from "@mui/material";

const PricingSwitch = styled(Switch)(({ theme }) => ({
    width: 76,
    height: 40,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 76,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(8px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 5,
      "&.Mui-checked": {
        transform: "translateX(35px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: theme.palette.mode === "dark" ? "#B5B5B5" : "#5263EB",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 28,
      height: 28,
      borderRadius: 100,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 20,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  export default PricingSwitch;