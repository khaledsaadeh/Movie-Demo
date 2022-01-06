import { Link, useParams } from "react-router-dom";
const Search = (props) => {
  const setSearchHandler = (event) => {
    props.onChangeQuery(event.target.value);
  };

  return (
    <form onSubmit={props.onSearch}>
      <input
        className="border-2 border-gray-300 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-2 m-2"
        type="text"
        placeholder="Search Movie"
        value={props.query}
        onChange={setSearchHandler}
      />

      <button
        className="items-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
