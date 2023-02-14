import "./index.css"

export default function SearchPage({onEnter}){
    return(
        <div className="SearchPage">
            <input type="text" placeholder="Search" onKeyDown={(e)=>{ onEnter(e) }}/>
            <p>( vvv There will be the popular films here vvv )</p>
            <p>( In the mean time, have a go searching... )</p>
        </div>
    )
}