import React from "react";
import {
  Container,
  makeStyles,
  Box,
  Button,
} from "@material-ui/core";
import Heading from "../../../atom/Heading/Heading";
import BodyText from "../../../atom/BodyText/BodyText";
import InputField from "../../../atom/InputField/InputField";
import FilledBtn from "../../../atom/FilledBtn/FilledBtn";

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

  return (
    <Container className={classes.root}>
      <Box>
        <Heading title="Profil" />
        <Box
          sx={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <BodyText title="E-MAIL" />
          <Box sx={{ marginLeft: "4rem", width: "80%" }}>
            <InputField
              type="email"
              placeholder="magnusbest@hotmail.com"
              name="email"
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ marginLeft: "6.5rem", marginRight: "0.75rem" }}>
          <FilledBtn title="Spara ändringar" />
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
        <Box sx={{marginTop:'1rem'}}>
          <BodyText title="Ta bort mitt konto" />
        </Box>
        <Box sx={{marginTop:'1rem'}}>
          <BodyText title="logga ut" />
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileFeedContent;
