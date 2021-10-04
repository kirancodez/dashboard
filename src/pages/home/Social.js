import React from "react"
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import "./style/social.scss"

const Social = () => {
    return(
        <div>
            <div className="row social">
                <div className="col-sm-4">
                    <div className="card" style={{backgroundColor: "#385ca8"}}>
                    <div className="card-body">
                       <div className="cardHeader">
                        <span><FaFacebookF/></span>
                        <p>Facebook Feed</p>
                       </div>
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card" style={{backgroundColor: "#1DA1F2"}} >
                    <div className="card-body">
                       <div className="cardHeader">
                        <span><FaTwitter/></span>
                        <p>Twitter</p>
                       </div>
                       <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card" style={{backgroundColor: "#BD081C"}} >
                    <div className="card-body">
                       <div className="cardHeader">
                        <span><FaGooglePlusG/></span>
                        <p>Google +</p>
                       </div>
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social;