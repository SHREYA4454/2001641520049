import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';


export default function BasicTable({data}) {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('trainName', 159, 6.0, 24, 4.0),
        createData('trainNumber', 237, 9.0, 37, 4.3),
        createData('delayedBy', 262, 16.0, 24, 6.0),
      ];
    //   const rows=data.map(item=>{
    //     return  createData('trainName', 159, 6.0, 24, 4.0)
    //   })
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>train Name</TableCell>
            <TableCell align="left">train Number</TableCell>
            <TableCell align="left">departure Time</TableCell>
            <TableCell align="left" colSpan={2}>seats Available</TableCell>
            <TableCell align="left" colSpan={2}>price</TableCell>
            <TableCell align="left">delayedBy</TableCell>
            <TableCell align="left">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.trainNumber}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.trainName}
              </TableCell>
              <TableCell align="left">{row.trainNumber}</TableCell>
              <TableCell align="left">{moment(`${row.departureTime.Hours}:${row.departureTime.Minutes}:${row.departureTime.Seconds}`,'HH:mm:ss').format('HH:mm:ss')}</TableCell>
              <TableCell align="left" colSpan={1}>{row.seatsAvailable.sleeper} </TableCell>
              <TableCell align="left" colSpan={1}> {row.seatsAvailable.AC}</TableCell>
              <TableCell align="left" colSpan={1}>{row.price.sleeper} </TableCell>
              <TableCell align="left" colSpan={1}> {row.price.AC}</TableCell>


              <TableCell align="left">{row.delayedBy}</TableCell>
              <TableCell> <Link to={"/train/"+row.trainNumber}>BIeu</Link></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}