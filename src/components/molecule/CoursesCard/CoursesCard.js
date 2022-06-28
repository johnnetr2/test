import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import {
  Container,
  Box,
  Typography,
  Stack,
  Chip,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Ellipsis from "../../../assets/Icons/Ellipsis.svg";
import { useNavigate } from "react-router-dom";
import Image70 from '../../../assets/Imgs/image70.png'

const useStyles = makeStyles((theme) => ({
  global: {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },
  root: {
    paddingRight: theme.spacing(0),
    paddingLeft: theme.spacing(0),
  },
  box: {
    paddingRight: theme.spacing(0),
    paddingLeft: theme.spacing(0),
  },
}));

const MenuIcon = () => {
  const options = "STARTA OM";
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "12ch",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        onClick={() => alert('Page is under progress')}
      >
        <MenuItem>{options}</MenuItem>
      </Menu>
    </div>
  );
};

const CoursesCard = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  console.log(props?.quizzes, 'this is number of quizzes')

  const percentage = () => {
    // if (props?.quizzes != undefined) {
      switch (props?.quizzes?.length) {
        case 1:
          return 25;
        case 2:
          return 50;
        case 3:
          return 75;
        case 4:
          return 100;
        default:
          return 0;
      }
    // } else {
    //   return 0
    // }
    
  }

  return (
    <Container style={{ marginTop: '1.3rem' }} disableGutters maxWidth={false}>
      <Box
        className={classes.box}
        sx={{
          border: "1px solid #e1e1e1",
          borderRadius: ".25rem",
          boxShadow: "1px 1px 5px #d4d4d4",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
      >
        <Box sx={{ margin: "0.25rem", padding: "1rem" }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <MenuIcon />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              onClick={() => 
                navigate("/provpassinfo", {
                  state: {
                    id: props.id,
                    session: props.item.simuleraSeason,
                    provpass: props?.quizzes
                  },
                })
              }
            >
              <Typography variant="h5" component="h5">
                {" "}
                {props?.item?.simuleraSeason.title}{" "}
              </Typography>
              <Typography variant="body2" component="body2">
                {" "}
                {props?.item?.simuleraSeason.month}{" "}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                style={{ display: "flex", flexWrap: "wrap", gap: '0.1rem' }}
              >
                {[1,2,3,4].map(item=> {
                    return <Chip
                      label={'Provpass ' + item}
                      style={{ backgroundColor: item <= props.quizzes && props?.quizzes?.length ? "#6FCF97" : '#E1E1E1', color: "#505050" }}
                      size="small"
                    />
                  
                }) }
                <Typography variant="body2" component="body2">
                  {percentage()}%
                </Typography>
              </Stack>
            </Box>
            {
              props?.item?.simuleraQuiz.length < 4 ? (
                <Box
                  sx={{
                    display: "flex",
                    // alignItems: "center",
                    flexDirection: "column",
                    marginRight: '6rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      style={{
                        display: 'flex', fontSize: '3rem', color: '#505050',
                        marginBottom: '1rem',
                      }} >
                      -
                    </Typography>
                    <Typography
                      variant="body2"
                      component="body2"
                      style={{ marginLeft: ".5rem", marginTop: ".5rem", color: '#505050', }}
                    >
                      {" "}
                      {'Poäng'}{" "}
                    </Typography>
                    <img src={Image70} style={{ marginLeft: '1.5rem', marginBottom: '1rem' }} />
                  </Box>
                </Box>               
              ) : (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography variant="h4" component="h4">
                        {" "}
                        {props.progress}{" "}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="body2"
                        style={{ marginLeft: ".5rem", marginTop: ".5rem" }}
                      >
                        {" "}
                        {'Poäng'}{" "}
                      </Typography>
                    </Box>
                    <Box>
                      <Button
                        variant="outlined"
                        style={{ width: "10rem", textTransform: "capitalize" }}
                      >
                        Gör om prov
                      </Button>
                    </Box>
                  </Box>
              )
            }

          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CoursesCard;
