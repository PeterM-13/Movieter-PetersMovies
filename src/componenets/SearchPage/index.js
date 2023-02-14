import "./index.css"

export default function SearchPage({onEnter}){
    return(
        <div className="SearchPage">
            <input type="text" placeholder="Search" onKeyDown={(e)=>{ onEnter(e) }}/>
        </div>
    )
}