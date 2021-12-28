import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
function App() {
  const [movies, setMovies] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=4f298a53e552283bee957836a529baec&language=en-US&page=1"
    )
      .then((data) => data.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data);
      });
  }, [counter]);

  console.log(5 == 5);
  console.log("high" == "high");
  console.log([5] == [5]);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCounter((oldValue) => {
            return oldValue + 1;
          });
        }}
      >
        click{" "}
      </button>{" "}
      <p>{counter}</p>
    </div>
  );
}

export default App;
