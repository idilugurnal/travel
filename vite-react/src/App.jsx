import ProfilePicture from "./components/ProfilePicture";
import Footer from "./components/Footer";
import Main from "./components/Main";
import React from "react";
import "../style.css"

function App()
{
    return (
        <div className="container">
            <ProfilePicture/>
            <Main />
            <Footer/>
        </div>
    )
}

export default App;