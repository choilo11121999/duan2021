import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./../../css/MoviePlaying.css";

const MoviePlaying = () => {
  const urlImg = axios.defaults.baseURL;
  const [listMovie, setListMovie] = useState(
    new Array()
  );

  useEffect(() => {
    getMoviePlaying();
  }, []);

  const getMoviePlaying = () => {
    axios.get('/api/select-list/product?film_status=1')
      .then((res) => {
        console.log(res.data.data);
        setListMovie(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div className="container movie-playing">
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
            <strong>Phim đang chiếu</strong>
          </li>
        </ul>
      </div>
      <div className="main">
        <div className="page-title">
          <h1>Phim Đang Chiếu</h1>
        </div>
        <div className="category-product">
          <ul className="list-product row">
            {
              listMovie.map((movie, index) => {
                return(
                  <li className="product-item col-3">
                    <div className="product-img">
                      <a href="#">
                        <img className="h-80" src={urlImg+movie.poster} />
                      </a>
                    </div>
                    <div className="product-info">
                      <h2 className="product-name">
                        <a href="#">{movie.film_name}</a>
                      </h2>
                      <div className="movie-info">
                        <span className="movie-info-bold">Thể loại: </span>
                        <span className="movie-info-normal">
                          Hành động, phiêu lưu
                        </span>
                      </div>
                      <div className="movie-info">
                        <span className="movie-info-bold">Thời lượng: </span>
                        <span className="movie-info-normal">{movie.duration}</span>
                      </div>
                      <div className="movie-info">
                        <span className="movie-info-bold">Khởi chiếu: </span>
                        <span className="movie-info-normal">20-04-2021</span>
                      </div>
                    </div>
                    <ul className="add-to-links d-flex px-3">
                        <li>
                          <button type="button" className="button btn-like">Like <span>{movie.linke}</span></button>
                        </li>
                        <li>
                          <button type="button" title="Mua vé" className="button btn-booking">
                            <span>
                              <span>Mua vé</span>
                            </span>
                          </button>
                        </li>
                    </ul>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoviePlaying;