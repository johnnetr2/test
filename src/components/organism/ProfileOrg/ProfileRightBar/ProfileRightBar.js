import React from "react";
import { Container, makeStyles, Typography, Box } from "@material-ui/core";
import InputField from "../../../atom/InputField/InputField";
import FilledBtn from "../../../atom/FilledBtn/FilledBtn";

const useStyles = makeStyles((theme) => ({
  topspace: {
    paddingTop: theme.spacing(18),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  tablespace: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const ProfileRightBar = () => {
  const classes = useStyles();

  return (
    <Container
      maxWidth={false}
      style={{
        backgrounColor: "#fafafa",
        width: "27rem",
      }}
    >
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
          <Typography variant="body2" style={{ textAlign: "center" }}>
            Känner du någon som du tror skulle gilla HP-appen? Endast ett
            begränsat antal användare kan få tillgång till Beta-versionen av
            HP-appen, så välj nogrannt vilka du bjuder in!
          </Typography>
        </Box>
        <Box className={classes.tablespace} sx={{ width: "100%" }}>
          <Box sx={{ marginTop: "3rem" }}>
            <Typography variant="body1">Email</Typography>
            <InputField
              placeholder="Enter your Email"
              style={{
                width: "100%",
                height: "3rem",
                padding: "1rem",
                border: "1px solid #e1e1e1",
                marginTop: ".5rem",
                borderRadius: "5px",
                marginBottom: "1rem",
              }}
            />
            <FilledBtn title="Bjud in" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileRightBar;
