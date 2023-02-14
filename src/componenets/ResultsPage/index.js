import "./index.css"
import Tile from "../Tile"

export default function ResultsPage({results, searchInput}){
    if(results.length === 0){
         searchInput = "No Results";
       }else{
         searchInput = ``;
       }
    return(
        <div className="ResultsPage">
            <h3 className="usersSearch">{searchInput}</h3>
            <div className="results">
                {results.map((movie, i) => {
                return <Tile key={i}
                num={i}
                title={movie.title} 
                dscp={movie.overview} 
                img={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} 
                mov={`https://www.2embed.to/embed/tmdb/movie?id=${movie.id}`}/>
                })}
            </div>
        </div>
    )
}