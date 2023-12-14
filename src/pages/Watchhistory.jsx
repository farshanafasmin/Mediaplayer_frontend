import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getHistory } from '../service/allapi';


function Watchhistory() {

  // if the response of a api inside a function then create state

  const [history,sethistory]=useState([])


  useEffect(() => {
   
  Watchhistory()
  
  }, [])
  
  // first create a function to request data from backend to frontend through url

  const Watchhistory=async()=> {
// data destructured
    const {data}=await getHistory()
    sethistory(data)
    
    
  }
  console.log(history);
   
  return (
    <>
    <h5 style={{textAlign:"center", fontSize:"30px"}}>Watch History</h5> <br />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">CATEGORY NAME</TableCell>
            <TableCell align="right">URL</TableCell>
            <TableCell align="right">DATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
           history.map((item,index) => (
            <TableRow 
              // key={item.name}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             > 
              <TableCell align="right" >{index+1}
              </TableCell>
             
              <TableCell align="right">{item?.categoryName}</TableCell>
              <TableCell align="right">{item?.url}</TableCell>
              <TableCell align="right">{item?.date}</TableCell>
            </TableRow>
         )) }
          
          
        </TableBody>
      </Table>
    </TableContainer>


      {/* <table className='table-shadow m-3 rounded border'>
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>URL</th>
          <th>DATE</th>
        </thead>

        <tbody>

          { */}
{/* // map method is used to take value from array
            history?.map((item,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{item?.categoryName}</td>
              <td>{item?.url}</td>
              <td>{item?.date}</td>
            </tr>

            ))
          }
         
        </tbody>
      </table> */}

    
         
    </>
  )
}

export default Watchhistory