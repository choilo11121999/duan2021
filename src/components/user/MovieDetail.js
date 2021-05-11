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
        <div className="main-header">
          <h2>Nội dung phim</h2>
        </div> 
        <div className="main-body">
          <div className="main-body-img">
            {/* <img src={} /> */}
            <p>IMG</p>
          </div>
          <div className="main-body-description">
            <h3>Ten phim</h3>
            <p><strong>Đạo diễn: </strong>Chọi</p>
            <p><strong>Diễn viên: </strong>Chọi</p>
            <p><strong>Thể loại: </strong>Chọi</p>
            <p><strong>Khởi chiếu: </strong>Chọi</p>
            <p><strong>Thời lượng: </strong>Chọi</p>
            <p><strong>Ngôn ngữ: </strong>Chọi</p>
            <p><strong>Rated: </strong></p>
            <div className="main-body-btn">
              <button className="btn btn-primary btn-sm">Like</button>
              <button className="btn btn-danger">Mua vé</button>
            </div>
          </div>
          <div className="detail-trailer">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label className="form-check-label" for="inlineRadio1">Chi tiết</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label className="form-check-label" for="inlineRadio2">Trailer</label>
            </div>
            <div className="detail">
              <p>Mo ta chi tiet phim</p>
            </div>
            <div className="trailer">
              <p>Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePlaying;