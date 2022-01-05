import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import axios from "axios";
import { data } from "autoprefixer";
import NavBar from "./components/NavBar";
import Search from "./components/Search";

const nowPlayingAPI =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=4f298a53e552283bee957836a529baec&language=en-US&page=1";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(nowPlayingAPI).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      <NavBar>
        <Search setMovies={setMovies} movies={movies} />
      </NavBar>

      <MovieList movies={movies} />
    </div>
  );
}

export default App;
