import React, { useEffect, useState } from "react";
const POPULAR_API =
  "https://api.themoviedb.org/3/movie/popular?api_key=4f298a53e552283bee957836a529baec&language=en-US&page=1";
const TOPRATED_API =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=4f298a53e552283bee957836a529baec&language=en-US&page=1";
const UPCOMING_API =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=4f298a53e552283bee957836a529baec&language=en-US&page=1";

const Categories = (props) => {
  const [dropDown, setDropDown] = useState("hidden");

  const setDropDownHandler = () => {
    if (dropDown == "hidden") setDropDown("");
    else setDropDown("hidden");
  };

  const setAPI_POPULAR = () => {
    props.setCategoryAPI(POPULAR_API);
    setDropDownHandler()
  };
  const setAPI_UPCOMING = () => {
    props.setCategoryAPI(UPCOMING_API);
    setDropDownHandler()
  };
  const setAPI_TOPRATED = () => {
    props.setCategoryAPI(TOPRATED_API);
    setDropDownHandler()
  };

  return (
    <div>
      <button className="block text-white mt-4" onClick={setDropDownHandler}>
        Categories
      </button>
      <div
        class={`bg-white rounded-lg mt-2 ${dropDown}  absolute  mt-2 w-48 rounded-md shadow-lg`}
      >
        <button
          className="block px-2 py-2 w-full hover:bg-gray-500"
          onClick={setAPI_POPULAR}
        >
          Popular
        </button>
        <button
          className="block px-2 py-2 w-full hover:bg-gray-500"
          onClick={setAPI_UPCOMING}
        >
          Upcoming
        </button>
        <button
          className="block px-2 py-2 w-full hover:bg-gray-500"
          onClick={setAPI_TOPRATED}
        >
          Top Rated
        </button>
      </div>
    </div>
  );
};

export default Categories;
