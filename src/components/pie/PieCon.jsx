import "./pieCon.scss";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import React,{useEffect} from 'react';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];
// const Search=()=>{


// let API="http://127.0.0.1:30002/pie";
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
const PieCon = () => {
  return (
    <div className="pie">
     <div classname="top">
      <span classname="Title" style={{display:"flex",fontSize:'20px',color: 'gray',padding:'5px',borderBottom: '2px solid gray'}}>Invoice by Location</span>
      </div>
      <div className="bottom">
          <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  )
}

export default PieCon
