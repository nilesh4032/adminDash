import "./chart.scss";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// const data = [
//   {
//     id:1,
   
//     sold: 200,
//     amt: 200,
//   },
//   {
//     id:2,
    
//     sold: 400,
//     amt: 400,
//   },
//   {
//     id:3,
//     sold: 600,
//     amt: 600,
//   },
//   {
// id:4,   
//     sold: 800,
//     amt: 800,
//   },
//   {
// id:5,    
//     sold: 1000,
//     amt: 1000,
//   },
//   {
// id:6, 
//     sold: 1200,
//     amt: 1200,
//   },
//   {
// id:7,    
//     sold: 1400,
//     amt: 1400,
//   }
// ];

import React, { Component } from 'react';



class Chart extends Component {

//api call 

 constructor(props) {
        super(props);
        this.state = {data:[]};
    }
    componentDidMount() {
        fetch('https://63062aa3c0d0f2b801173742.mockapi.io/dchart').then(res=>res.json()).then(res=>this.setState({data:res}))
    }

  render() {
    return (
      <div className="chart">
        <div className="top">
        <div className="left">
       
            <span className="toggle">Sales</span>
            <span className="toggle">Visits</span>

      
    </div>
    <div className="right">

    <span className="time">All Day</span>
    <span className="time">All Week</span>
    <span className="time">All Month</span>
    <span className="time">All Year</span>



    </div>
    </div>
     <BarChart width={600} height={350} data={this.state.data}>
 
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="sold" fill="#8884d8" />
  
</BarChart>
    </div>
    );
  }
}

export default Chart;
