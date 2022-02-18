import React from 'react'
import { Container, makeStyles, Typography, Box } from "@material-ui/core";
import { Link } from 'react-router-dom'
import Heading from '../../../atom/heading/Heading'
import BodyText from '../../../atom/body-text/BodyText';

const useStyles = makeStyles((theme) =>
({
  root: {
    paddingTop: theme.spacing(4)
  }
}))

const FeedContent = () => {

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Heading title="Simulera Prov" />
      <BodyText title="Gör prov från tidigare år eller välj att slumpa ett helt prov med uppgifter från gamla prov du inte stött på tidigare. " />
      {/* <Box sx={{display:'flex'}}> */}
      <Box style={{ border: '1px solid #252525', maxWidth: '30rem', display: 'flex', justifyContent: 'space-between', marginTop: '3rem', marginBottom: '3rem' }}>
        <Link to='/all' style={{ color: '#252525', textDecoration: 'none' }}>Alla</Link>
        <Link to='/tidigareHögskoleprov' style={{ color: '#252525', textDecoration: 'none' }}>Tidigare högskoleprov</Link>
        <Link to='slumpmässigtProv' style={{ color: '#252525', textDecoration: 'none', fontSize: '1rem' }}>Slumpmässigt prov</Link>

        
        </Box>
        <Box sx={{border:'1px solid #212121', maxWidth:'40px', marginLeft:'5rem'}}>
          ajkhaksljdfksjaljasldkfjsadlfkhellooiasudfoisa 
        </Box>

      {/* </Box> */}
    </Container>
  )
}

export default FeedContent