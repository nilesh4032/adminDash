import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/listWid/ListWidget";
import PieCon from "../../components/pie/PieCon";
import ListChart from "../../components/listChart/ListChart";
import  "./list.scss";
const List = () => {
  return (
    <div>
     <div className="home">
       <Sidebar/>
       <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
           < Widget type="Invoice Received"/>
           < Widget type="Auto Posting"/>
           < Widget type="TAT to Post"/>
           < Widget type="TAT to Payment"/>
           < Widget type="No of Invoices"/>
        </div>

            <div className="charts">
              <PieCon/>
              < ListChart/>
                
            </div>

       </div>
    </div>
      
    </div>
  )
}

export default List
