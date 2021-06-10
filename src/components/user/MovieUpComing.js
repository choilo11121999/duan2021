import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../../css/MoviePlaying.css";

const MovieUpcoming = ({ getMovie }) => {
  const urlImg = axios.defaults.baseURL;
  const [listMovie, setListMovie] = useState(
    new Array()
  );

  const [reload, setReload] = useState(false);

  useEffect(() => {
    getMovieUpcoming();
  }, [reload]);

  const getMovieUpcoming = () => {
    axios.get('/api/select-list/product?film_status=2')
      .then((res) => {
        setListMovie(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const sendLike = (id) => {
    axios.post('/api/like', {product_id: id}, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then()
    setTimeout(() => {
      setReload(!reload);
    }, 300);
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
            <strong>Phim sắp chiếu</strong>
          </li>
        </ul>
      </div>
      <div className="main">
        <div className="page-title">
          <h1>Phim Sắp Chiếu</h1>
        </div>
        <div className="category-product">
          <ul className="list-product row">
            {
              listMovie.map((movie, index) => {
                return(
                  <li key={index} className="product-item col-3">
                    <div className="product-img">
                      <Link to={`/movie/movie_detail/${movie.id}`} onClick={() => getMovie(movie)}>
                        <img className="rounded" src={urlImg+movie.poster} style={{width: "250px", height: "350px", border: "2px solid #333"}}/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h2 className="product-name">
                        <Link to={`/movie/movie_detail/${movie.id}`} onClick={() => getMovie(movie)}>{movie.film_name}</Link>
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
                    </div>
                    <ul className="add-to-links d-flex justify-content-between mt-3 mx-3">
                        <li>
                          <button type="button" className="button btn-like" onClick={() => sendLike(movie.id)}><i class="fa fa-thumbs-up" aria-hidden="true"></i><span>&nbsp;{movie.like}</span></button>
                        </li>
                        <li></li>
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

export default MovieUpcoming;