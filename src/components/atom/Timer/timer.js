import {React, useEffect, useRef, useState} from 'react'
import { Box } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';


const Timer = () => {
    const time = 12;
    const sec = time * 60;
    console.log(sec, 'senodnoin')
    const [timer, setTimer] = useState(sec); // 25 minutes
    const [start, setStart] = useState(false);
    const firstStart = useRef(true);
    const tick = useRef();
    const navigate = useNavigate()

    useEffect(() => {
        if (firstStart.current) {
            firstStart.current = !firstStart.current;
            return;
        }

        if (start) {
            tick.current = setInterval(() => {
                setTimer((timer) => timer > 0 && timer - 1);
            }, 1000);
        } else {
            clearInterval(tick.current);
        }

        return () => clearInterval(tick.current);
    }, [start]);

    const toggleStart = () => {
        setStart(!start);
    };

    const dispSecondsAsMins = (seconds) => {
        // 25:00
        const mins = Math.floor(seconds / 60);
        const seconds_ = seconds % 60;
        return mins.toString() + ":" + (seconds_ == 0 ? "00" : seconds_.toString());
    };

    return (
        <Box className="pomView">
            <h4>{dispSecondsAsMins(timer)}</h4>
            <Box className="startDiv">
                {/* event handler onClick is function not function call */}
                <button className="startBut" onClick={toggleStart}>
                    {!start ? "START" : "STOP"}
                </button>
                {/* {start && <AiFillFastForward className="ff" onClick="" />} */}
            </Box>
        </Box>
    );
};

export default Timer