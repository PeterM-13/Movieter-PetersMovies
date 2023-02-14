import "./index.css"
import logo from "../images/logo.png"

export default function Header({onBackClick}){
    return(
        <header>
            <img src={logo} className="logo" onClick={onBackClick} alt='Logo'/>
        </header>
    )
}