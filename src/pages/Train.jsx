import React, { useState,useEffect } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment/moment';
import { axiosApiInstance} from '../axios'
import { Link } from 'react-router-dom';
const Train = () => {

  const location=useLocation()
  console.log(location)
  const [train,setTrain]=useState({
    "trainName": "Chennai Exp",
    "trainNumber": "2344",
    "departureTime": {
        "Hours": 21,
        "Minutes": 35,
        "Seconds": 0
    },
    "seatsAvailable": {
        "sleeper": 3,
        "AC": 1
    },
    "price": {
        "sleeper": 397,
        "AC": 515
    },
    "delayedBy": 15
})
  useEffect(()=>{
    const id=location.pathname.split('/').at(-1)
    if (id){
      const fetch=async()=>{
        try{
          const response=await axiosApiInstance.get("http://20.244.56.144:80/train/trains/"+id,{
            headers:{
              Authorization:"Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTY1NzIwMDcsImNvbXBhbnlOYW1lIjoiU2hyZXlhIENlbnRyYWwiLCJjbGllbnRJRCI6IjMyMGZjYjMwLTZmODItNDIzNi1hMGEzLTE3ZDc4YTQ3NDhiZiIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIyMDAxNjQxNTIwMDQ5In0.iCt2kNNyTZFAz1027JKG0haN-MFnnYQycd9irI89u_s"
  
            }
          })
          setTrain(response.data)
        }catch(err){
          console.log(err)
        }
      }
      fetch()
    }
    },[location])
    console.log(train)
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
         
        </TableRow>
      </TableHead>
      <TableBody>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {train.trainName}
            </TableCell>
            <TableCell align="left">{train.trainNumber}</TableCell>
            <TableCell align="left">{moment(`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`,'HH:mm:ss').format('HH:mm:ss')}</TableCell>
            <TableCell align="left" colSpan={1}>{train.seatsAvailable.sleeper} </TableCell>
            <TableCell align="left" colSpan={1}> {train.seatsAvailable.AC}</TableCell>
            <TableCell align="left" colSpan={1}>{train.price.sleeper} </TableCell>
            <TableCell align="left" colSpan={1}> {train.price.AC}</TableCell>


            <TableCell align="left">{train.delayedBy}</TableCell>
            

          </TableRow>
        
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Train
