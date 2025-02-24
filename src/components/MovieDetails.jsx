import PropTypes from "prop-types";
import "./MovieDetails.css";

const MovieDetails = ({ singleMovie }) => {
  const {
    Title,
    Type,
    Director,
    Actors,
    Genre,
    Poster,
    Released,
    Awards,
  } = singleMovie || {}; // تأكد من أن singleMovie ليس undefined لتجنب الأخطاء

  return (
    <div className="movie-details-container">
      <div className="movie-details">
        <h1 className="movie-title">{Title}</h1>
        <div className="movie-info">
          <div className="movie-poster">
            <img src={Poster} alt={Title} />
          </div>
          <div className="movie-container">
            <div className="movie-description">
              <p><strong>Type:</strong> {Type}</p>
              <p><strong>Director:</strong> {Director}</p>
              <p><strong>Actors:</strong> {Actors}</p>
              <p><strong>Genre:</strong> {Genre}</p>
              <p><strong>Release Date:</strong> {Released}</p>
              <p><strong>Awards:</strong> {Awards}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ تحديد نوع `props` المتوقعة
MovieDetails.propTypes = {
  singleMovie: PropTypes.shape({
    Title: PropTypes.string,
    Type: PropTypes.string,
    Director: PropTypes.string,
    Actors: PropTypes.string,
    Genre: PropTypes.string,
    Poster: PropTypes.string,
    Released: PropTypes.string,
    Awards: PropTypes.string,
  }),
};

// ✅ تعيين قيم افتراضية في حال عدم وجود بيانات
MovieDetails.defaultProps = {
  singleMovie: {
    Title: "Unknown Title",
    Type: "Unknown",
    Director: "Unknown",
    Actors: "Unknown",
    Genre: "Unknown",
    Poster: "https://via.placeholder.com/150", // صورة افتراضية
    Released: "Unknown",
    Awards: "Unknown",
  },
};

export default MovieDetails;
