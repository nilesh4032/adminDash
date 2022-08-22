import InfoIcon from '@mui/icons-material/Info';
import "./listWidget.scss";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import React,{useEffect} from 'react';

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
const Widget = ({type}) => {
  let data;
  const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]
  switch(type){
      case "Invoice Received":
        data={
          title:"Invoice Received",
          value:8326,
          isIcon:false,

        };
        break;
        case "Auto Posting":
        data={
          title:"Auto Posting",
          value:8326,
          isIcon:false,

        };
        break;
        case "TAT to Post":
        data={
          title:"TAT to Post",
          value:8326,
          isIcon:false,

        };
        break;
        case "TAT to Payment":
        data={
          title:"TAT to Payment",
          value:34645,
          isIcon:false,

        };
        break;
        case "No of Invoices":
        data={
          title:"No of Invoices",
          value:false,
          isIcon: <PieChart width={100} height={100}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={20} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={25} outerRadius={35} fill="#82ca9d"  />
        </PieChart>,

        };
        break;
        default:
          break;
  }
  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'> {data.title}</span>
        <span className='value'>{data.value}</span>
        <span className='iconds'>{data.isIcon}</span>
      </div>
      <div className='right'>
        <InfoIcon classname="icon" style={{color:"gray", cursor:"pointer"}}/>

      </div>
    </div>
  )
}

export default Widget
