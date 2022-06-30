import React, { useState } from "react";
import {
  Typography,
  Box,
  Container,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const GoalBox = () => {
  const MenuIcon = () => {
    const options = "EDIT";
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
          <MoreVertIcon sx={{ color: "#999" }} />
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
          <MenuItem>{options}</MenuItem>
        </Menu>
      </div>
    );
  };

  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        border: "1px solid #dddddd",
        boxShadow: "0px 5px 10px #f2f2f2",
        borderRadius: 1,
        padding: ".5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <MenuIcon sx={{ color: "#b4b4b4" }} />
      </Box>
      <Box
        sx={{
          padding: ".25rem 1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Typography
            variant="h3"
            style={{ marginRight: "0.5rem", fontSize: "2.5rem" }}
          >
            1
          </Typography>
          <Typography variant="body2" style={{ marginBottom: "0.5rem" }}>
            Mål
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default GoalBox;
