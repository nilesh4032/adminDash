import  "./sidebar.scss";
import SpeedIcon from '@mui/icons-material/Speed';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from "react-router-dom"

import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div>
               <div className="sidebar">
            <div className="top">
               
 <Link to="/" style={{textDecoration: 'none',color: 'white'}}>
                    <img src="https://nimbles2p.com/wp-content/uploads/2021/06/Logo-resized.png"                
                    alt=" "
                    className="logo"/>
            </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <Link to="/" style={{textDecoration: 'none',color: 'white'}}>
                    <li>

                        <SpeedIcon className="icon"/>
                        <span>Dashboard</span>
                        
                    </li> </Link>
                   <Link to="/list" style={{textDecoration: 'none',color: 'white'}}>
                    <li>
                        <ListAltIcon className="icon"/>
                        <span>Task List</span>
                    </li></Link>
                   <Link to="/new" style={{textDecoration: 'none',color: 'white'}}>
                    <li>
                        <GroupIcon className="icon"/>
                        <span>User List</span>

                    </li></Link>
                    <Link to="/new" style={{textDecoration: 'none',color: 'white'}}>

                    <li>
                        <SupervisorAccountIcon className="icon"/>
                        <span>Role Management</span>

                    </li></Link>
                    <li>
                        <SearchIcon className="icon"/>
                        <div className="search">
                            <input type="text" placeholder="Search"/>
                            </div>

                    </li>
                    
                </ul>
            </div>
            <div className="bottom">
                <ul><Link to="/single" style={{textDecoration: 'none',color: 'white'}}>
                    <li>
                        <HelpIcon className="icon"/>
                        <span>Help</span>
                        </li>    </Link>           
                   <Link to="/List" style={{textDecoration: 'none',color: 'white'}}>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Setting</span>
                        </li>   </Link>           
                          </ul>
            </div>
        </div>  
            </div>
        );
    }
}

export default Sidebar;

