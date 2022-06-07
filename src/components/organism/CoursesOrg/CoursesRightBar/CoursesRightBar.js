import React, { useState, useEffect } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Thumb from "../../../../assets/Imgs/Thumb.png";
import { EndPoints, instance2 } from "../../../service/Route";

const useStyles = makeStyles((theme) => ({
  topspace: {
    paddingTop: theme.spacing(18),
    paddingLeft: theme.spacing(2),
  },
  tablespace: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "21.09.24 10:38",
    "Hösten 2021, Oktober",
    "0 av 160",
    0.0,
    <MenuIcon />
  ),
  createData(
    "21.09.24 10:38",
    "Hösten 2021, Oktober",
    "0 av 160",
    0.0,
    <MenuIcon />
  ),
  createData(
    "21.09.24 10:38",
    "Hösten 2021, Oktober",
    "0 av 160",
    0.0,
    <MenuIcon />
  ),
  createData(
    "21.09.24 10:38",
    "Hösten 2021, Oktober",
    "0 av 160",
    0.0,
    <MenuIcon />
  ),
  createData(
    "21.09.24 10:38",
    "Hösten 2021, Oktober",
    "0 av 160",
    0.0,
    <MenuIcon />
  ),
];

const RightBar = (props) => {
  const classes = useStyles();

  const [provHistoryData, setProvHistoryData] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const URL = EndPoints.getSimuleraQuizByUser + userId;
    instance2.get(URL).then((response) => {
      setProvHistoryData(response.data);
    });
  }, []);

  return (
    <Container disableGutters maxWidth={false}>
      <Box sx={{ backgroundColor: "#fafafa" }}>
        <Box className={classes.topspace} style={{ marginBottom: "2rem" }}>
          <Typography variant="h6" component="h6">
            Dina slutförda prov
          </Typography>
        </Box>
        <Box className={classes.tablespace} style={{ marginBottom: "2rem" }}>
          <Box style={{ marginBottom: "2rem" }}>
            <TableContainer
              style={{
                border: "1px solid #e1e1e1",
                borderRadius: ".25rem",
                padding: "1.5rem",
                boxShadow: "1px 1px 5px #d4d4d4",
                backgroundColor: "#fff",
              }}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Datum </TableCell>
                    <TableCell align="left">Prov</TableCell>
                    <TableCell align="left">Antal</TableCell>
                    <TableCell align="left">Normerad</TableCell>
                    <TableCell align="left"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.calories}</TableCell>
                      <TableCell align="left">{row.fat}</TableCell>
                      <TableCell align="left">{row.carbs}</TableCell>
                      <TableCell align="left">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box
            sx={{
              border: "1px solid #e1e1e1",
              borderRadius: ".25rem",
              padding: "1.5rem",
              boxShadow: "1px 1px 5px #d4d4d4",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" component="h5">
                Lås upp fler prov
              </Typography>
              <Typography variant="body2" component="body2">
                Lås upp premiumfunktioner endast för 199 sek per sektion
              </Typography>
              <Button
                contained
                style={{
                  backgroundColor: "#0A1596",
                  textTransform: "capitalize",
                  color: "#fff",
                  width: "8rem",
                }}
              >
                Lås upp prov
              </Button>
            </Box>
            <Box>
              <img style={{ width: "6rem" }} src={Thumb} alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default RightBar;
