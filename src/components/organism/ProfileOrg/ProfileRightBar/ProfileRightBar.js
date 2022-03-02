import React from 'react'
import { Container, makeStyles, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@material-ui/core";
import Thumb from '../../../../assets/Imgs/Thumb.png'

const useStyles = makeStyles((theme) => ({
  topspace: {
    paddingTop: theme.spacing(18),
    paddingLeft: theme.spacing(2)
  },
  tablespace: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }
}))

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('21.09.24 10:38', 'Hösten 2021, Oktober', '0 av 160', 0.0, ':'),
  createData('21.09.24 10:38', 'Hösten 2021, Oktober', '0 av 160', 0.0, ':'),
  createData('21.09.24 10:38', 'Hösten 2021, Oktober', '0 av 160', 0.0, ':'),
  createData('21.09.24 10:38', 'Hösten 2021, Oktober', '0 av 160', 0.0, ':'),
  createData('21.09.24 10:38', 'Hösten 2021, Oktober', '0 av 160', 0.0, ':'),
];

const ProfileRightBar = () => {

  const classes = useStyles();

  return (
    <Container disableGutters maxWidth={false}>
      <Box sx={{ backgroundColor: '#fafafa' }}>
        <Box className={classes.topspace} style={{ marginBottom: '2rem' }}>
          <Typography variant="h6" component="h6">Dina slutförda prov</Typography>
        </Box>
        <Box className={classes.tablespace} style={{ marginBottom: '2rem' }}>
          <Box style={{ marginBottom: '2rem' }}>
            <TableContainer style={{ border: '1px solid #e1e1e1', borderRadius: '.25rem', padding: '1.5rem', boxShadow: '1px 1px 5px #d4d4d4', backgroundColor: '#fff' }}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Datum </TableCell>
                    <TableCell align="left">Prov</TableCell>
                    <TableCell align="left">Antal</TableCell>
                    <TableCell align="left">Normerad</TableCell>
                    <TableCell align="left"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.calories}</TableCell>
                      <TableCell align="left">{row.fat}</TableCell>
                      <TableCell align="left">{row.carbs}</TableCell>
                      <TableCell align="left">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box sx={{ border: '1px solid #e1e1e1', borderRadius: '.25rem', padding: '1.5rem', boxShadow: '1px 1px 5px #d4d4d4', backgroundColor: '#fff', display:'flex', justifyContent:'space-between' }}>
            <Box style={{display:'flex', flexDirection:'column'}}>
              <Typography variant="h5" component="h5">Lås upp fler prov</Typography>
              <Typography variant="body2" component="body2">Lås upp premiumfunktioner
                endast för 199 sek per sektion</Typography>
                <Button contained style={{backgroundColor:'#0A1596', textTransform:'capitalize', color:'#fff', width:'8rem'}}>Lås upp prov</Button>
            </Box>
            <Box>
              <img style={{width:'6rem'}} src={Thumb} alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default ProfileRightBar