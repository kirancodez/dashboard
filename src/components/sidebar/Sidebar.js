import React,{useEffect} from "react";
import { GoDashboard } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { MdKeyboardArrowRight, MdWidgets } from "react-icons/md";
import { BsFullscreen } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div class="sideProfile d-flex">
                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                <p>Julias Fernado</p>
            </div>
            <div className="menuItems">
                <p className="text-secondary pl-3">Personal</p>
                <ul exact>
                    <NavLink exact to="/" activeClassName="active" >
                            <span className="icon"><GoDashboard/></span>Dashboard <span className="arrow"><MdKeyboardArrowRight/></span>
                    </NavLink>
                    <NavLink exact to="/apps" activeClassName="active" >
                            <span className="icon"><FiUsers/></span>Users <span className="arrow"><MdKeyboardArrowRight/></span>
                    </NavLink>
                    <NavLink exact to="/uielements" activeClassName="active" >
                            <span className="icon"><BsFullscreen/></span>UI Elements <span className="arrow"><MdKeyboardArrowRight/></span>
                    </NavLink>
                    <NavLink exact to="/widgets" activeClassName="active" >
                            <span className="icon"><MdWidgets/></span>Widgets <span className="arrow"><MdKeyboardArrowRight/></span>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;