import { React, useEffect, useRef, useState } from 'react'
import { Box } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const Timer = (props) => {
    const time = 5;
    const sec = time * 60;
    const [timer, setTimer] = useState(sec); // 25 minutes
    const [start, setStart] = useState();
    const firstStart = useRef(true);
    const tick = useRef();
    const navigate = useNavigate()

    useEffect(() => {
        setStart(props.continueStatus)
    }, [props.continueStatus])

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


    const dispSecondsAsMins = (seconds) => {
        // 25:00
        const mins = Math.floor(seconds / 60);
        const seconds_ = seconds % 60;
        if(seconds_ == 0 ) {
            navigate('/resultsummary', {
                state: {
                    quizId: props.quizId,
                    categoryName: props.categoryName
                }
            })
        } else {
            return mins.toString() + ":" + (seconds_ == 0 ? "00" : seconds_.toString());
        }
    };

    return (
        <Box style={{ marginTop: '.4rem', display: 'flex', alignItems: 'center', marginLeft: '.4rem' }} >
            <h6>{dispSecondsAsMins(timer)}</h6>
            <Box className="startDiv">
            </Box>
        </Box>
    );
};

export default Timer