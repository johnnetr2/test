import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Container,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { EndPoints, instance2 } from "../../service/Route";
import EndPopup from "../EndPopup/EndPopup";

const GoalBox = (props) => {
  const [pointCollection, setPointCollection] = useState({
    point: "",
    popup: false,
  });
  useEffect(() => {
    setPointCollection({ ...pointCollection, point: props.goalPoint });
  }, [props.goalPoint]);

  const menuBtnClick = () => {
    setPointCollection({ ...pointCollection, popup: true });
  };
  const updatePoint = () => {
    const pointURL =
      EndPoints.testDate + "/User/" + localStorage.getItem("userId");

    const body = {
      point: pointCollection.point,
    };
    instance2.put(pointURL, body).then((response) => {
      setPointCollection({ ...pointCollection, popup: false });
    });
  };
  const MenuIcon = () => {
    const options = "ÄNDRA";
    const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <IconButton
          style={{ height: "1rem", width: "1.5rem" }}
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon sx={{ color: "#e1e1e1" }} />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              // height: ITEM_HEIGHT * 4.5,
              width: "8ch",
              display: "flex",
              justifyContent: "center",
            },
          }}
        >
          <MenuItem onClick={menuBtnClick}>{options}</MenuItem>
        </Menu>
      </div>
    );
  };

  return (
    <>
      <Container
        maxWidth="false"
        disableGutters
        sx={{
          border: "1px solid #dddddd",
          boxShadow: "0px 5px 10px #f2f2f2",
          borderRadius: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 5,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <MenuIcon sx={{ color: "#b4b4b4" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            padding: "1.6rem 1rem",
          }}
        >
          <Typography
            variant="h3"
            style={{ marginRight: "0.5rem", fontSize: "2.5rem" }}
          >
            {pointCollection?.point ? pointCollection?.point : "0.0"}
          </Typography>

          <Typography
            variant="body2"
            style={{ marginBottom: "0.25rem", color: "#505050" }}
          >
            Mål
          </Typography>
        </Box>
      </Container>
      <EndPopup
        onSliderChange={(value) => {
          setPointCollection({ ...pointCollection, point: value });
        }}
        showPopup={pointCollection.popup}
        hidePopup={false}
        defaultValue={pointCollection.point}
        submit={updatePoint}
      />
    </>
  );
};

export default GoalBox;
