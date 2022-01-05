import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = (props) => {
  const setSearchHandler = (event) => {
    props.setSearch(event.target.value);
  };

  return (
    <form onSubmit={props.fetchSearch}>
      <input
        className="search-input"
        type="text"
        placeholder="Search Movie"
        value={props.search}
        onChange={setSearchHandler}
      />
      <button className="btn-input" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
