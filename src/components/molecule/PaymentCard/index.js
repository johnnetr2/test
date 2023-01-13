import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { appColors } from "../../service/commonService";
import { useNavigate } from "react-router-dom";

const PaymentCard = (props) => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/checkout')
    }

    return (
        <Box style={{
            margin: `${props.isInTrial ? "50px" : '0px'}  auto`,
            backgroundColor: appColors.blueColor,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '193px',
            padding: '23px',
            borderRadius: "5px"

        }} >
            <Typography
                variant="body2"
                style={{
                    // fontSize: ".65rem",
                    display: 'flex',
                    textAlign: 'center',
                    color: appColors.whiteColor,
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '25px',
                    lineHeight: '38px',
                }}
            >
                {" "}
                {props.title}
            </Typography>
            <Typography
                variant="body2"
                style={{
                    display: 'flex',
                    textAlign: 'center',
                    color: appColors.whiteColor,
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    padding: "15px 0px"
                }}

            >
                {" "}
                {props.subTitle}
            </Typography>
            <Button
                disableRipple={true}
                autoFocus
                onClick={onClick}
                style={{
                    backgroundColor: appColors.whiteColor,
                    color: appColors.blueColor,
                    //   border: `1px solid ${appColors.blueColor}`,
                    textTransform: "capitalize",
                    fontWeight: "regular",
                    padding: ".60rem 3rem",
                    marginBottom: "2rem",
                    width: '168px',
                    height: '37.93px',
                    marginTop: '10px',
                }}
            >
                {"Läs mer"}
            </Button>
        </Box >
    )

}

export default PaymentCard