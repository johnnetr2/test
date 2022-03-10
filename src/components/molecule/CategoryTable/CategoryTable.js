import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { instance, instance2, EndPoints } from "../../service/Route";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
];

const ITEM_HEIGHT = 48;

export function LongMenu() {
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
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export const CategoryTable = (props) => {
  const [tabledata, setTabledata] = useState([]);

  const categoryTable = props.tableHistory;

  useEffect(() => {
    // console.log(categoryTable[0], "this is total category table");
  }, []);

  return (
    <Box>
      <TableContainer
        component={Paper}
        elevation={0}
        style={{
          border: "1px solid #e1e1e1",
          boxShadow: "0px 1px 3px #d3d3d3",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Datum</TableCell>
              <TableCell align="left">Resultat</TableCell>
              <TableCell align="leftt">Normering</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categoryTable.map((row) => {
              return (
                <>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.createdAt}
                    </TableCell>
                    <TableCell align="left">
                      {row.correctAnswer} av {row.totalQuestion}
                    </TableCell>
                    <TableCell align="left">0.0</TableCell>
                    <TableCell align="left"><MoreVertIcon /></TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
