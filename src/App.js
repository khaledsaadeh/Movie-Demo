import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import axios from "axios";
import { data } from "autoprefixer";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import { Route, Switch } from "react-router-dom";

const NOWPLAYING_API =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=4f298a53e552283bee957836a529baec&language=en-US&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=4f298a53e552283bee957836a529baec&language=en-US&page=1&include_adult=false&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(NOWPLAYING_API).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const fetchSearch = (event) => {
    event.preventDefault();
    axios.get(SEARCH_API, { params: { query: search } }).then((res) => {
      setMovies(res.data.results);
    });
  };
  return (
    <Switch>
      <div className="App">
      <NavBar>
        <Search
          onChangeQuery={setSearch}
          query={search}
          onSearch={fetchSearch}
        />
      </NavBar>
        <Route path="/" exact>
          <MovieList movies={movies} />
        </Route>
        <Route path="/movies/:movieID">
          <MovieDetails />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
