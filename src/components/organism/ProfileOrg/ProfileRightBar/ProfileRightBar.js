import React from "react";
import { Container, makeStyles, Typography, Box } from "@material-ui/core";
import InputField from "../../../atom/InputField/InputField";
import FilledBtn from "../../../atom/FilledBtn/FilledBtn";

const useStyles = makeStyles((theme) => ({
  topspace: {
    paddingTop: theme.spacing(18),
    paddingLeft: theme.spacing(2),
  },
  tablespace: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const ProfileRightBar = () => {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth={false}>
      <Box sx={{ backgroundColor: "#fafafa" }}>
        <Box
          className={classes.topspace}
          style={{
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            style={{
              textTransform: "uppercase",
              fontSize: "1rem",
              fontWeight: "400",
            }}
          >
            Du har 4 inbjudningar
          </Typography>
          <Typography
            variant="body2"
            style={{ textAlign: "center", width: "70%" }}
          >
            Känner du någon som du tror skulle gilla HP-appen? Endast ett
            begränsat antal användare kan få tillgång till Beta-versionen av
            HP-appen, så välj nogrannt vilka du bjuder in!
          </Typography>
        </Box>
        <Box paddingX={10} sx={{ width: "100%" }}>
          <Box sx={{ marginTop: "3rem"}}>
            <Typography variant="body1">Email</Typography>
            <InputField placeholder="Enter your Email" />
            <FilledBtn title="Bjud in" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileRightBar;
