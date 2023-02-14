import "./index.css"
import logo from "../images/logo.png"

export default function Header({onBackClick, searching}){
    return(
        <header>
            {/* <h1 className="logo">Movieter</h1> */}
            <img src={logo} className="logo" onClick={onBackClick} alt='Logo'/>
            {/* {!searching && <button className="backButton" onClick={onBackClick}>Back to Search</button>} */}
        </header>
    )
}