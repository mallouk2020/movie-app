import { useEffect, useState } from "react";
import Search from "../../components/Search";
import MovieCard from "../../components/MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=a6370745";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("spider");

  useEffect(() => {
    // إذا كان البحث فارغًا، استخدم "spider"
    searchMovie(searchTerm.trim() === "" ? "spider" : searchTerm);
  }, [searchTerm]);

  const searchMovie = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const showDetails = (id) => {
    console.log("show details:", id);
  };

  return (
    <div className="app">
      <h1>NetMovie</h1>

      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} showDetails={showDetails} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found</h2>
        </div>
      )}
    </div>
  );
}

export default Home;
