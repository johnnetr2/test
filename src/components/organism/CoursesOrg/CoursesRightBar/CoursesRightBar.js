import React, { useState, useEffect } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../../molecule/WindowDimensions/dimension";
import PaymentCard from "../../../molecule/PaymentCard";

const useStyles = makeStyles((theme) => ({
  // topspace: {
  //   paddingTop: theme.spacing(18),
  // },
  tableHeadBackgroundColor: {
    backgroundColor: "transparent",
  },
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

const RightBar = (props) => {
  const [resultHistory, setResultHistory] = useState();
  const classes = useStyles();
  const navigate = useNavigate();
  const { height, width } = useWindowDimensions();
  const isPremium = JSON.parse(localStorage.getItem("isPremium"))
  useEffect(() => {
    setResultHistory(props?.data);
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
        quizId: row?._id,
        seasonId: row?.simuleraSeason?._id,
        provpassOrder: props?.provpassOrderBySeason[row?.simuleraSeason?._id] ?? [],
      },
    });
  };
  const columns = [
    { id: "datum", label: "Datum", minWidth: 165 },
    {
      id: "prov",
      label: "Prov",
      minWidth: 200,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "Antal poäng",
      label: "Antal Poäng",
      minWidth: 90,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "Normerad Poäng",
      label: "Normerad Poäng",
      minWidth: 15,
      align: "left",
      format: (value) => value.toFixed(2),
    },
    {
      id: "",
      label: "",
      minWidth: 5,
      align: "left",
      format: (value) => value.toFixed(2),
    },
  ];

  function Dropdown(props) {
    return (
      <div className="result_popup" onClick={() => props.onClick()}>
        SE resultat
        <div className="popup"></div>
      </div>
    );
  }

  return (
    <Container maxWidth={false} style={{ maxWidth: "800px" }}>
      <Box
        sx={{
          backgroundColor: width < 900 ? "#fff" : "#fafafa",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {!isPremium &&
          <Box sx={{ marginTop: '4rem' }}>
            <PaymentCard
              title={"Få exklusiva fördelar som förbereder dig för Högskoleprovet."}
            ></PaymentCard>
          </Box>
        }
        <Box
          style={{
            marginBottom: "1rem",
            marginTop: !isPremium ? "6rem" : "11rem",
          }}
        >
          <Typography variant="h6" component="h6">
            Dina slutförda prov
          </Typography>
        </Box>
        <Box style={{ marginBottom: "2rem" }}>
          <TableHead className={classes.tableHeadBackgroundColor}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: 500,
                    margin: 0,
                    border: 0,
                  }}
                >
                  {" "}
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableContainer
            style={{
              backgroundColor: "#fff",
              display: "flex",
              overflowY: "auto",
              overflowX: "hidden",
              maxHeight: "60vh",
              border: "1px solid #e1e1e1",
              borderRadius: "5px",
              boxShadow: "0px 5px 10px #f2f2f2",
            }}
            className={classes.scrollbar}
          >
            <Table aria-label="simple table">
              <TableBody>
                {resultHistory &&
                  resultHistory?.map((row, index) => {
                    return (
                      <TableRow key={row.createdAt}>
                        <TableCell component="th" scope="row">
                          {moment(row?.createdAt).format("YYYY.MM.DD hh:mm")}
                        </TableCell>
                        <TableCell align="left">
                          <Typography style={{ fontSize: "14px" }}>
                            {row?.simuleraSeason?.title}, {row?.simuleraSeason?.month}
                          </Typography>
                          <Typography style={{ fontSize: "14px" }}>

                          </Typography>
                        </TableCell>
                        <TableCell style={{ width: "6rem" }} align="left">
                          {row?.totalAnswer ? row?.totalAnswer : 0} av{" "}
                          {row?.totalQuestions ? row?.totalQuestions : 0}
                        </TableCell>
                        <TableCell align="left">
                          {row?.normering}
                        </TableCell>
                        <TableCell
                          style={{
                            cursor: "pointer",
                            color: "#B4B4B4",
                          }}
                        >
                          <Box
                            style={{
                              display: "flex",
                              flexDirection: "column",
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
      </Box>
    </Container>
  );
};

export default RightBar;
