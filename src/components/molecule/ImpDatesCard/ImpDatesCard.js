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
import { useSelector } from "react-redux";

const ImpDatesCard = (props) => {
  const { user, token } = useSelector((state) => state.value);
  const [collection, setCollection] = useState({
    season: "",
    popup: false,
    appliedDate: "",
  });
  const updateDate = () => {
    const pointURL = EndPoints.testDate + "User/" + user._id;
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const body = {
      season: collection.season,
    };
    instance2.put(pointURL, body, { headers }).then((response) => {
      setCollection({ ...collection, popup: false });
    });
  };
  useEffect(() => {
    setCollection({ ...collection, season: props.season });
  }, [props.season]);

  const varenDate = new Date("3/25/2023");
  const hosten2023 = new Date("10/22/2023");
  const currentDate = new Date();
  const formatVarenDate = moment(varenDate).format("DD.MM.YYYY");
  const formatHosten2023 = moment(hosten2023).format("DD.MM.YYYY");

  const showHostenDate = () => {
     if (collection.season == "Våren 2023") {
      return (
        <Typography variant="h3" style={{ fontSize: "2rem" }}>
          {formatVarenDate}
        </Typography>
      );
    } else if (collection.season == "Hösten 2023") {
      return (
        <Typography variant="h3" style={{ fontSize: "2rem" }}>
          {formatHosten2023}
        </Typography>
      );
    } else {
      return <Typography variant="h3" style={{ fontSize: "2rem" }}>
      {formatHosten2023}
    </Typography>
    }
  };

  const remainingDays = () => {
     if (collection.season == "Våren 2023") {
      return (
        <Box sx={{ display: "flex" }}>
          {moment(varenDate).diff(moment(currentDate), "days")}
          <Typography
            variant="body2"
            style={{
              fontSize: ".65rem",
              marginLeft: ".15rem",
            }}
          >
            {" "}
            dagar till provdagen
          </Typography>
        </Box>
      );
    } else if (collection.season == "Hösten 2023") {
      return (
        <Box sx={{ display: "flex" }}>
          {moment(hosten2023).diff(moment(currentDate), "days")}
          <Typography
            variant="body2"
            style={{
              fontSize: ".65rem",
              marginLeft: ".15rem",
            }}
          >
            {" "}
            dagar till provdagen
          </Typography>
        </Box>
      );
    } else {
      return (
        <Box sx={{ display: "flex" }}>
          {moment(hosten2023).diff(moment(currentDate), "days")}
          <Typography
            variant="body2"
            style={{
              fontSize: ".65rem",
              marginLeft: ".15rem",
            }}
          >
            {" "}
            dagar till provdagen
          </Typography>
        </Box>
      );
    }
  };

  const menuBtnClick = () => {
    setCollection({ ...collection, popup: true });
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
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon sx={{ color: "#b4b4b4" }} />
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
              width: "10ch",
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
        style={{
          border: "1px solid #e1e1e1",
          boxShadow: "0px 5px 10px #f2f2f2",
          borderRadius: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem 2rem 2rem 2rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Typography
                variant="h3"
                style={{ marginRight: ".5rem", fontSize: "2rem" }}
              >
                {showHostenDate()}
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontSize: ".65rem",
                  marginBottom: "0.35rem",
                  marginRight: "0.5rem",
                  color: "#656565",
                }}
              >
                {remainingDays()}
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  top: 5,
                }}
              >
                <MenuIcon />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <StartPopup
        onTestSelection={(value) =>
          setCollection({ ...collection, season: value })
        }
        showPopup={collection.popup}
        hidePopup={() => setCollection({ ...collection, popup: false })}
        defualtValue={collection.season}
        submit={updateDate}
      />
    </>
  );
};

export default ImpDatesCard;
