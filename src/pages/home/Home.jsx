import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";


const Home = () => {
  return (
    <div className="home">
       <Sidebar/>
       <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
            <Widget type="sales"/>
            <Widget type="visits"/>
            <Widget type="payments"/>
            <Widget type="opEffect"/>
        </div>

            <div className="charts">
                <Chart/>
                <Featured/>
            </div>

       </div>
    </div>
  )
}

export default Home;
