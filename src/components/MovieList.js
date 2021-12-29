
const MovieList = (props) => {
  const setColor = color =>{
    
  }
  return (
    <div className="flex flex-wrap pl-20">
      {props.movies.map((movie) => (
        <div className="w-56 rounded overflow-hidden shadow-lg m-4">
          <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            alt="poster"
          ></img>
          <div className="text-center">
          <h2 className="font-bold text-xl mb-2 m-4">{movie.title}</h2>
          <h3 className="m-4"> Release Date: {movie.release_date}</h3>
          <span className="bg-red-400 font-bold rounded-xs p-1 ">
            {movie.vote_average}
          </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
