import React from "react";
import "./ProfileImage.css";

export default class ProfileImgGreen extends React.Component{
    render(){
        const defaultImg = 
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        return(
            <div className="profile-three">
               <img src={defaultImg} className="profile-img"/>
            </div>
        );
    }     

}