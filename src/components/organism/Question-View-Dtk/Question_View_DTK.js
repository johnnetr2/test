import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const Question_View_DTK = () => {


    const useStyles = makeStyles((theme)=> ({
        root: {
            minHeight: '100vh',
            backgroundColor:'#fff',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box'
        },
        header: {
            minHeight: '10vh',
            backgroundColor:'#f9f9f9',
            border: '1px solid #b4b4b4',
        },
        title: {
            backgroundColor:'#f9f9f9',
            color: '#000000',
            fontSize:'1rem',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            minHeight:'10vh'
        },
        content: {
            minHeight: '90vh',
            backgroundColor:'#e1e1e1',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            width:'90vw'
        }
    }))

    const classes = useStyles();

  return <div>
      <div className={classes.root}>
            <div className={classes.header}>
                <h3 className={classes.title}>DTK</h3>
            </div>
            <div className={classes.content}>
            </div>
      </div>
      {/* <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          m: 0,
          p: 3,
          height: 70,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#e1e1e1' : '#f9f9f9'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          fontSize: '0.875rem'
        }}
      >
          <Box sx={{ width: 50 }}>Item 1</Box>
          <Box sx={{ alignSelf: 'flex-end' }}>Item 2</Box>
          <Box sx={{ alignSelf: 'flex-end' }}>Item 3</Box>
      </Box>
      </div> */}
  </div>;
};

export default Question_View_DTK;
