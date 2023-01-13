import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { appColors } from "../../service/commonService";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiPaper-root": {
    width: "60%",
    maxWidth: "700px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 1 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function CommonPopup({
  closePopup,
  title,
  status,
  description,
  redirect,
  agreeBtnName,
  cancelBtnName,
  oneButtonPopup = false,
}) {
  return (
    <div>
      <Box>
        <BootstrapDialog
          onClose={closePopup}
          aria-labelledby="customized-dialog-title"
          open={status}
          style={{
            textAlign: "center",
          }}
          maxWidth="xxl"
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={closePopup}
            style={{ textAlign: "right" }}
          ></BootstrapDialogTitle>
          <DialogContent
            style={{
              padding: "2rem 5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography gutterTop variant="h4" style={{ width: "100%" }}>
              {title}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              style={{ marginTop: "1rem", width: "100%" }}
            >
              {description}
            </Typography>
          </DialogContent>
          <DialogActions style={{ display: "flex", justifyContent: "center" }}>
            {oneButtonPopup ? (
              <Button
                onClick={() => redirect()}
                style={{
                  backgroundColor: appColors.blueColor,
                  color: "#fff",
                  textTransform: "capitalize",
                  fontWeight: "regular",
                  padding: ".60rem 3rem",
                  marginBottom: "2rem",
                  border: `1px solid ${appColors.blueColor}`,
                  borderRadius: "3px",
                }}
              >
                {agreeBtnName}
              </Button>
            ) : (
              <>
                <Button
                  onClick={closePopup}
                  style={{
                    backgroundColor: "transparent",
                    color: appColors.blueColor,
                    border: `1px solid ${appColors.blueColor}`,
                    textTransform: "capitalize",
                    fontWeight: "regular",
                    padding: ".60rem 3rem",
                    marginBottom: "2rem",
                    borderRadius: "3px",
                  }}
                >
                  {cancelBtnName}
                </Button>
                <Button
                  onClick={() => redirect()}
                  style={{
                    backgroundColor: appColors.blueColor,
                    color: "#fff",
                    textTransform: "capitalize",
                    fontWeight: "regular",
                    padding: ".60rem 3rem",
                    marginBottom: "2rem",
                    border: `1px solid ${appColors.blueColor}`,
                    borderRadius: "3px",
                  }}
                >
                  {agreeBtnName}
                </Button>
              </>
            )}
          </DialogActions>
        </BootstrapDialog>
      </Box>
    </div>
  );
}
