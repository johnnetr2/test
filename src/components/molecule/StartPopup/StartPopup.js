import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Box, Typography } from "@mui/material";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Input } from "reactstrap";
import Cross from "../../../assets/Icons/Cross.svg";
import NextButton from "../../atom/NextButton/NextButton";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function StartPopup({ showPopup, hidePopup, submit, onDateChange }) {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();

  const [value, setValue] = useState(null);

  return (
    <Box>
      <Dialog
        open={showPopup}
        TransitionComponent={Transition}
        keepMounted
        onClose={hidePopup}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        id="start-popup-wrapper"
      >
        <Box>
          <DialogTitle>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <img onClick={() => hidePopup()} src={Cross} alt="" />
            </Box>
          </DialogTitle>
          <DialogContent style={{ paddingLeft: "4rem", paddingRight: "4rem" }}>
            <DialogContentText>
              <Typography variant="body2" sx={{ color: "#252525" }}>
                1/2
              </Typography>
              <Typography variant="h4" sx={{ color: "#252525" }}>
                När skall du göra provet?
              </Typography>
              <Typography variant="body2" sx={{ color: "#252525" }}>
                Om du inte har bestämt dig än, kan du alltid ställa in senare.
              </Typography>
              <Box sx={{ marginTop: "1rem" }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <Input
                      onChange={(e)=>{onDateChange(e.target.value)}}
                        type="date"
                        placeholder="Välj prov..."
                        {...params}
                        style={{ width: "30rem", height: "4rem" }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Box>
              <DialogActions>
                <Box
                  onClick={() => submit("hello")}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100rem",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Button variant='outlined' style={{backgroundColor:'none', border:'1px solid #0A1596', color:'#0A1596', textTransform:'capitalize', width:'30%'}}>Nästa</Button>
                </Box>
              </DialogActions>
            </DialogContentText>
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  );
}
