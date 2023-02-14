import "./index.css"

export default function Header({onBackClick, searching}){
    return(
        <header>
            <h1 className="logo">Movieter</h1>
            {!searching && <button className="backButton" onClick={onBackClick}>Back to Search</button>}
        </header>
    )
}