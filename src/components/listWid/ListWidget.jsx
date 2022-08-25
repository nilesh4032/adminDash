import { ConstructionRounded } from '@mui/icons-material';
import React, { Component } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import "./listWidget.scss";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
//   const data01 = [
//   { "name": "Group A", "value": 400 },
//   { "name": "Group B", "value": 300 },
//   { "name": "Group C", "value": 300 },
//   { "name": "Group D", "value": 200 }
  
 
// ];
// const data02 = [
//   { "name": "Group A", "value": 400 },
//   { "name": "Group B", "value": 300 },
//   { "name": "Group C", "value": 300 },
//   { "name": "Group D", "value": 200 }
  
// ]
class ListWidget extends Component {
constructor(props) {
        super(props);
        this.state = {data:[]};
        this.props=this.props.props;
    }
    componentDidMount() {
         fetch('https://630665a5c0d0f2b8011c685e.mockapi.io/pie').then(res=>res.json()).then(res=>this.setState({data:res}))
    }

    render() {
const icon= <PieChart width={100} height={100}>
          <Pie data={this.state.data} dataKey="value" cx="50%" cy="50%" outerRadius={20} fill="#8884d8" />
         <Pie data={this.state.data} dataKey="value" cx="50%" cy="50%" innerRadius={25} outerRadius={35} fill="#82ca9d"  />
        </PieChart>
       let data=this.props.props;
       //console.log(data);
      
 
        return ( 
      <div className='listwidget'>
      <div className='left'>
        
     <span style={{fontSize:"20px",padding:"5px"}}>{data.title} </span>

       
      
      

       <div className='value' >
         
        <span style={{display:"flex",padding:"10px",justifyContent: "center",alignSelf: "center",borderBottom: "10px"}}> {data.value}</span>
            <span className='icon'>{data.isIcon?icon:""}</span>
       
         
         </div> 
        
      </div>
      <div className='rightppp'>
        <InfoIcon classname="icon" style={{color:"gray", cursor:"pointer"}}/>

      </div>
    </div>
    );
    }
}

export default ListWidget;
