import { Link } from "react-router-dom";
import "./../../css/MovieDetail.css";

const MoviePlaying = () => {
  return (
    <div className="container movie-detail">
      <div className="breadcrums">
        <ul>
          <li className="home">
            <Link to="/" title="Trở về trang chủ"></Link>
            <span>/</span>
          </li>
          <li className="category1">
            Phim
            <span>/</span>
          </li>
          <li className="category2">
            <Link to="/movie/movie_playing">
              Phim đang chiếu
            </Link>
            <span>/</span>
          </li>
          <li className="category3">
            <strong>Ten phim</strong>
          </li>
        </ul>
      </div>
      <div className="main">
        main
      </div>
    </div>
  );
};

export default MoviePlaying;