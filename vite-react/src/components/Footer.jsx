import React from "react";
import LinkedIn from "../assets/linkedIn.png"
import Instagram from "../assets/instagram.png"
import Github from "../assets/github.png"
import "../../style.css"
function Footer()
{
    
    return (
        <footer className="footer--container">
            <img src={LinkedIn} alt="mailto:someone@yoursite.com"/>
            <img src={Instagram} />
            <img src={Github}/>
        </footer>  
    )
}

export default Footer