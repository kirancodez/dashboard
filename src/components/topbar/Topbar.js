import React from "react";
import { FaSearch,FaBell } from "react-icons/fa";
import { BsEnvelopeFill,BsChat } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import "./topbar.scss"

const Topbar = () => {
    return(
        <div className="FloatBar px-2 ">
            <nav className="navbar navbar-light justify-content-between pb-0">
            <p className="navbar-brand text-white text-uppercase">Minima<span>Lite</span></p>
            <ul className="right-tems">
                <li>
                    <FaSearch/>
                </li>
                <li>
                    <BsEnvelopeFill/>
                    <span class="newMsgIcon"></span>
                </li>
                <li>
                    <FaBell/>
                    <span class="newMsgIcon"></span>
                    </li>
                <li>
                    <BsChat/>
                    <span class="newMsgIcon"></span>
                </li>
                
                <li>
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                </li>
                <li><IoMdSettings/></li>
            </ul>
            </nav>
        </div>
    )
}

export default Topbar;
