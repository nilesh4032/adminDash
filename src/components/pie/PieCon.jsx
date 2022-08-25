import "./pieCon.scss";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

// const data01 = [
//   { "name": "Group A", "value": 400 },
//   { "name": "Group B", "value": 300 },
//   { "name": "Group C", "value": 300 },
//   { "name": "Group D", "value": 200 },
//   { "name": "Group E", "value": 278 },
//   { "name": "Group F", "value": 189 },
// ];

import React, { Component } from 'react';



class PieCon extends Component {
  
  //api call

 constructor(props) {
        super(props);
        this.state = {data:[]};
    }
    componentDidMount() {
        fetch('https://63062aa3c0d0f2b801173742.mockapi.io/pie').then(res=>res.json()).then(res=>this.setState({data:res}))
    }


  render() {
    return (
        <div className="pie">
     <div className="top">
      <span classname="Title" style={{display:"flex",fontSize:'20px',color: 'gray',padding:'5px',borderBottom: '2px solid gray'}}>Invoice by Location</span>
      </div>
      <div className="bottom">
          <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={this.state.data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="value" data={this.state.data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
      </div>
    </div>
    );
  }
}
export default PieCon