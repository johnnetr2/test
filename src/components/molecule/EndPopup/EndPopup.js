import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Box, Typography, Button } from "@mui/material";
import Slide from "@material-ui/core/Slide";
import NextButton from "../../atom/NextButton/NextButton";
import Step from "../../../assets/Graph/Steps.svg";
import Slider from "@mui/material/Slider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EndPopup({ showPopup, hidePopup, submit,onSliderChange }) {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();

  function valuetext(value) {
    return `${value}°C`;
  }

  useEffect(() => {
    onSliderChange(1)
  }, [])
  
  return (
    <Dialog
      open={showPopup}
      TransitionComponent={Transition}
      keepMounted
      onClose={hidePopup}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent
        style={{
          paddingTop: "3rem",
          paddingRight: "3rem",
          paddingLeft: "3rem",
        }}
      >
        <DialogContentText>
          <Typography variant="body2" sx={{ color: "#252525" }}>
            2/2
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#252525", marginBottom: "1rem" }}
          >
            Sätt din målpoäng
          </Typography>
          <Typography variant="body2" sx={{ color: "#252525" }}>
            Om du är osäker kan du alltid uppdatera senare.
          </Typography>

          <Box sx={{ width: 495, marginTop: "1rem" }}>
            <Slider
              aria-label="Temperature"
              defaultValue={1} 
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={2}
              onChange={(e)=>{onSliderChange(e.target.value)}}
            />
          </Box>
          <DialogActions>
            <Box
              onClick={() => submit()}
              style={{
                width: "35rem",
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              <Button variant='outlined' style={{backgroundColor:'none', border:'1px solid #0A1596', color:'#0A1596', textTransform:'capitalize', width:'30%'}}>Spara</Button>
            </Box>
          </DialogActions>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
