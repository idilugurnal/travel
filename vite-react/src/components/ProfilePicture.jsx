import React from "react";
import ProfilePic from "../assets/profile-pic.jpg"
import "../../style.css"
function ProfilePicture()
{
    
    return (
        <img className= "profile--pic" src={ProfilePic} alt={"Idil"} width="300px"/>
    )
}

export default ProfilePicture