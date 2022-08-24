import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Dropdown from "../../atom/ArrowDropDown/dropdown";
import { XYZNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { ORDNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { KVANormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { NOGNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { ELFNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { MEKNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { LASNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";
import { DTKNormeringValueFor } from "../../atom/percentageCalculator/PercentageCalculator";

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

  const navigate = useNavigate();

  useEffect(() => {
    setSectionCategory(props?.sectionCategory);
    console.log(props?.tableHistory[42], 'indexxxxxxxxx')
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
  };

  const percentageCalculation = (value) => {
    if (props?.sectionCategory.title == "XYZ") {
      return XYZNormeringValueFor(value);
    } else if (props?.sectionCategory.title == "KVA") {
      return KVANormeringValueFor(value);
    } else if (props?.sectionCategory.title == "NOG") {
      return NOGNormeringValueFor(value);
    } else if (props?.sectionCategory.title == "DTK") {
      return DTKNormeringValueFor(value);
    } else if (props?.sectionCategory.title == "ELF") {
      return ELFNormeringValueFor(value);
    } else if (props?.sectionCategory.title == "LÄS") {
      return LASNormeringValueFor(value);
    } else if (props?.sectionCategory.title == "ORD") {
      return ORDNormeringValueFor(value);
    } else if (props?.sectionCategory.title == "MEK") {
      return MEKNormeringValueFor(value);
    }
  }

  return (
    <Container maxWidth="lg" disableGutters>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            textTransform: "uppercase",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              display: "flex",
              fontWeight: 500,
              width: "45%",
              justifyContent: "flex-start",
            }}
          >
            Datum
          </Typography>
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: 500,
              width: "40%",
            }}
          >
            Resultat
          </Typography>
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: 500,
              width: "40%",
            }}
          >
            Normering
          </Typography>
        </Box>
      </Container>

      <Box
        component={Paper}
        elevation={0}
        style={{
          border: "1px solid #e1e1e1",
          boxShadow: "0px 1px 3px #d3d3d3",
          marginTop: "2rem",
          maxHeight: categoryTable.length > 8 ? "40rem" : "fit-content",
          overflow: "auto",
          marginBottom: "2rem",
        }}
        className={classes.scrollbar}
      >
        <Table>
          <TableBody>
            {categoryTable
              .map((row, index) => {
                return (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={index}
                  >
                    <TableCell component="th" scope="row">
                      {moment(row?.createdAt).format("YYYY.MM.D hh:mm:ss")}
                    </TableCell>
                    <TableCell align="left">
                      {row.correctAnswer} av {row.answer.length}
                    </TableCell>

                    <TableCell align="right">
                      {percentageCalculation((row.correctAnswer / row.answer.length) * 100)}
                    </TableCell>

                    <TableCell
                      style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        color: "grey",
                        height: "5rem",
                        alignItems: "center",
                        alignSelf: "flex-end",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          display: "flex",
                          alignItems: "flex-end",
                          position: "relative",
                        }}
                      >
                        <MoreVertIcon
                          sx={{ cursor: "pointer", color: "#b4b4b4" }}
                          onClick={() => showPopup(index)}
                        />
                        {row.result && (
                          <Dropdown onClick={() => ResultHandler(row)} />
                        )}
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};
