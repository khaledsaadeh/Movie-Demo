import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import axios from "axios";
import { data } from "autoprefixer";
import NavBar from "./components/NavBar";
function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=4f298a53e552283bee957836a529baec&language=en-US&page=1"
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, []);

  const showSearchResults = (movies) => {
    setMovies(movies);
  };

  return (
    <div className="App">
      <NavBar passToApp={showSearchResults} />

      <MovieList movies={movies} />
    </div>
  );
}

export default App;
