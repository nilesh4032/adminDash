import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

import React, { Component } from 'react'

export default class Home extends Component {
constructor(props) {
        super(props);
        this.state = {data:[]};
    }
    componentDidMount() {
        fetch('https://630665a5c0d0f2b8011c685e.mockapi.io/widget').then(res=>res.json()).then(res=>this.setState({data:res}))
    }

  render() {
    return (
      <div>
        <div className="home">
       <Sidebar/>
       <div className="homeContainer">
        <Navbar/>
        <div  className="widgets">
            {/* <Widget type="sales"/>
            <Widget type="visits"/>
            <Widget type="payments"/>
            <Widget type="opEffect"/> */}
             {this.state.data.map((props)=>{
              
          return <Widget style={{maxWidth: '500px',}}props={props} />

        })}
        </div>

            <div className="charts">
                <Chart/>
                <Featured/>
            </div>

       </div>
    </div>
      </div>
    )
  }
}



