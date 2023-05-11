
import { Box, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import ArrowSalt from "../../../assets/Icons/ArrowSalt.svg";
import QuestionStatement from "../QuestionStatement/QuestionStatement";
import ExpansionDialog from "../../atom/ExpansionDialog/ExpansionDialog";
import MarkLatex from "../../atom/Marklatex/MarkLatex";
import { Close } from "@mui/icons-material";


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
              /* Lines 61 and 94 are changed for making " uppgift and uppgifter" dynamic to be grammarly correct*/}
            <Typography>
              {questionLength === 1 ? "1 uppgift" : (questionLength || 0) + " uppgifter"}
            </Typography>
            <Typography>
              {(questionLength ? questionLength : 0) + " uppgifter:"}
            </Typography> 
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
            <Typography variant="h6" component="h6">
              {title ? title : ""}
            </Typography>
            <MarkLatex content={text}/>
            <Dialog
              open={extendedView}
              onClose={closeExtended}
              maxWidth={"lg"}
              fullWidth={true}
            >
              {text && (
                <>
                  <DialogTitle style={{ padding: "2rem 5rem 2rem" }}>
                    <Typography
                      variant="subtitle1"
                      style={{
                        textTransform: "uppercase",
                        fontSize: ".7rem",
                        fontWeight: "500",
                      }}
                    >
                      {questionLength === 1 ? "1 uppgift" : (questionLength || 0) + " uppgifter"}
                    </Typography>
                    <Typography variant="h3" component="h3">
                      {!title === "DTK" ? title : ""}
                    </Typography>
                  </DialogTitle>
                  <DialogContent 
                    style={{
                      columnCount: `${title === "DTK" || text.length < 2000
                        ? "1"
                        : "2"
                        }`,
                      padding: "0 5rem 2rem",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontSize: ".85rem",
                        maxWidth: "650px",
                        margin: "auto",
                      }}
                    >
                      <MarkLatex content={text} />
                    </Typography>
                  </DialogContent>
                </>
              )}
              <Close
                onClick={() => {
                  setExtendView(false);
                }}
                style={{
                  position: "absolute",
                  top: "20",
                  right: "20",
                  cursor: "pointer",
                }}
              />
            </Dialog>
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