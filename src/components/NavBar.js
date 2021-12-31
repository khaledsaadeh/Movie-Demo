import { useState, useEffect } from "react";
import axios from "axios";
const NavBar = (props) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchSearch = () => {
    axios.get(props.searchAPI, { params: { query: search } }).then((res) => {
      setMovies(res.data.results);
    });
  };

  const searchHandler = (event) => {
    event.preventDefault();
    if (search.trim() !== "") {
      fetchSearch();
      props.renderSearchResults(movies);
    }
  };

  const setSearchHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <nav className="w-full justify-between flex-wrap bg-indigo-900 p-4 mx-auto">
      <div className="items-center">
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
      </div>
    </nav>
  );
};

export default NavBar;
