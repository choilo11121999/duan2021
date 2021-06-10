import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../../css/MovieDetail.css";

const MovieDetail = ({ movie, getIdBooking }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const urlImg = axios.defaults.baseURL;
  const [valueRadio, setValueRadio] = useState('detail');

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => {
    setShow(true);
  }


  const { id, film_name, category, poster, duration, like, film_description, film_status, director, actor, film_trailer } = movie;
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
            {
              film_status === 1 ? (
                <Link to="/movie/movie_playing">
                  Phim đang chiếu
                </Link>
              ) : (
                <Link to="/movie/movie_upcoming">
                  Phim sắp chiếu
                </Link>
              )
            }
            <span>/</span>
          </li>
          <li className="category3">
            <strong>{film_name}</strong>
          </li>
        </ul>
      </div>
      <div className="container main">
        <div className="main-header">
          <h2>Nội dung phim</h2>
        </div> 
        <div className="main-body d-flex justify-content-between mb-3">
          <div className="main-body-img">
          <img src={urlImg+poster} className="rounded border border-primary" width={260} height={370} />
          </div>
          <div className="main-body-description">
            <h3>{film_name}</h3>
            <p><strong>Đạo diễn: </strong>{director}</p>
            <p><strong>Diễn viên: </strong>{actor}</p>
            <p><strong>Thể loại: </strong>{category.map((value, index) => {
                  return index < category.length -1 ?  value.name + ", " : value.name;
              })}</p>
            <p><strong>Khởi chiếu: </strong>Chọi</p>
            <p><strong>Thời lượng: </strong>{duration}</p>
            <p><strong>Ngôn ngữ: </strong>Tiếng Việt</p>
            <div className="main-body-btn">
              <button className="btn btn-primary btn-sm mr-2">Like &nbsp; {like}</button>
              <Link to={`/movie/booking_time/${id}`} title="Mua vé" className="button btn btn-sm btn-danger" onClick={() => getIdBooking(id)}>
                  Mua vé
              </Link>
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
                <label className="btn btn-danger btn-sm ml-2" onClick={() => handleShow()}>
                  Trailer
                  <input id="trailer" value="trailer" name="select" type="radio" />
                </label>
              ) : (
                <label className="btn btn-outline-danger btn-sm ml-2" onClick={() => handleShow()}>
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
                  {film_description}
                </p>
              </div>
              ) : (
                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}  size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Trailer
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <iframe width="100%" height="450" src={film_trailer}></iframe>
                  </Modal.Body>
                </Modal>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;