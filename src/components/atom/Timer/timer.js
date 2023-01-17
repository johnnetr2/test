import { React, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Timer = (props) => {
  const sec = props.time ? props.time : 0;
  const [timer, setTimer] = useState(sec); // 25 minutes
  const [start, setStart] = useState(false);
  const firstStart = useRef(true);
  const tick = useRef();

  const clearAll = () => {
    props.onCloseTimer();
    clearInterval(tick.current);
    return 0;
  };

  useEffect(() => {
    // console.log(props.continueStatus, 'continue status')
    setStart(props.continueStatus);
    // props.onChangeTime(timer)
    // if (!props.continueStatus) {
    props.timeleft(timer);
    // }
  }, [props.continueStatus]);

  useEffect(() => {
    // console.log("start timer", start);
    if (firstStart.current) {
      firstStart.current = !firstStart.current;
      return;
    }

    if (start === true) {
      // console.log("start if", start);

      tick.current = setInterval(() => {
        setTimer((timer) => (timer <= 0 ? clearAll() : timer - 1));
      }, 1000);

      // console.log(tick.current, 'tick current use ref')
    }
    return () => clearInterval(tick.current);
  }, [start]);

  useEffect(() => {
    // console.log(timer, "test timer");
    props.callBackForTimer(timer);
  }, [timer]);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("time", timer);
      // console.log(timer, 'localStorage setTimeout')
    }, 2000);
  }, [timer]);

  useEffect(() => {
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      if (localStorage.getItem("time")) {
        // console.log('localStorage getTime', localStorage.getItem('time'))
        setTimer(localStorage.getItem("time"));
      }
    }
  }, []);

  const dispSecondsAsMins = (seconds) => {
    // 25:00
    // const minute =
    const mins = Math.floor(seconds / 60);
    const seconds_ = Math.floor(seconds % 60);
    return (
      (mins.toString().length === 1 ? "0" + mins.toString() : mins.toString()) +
      ":" +
      (seconds_ == 0
        ? "00"
        : seconds_.toString().length == 1
        ? "0" + seconds_.toString()
        : seconds_.toString())
    );
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
          color: props.continueStatus ? "" : "red",
        }}
      >
        {/* {console.log(timer != 0 ? dispSecondsAsMins(timer) : "00:00", 'timer in return')} */}
        {timer != 0 ? dispSecondsAsMins(timer) : "00:00"} min
      </Typography>
      <Box className="startDiv"></Box>
    </Box>
  );
};

export default Timer;
