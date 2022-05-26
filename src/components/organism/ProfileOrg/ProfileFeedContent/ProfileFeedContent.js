import React, { useEffect, useState } from "react";
import { Container, makeStyles, Box, Button } from "@material-ui/core";
import Heading from "../../../atom/Heading/Heading";
import BodyText from "../../../atom/BodyText/BodyText";
import InputField from "../../../atom/InputField/InputField";
import FilledBtn from "../../../atom/FilledBtn/FilledBtn";
import swal from "sweetalert";
import { instance2, EndPoints } from "../../../service/Route";
import PasswordUpdationDialog from "../../../molecule/PasswordUpdationDialog/PasswordUpdationDialog";
import { useNavigate } from "react-router-dom";
import Snackbar from "../../../molecule/Snackbar/Snackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  test: {
    border: "2px solid #212121",
  },
}));

const ProfileFeedContent = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showSnack, setShowSnack] = useState();

  const LogoutFunc = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("fullName");
    localStorage.removeItem("email");
    window.location.href = "/login";
  };

  const DeleteFunc = (id) => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const URL = EndPoints.deleteAccount + localStorage.getItem("userId");
        instance2
          .delete(URL)
          .then((response) => {
            console.log(response);
            if (response.data.message == "deleted Student") {
              localStorage.removeItem("userId");
              localStorage.removeItem("token");
              localStorage.removeItem("role");
              localStorage.removeItem("fullName");
              localStorage.removeItem("email");
              swal("Success", "Account deleted successfully", "success");
              window.location.href = "/";
            } else {
              swal("warning", response.data.message, "warning");
            }
          })
          .catch((error) => {
            swal("Oops!", "Something went wrong.", "error");
          });
      }
    });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
    } else {
      swal({
        title: "Please login to continue",
        icon: "warning",
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          window.location.href = "/login";
        } else {
          window.location.href = "/login";
        }
      });
    }
  }, []);

  return (
    <Container className={classes.root}>
      <Snackbar show={showSnack} onClose={() => setShowSnack(false)} />
      <PasswordUpdationDialog
        showPopup={isOpen}
        hidePopup={() => setIsOpen(false)}
        showSnackbar={() => setShowSnack(true)}
      />
      <Box>
        <Heading title="Profil" />
        <Box
          sx={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <BodyText title="E-MAIL" />
          <Box sx={{ width: "65%" }}>
            <InputField
              type="email"
              placeholder="magnusbest@hotmail.com"
              name="email"
              style={{
                width: "100%",
                height: "3rem",
                marginTop: ".5rem",
                marginBottom: "1rem",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{ width: "24rem" }}>
          <FilledBtn title="Spara ändringar" onClick={() => setShow(true)} />
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <BodyText title="lösenord" />
        <Box sx={{ marginLeft: "4rem", width: "80%" }}>
          <Button
            variant="outlined"
            style={{
              border: "1px solid #0A1596",
              textTransform: "initial",
              color: "#0A1596",
              fontWeight: 400,
            }}
            onClick={() => setIsOpen(true)}
          >
            Ändra lösenord
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <Box sx={{ marginTop: "1rem", color: "red", cursor: "pointer" }}>
          <BodyText title="Ta bort mitt konto" onClick={DeleteFunc} />
        </Box>
        <Box sx={{ marginTop: "1rem", color: "red", cursor: "pointer" }}>
          <BodyText title="logga ut" onClick={LogoutFunc} />
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileFeedContent;
