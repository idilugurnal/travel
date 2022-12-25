
import icon from "../../public/assets/world-icon.svg"
import "../style.css"

export default function Navbar(){
    return (
        <nav>
            <img className="navbar--icon" src={icon} />
            <p>my travel journal</p>

        </nav>
    )
}