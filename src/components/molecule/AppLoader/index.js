import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const AppLoader = ({ isLoading }) => {
    console.log("isLoading", isLoading)
    return (
        <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }
            }
            open={isLoading}
        >
            <CircularProgress color="inherit" size="5rem" />
        </Backdrop >
    )
}

export default AppLoader
