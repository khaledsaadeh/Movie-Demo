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
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
