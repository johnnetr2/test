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
    const pointURL = EndPoints.testDate + "/User/" + user._id;
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const body = {
      season: collection.season,
    };
    instance2.put(pointURL, { headers }, body).then((response) => {
      setCollection({ ...collection, popup: false });
    });
  };
  useEffect(() => {
    setCollection({ ...collection, season: props.season });
  }, [props.season]);

  const hostenDate = new Date("10/23/2022");
  const notSure = new Date();
  const formatHostenDate = moment(hostenDate).format("DD.MM.YYYY");
  const formatNotSure = moment(notSure).format("DD.MM.YYYY");

  const showHostenDate = () => {
    if (collection && collection.season == "Hösten 2022") {
      return (
        <Typography variant="h3" style={{ fontSize: "2rem" }}>
          {formatHostenDate}
        </Typography>
      );
    } else if (collection.season == "Våren 2023") {
      return (
        <Typography variant="h3" style={{ fontSize: "2rem" }}>
          Våren 2023
        </Typography>
      );
    } else {
      return formatNotSure;
    }
  };

  const remainingDays = () => {
    if (collection && collection.season == "Hösten 2022") {
      return (
        <>
          <Box sx={{ display: "flex" }}>
            {moment(hostenDate).diff(moment(notSure), "days")}
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
        </>
      );
    } else if (collection.season == "Våren 2023") {
      return (
        <Typography
          variant="body2"
          style={{
            fontSize: ".65rem",
            color: "#656565",
          }}
        >
          inget officiellt datum finns ännu
        </Typography>
      );
    } else {
      return "-";
    }
  };

  // const showvarenDate = collection.season === "Våren 2023" && formatVarenDate;
  // setCollection({ ...collection, appliedDate: convertedDate });

  // useEffect(() => {
  // }, [collection.season]);

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
        sx={{
          border: "1px solid #e1e1e1",
          boxShadow: "0px 5px 10px #f2f2f2",
          borderRadius: 1,
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
