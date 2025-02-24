import SearchIcon from "../img/search.svg";
import PropTypes from "prop-types";

export default function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <input
        placeholder="Search for Your Favorite Movie"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // يتم البحث مباشرة عند الكتابة
      />
      <img src={SearchIcon} alt="search" />
    </div>
  );
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};
