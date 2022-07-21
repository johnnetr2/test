import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Dropdown from "../../atom/ArrowDropDown/dropdown";
import useWindowDimensions from "../WindowDimensions/dimension";

const useStyles = makeStyles((theme) => ({
  scrollbar: {
    "&::-webkit-scrollbar": {
      width: 3,
      height: 5,
    },
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#505050",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#707070",
    },
  },
}));

export const CategoryTable = (props) => {
  const classes = useStyles();
  const [categoryTable, setCategoryTable] = useState(props.tableHistory);
  const [sectionCategory, setSectionCategory] = useState("");
  const { height, width } = useWindowDimensions();

  const navigate = useNavigate();

  useEffect(() => {
    setSectionCategory(props?.sectionCategory);
    console.log(props);
  }, []);

  const ResultHandler = (row) => {
    navigate("/resultsummary", {
      state: {
        quizId: row.quiz,
        sectionCategory: sectionCategory,
        user: localStorage.getItem("userId"),
      },
    });
  };

  const showPopup = (index) => {
    const history = [...props.tableHistory];
    let singlerow = history[index];
    if (singlerow.result == true) {
      singlerow.result = false;
      setCategoryTable(history);
    } else {
      singlerow.result = true;
      setCategoryTable(history);
    }
    console.log(singlerow);
  };

  return (
    <Box>
      <Box
        style={{
          display: "flex",
          textTransform: "uppercase",
          justifyContent: "space-around",
        }}
      >
        <Typography
          style={{
            display: "flex",
          }}
        >
          Datum
        </Typography>
        <Typography
          style={{
            display: "flex",
            // marginLeft: width > 900 ? width * 0.21 : width * 0.32,
            // border: "1px solid #00f",
          }}
        >
          Resultat
        </Typography>
        <Typography
          style={{
            display: "flex",
            // marginLeft: width > 900 ? width * 0.11 : width * 0.13,
            // border: "1px solid #f0f",
          }}
        >
          Normering
        </Typography>
      </Box>

      <Box
        component={Paper}
        elevation={0}
        style={{
          border: "1px solid #e1e1e1",
          boxShadow: "0px 1px 3px #d3d3d3",
          marginTop: "2rem",
          height: "40rem",
          // width: "40rem",
          overflow: "auto",
          marginBottom: "2rem",
        }}
        className={classes.scrollbar}
      >
        <Table>
          <TableBody>
            {categoryTable.map((row, index) => {
              return (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {moment(row?.createdAt).format("YYYY.MM.D hh:mm:ss")}
                  </TableCell>
                  <TableCell align="left">
                    {row.correctAnswer} av {row.answer.length}
                  </TableCell>

                  <TableCell align="right">
                    {((row.correctAnswer / row.totalQuestion) * 2)
                      .toFixed(1)
                      .replace(/\.0+$/, "")}
                  </TableCell>

                  <TableCell
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      color: "grey",
                      height: "5rem",
                      alignItems: "center",
                    }}
                  >
                    <MoreVertIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => showPopup(index)}
                    />

                    {row.result && (
                      <Dropdown onClick={() => ResultHandler(row)} />
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};
