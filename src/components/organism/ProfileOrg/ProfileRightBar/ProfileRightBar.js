import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";
import Thumb from "../../../../assets/Imgs/Thumb.png";
import InputField from '../../../atom/InputField/InputField'

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
        <Box className={classes.topspace} style={{ marginBottom: "2rem", border:'1px solid #212121', display:'flex', alignItems:'center', flexDirection:'column' }}>
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
          <Typography variant="body2" style={{textAlign:'center', width:'70%'}}>
            Känner du någon som du tror skulle gilla HP-appen? Endast ett
            begränsat antal användare kan få tillgång till Beta-versionen av
            HP-appen, så välj nogrannt vilka du bjuder in!
          </Typography>
        </Box>
        <Box>
          <Typography variant='body1'>Email</Typography>
          <InputField/>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileRightBar;
