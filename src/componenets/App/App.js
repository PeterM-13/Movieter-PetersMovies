import './App.css';

import Header from "../Header"
import SearchPage from "../SearchPage"
import ResultsPage from "../ResultsPage"

import {useState, useEffect} from "react";
import env from "react-dotenv";

function App() {
  const [searchInput, setInput] = useState("")
  const [results, setResults] = useState([])

  async function searchMovies(query) {
    const apiKey = env.apiKey;
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query.split(' ').join('+')}`;
    try {
      const response = await fetch(searchUrl);
      if (!response.ok) {
        throw new Error('ERROR: Unable to search for movies');
      }

      const data = await response.json();
      const movies = await data.results;
      setResults(movies);

    } catch (error) {
      console.error("ERROR: ", error);
    }
  }

  async function popularMovies(){
    const apiKey = env.apiKey;
    const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      const movies = await data.results;
      setResults(movies);

    } catch (error) {
      console.error(error);
    }
  }

  async function onEnter(e){
    if(e.key === "Enter"){
      setInput(e.target.value);
    }
  }

  useEffect(() => {
    if (searchInput !== '') {
      async function searchForMovies() {
        await searchMovies(searchInput);
      }
      searchForMovies();
    }
  }, [searchInput]);

  useEffect(() => {
    popularMovies();
  }, []);

  function onBackClick(){
    popularMovies()
  }

  return (
    <div className="App">
      <Header onBackClick={onBackClick}/>
      <SearchPage onEnter={onEnter}/>
      <ResultsPage results={results} searchInput={searchInput}/>
    </div>
  );
}

export default App;
