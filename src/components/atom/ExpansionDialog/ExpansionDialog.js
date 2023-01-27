import { Close } from "@mui/icons-material";
import { DialogTitle, Typography, Dialog, DialogContent, Box } from "@material-ui/core";
import MarkLatex from "../Marklatex/MarkLatex";
import RulerButton from "../RulerButton/RulerButton";
import RulerComponent from "../../molecule/RulerComponent";


const ExpansionDialog = ({open, onClose, text, questionLength, title, showRuler, handleShowRuler}) => {
    return (
        <Dialog
              open={open}
              onClose={onClose}
              maxWidth={"lg"}
              fullWidth={true}
            >
              {text && (
                <>
                <DialogTitle style={{ padding: "2rem 5rem 0rem" }}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      textTransform: "uppercase",
                      fontSize: ".85rem",
                      maxWidth: "650px",
                      margin: text.length < 2000 ? "auto": "0",
                    }}
                  >
                    {questionLength && questionLength + " uppgifter"}
                  </Typography>
                </DialogTitle>
                <DialogContent /* 1 column for DTK and 2 columns for LÄS/ELF */
                  style={{
                    position: 'relative',
                    columnCount: `${title === "DTK" || text.length < 2000
                      ? "1"
                      : "2"
                      }`,
                    padding: "0rem 5rem 2rem",
                  }}
                >
                  {title === "DTK" && (
                    <Box display={"flex"} justifyContent="flex-end">
                      <RulerButton
                        onClick={handleShowRuler}
                        isRulerOppened={showRuler}
                      ></RulerButton>
                    </Box>
                  )}
                  <Typography
                    variant="subtitle1"
                    style={{
                      fontSize: ".85rem",
                      maxWidth: "650px",
                      margin: "auto",
                      position: 'relative'
                    }}
                  >
                    <h1 style={{ fontSize: "28px" }}>{title}</h1>
                    <MarkLatex content={text} />

                  </Typography>
                  {title === "DTK" && showRuler && (
                    // <PositionableContainer
                    //   movable
                    //   resizable
                    //   rotatable
                    //   position={position}
                    //   onUpdate={handleUpdate}
                    // >
                    //   <img
                    //     src={Ruler}
                    //     style={{
                    //       background: "#fff",
                    //       width: "100%",
                    //     }}
                    //   ></img>
                    // </PositionableContainer>
                    <RulerComponent></RulerComponent>
                  )}
                </DialogContent>
              </>
              )}
              <Close
                onClick={() => {
                  onClose();
                }}
                style={{
                  position: "absolute",
                  top: "20",
                  right: "20",
                  cursor: "pointer",
                }}
              />
            </Dialog>
    )
}

export default ExpansionDialog;