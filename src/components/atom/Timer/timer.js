import { React, useEffect, useRef, useState } from 'react'
import { Box, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const Timer = (props) => {
    const sec = props.time * 60;
    const [timer, setTimer] = useState(sec); // 25 minutes
    const [start, setStart] = useState();
    const firstStart = useRef(true);
    const tick = useRef();
    const navigate = useNavigate()

    useEffect(() => {
        setStart(props.continueStatus)
        if(!props.continueStatus) {
            props.timeleft(timer)
        }
    }, [props.continueStatus])

    useEffect(() => {
        if (firstStart.current) {
            firstStart.current = !firstStart.current;
            return;
        }

        if (start) {
            tick.current = setInterval(() => {
                setTimer((timer) => timer > 0 ? timer - 1 : props.onCloseTimer());
            }, 1000);
        } else {
            clearInterval(tick.current);
        }

        return () => clearInterval(tick.current);
    }, [start]);


    const dispSecondsAsMins = (seconds) => {
        // 25:00
        const mins = Math.floor(seconds / 60);
        const seconds_ = seconds % 60;
            return mins.toString() + ":" + (seconds_ == 0 ? "00" : seconds_.toString());
    };

    return (
        <Box style={{ width: '4.5rem', marginTop: '.4rem', display: 'flex', alignItems: 'center', marginLeft: '.4rem'}} >
            <Typography >{dispSecondsAsMins(timer)} min</Typography>
            <Box className="startDiv">
            </Box>
        </Box>
    );
};

export default Timer