import "./chart.scss";
//import React, {Component} from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import React,{useEffect} from 'react';

const data = [
  {
    name: '1',
   
    sold: 200,
    amt: 200,
  },
  {
    name: '2',
    
    sold: 400,
    amt: 400,
  },
  {
    name: '3',
    sold: 600,
    amt: 600,
  },
  {
    name: '4',
   
    sold: 800,
    amt: 800,
  },
  {
    name: '5',
    
    sold: 1000,
    amt: 1000,
  },
  {
    name: '6',
 
    sold: 1200,
    amt: 1200,
  },
  {
    name: '7',
    
    sold: 1400,
    amt: 1400,
  },
];



// const Search=()=>{


// let API="http://127.0.0.1:30002/data";
// const fetch=async(url)=>{
//   try{
//     const res=await(fetch(url));
//     const data=res.json();
//   }catch(error){
//     console.log(error);
//   }
// }
// useEffect(() => {
//   fetch(API);
  
// }, []);
// }
const Chart = () => {
 
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
     <BarChart width={600} height={350} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="sold" fill="#8884d8" />
  
</BarChart>
    </div>
  )
}

export default Chart ;
