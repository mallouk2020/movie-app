import { useEffect, useState } from "react";
import Search from "../../components/Search";
import MovieCard from "../../components/MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=a6370745";

function Home() {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    searchMovie(searchTerm);
  }, []);

  const searchMovie = async (title = "spider") => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log("dataaa", data.Search);

    setMovies(data.Search)
  };

  const showDetails = (id) => {
    console.log(id);
  };

  return (
    <div className="app">
      <h1>NetMovie</h1>

      <Search
        setSearchTerm={setSearchTerm}
        searchMovie={searchMovie}
        searchTerm={searchTerm}
      />

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              showDetails={showDetails}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie is Found</h2>
        </div>
      )}
    </div>
  );
}

export default Home;
