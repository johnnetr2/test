import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import {
  Container,
  Box,
  Typography,
  Stack,
  Chip,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Ellipsis from "../../../assets/Icons/Ellipsis.svg";

const useStyles = makeStyles((theme) => ({
  global: {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },
  root: {
    paddingRight: theme.spacing(0),
    paddingLeft: theme.spacing(0),
  },
  box: {
    paddingRight: theme.spacing(0),
    paddingLeft: theme.spacing(0),
  },
}));

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
            width: "15ch",
          },
        }}
      >
        <MenuItem>{options}</MenuItem>
      </Menu>
    </div>
  );
};

const CoursesCard = (props) => {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth={false}>
      <Box
        className={classes.box}
        sx={{
          border: "1px solid #e1e1e1",
          borderRadius: ".25rem",
          padding: "1.5rem",
          boxShadow: "1px 1px 5px #d4d4d4",
          backgroundColor: "transparent",
        }}
      >
        <Box sx={{ margin: "0.25rem" }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <MenuIcon />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="h5" component="h5">
                {" "}
                Hösten 2021{" "}
              </Typography>
              <Typography variant="body2" component="body2">
                {" "}
                Oktober{" "}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                <Chip
                  label="Provpass 1"
                  style={{ backgroundColor: "#6FCF97", color: "#064923" }}
                  size="small"
                />
                <Chip
                  label="Provpass 2"
                  style={{ backgroundColor: "#6FCF97", color: "#064923" }}
                  size="small"
                />
                <Chip
                  label="Provpass 3"
                  style={{ backgroundColor: "#6FCF97", color: "#064923" }}
                  size="small"
                />
                <Chip
                  label="Provpass 4"
                  style={{ backgroundColor: "#6FCF97", color: "#064923" }}
                  size="small"
                />
                <Typography variant="body2" component="body2">
                  100%
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h4" component="h4">
                  {" "}
                  1.4{" "}
                </Typography>
                <Typography
                  variant="body2"
                  component="body2"
                  style={{ marginLeft: ".5rem", marginTop: ".5rem" }}
                >
                  {" "}
                  Oktober{" "}
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  style={{ width: "10rem", textTransform: "capitalize" }}
                >
                  Gör om prov
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CoursesCard;
