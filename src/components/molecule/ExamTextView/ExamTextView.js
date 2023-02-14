import { Close } from "@mui/icons-material";
import { Box, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import MarkLatex from "../../atom/Marklatex/MarkLatex";
import ArrowSalt from "../../../assets/Icons/ArrowSalt.svg";
import QuestionStatement from "../QuestionStatement/QuestionStatement";
import RulerButton from "../../atom/RulerButton/RulerButton";
import RulerComponent from "../../molecule/RulerComponent";
import ExpansionDialog from "../../atom/ExpansionDialog/ExpansionDialog";


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
  }
}));

const ExamTextView = ({text, title, questionLength}) => {
  const [extendedView, setExtendView] = useState(false);
  const [showRuler, setShowRuler] = useState(false);
  const [position, setPosition] = useState({
    left: "85%",
    top: "37.5%",
    width: "75px",
    height: "450px",
    rotation: "0deg",
  });

  const handleShowRuler = () => {
    setShowRuler((prevState) => !prevState)
    setPosition({
      left: "85%",
      top: "37.5%",
      width: "75px",
      height: "450px",
      rotation: "0deg",
    })
  };
  
  const classes = useStyles();
  
  const closeExtended = () => {
    setExtendView(false);
  }

    return  (
        <Box
         mt={5}
         paddingX={{ xs: 4, md: 10 }}
         paddingY={2}
         sx={{
            backgroundColor: "#fff",
            width: "100%",
            maxWidth: 600,
            height: 373,
            overflow: "auto",
            border: "1px solid #e1e1e1",
        }}
        className={classes.scrollbar}
        style={{ position: "relative" }}
        >
          <QuestionStatement
            numberOfQuestions={questionLength}
            title={title}
            description={text}
          />
            {/* <Typography
              variant="subtitle1"
              style={{
                fontSize: ".7rem",
                fontWeight: "500",
                marginBottom: ".25rem",
              }}
            >
              {(questionLength ? questionLength : 0) + " uppgifter:"}
            </Typography> */}
            <img
              onClick={() => setExtendView(true)}
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                cursor: "pointer",
              }}
              src={ArrowSalt}
            />
           <ExpansionDialog
            open={extendedView}
            onClose={closeExtended}
            title={title}
            text={text}
            questionLength={questionLength}
            handleShowRuler={handleShowRuler}
            showRuler={showRuler}
           />
        </Box>
    )
}

export default ExamTextView;