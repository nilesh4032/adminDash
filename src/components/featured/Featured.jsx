import "./featured.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


    // const rows=[
    //     {
    //     "id":1,
    //     "branch":"Gongzhuan No. 1 Shop",
    //     "sales":324288
    //     },
    //     {
    //     "id":2,
    //     "branch":"Gongzhuan No. 2 Shop",
    //     "sales":324265
    //     },
    //     {
    //     "id":3,
    //     "branch":"Gongzhuan No. 3 Shop",
    //     "sales":324220
    //     },
    //     {
    //     "id":4,
    //     "branch":"Gongzhuan No. 4 Shop",
    //     "sales":324190
    //     },
    //     {
    //     "id":5,
    //     "branch":"Gongzhuan No. 5 Shop",
    //     "sales":314288
    //     },
    //     {
    //     "id":6,
    //     "branch":"Gongzhuan No. 6 Shop",
    //     "sales":304288
    //     },
    //     {
    //     "id":7,
    //     "branch":"Gongzhuan No. 7 Shop",
    //     "sales":224288
    //     }
    // ];
  
import React, { Component } from 'react'

export default class Featured extends Component {

  constructor(props) {
        super(props);
        this.state = {rows:[]};
    }
    componentDidMount() {
        fetch('https://63062aa3c0d0f2b801173742.mockapi.io/featured').then(res=>res.json()).then(res=>this.setState({rows:res}))
    }
  render() {
    return (
      <div class className="featured">
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell classname="tablecell">S No.</TableCell>
            <TableCell classname="tablecell">Shop Name </TableCell>
            <TableCell classname="tablecell">Sales</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.rows.map((row) => (
            <TableRow
              key={row.id}
            
            >
              <TableCell classname="id">
                {row.id}
              </TableCell>
              <TableCell classname="tablecell" align="left">{row.branch}</TableCell>
              <TableCell classname="tablecell" align="left">{row.sales}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
  }
}
