import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

const Base = ({
    title="Dashboard",
    children
}) => {
    return(
        <div className="mainWrapper">
            <div className="col-md-12 bg-white stickyBar">
                <h2>{title}<span className="text-secondary">Control Panel</span></h2>
                <div className="child float-right d-flex" > 
                    <span className="my-auto"><AiTwotoneHome/></span>
                    <p className="my-auto">Home</p>
                    <span className="m-0"><MdKeyboardArrowRight/></span>
                    <p className="my-auto">{title}</p>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Base;