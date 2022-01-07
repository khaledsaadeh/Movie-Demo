import React, { useState } from "react";
import classNames from "classnames";

const CATEGORIES_OPTIONS = [
  {
    label: "Popular",
    value:
      "https://api.themoviedb.org/3/movie/popular?api_key=4f298a53e552283bee957836a529baec&language=en-US&page=1",
  },
  {
    label: "Upcoming",
    value:
      "https://api.themoviedb.org/3/movie/upcoming?api_key=4f298a53e552283bee957836a529baec&language=en-US&page=1",
  },
  {
    label: "Top Rated",
    value:
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4f298a53e552283bee957836a529baec&language=en-US&page=1",
  },
];

const Categories = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleDropDownVisibility = () => setIsVisible((prevVal) => !prevVal);

  const onSelectOption = (value) => () => {
    props.setCategoryAPI(value);
    toggleDropDownVisibility();
  };

  return (
    <div>
      <button
        className="block text-white mt-4"
        onClick={toggleDropDownVisibility}
      >
        Categories
      </button>
      <div
        className={classNames(
          "bg-white absolute mt-2 w-48 rounded-md overflow-hidden shadow-lg",
          {
            hidden: !isVisible,
          }
        )}
      >
        {CATEGORIES_OPTIONS.map((option) => (
          <button
            className="block px-2 py-2 w-full hover:bg-gray-500"
            onClick={onSelectOption(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
