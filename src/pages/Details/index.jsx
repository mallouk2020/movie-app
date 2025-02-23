import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://www.omdbapi.com?apikey=a6370745";

export default function Details() {
  const [singleMovie, setSingleMovie] = useState({});
  const { title } = useParams();

  console.log("tittlee", title);

  useEffect(() => {
    const fetchSingleMovie = async () => {
      try {
        const response = await fetch(`${API_URL}&t=${title}`);
        if (response.ok) {
          const movieData = await response.json();
          console.log("movieData,", movieData);
          setSingleMovie(movieData);
        } else {
          console.error(`Error fetching movie data for "${title}"`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleMovie();
  }, [title]);

  return (
    <div>
      {/* <MovieDetails singleMovie={singleMovie} /> */}
    </div>
  );
}
