import React from "react"
import Topbar from "../../components/topbar/Topbar"
import {topPanel} from "../../DummyData"
import { FaUserAlt, FaInfo, FaFolderOpen } from "react-icons/fa";
import { TiDocument } from "react-icons/ti";
import { IoInformationSharp } from "react-icons/io";
import "./style/topPanel.scss"

const TopPanel = () => {
    return(
        <div className="container mainPanel">
            <div className="row"> 
                <div className="d-flex">
                    {topPanel.map((value,index) => (
                        <div className="col-md-3 card" key={index}>
                        <sapn className="avthar">{index===0 ? <FaUserAlt/> : index===1 ? <TiDocument/> : index=== 2 ? <FaInfo/>: index === 3 ? <FaFolderOpen/> : ""  }</sapn>
                        <div className="d-flex">
                            <p>{value.title}</p>
                            <span className="count">{value.count}</span>
                        </div>
                        <progress max="100" value="40" className="m-0 w-100"></progress>
                    </div>                     
                    )) }
                </div>
            </div>
         </div>
    )
}

export default TopPanel;