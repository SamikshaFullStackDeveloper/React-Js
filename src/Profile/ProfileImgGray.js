import React from "react";
import "./ProfileImage.css";
import logo192 from '../Assets/images/logo192.png';

export default class ProfileImgGray extends React.Component{
    render(){
        // const defaultImg =
        // "https://i.pinimg.com/736x/f6/d5/6c/f6d56c41081dfb56a722a556df80e53c.jpg"
        return(
            <div className="profile-two">
             < img src={logo192 }className="profile-img"/>
            </div>
        );
    }
}
