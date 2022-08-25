import InfoIcon from '@mui/icons-material/Info';
import "./listWidget.scss";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import React, { Component } from 'react';

  const data01 = [
  { "name": "Group A", "value": 400 },
  { "name": "Group B", "value": 300 },
  { "name": "Group C", "value": 300 },
  { "name": "Group D", "value": 200 }
  
 
];
const data02 = [
  { "name": "Group A", "value": 400 },
  { "name": "Group B", "value": 300 },
  { "name": "Group C", "value": 300 },
  { "name": "Group D", "value": 200 }
  
]
class ListWidget extends Component {
  
 constructor(props) {
        super(props);
        this.state = {data:[]};
         {console.log(this.props)}
    }
   
    componentDidMount() {
       // fetch('https://630665a5c0d0f2b8011c685e.mockapi.io/listWid').then(res=>res.json()).then(res=>this.setState({data:res}))
      
//     let icondata;
//     const piec=({type})=>{
// switch(type){
//       case "Invoice Received":
//         icondata={
         
//           isIcon:false,

//         };
//         break;
//         case "Auto Posting":
//         icondata={
          
//           isIcon:false,

//         };
//         break;
//         case "TAT to Post":
//         icondata={
         
//           isIcon:false,

//         };
//         break;
//         case "TAT to Payment":
//         icondata={
         
//           isIcon:false,

//         };
//         break;
//         case "No of Invoices":
//         icondata={
          
        // isIcon: <PieChart width={100} height={100}>
        //   <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={20} fill="#8884d8" />
        //  <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={25} outerRadius={35} fill="#82ca9d"  />
        // </PieChart>,
        

//         };
//         break;
//         default:
//           break;
//   }
//     }
      }
 
  render() {
    return ( 
      <div className='widget'>
      <div className='left'>
        {/* {this.state.data.map((element)=>{
          return <span>{element.title} </span>

        })} */}
      
      

        {/* <div className='value'>
          {this.state.data.map((element)=>{
        return <span> {element.value}{icondata.isIcon}</span>

        })}
         
         </div> */}
        
      </div>
      <div className='rightppp'>
        <InfoIcon classname="icon" style={{color:"gray", cursor:"pointer"}}/>

      </div>
    </div>
    );
  }
}

export default ListWidget;


