import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = (props) => {
  const searchAPI =
    "https://api.themoviedb.org/3/search/movie?api_key=4f298a53e552283bee957836a529baec&language=en-US&page=1&include_adult=false&query=";

  const [search, setSearch] = useState("");

  const fetchSearch = () => {
    axios.get(searchAPI, { params: { query: search } }).then((res) => {
      props.setMovies(res.data.results);
    });
  };

  const searchHandler = (event) => {
    event.preventDefault();
    if (search.trim() !== "") {
      fetchSearch();
      renderSearchResults(props.movies);
    }
  };

  const setSearchHandler = (event) => {
    setSearch(event.target.value);
  };

  const renderSearchResults = (movies) => {
    props.setMovies(movies);
  };
  return (
    <form onSubmit={searchHandler}>
      <input
        className="border-2 border-gray-300 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-2 m-2"
        type="text"
        placeholder="Search Movie"
        value={search}
        onChange={setSearchHandler}
      />
      <button
        className=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
