import { React, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Timer = (props) => {
  console.log(props.time);
  console.log(props.continueStatus)
  const sec = props.time ? props.time : 0;
  const [timer, setTimer] = useState(sec); // 25 minutes
  const [start, setStart] = useState();
  const firstStart = useRef(true);
  const tick = useRef();

  const clearAll = () => {
    props.onCloseTimer();
    clearInterval(tick.current);
    return 0;
  };

  useEffect(() => {
    setStart(props.continueStatus);
    // props.onChangeTime(timer)
    // if (!props.continueStatus) {
    props.timeleft(timer);
    // }
  }, [props.continueStatus]);

  useEffect(() => {
    if (firstStart.current) {
      firstStart.current = !firstStart.current;
      return;
    }

    if (start) {
      tick.current = setInterval(() => {
        setTimer((timer) => (timer <= 0 ? clearAll() : timer - 1 ));
      }, 1000);
    }
    return () => clearInterval(tick.current);
  }, [start]);

  const dispSecondsAsMins = (seconds) => {
    
    // 25:00
    const mins = Math.floor(seconds / 60);
    const seconds_ =  Math.floor(seconds % 60);
    console.log(mins,seconds_)
    return mins.toString() + ":" + (seconds_ == 0 ? "00" : seconds_.toString());
  };

  return (
    <Box
      style={{
        // marginTop: ".4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: ".4rem",
      }}
    >
      <Typography
      style={{
        color: props.continueStatus ? '' : 'red'
      }}
      >
        {timer != 0 ? dispSecondsAsMins(timer) : "00:00"} min
      </Typography>
      <Box className="startDiv"></Box>
    </Box>
  );
};

export default Timer;
