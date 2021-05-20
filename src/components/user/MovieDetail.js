import { useState } from "react";
import { Link } from "react-router-dom";
import "./../../css/MovieDetail.css";
import ImgTest from './../../img/selection/1.jpg';
import Booking from "./Booking";

const MoviePlaying = () => {
  const [valueRadio, setValueRadio] = useState('detail');

  const handleChecked = (e) => {
    e.preventDefault();
    if(e.target.checked) {
      setValueRadio(true);
    } else {
      setValueRadio(false)
    }
  };

  return (
    <div className="movie-detail">
      <div className="breadcrums">
        <ul className="container">
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
      <div className="container main">
        <div className="main-header">
          <h2>Nội dung phim</h2>
        </div> 
        <div className="main-body d-flex justify-content-between">
          <div className="main-body-img">
            <img src={ImgTest} />
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
              <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#selectTime">
                Mua vé
              </button>
              <Booking />
            </div>
          </div>
        </div>
        <div className="detail-trailer">
          <div className="radio-btn d-flex justify-content-center mb-3" onChange={(e) => setValueRadio(e.target.value)}>
            {
              valueRadio === 'detail' ? (
                <label className="btn btn-danger btn-sm">
                  Xem chi tiết
                  <input id="detail" value="detail" name="select" type="radio" />
                </label>
              ) : (
                <label className="btn btn-outline-danger btn-sm">
                  Xem chi tiết
                  <input id="detail" value="detail" name="select" type="radio" />
                </label>
              )
              
            }
            {
              valueRadio === 'trailer' ? (
                <label className="btn btn-danger btn-sm ml-2">
                  Trailer
                  <input id="trailer" value="trailer" name="select" type="radio" />
                </label>
              ) : (
                <label className="btn btn-outline-danger btn-sm ml-2">
                  Trailer
                  <input id="trailer" value="trailer" name="select" type="radio" />
                </label>
              )
            }
          </div>
          {
            valueRadio === 'detail' ? (
              <div className="detail">
                <p>
                  Sau khi bản thân bỗng nhiên sở hữu “Bàn tay diệt quỷ”, võ sĩ MMA Yong Hoo (Park Seo Joon thủ vai) 
                  đã dấn thân vào hành trình trừ tà, trục quỷ đối đầu với Giám Mục Bóng Tối (Woo Do Hwan) – tên quỷ 
                  Satan đột lốt người. Từ đó sự thật về cái chết của cha Yong Hoo cũng dần được hé lộ cũng như nguyên 
                  nhân anh trở thành “người được chọn”.
                </p>
              </div>
              ) : (
                <div className="trailer">
                  <p>Video</p>
                </div>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default MoviePlaying;