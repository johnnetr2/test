import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Container, Box, Typography, Stack, Chip, Button } from '@mui/material'
import Ellipsis from '../../../assets/Icons/Ellipsis.svg' 

const useStyles = makeStyles((theme) =>
({
    global: {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box'
    },
    root: {
        paddingRight: theme.spacing(0),
        paddingLeft: theme.spacing(0)
    },
    box: {
        paddingRight: theme.spacing(0),
        paddingLeft: theme.spacing(0),
        
    }
}))

const CoursesCard = () => {

    const classes = useStyles();

    return (
        <Container disableGutters maxWidth={false}>
            <Box className={classes.box} sx={{ border: '1px solid #e1e1e1', borderRadius: '.25rem', padding:'1.5rem', boxShadow: '1px 1px 5px #d4d4d4', backgroundColor: 'transparent' }}>

                <Box sx={{margin:'0.25rem'}}>
                    <Box sx={{ display:'flex', justifyContent:'flex-end'}}>
                        <img src={Ellipsis} alt="" />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography variant='h5' component='h5'> Hösten 2021 </Typography>
                            <Typography variant='body2' component='body2'> Oktober </Typography>
                            <Stack direction="row" spacing={1}>
                                <Chip label="Provpass 1" color="primary" size="small" />
                                <Chip label="Provpass 2" color="primary" size="small" />
                                <Chip label="Provpass 3" color="primary" size="small" />
                                <Chip label="Provpass 4" color="primary" size="small" />
                                <Typography variant="body2" component="body2">100%</Typography>
                            </Stack>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='h4' component='h4'> 1.4 </Typography>
                                <Typography variant='body2' component='body2' style={{ marginLeft: '.5rem', marginTop: '.5rem' }}> Oktober </Typography>
                            </Box>
                            <Box>
                                <Button variant='outlined' style={{ width: '10rem', textTransform: 'capitalize' }}>Gör om prov</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default CoursesCard