import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { Box, Typography, Button } from "@mui/material";
import Slide from "@material-ui/core/Slide";
import Slider from "@mui/material/Slider";
import { useNavigate } from 'react-router-dom'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EndPopup({
  showPopup,
  hidePopup,
  submit,
  onSliderChange,
}) {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [slider, setSlider] = useState();

  const navigate = useNavigate()

  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 2.0,
      label: "2.0",
    },
  ];

  // function valuetext(value) {
  //   return `${value}`;
  // }

  const changeHandler = (e) => {
    setSlider(e.target.value);
    console.log(e.target.value, "this is the console of the slider")
  };

  const clickHandler = () =>
  {
    navigate('/home')
    // alert(slider, "clicked")
  }

  useEffect(() => {
    onSliderChange(1);
    // console.log(valuetext, "slider text value")
  }, []);

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
              sx={{
                color: "#6fcf97",
                "& .MuiSlider-rail": {
                  opacity: 0.5,
                  backgroundColor: "#bfbfbf",
                },
                "& .MuiSlider-thumb": {
                  backgroundColor: "blue",
                  height: 10,
                  width: 10,
                },
              }}
              aria-label="Temperature"
              defaultValue={1}
              // getAriaValueText={valuetext}
              value={slider}
              valueLabelDisplay="auto"
              name="slider"
              step={0.2}
              marks={marks}
              min={0.0}
              max={2.0}
              onChange={changeHandler}
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
              <Button
                variant="outlined"
                style={{
                  backgroundColor: "none",
                  border: "1px solid #0A1596",
                  color: "#0A1596",
                  textTransform: "capitalize",
                  width: "30%",
                }}
                onClick={clickHandler}
              >
                Spara
              </Button>
            </Box>
          </DialogActions>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
