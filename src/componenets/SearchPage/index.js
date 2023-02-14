import "./index.css"

export default function SearchPage({onEnter}){
    return(
        <div className="SearchPage">
            <input type="text" placeholder="search for movie" onKeyDown={(e)=>{ onEnter(e) }}/>
        </div>
    )
}