import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  customTooltip: {
    backgroundColor: "#252525",
    color: "white",
    width: "190px",
    height: "auto",
    fontWeight: "400",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    gap: "10px",
    padding: "12px 24px",
    borderRadius: '10px',
    boxShadow: ' 0px 2px 4px rgba(37, 37, 37, 0.05)',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '20px',
    color: '#E1E1E1',
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
