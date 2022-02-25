import React,{useState} from "react";
import MenuIcon from "@material-ui/icons/Menu";
import  SearchIcon  from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import NotificationIcon from "@material-ui/icons/Notifications";
import './Header.css';
import {Link} from 'react-router-dom'

const Header = () => {
const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon />
                 <Link to="/">
                 <img
                className="header_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="youtube logo" 
                />
                </Link>
            </div>

           <div className="header_input">
                <input type="text" placeholder="Search" value={inputSearch} onChange={e => setInputSearch(e.target.value)}/>
                <Link to={`/search/${inputSearch}`}>
                  <SearchIcon className="header_inputButton"/>
                </Link>
           </div>

           <div className="header_icons">
            <VideoCallIcon className="header_icon"/>
                <AppsIcon className="header_icons"/>
                <NotificationIcon className="header_icon"/>
                <Avatar 
                alt="edgar"

                />
           </div>
           
        </div>
    );
}
export default Header;