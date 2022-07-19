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
  const convertedDate = moment(collection.date).format("DD.MM.YYYY");
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
          border: "1px solid #e1e1e1",
          boxShadow: "0px 5px 10px #f2f2f2",
          borderRadius: 1,
          padding: "0.5rem 0 0 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "2rem  0 2rem 2rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Typography variant="h4" style={{ marginRight: "0.5rem" }}>
                {convertedDate}
              </Typography>
              <Typography
                variant="body2"
                style={{ fontSize: ".65rem", marginBottom: "0.35rem" }}
              >
                100 dagar till anmälan öppnar
              </Typography>
            </Box>
          </Box>
          <Box>
            <MenuIcon />
          </Box>
        </Box>
      </Container>
      <StartPopup
        onDateChange={(value) => setCollection({ ...collection, date: value })}
        showPopup={collection.popup}
        hidePopup={() => setCollection({ ...collection, popup: false })}
        defualtValue={collection.date}
        submit={updateDate}
      />
    </>
  );
};

export default ImpDatesCard;
