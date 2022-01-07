import { Link } from "react-router-dom";
import moment from "moment";

const MovieList = (props) => {
  const setColor = (rating) => {
    if (rating >= 8) return "bg-green-400";
    else if (rating >= 7) return "bg-yellow-400";
    else if (rating >= 6) return "bg-orange-400";
    else return "bg-red-400";
  };

  return (
    <div className="container mx-auto">
      <div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {props.movies.map((movie) => (
          <div className="w-56 overflow-hidden mx-auto">
            <Link to={`movies/${movie.id}`}>
              <img
                className="w-full rounded-lg shadow-xl"
                src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                alt="poster"
              ></img>
            </Link>
            {/*  */}
            <div className="text-center p-2">
              <Link to={`movies/${movie.id}`}>
                <h2 className="font-bold text-left text-lg mb-2 h-14 hover:text-orange-400 line-clamp-2">
                  {movie.title}
                </h2>
              </Link>
              <div className="flex justify-between items-center">
                <h3 className="text-left text-sm text-black text-opacity-60">
                  {moment(movie.release_date).format("MMM DD, YYYY")}
                </h3>
                <h3
                  className={`${setColor(
                    movie.vote_average
                  )} rounded-lg font-bold rounded-xs p-1`}
                >
                  {Number(movie.vote_average).toFixed(1)}
                </h3>
              </div>
            </div>
            {/*  */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
