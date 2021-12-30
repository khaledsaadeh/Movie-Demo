import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import axios from "axios";
import { data } from "autoprefixer";
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
  console.log(movies);
  return (
    <div className="App">
      <MovieList movies={movies}  />
    </div>
  );
}

export default App;
