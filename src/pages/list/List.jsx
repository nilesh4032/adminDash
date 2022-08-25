import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ListWidget from "../../components/listWid/ListWidget";
import PieCon from "../../components/pie/PieCon";
import ListChart from "../../components/listChart/ListChart";
import  "./list.scss";
import React, { Component } from 'react';

class List extends Component {

  constructor(props) {
        super(props);
        this.state = {data:[]};
    }
    componentDidMount() {
        fetch('https://630665a5c0d0f2b8011c685e.mockapi.io/listWid').then(res=>res.json()).then(res=>this.setState({data:res}))
    }
  render() {
    return (
      <div>
        <div>
     <div className="home">
       <Sidebar/>
       <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
           {/* < ListWidget type="Invoice Received"/>
           < ListWidget type="Auto Posting"    />
           < ListWidget type="TAT to Post"/>
           < ListWidget type="TAT to Payment"/>
           < ListWidget type="No of Invoices"/> */}
            {this.state.data.map((props)=>{
              
          return <ListWidget props={props} />

        })}
        </div>

            <div className="charts">
              <PieCon/>
              < ListChart/>
                
            </div>

       </div>
    </div>
      
    </div>
      </div>
    );
  }
}

export default List; 

