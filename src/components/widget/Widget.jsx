import "./widget.scss"
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//import ProgressBar from "progress";
import React,{useEffect} from 'react';

    import ProgressBar from "@ramonak/react-progress-bar";
    import { AreaChart,Area, Line, AAxis, BAxis, CartesianGridA, TooltipA, Legend, ResponsiveContainer } from 'recharts';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

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

const Widget = ({type}) => {
    let data;

const tableData = [
  {
    "name": "Page A",
    "uv": 4000,
  
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
   
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
   
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    
    "amt": 2100
  }
]


const chartData = [
  {
    name: '1',
   
    payment: 200,
    amt: 200,
  },
  {
    name: '2',
    
    payment: 400,
    amt: 400,
  },
  {
    name: '3',
    payment: 600,
    amt: 600,
  },
  {
    name: '4',
   
    payment: 800,
    amt: 800,
  },
  {
    name: '5',
    
    payment: 1000,
    amt: 1000,
  },
  {
    name: '6',
 
    payment: 1200,
    amt: 1200,
  },
  {
    name: '7',
    
    payment: 1400,
    amt: 1400,
  },
];
    //
    const amount = 100;
    const diff=78;
    const link="dod";

    switch(type){
        case "sales":
            data={
                title:"Total Sales",
                isMoney:true,
                link:false,
                icon:false,
                amount:932749
                
            };
            break;
        case "visits":
            data={
                amount:8236,
                title:"Visits",
                isMoney:false,
                link:false,
                icon:<AreaChart width={200} height={50} data={tableData}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  
</AreaChart>
                
            };
            break;
        case "payments":
            data={
                title:"Payments",
                isMoney:false,
                link:false,
                amount:4354,
                icon: 
                <BarChart style={{backgroundColor:"balck"}} width={200} height={50} data={chartData}>
                           
                            <Tooltip />
                          
                            <Bar dataKey="payment" fill="#8884d8" />
                            
                            </BarChart>

                
            };
            break;
        case "opEffect":
            data={
                title:"Operation Effect",
                isMoney:false,
                link:false,
               amount:diff,
                icon:<ProgressBar className="icon" width="200px" completed={diff} />,
            };
            break;
            default:
                break;
    }
  return (
    <div className="widget" style={{maxWidth:"300px"}}>
        <div className="left">
      <span className="title">{data.title}</span>
      <div className="counter">
      <span className="counterData"> {data.isMoney && "$"}{data.amount}</span>
      <span classname="iconds"> {data.icon}</span>
      </div>
      <div className="link">
      <span className="percentage positive">
        
        {[link," ",diff]}%
        <KeyboardArrowUpIcon className="icon positive"/></span>
      <span className="percentage negative">
       
       {[link," ",diff]}%
        <KeyboardArrowDownIcon className="icon negative"/></span>
        </div>
    
    </div>


    <div className="right">
<InfoIcon classname="icon" style={{color:"gray", cursor:"pointer"}}/>
    </div>
    </div>
  )
}

export default Widget
