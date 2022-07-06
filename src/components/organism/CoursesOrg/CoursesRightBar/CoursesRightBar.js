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
import moment from "moment";
import Thumb from "../../../../assets/Imgs/Thumb.png";
import { EndPoints, instance2 } from "../../../service/Route";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from '../../../molecule/WindowDimensions/dimension'

const useStyles = makeStyles((theme) => ({
  topspace: {
    paddingTop: theme.spacing(18),
  },
  maxWidth: {
    maxWidth: "50rem",
  },
}));

const RightBar = (props) => {

  const [resultHistory, setResultHistory] = useState()
  const classes = useStyles();
  const navigate = useNavigate()

  useEffect(() => {
    setResultHistory(props?.data)
    console.log(props?.data)
  }, [props?.data])

  const showPopup = (index) => {
    const history = [...resultHistory]
    let singlerow = history[index]
    if (singlerow.result == true) {
      singlerow.result = false
      setResultHistory(history)
    } else {
      singlerow.result = true
      setResultHistory(history)
    }
  }

  const ResultHandler = (row) => {

    navigate("/provresultat", {
      state: {
        quizId: row._id,
      },
    });
  };

  function Dropdown(props) {
    const { height, width } = useWindowDimensions();

    return (
      <div className='result_popup'
        onClick={() => props.onClick()}
        style={{ marginRight: width > 900 ? '3.39%' : '4.4%', marginTop: width > 900 ? '4.4%' : '9%', cursor: 'pointer' }}
      >SE resultat
        <div className='popup' ></div>
      </div>
    )
  }

  return (
    <Container maxWidth={false}>
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
              boxShadow: "0px 5px 10px #f2f2f2",
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
                {props.data &&
                  props.data?.map((row) => {
                    {
                      console.log(row, "rowwwwwwwwwwwww");
                    }
                    return (
                      <TableRow
                        key={row.createdAt}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {moment(row?.attemptedDate).format("YYYY.MM.D hh:m")}
                        </TableCell>
                        <TableCell align="left">
                          {row?.simuleraSeason.title}
                        </TableCell>
                        <TableCell style={{ width: "6rem" }} align="left">
                          {row?.correctAnswerCounter} av {row?.totalQuestions}
                        </TableCell>
                        <TableCell align="left">
                          {(
                            (row?.correctAnswerCounter / row?.totalQuestions) *
                            2
                          )
                            .toFixed(1)
                            .replace(/\.0+$/, "")}
                        </TableCell>
                        <TableCell align="left">
                          <MenuIcon row={row} />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          sx={{
            border: "1px solid #e1e1e1",
            borderRadius: ".25rem",
            padding: "1.5rem 0 1.5rem 1.5rem",
            boxShadow: "0px 5px 10px #f2f2f2",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h5"
              component="h5"
              style={{ marginBottom: ".25rem" }}
            >
              Lås upp fler prov
            </Typography>
            <Typography
              style={{ marginBottom: ".25rem" }}
              variant="body2"
              component="body2"
            >
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
    </Container>
  );
};

export default RightBar;
