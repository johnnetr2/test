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
import useWindowDimensions from "../../../molecule/WindowDimensions/dimension";

const useStyles = makeStyles((theme) => ({
  topspace: {
    paddingTop: theme.spacing(18),
  },
}));

const RightBar = (props) => {
  const [resultHistory, setResultHistory] = useState();
  const classes = useStyles();
  const navigate = useNavigate();
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setResultHistory(props?.data);
    console.log(props?.data);
  }, [props?.data]);

  const showPopup = (index) => {
    const history = [...resultHistory];
    let singlerow = history[index];
    if (singlerow.result == true) {
      singlerow.result = false;
      setResultHistory(history);
    } else {
      singlerow.result = true;
      setResultHistory(history);
    }
  };

  const ResultHandler = (row) => {
    navigate("/provresultat", {
      state: {
        quizId: row._id,
      },
    });
  };

  function Dropdown(props) {
    return (
      <div className="result_popup" onClick={() => props.onClick()}>
        SE resultat
        <div className="popup"></div>
      </div>
    );
  }

  return (
    <Container
      maxWidth={false}
      style={{
        paddingLeft: "3rem",
        paddingRight: "3rem",
        marginLeft: width < 900 && "2.5rem",
      }}
    >
      <Box
        sx={{
          backgroundColor: width < 900 ? "#fff" : "#fafafa",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          className={classes.topspace}
          style={{
            marginBottom: "2rem",

            marginTop: "1.3rem",
          }}
        >
          <Typography variant="h6" component="h6">
            Dina slutförda prov
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            textTransform: "uppercase",
            marginBottom: "1.1rem",
            width: "100%",
            alignItems: "flex-end",
          }}
        >
          <Typography
            style={{
              marginLeft: width > 900 ? "7.2%" : "6.3%",
              fontSize: "14px",
            }}
          >
            Datum
          </Typography>

          <Typography
            style={{
              marginLeft: width > 900 ? "19.5%" : "15.5%",
              fontSize: "14px",
            }}
          >
            Prov
          </Typography>

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: width > 900 ? "16.5%" : "14%",
            }}
          >
            <Typography style={{ fontSize: "14px" }}>Antal</Typography>
            <Typography style={{ fontSize: "14px" }}>poäng</Typography>
          </Box>

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: width > 900 ? "8%" : "7.5%",
            }}
          >
            <Typography style={{ fontSize: "14px" }}>normerad</Typography>
            <Typography style={{ fontSize: "14px" }}>poäng</Typography>
          </Box>
        </Box>
        <Box className={classes.tablespace} style={{ marginBottom: "2rem" }}>
          <Box style={{ marginBottom: "2rem" }}>
            <TableContainer
              style={{
                border: "1px solid #e1e1e1",
                borderRadius: ".25rem",
                // padding: "1rem",
                boxShadow: "0px 5px 10px #f2f2f2",
                backgroundColor: "#fff",
                display: "flex",
              }}
            >
              <Table aria-label="simple table">
                <TableBody>
                  {resultHistory &&
                    resultHistory?.map((row, index) => {
                      return (
                        <TableRow
                          key={row.createdAt}
                          // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {moment(row?.createdAt).format("YYYY.MM.D hh:m")}
                          </TableCell>
                          {/* <Box style={{ display: 'flex' }}> */}
                          <TableCell align="left">
                            <Typography style={{ fontSize: "14px" }}>
                              {row?.simuleraSeason.title},
                            </Typography>
                            <Typography style={{ fontSize: "14px" }}>
                              {row?.simuleraSeason.month}
                            </Typography>
                          </TableCell>
                          {/* </Box> */}

                          <TableCell style={{ width: "6rem" }} align="left">
                            {row?.totalAnswer ? row?.totalAnswer : 0} av{" "}
                            {row?.totalQuestions ? row?.totalQuestions : 0}
                          </TableCell>
                          <TableCell align="left">
                            {row?.totalAnswer
                              ? ((row?.totalAnswer / row?.totalQuestions) * 2)
                                  .toFixed(1)
                                  .replace(/\.0+$/, "")
                              : 0}
                          </TableCell>
                          <TableCell
                            style={{
                              cursor: "pointer",
                              display: "flex",
                              color: "grey",
                              height: "5rem",
                              alignItems: "center",
                              width: ".5rem",
                            }}
                          >
                            <Box
                              style={{
                                // display: "flex",
                                // flexDirection: "column",
                                // justifyContent: "center",
                                // alignItems: "flex-end",
                                // width: "1.1rem",
                                display: "flex",
                                flexDirection: "column",
                                display: "flex",
                                alignItems: "flex-end",
                                position: "relative",
                              }}
                            >
                              <MoreVertIcon
                                onClick={() =>
                                  row?.totalQuestions && showPopup(index)
                                }
                              />
                              {row.result && (
                                <Dropdown onClick={() => ResultHandler(row)} />
                              )}
                            </Box>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          {/* Hide unlock premium card */}
          {/* <Box
            sx={{
              border: "1px solid #e1e1e1",
              borderRadius: ".25rem",
              boxShadow: "0px 5px 10px #f2f2f2",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "space-between",
              // width: "33rem",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                height: "12rem",
                marginLeft: "2rem",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                style={{
                  height: "5rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5" component="h5">
                  Lås upp fler prov
                </Typography>
                <Typography variant="body2" component="body2">
                  Lås upp premiumfunktioner <br /> endast för 199 sek per
                  sektion
                </Typography>
              </Box>

              <Button
                contained
                style={{
                  backgroundColor: "#0A1596",
                  textTransform: "capitalize",
                  color: "#fff",
                  width: "12rem",
                }}
              >
                Lås upp prov
              </Button>
            </Box>
            <Box>
              <img style={{ height: "10rem" }} src={Thumb} alt="" />
            </Box>
          </Box> */}
        </Box>
      </Box>
    </Container>
  );
};

export default RightBar;
