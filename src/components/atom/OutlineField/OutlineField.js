import React from "react";
import { Box, label } from "@mui/material";
import Checkbox from "@material-ui/core/Checkbox";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { appColors } from "../../service/commonService";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: 3,
    width: 24,
    height: 24,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: `2px auto ${appColors.blueColor}`,
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: appColors.blueColor,
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 24,
      height: 24,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: appColors.hoverBlue,
    },
  },
});

const Outline_Field = (props) => {
  function StyledCheckbox(props) {
    const classes = useStyles();

    return (
      <Checkbox
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={
          <span className={clsx(classes.icon, classes.checkedIcon)} />
        }
        icon={<span className={classes.icon} />}
        inputProps={{ "aria-label": "decorative checkbox" }}
        {...props}
      />
    );
  }

  return (
    <div onClick={(e) => props.onClickCheck(e)}>
      <Box
        sx={{
          width: "fit-content",
          height: 60,
          backgroundColor: "#fff",
          boxShadow: "1px 1px 8px #dfdfdf",
          borderRadius: ".25rem",
          marginLeft: ".25rem",
          marginRight: ".25rem",
          border: props.checked ? `0.5px solid ${appColors.blueColor}` : "1px solid #e1e1e1",
          display: "flex",
          flexWrap: "wrap",
          marginBottom: ".75rem",
          color: "#555555",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          paddingRight: "1.2rem",
          paddingLeft: "1.2rem",
          "&:hover": {
            background: "#f4f4f4",
          },
        }}
      >
        <StyledCheckbox
          checked={props.checked}
          labelStyle={{ fill: "white" }}
          size="medium"
          style={{
            margin: "0rem",
            color: props.checked ? appColors.blueColor : "#E1E1E1",
          }}
          m={0}
        />
        {props.title}
      </Box>
    </div>
  );
};

export default Outline_Field;
