
import "./listChart.scss"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     "name": "Page A",
//     "uv": 4000,
//     "pv": 2400,
//     "amt": 2400
//   },
//   {
//     "name":" Page B",
//     "uv": 3000,
//     "pv": 1398,
//     "amt": 2210
//   },
//   {
//     "name": "Page C",
//     "uv": 2000,
//     "pv": 9800,
//     "amt": 2290
//   },
//   {
//     "name": "Page D",
//     "uv": 2780,
//     "pv": 3908,
//     "amt": 2000
//   },
//   {
//     "name": "Page E",
//     "uv": 1890,
//     "pv": 4800,
//     "amt": 2181
//   },
//   {
//     "name": "Page F",
//     "uv": 2390,
//     "pv": 3800,
//     "amt": 2500
//   },
//   {
//     "name": "Page G",
//     "uv": 3490,
//     "pv": 4300,
//     "amt": 2100
//   }
// ];


import React, { Component } from 'react'

export default class ListChart extends Component {

  //api call

  constructor(props) {
        super(props);
        this.state = {data:[]};
    }
    componentDidMount() {
        fetch('https://63062aa3c0d0f2b801173742.mockapi.io/lchart').then(res=>res.json()).then(res=>this.setState({data:res}))
    }

  render() {
    return (
      <div>
        <div className="chart">
      <span className="title" style={{display:"flex",fontSize:'20px',color: 'gray',padding:'5px',borderBottom: '2px solid gray'}}>All Vendors</span>
      <div className="bottom">
      <BarChart
          width={500}
          height={400}
          data={this.state.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
         
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        
          
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
        </div>
    </div>
      </div>
    )
  }
}


