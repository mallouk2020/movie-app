import React from "react";
import SearchIcon from "../img/search.svg";
export default function Search({ searchTerm, setSearchTerm, searchMovie }) {
  return (
    <div className="search">
      <input
        placeholder="Search for Your Favorite Movie"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovie(searchTerm)}
      />
    </div>
  );
}
