import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { DTKNormeringValueFor } from "../../../utils/normringCalculations/NormringCalculator";
import Dropdown from "../../atom/ArrowDropDown/dropdown";
import { ELFNormeringValueFor } from "../../../utils/normringCalculations/NormringCalculator";
import { KVANormeringValueFor } from "../../../utils/normringCalculations/NormringCalculator";
import { LASNormeringValueFor } from "../../../utils/normringCalculations/NormringCalculator";
import { MEKNormeringValueFor } from "../../../utils/normringCalculations/NormringCalculator";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { NOGNormeringValueFor } from "../../../utils/normringCalculations/NormringCalculator";
import { ORDNormeringValueFor } from "../../../utils/normringCalculations/NormringCalculator";
import { XYZNormeringValueFor } from "../../../utils/normringCalculations/NormringCalculator";
import { makeStyles } from "@material-ui/core";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const userId = useSelector((state) => state.value.user._id);

  const navigate = useNavigate();

  useEffect(() => {
    setSectionCategory(props?.sectionCategory);
  }, []);

  const ResultHandler = (row) => {
    navigate("/resultsummary", {
      state: {
        quizId: row.quiz._id,
        sectionCategory: sectionCategory,
        user: userId,
        time: row.quiz.isTimeRestricted,
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
  };

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
              textTransform: "capitalize",
            }}
          >
            Datum
          </Typography>
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: 500,
              width: "35%",
              textTransform: "capitalize",
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
              textTransform: "capitalize",
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
                      {row.quiz.isTimeRestricted
                        ? percentageCalculation(
                          (row.correctAnswer / row.answer.length) * 100
                        )
                        : "-"}
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
              .reverse()}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};
