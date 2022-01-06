import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = (props) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [castDetails, setCastDetails] = useState([]);
  const [genres, setGenres] = useState([]);
  const params = useParams();

  const fetchMovieDetails = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.movieID}?api_key=4f298a53e552283bee957836a529baec&language=en-US`
      )
      .then((res) => {
        setMovieDetails(res.data);
        setGenres(res.data.genres);
      });
  };

  const fetchCast = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.movieID}/credits?api_key=4f298a53e552283bee957836a529baec&language=en-US`
      )
      .then((res) => {
        setCastDetails(res.data.cast);
      });
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchCast();
  }, []);

  return (
    <div>
      <div className="flex px-6 py-10  shadow-xl rounded bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
        <div className="w-72 h-100 rounded  shadow-lg m-4">
          <img
            className="w-full h-92"
            src={`https://image.tmdb.org/t/p/w1280${movieDetails.poster_path}`}
            alt="poster"
          ></img>
        </div>

        <div className="text-justify pl-2">
          <h1 className="font-extrabold pt-8 text-xl">
            <span>{movieDetails.title}</span>{" "}
            <span className="italic font-light">
              ({movieDetails.original_language})
            </span>
          </h1>

          <div className="flex">
            {genres.map((genre) => (
              <span className="m-1">{genre.name}</span>
            ))}
          </div>
          <p className="font-1x1 italic opacity-90 mt-2">
            {movieDetails.tagline}
          </p>
          <h1 className="font-bold pt-10">
            Overview:
            <p className="max-w-2xl mt-1 font-normal">
              {movieDetails.overview}
            </p>
          </h1>
          <h2 className="pt-6 font-bold">
            Runtime:{" "}
            <span className="font-normal">{movieDetails.runtime} Minutes</span>
          </h2>

          <h2 className="pt-2 font-bold">
            User Score:{" "}
            <span className="font-normal">{movieDetails.vote_average}</span>
          </h2>
          <h2 className="pt-2 font-bold">
            Release Date:{" "}
            <span className="font-normal">{movieDetails.release_date}</span>
          </h2>
        </div>
      </div>
      <h1 class="font-bold text-4xl text-gray-800">Cast:</h1>
      <div className="flex overflow-x-auto space-x-8 ">
        {castDetails.map((castMember) => (
          <div className="flex-shrink-0 shadow-xl m-2 w-32 h-56 max-w-xs overflow-hidden rounded-lg transform transition hover:scale-105">
            <img
              className="w-full h-44"
              src={`https://image.tmdb.org/t/p/w1280${castMember.profile_path}`}
              alt="poster"
            ></img>
            <div className="text-center">
              <h2 className="font-bold">{castMember.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieDetails;
