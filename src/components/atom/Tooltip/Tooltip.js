import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  customTooltip: {
    backgroundColor: "#252525",
    color: "white",
    width: "auto",
    height: "auto",
    fontWeight: "400",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    gap: "10px",
    padding: "12px 12px"
  },
  customArrow: {
    color: "#252525",
  },
}));

const CustomizedTooltip = (props) => {
  const classes = useStyles();
  return (
    <Tooltip classes={{ tooltip: classes.customTooltip, arrow: classes.customArrow }} title={props.title} placement={props.placement} arrow>
      {props.children}
    </Tooltip>
  );
};

export default CustomizedTooltip;
