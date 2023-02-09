import { useState } from "react";
import GridLayout from "../../GridOrg/GridLayout";
import BottomNavBar from "../../../molecule/BottomNavBar/BottomNavBar";
import HomeFeedContent from "../HomeFeedContent/HomeFeedContent";
import LeftBar from "../../LeftBarOrg/LeftBar";
import HomeRightBar from "../HomeRightBar/HomeRightBar";
import HomeLeftBar from "../HomeLeftBar/HomeLeftBarV0";
// import { Container, Grid, makeStyles, Typography, Box } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   right: {
//     [theme.breakpoints.down("1200")]: {
//       display: "none",
//     },
//   },
//   main: {
//     minHeight: "100vh",
//     [theme.breakpoints.up("1300")]: {
//       display: "flex",
//       justifyContent: "space-between",
//     },
//     [theme.breakpoints.down("1280")]: {
//       display: "flex",
//       justifyContent: "flex-start",
//     },
//   },
//   leftBarHide: {
//     [theme.breakpoints.down("600")]: {
//       display: "none",
//     },
//   },
// }));

// const classes = useStyles();

const HomeMainOrg = (props) => {
  const [totalPrognos, setTotalPrognos] = useState(0);
  return (
    // <Container maxWidth="false" disableGutters>
    //   <Grid container wrap="nowrap" className={classes.main}>
    //     <Grid
    //       item
    //       className={classes.leftBarHide}
    //       style={{ maxWidth: "6rem" }}
    //       xs={1}
    //       sm={1}
    //       md={1}
    //       lg={1}
    //       xl={1}
    //     >
    //       <HomeLeftBar
    //         currentPage="home"
    //         toggleIcon={props.toggleIcon}
    //         setToggleIcon={props.setToggleIcon}
    //       />
    //     </Grid>

    //     <Grid item xs={12} sm={10} lg={7} xl={7} style={{ margin: "0 auto" }}>
    //       <HomeFeedContent
    //         getPrognos={(e) => setTotalPrognos(e)}
    //         studentPreference={
    //           props?.StudentPreference && props?.StudentPreference
    //         }
    //       />
    //     </Grid>
    //     <Grid
    //       item
    //       style={{
    //         width: "35rem",
    //         backgroundColor: "#fafafa",
    //       }}
    //       className={classes.right}
    //     >
    //       <HomeRightBar
    //         totalPrognos={totalPrognos && totalPrognos}
    //         studentPreference={
    //           props?.StudentPreference && props?.StudentPreference
    //         }
    //       />
    //     </Grid>
    //   </Grid>
    //   <BottomNavBar currentPage="home" />
    // </Container>
    <GridLayout
      leftBar={<HomeLeftBar currentPage="home" />}
      middle={
        <HomeFeedContent
          getPrognos={(e) => setTotalPrognos(e)}
          studentPreference={
            props?.StudentPreference && props?.StudentPreference
          }
        />
      }
      rightBar={
        <HomeRightBar
          totalPrognos={totalPrognos && totalPrognos}
          studentPreference={
            props?.StudentPreference && props?.StudentPreference
          }
        />
      }
      bottomNav={<BottomNavBar currentPage="home" />}
    />
  );
};

export default HomeMainOrg;
