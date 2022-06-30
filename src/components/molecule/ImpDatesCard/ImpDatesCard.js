import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Container,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import Graph from "../../../assets/Graph/Graph.svg";
import Ellipsis from "../../../assets/Icons/Ellipsis.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import moment from "moment";
import StartPopup from "../StartPopup/StartPopup";
import { EndPoints, instance2 } from "../../service/Route";

const ImpDatesCard = (props) => {
  const [collection, setCollection] = useState({
    date: "",
    popup: false,
  });
  const updateDate = () => {
    const pointURL =
      EndPoints.testDate + "/User/" + localStorage.getItem("userId");
    const body = {
      attemptDate: collection.date,
    };
    instance2.put(pointURL, body).then((response) => {
      console.log(response, "success");
      setCollection({ ...collection, popup: false });
    });
  };
  useEffect(() => {
    setCollection({ ...collection, date: props.date });
  }, [props.date]);
  const menuBtnClick = () => {
    setCollection({ ...collection, popup: true });
  };
  const convertedDate = moment(collection.date).format("DD/MM/YYYY");
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
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #dddddd",
          boxShadow: "1px 1px 8px #dfdfdf",
          borderRadius: 2,
          padding: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5" style={{ marginRight: "0.5rem" }}>
              {convertedDate}
            </Typography>
            <Typography variant="body2">
              100 dagar till anmälan öppnar
            </Typography>
          </Box>
          <Box>
            <MenuIcon />
          </Box>
        </Box>
      </Container>
      <StartPopup
        onDateChange={(value) => setCollection({ ...collection, date: value })}
        showPopup={collection.popup}
        hidePopup={false}
        defualtValue={collection.date}
        submit={updateDate}
      />
    </>
  );
};

export default ImpDatesCard;
