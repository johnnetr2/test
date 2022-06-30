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
    const options = "STARTA OM";
    const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleClickMenuItem = () => {};

    return (
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
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
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "12ch",
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
          boxShadow: "1px 1px 8px #dfdfdf",
          borderRadius: 2,
          padding: ".5rem 2rem",
        }}
      >
        <Box
          sx={{
            padding: ".75rem 1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              variant="body2"
              style={{
                textTransform: "Uppercase",
                textAlign: "center",
                fontSize: "0.5rem",
              }}
            >
              <MenuIcon />
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" style={{ marginRight: "0.5rem" }}>
              {pointCollection.point && pointCollection.point}
            </Typography>
            <Typography variant="body2">Mål</Typography>
          </Box>
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
