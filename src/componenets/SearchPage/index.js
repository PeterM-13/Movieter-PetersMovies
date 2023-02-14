import "./index.css"

export default function SearchPage({onEnter}){
    return(
        <div className="SearchPage">
            <input type="text" placeholder="search for movies" onKeyDown={(e)=>{ onEnter(e) }}/>
        </div>
    )
}
{/* <p>( vvv There will be the popular films here vvv )</p>
<p>( In the mean time, have a go searching... )</p> */}