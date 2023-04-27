import { Box, Button, Container, makeStyles } from "@material-ui/core";
import { EndPoints, instance2 } from "../../../service/Route";
import React, { useEffect, useState } from "react";

import BodyText from "../../../atom/BodyText/BodyText";
import Heading from "../../../atom/Heading/Heading";
import InputField from "../../../atom/InputField/InputField";
import PasswordUpdationDialog from "../../../molecule/PasswordUpdationDialog/PasswordUpdationDialog";
import Snackbar from "../../../molecule/Snackbar/Snackbar";
import swal from "sweetalert";

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
  const [isOpen, setIsOpen] = useState(false);
  // const [show, setShow] = useState(false);
  const [showSnack, setShowSnack] = useState();
  const [data, setData] = useState('')

  const LogoutFunc = () => {
    console.log("log out function");
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
            if (response.data.message === "deleted Student") {
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
    <Container className={classes.root} maxWidth={false}>
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
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ padding: "1rem 0" }} flexBasis={"20%"}>
            <BodyText title="E-postadress :" />
          </Box>
          <Box flexBasis={"80%"}>
            <InputField
              type="email"
              placeholder="magnusbest@hotmail.com"
              name="email"
              style={{
                width: "100%",
                height: "3rem",
                padding: "1rem",
                border: "1px solid #e1e1e1",
                marginBottom: "1rem",
                borderRadius: '7.5px'
              }}
              onChange={(e) => setData(e.target.value)}
            />
            <Box sx={{
              display: 'flex', 
              justifyContent: 'center',
              backgroundColor: data.length > 0 ? '#0A1596' : '#E1E1E1', 
              height: '3rem',
              alignItems: 'center',
              borderRadius: '7.5px',
              color: data.length > 0 ? '#FFFFFF' : '#505050',
              cursor: data.length > 0 && 'pointer'
            }}>
              <Box
                onClick={() => console.log(data.length)}
              >
                Spara ändringar
              </Box>
              {/* <FilledBtn
                title="Spara ändringar"
                // onClick={() => setShow(true)}
              /> */}
            </Box>
          </Box>
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
        <Box flexBasis={"20%"} >
          <BodyText title="Lösenord" />
        </Box>
        <Box flexBasis={"80%"}>
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
        <Box
          sx={{ marginTop: "1rem", color: "red", cursor: "pointer" }}
          onClick={() => LogoutFunc()}
        >
          <BodyText title="Logga ut" />
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileFeedContent;
