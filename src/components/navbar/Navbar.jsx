import "./navbar.scss";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {Link} from "react-router-dom" 
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="item">
                <Link to="/" style={{textDecoration: 'none'}}>
                <NotificationsNoneIcon className="icon"/>
                </Link>
            </div>
            <div className="item">
                <Link to="/login" style={{textDecoration: 'none',color: 'white'}}>
                <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                alt=" "
                className="avatar"/></Link>
            </div>
            <div className="counter">
                Alex
            </div>
        </div>
      
    </div>
  )
}
export default Navbar;
