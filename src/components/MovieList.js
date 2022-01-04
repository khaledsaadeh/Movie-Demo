import reactDom from "react-dom";
import MovieDetails from "./MovieDetails";
import { Link } from "react-router-dom";
const MovieList = (props) => {
  const setColor = (rating) => {
    if (rating >= 8) return "bg-green-400";
    else if (rating >= 7) return "bg-yellow-400";
    else if (rating >= 6) return "bg-orange-400";
    else return "bg-red-400";
  };

  return (
    <div className="flex flex-wrap pl-20">
      {props.movies.map((movie) => (
        <div className="w-56 rounded overflow-hidden shadow-lg m-4">
          <Link to={`movies/${movie.id}`}>
            <img
              className="w-full"
              src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
              alt="poster"
            ></img>
          </Link>
          <div className="text-center">
            <Link to={`movies/${movie.id}`}>
              <h2 className="font-bold text-xl mb-2 m-4">{movie.title}</h2>
            </Link>
            <h3 className="m-4"> Release Date: {movie.release_date}</h3>
            <span
              className={`${setColor(
                movie.vote_average
              )} font-bold rounded-xs p-1`}
            >
              {movie.vote_average}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
