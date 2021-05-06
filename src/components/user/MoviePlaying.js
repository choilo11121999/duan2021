import { Link } from "react-router-dom";
import "./../../css/MoviePlaying.css";

import s1 from "./../../img/selection/1.jpg";
import s2 from "./../../img/selection/2.jpg";
import s3 from "./../../img/selection/3.jpg";
import s4 from "./../../img/selection/4.jpg";
import s5 from "./../../img/selection/5.jpg";
import s6 from "./../../img/selection/6.jpg";
import s7 from "./../../img/selection/7.jpg";
import s8 from "./../../img/selection/8.jpg";

const MoviePlaying = () => {
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
            <li className="product-item col-3">
              <div className="product-img">
                <a href="#">
                  <img src={s1} />
                </a>
              </div>
              <div className="product-info">
                <h2 className="product-name">
                  <a href="#">Bo gia</a>
                </h2>
                <div className="movie-info">
                  <span className="movie-info-bold">Thể loại :</span>
                  <span className="movie-info-normal">
                    Hành động, phiêu lưu
                  </span>
                </div>
                <div className="movie-info">
                  <span className="movie-info-bold">Thời lượng :</span>
                  <span className="movie-info-normal">110 phút</span>
                </div>
                <div className="movie-info">
                  <span className="movie-info-bold">Khởi chiếu :</span>
                  <span className="movie-info-normal">20-04-2021</span>
                </div>
              </div>
              <ul className="add-to-links d-flex px-3">
                  <li>
                      <button type="button" className="button btn-like">Like <span>1k</span></button>
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
            <li className="product-item col-3">
              <div className="product-img">
                <a href="#">
                  <img src={s1} />
                </a>
              </div>
              <div className="product-info">
                <h2 className="product-name">
                  <a href="#">Bo gia</a>
                </h2>
                <div className="movie-info">
                  <span className="movie-info-bold">Thể loại :</span>
                  <span className="movie-info-normal">
                    Hành động, phiêu lưu
                  </span>
                </div>
                <div className="movie-info">
                  <span className="movie-info-bold">Thời lượng :</span>
                  <span className="movie-info-normal">110 phút</span>
                </div>
                <div className="movie-info">
                  <span className="movie-info-bold">Khởi chiếu :</span>
                  <span className="movie-info-normal">20-04-2021</span>
                </div>
              </div>
            </li>
            <li className="product-item col-3">
              <div className="product-img">
                <a href="#">
                  <img src={s1} />
                </a>
              </div>
              <div className="product-info">
                <h2 className="product-name">
                  <a href="#">Bo gia</a>
                </h2>
                <div className="movie-info">
                  <span className="movie-info-bold">Thể loại :</span>
                  <span className="movie-info-normal">
                    Hành động, phiêu lưu
                  </span>
                </div>
                <div className="movie-info">
                  <span className="movie-info-bold">Thời lượng :</span>
                  <span className="movie-info-normal">110 phút</span>
                </div>
                <div className="movie-info">
                  <span className="movie-info-bold">Khởi chiếu :</span>
                  <span className="movie-info-normal">20-04-2021</span>
                </div>
              </div>
            </li>
            <li className="product-item col-3">
              <div className="product-img">
                <a href="#">
                  <img src={s1} />
                </a>
              </div>
              <div className="product-info">
                <h2 className="product-name">
                  <a href="#">Bo gia</a>
                </h2>
                <div className="movie-info">
                  <span className="movie-info-bold">Thể loại :</span>
                  <span className="movie-info-normal">
                    Hành động, phiêu lưu
                  </span>
                </div>
                <div className="movie-info">
                  <span className="movie-info-bold">Thời lượng :</span>
                  <span className="movie-info-normal">110 phút</span>
                </div>
                <div className="movie-info">
                  <span className="movie-info-bold">Khởi chiếu :</span>
                  <span className="movie-info-normal">20-04-2021</span>
                </div>
              </div>
            </li>
            <li className="product-item col-3">
              <div className="product-img">
                <a href="#">
                  <img src={s1} />
                </a>
              </div>
              <div className="product-info">
                <h2 className="product-name">
                  <a href="#">Bo gia</a>
                </h2>
                <div className="movie-info">
                  <span className="movie-info-bold">Thể loại :</span>
                  <span className="movie-info-normal">
                    Hành động, phiêu lưu
                  </span>
                </div>
                <div className="movie-info">
                  <span className="movie-info-bold">Thời lượng :</span>
                  <span className="movie-info-normal">110 phút</span>
                </div>
                <div className="movie-info">
                  <span className="movie-info-bold">Khởi chiếu :</span>
                  <span className="movie-info-normal">20-04-2021</span>
                </div>
              </div>
            </li>
            <li className="product-item col-3">
              <div className="product-img">
                <a href="#">
                  <img src={s1} />
                </a>
              </div>
              <div className="product-info">
                <h2 className="product-name">
                  <a href="#">Bo gia</a>
                </h2>
                <div className="movie-info">
                  <span className="movie-info-bold">Thể loại :</span>
                  <span className="movie-info-normal">
                    Hành động, phiêu lưu
                  </span>
                </div>
                <div className="movie-info">
                  <span className="movie-info-bold">Thời lượng :</span>
                  <span className="movie-info-normal">110 phút</span>
                </div>
                <div className="movie-info">
                  <span className="movie-info-bold">Khởi chiếu :</span>
                  <span className="movie-info-normal">20-04-2021</span>
                </div>
              </div>
            </li>
            <li className="product-item col-3">
              <div className="product-img">
                <a href="#">
                  <img src={s1} />
                </a>
              </div>
              <div className="product-info">
                <h2 className="product-name">
                  <a href="#">Bo gia</a>
                </h2>
                <div className="movie-info">
                  <span className="movie-info-bold">Thể loại :</span>
                  <span className="movie-info-normal">
                    Hành động, phiêu lưu
                  </span>
                </div>
                <div className="movie-info">
                  <span className="movie-info-bold">Thời lượng :</span>
                  <span className="movie-info-normal">110 phút</span>
                </div>
                <div className="movie-info">
                  <span className="movie-info-bold">Khởi chiếu :</span>
                  <span className="movie-info-normal">20-04-2021</span>
                </div>
              </div>
            </li>
            <li className="product-item col-3">
              <div className="product-img">
                <a href="#">
                  <img src={s1} />
                </a>
              </div>
              <div className="product-info">
                <h2 className="product-name">
                  <a href="#">Bo gia</a>
                </h2>
                <div className="movie-info">
                  <span className="movie-info-bold">Thể loại :</span>
                  <span className="movie-info-normal">
                    Hành động, phiêu lưu
                  </span>
                </div>
                <div className="movie-info">
                  <span className="movie-info-bold">Thời lượng :</span>
                  <span className="movie-info-normal">110 phút</span>
                </div>
                <div className="movie-info">
                  <span className="movie-info-bold">Khởi chiếu :</span>
                  <span className="movie-info-normal">20-04-2021</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoviePlaying;