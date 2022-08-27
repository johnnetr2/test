import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  customTooltip: {
    backgroundColor: "#252525",
    color: "#E1E1E1",
    padding: "1rem",
    fontWeight: "400",
    fontSize: ".825rem",
    maxWidth: "12rem",
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
