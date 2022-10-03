import React, { useEffect, useState } from "react";
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function StartPopup({
  showPopup,
  hidePopup,
  submit,
  onTestSelection,
  defualtValue,
}) {
  const [value, setValue] = useState(null);
  useEffect(() => {
    setValue(defualtValue);
  }, [defualtValue]);

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
              <img
                onClick={() => hidePopup()}
                src={Cross}
                alt=""
                style={{ cursor: "pointer" }}
              />
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
              <Input
                type="select"
                onChange={(e) => onTestSelection(e.target.value)}
                style={{
                  marginTop: "1rem",
                  height: "3rem",
                  border: "1px solid #b4b4b4",
                  cursor: "pointer",
                }}
              >
                <option hidden selected>
                  Välj prov...
                </option>
                {["Hösten 2022", "Våren 2023"].map((item) => {
                  return (
                    <>
                      <option>{item}</option>
                    </>
                  );
                })}
              </Input>

              {/* <Box sx={{ marginTop: "1rem" }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <Input
                        value={value}
                        onChange={(e) => {
                          onDateChange(e.target.value);
                        }}
                        type="date"
                        placeholder="Välj prov..."
                        {...params}
                        style={{ width: "30rem", height: "4rem" }}
                      />
                    )}
                  />
                </LocalizationProvider> */}
              {/* </Box> */}
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
                  <Button
                    variant="outlined"
                    style={{
                      backgroundColor: "none",
                      border: "1px solid #0A1596",
                      color: "#0A1596",
                      textTransform: "capitalize",
                      width: "30%",
                    }}
                  >
                    Spara
                  </Button>
                </Box>
              </DialogActions>
            </DialogContentText>
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  );
}
