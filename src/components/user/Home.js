import i1 from './../../img/banner/1.png';
import i2 from './../../img/banner/2.jpg';
import i3 from './../../img/banner/3.jpg';
import i4 from './../../img/banner/4.jpg';
import i5 from './../../img/banner/5.png';
import i6 from './../../img/banner/6.jpg';
import i7 from './../../img/banner/7.jpg';

import s1 from './../../img/selection/1.jpg';
import s2 from './../../img/selection/2.jpg';
import s3 from './../../img/selection/3.jpg';
import s4 from './../../img/selection/4.jpg';
import s5 from './../../img/selection/5.jpg';
import s6 from './../../img/selection/6.jpg';
import s7 from './../../img/selection/7.jpg';
import s8 from './../../img/selection/8.jpg';

import e1 from './../../img/event/1.jpg';
import e2 from './../../img/event/2.jpg';
import e3 from './../../img/event/3.jpg';
import e4 from './../../img/event/4.png';
import e5 from './../../img/event/5.jpg';
import e6 from './../../img/event/6.jpg';
import e7 from './../../img/event/7.jpg';
import e8 from './../../img/event/8.png';

import "./../../css/Home.css";
import { Link } from 'react-router-dom';

const Home = ({ setProductNameFromHome, phimName }) => {
  const handleClickDetail = (e) => {
    const productName = e.target.parentNode.parentNode.firstChild.innerText;
    setProductNameFromHome(productName);
  }

  return (
    <div className="container home">
      {/* Slide show */}
      <div id="slide-banner" className="carousel slide slide-banner w-100" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#slide-banner" data-slide-to="0" className="active"></li>
          <li data-target="#slide-banner" data-slide-to="1"></li>
          <li data-target="#slide-banner" data-slide-to="2"></li>
          <li data-target="#slide-banner" data-slide-to="3"></li>
          <li data-target="#slide-banner" data-slide-to="4"></li>
          <li data-target="#slide-banner" data-slide-to="5"></li>
          <li data-target="#slide-banner" data-slide-to="6"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 h-100" src={i1} alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-100" src={i2} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-100" src={i3} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-100" src={i4} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-100" src={i5} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-100" src={i6} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-100" src={i7} alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#slide-banner" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#slide-banner" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* ################ */}

      {/* Movie selection */}
      <div className="movie-selection">
        <div className="movie-selection-title">
          <h2></h2>
        </div>
        <div id="slide-selection" className="carousel slide slide-selection carousel-multi-item w-100" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#slide-selection" data-slide-to="0" className="active"></li>
            <li data-target="#slide-selection" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="row d-flex justify-content-between flex-row">
                <div className="product">
                  <img className="" src={s1} alt="First slide"/>
                  <div className="btn-play">
                    <button className="btn btn-lg btn-danger">Play</button>
                  </div>
                  <div className="product-content">
                    <h3>Ten phim</h3>
                    <span className="btn btn-sm btn-danger">
                      <Link className="link" to={`/movie/movie_detail/${phimName}`} onClick={(e) => handleClickDetail(e)} >
                        Xem chi tiết
                      </Link>
                    </span>
                    <button className="btn btn-sm btn-danger ml-3">
                      Mua ve
                    </button>
                  </div>
                </div>
                <div className="product">
                  <img className="" src={s2} alt="First slide"/>
                  <div className="btn-play">
                    <button className="btn btn-lg btn-danger">Play</button>
                  </div>
                  <div className="product-content">
                    <h3>Ten phim</h3>
                    <span className="btn btn-sm btn-danger">
                      <Link className="link" to="/movie/movie_detail">
                        Xem chi tiết
                      </Link>
                    </span>
                    <button className="btn btn-sm btn-danger ml-3">
                      Mua ve
                    </button>
                  </div>
                </div>
                <div className="product">
                  <img className="" src={s3} alt="First slide"/>
                  <div className="btn-play">
                    <button className="btn btn-lg btn-danger">Play</button>
                  </div>
                  <div className="product-content">
                    <h3>Ten phim</h3>
                    <span className="btn btn-sm btn-danger">
                      <Link className="link" to="/movie/movie_detail">
                        Xem chi tiết
                      </Link>
                    </span>
                    <button className="btn btn-sm btn-danger ml-3">
                      Mua ve
                    </button>
                  </div>
                </div>
                <div className="product">
                  <img className="" src={s4} alt="First slide"/>
                  <div className="btn-play">
                    <button className="btn btn-lg btn-danger">Play</button>
                  </div>
                  <div className="product-content">
                    <h3>Ten phim</h3>
                    <span className="btn btn-sm btn-danger">
                      <Link className="link" to="/movie/movie_detail">
                        Xem chi tiết
                      </Link>
                    </span>
                    <button className="btn btn-sm btn-danger ml-3">
                      Mua ve
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row d-flex justify-content-between flex-row">
                <div className="product">
                  <img className="" src={s5} alt="First slide"/>
                  <div className="btn-play">
                    <button className="btn btn-lg btn-danger">Play</button>
                  </div>
                  <div className="product-content">
                    <h3>Ten phim</h3>
                    <span className="btn btn-sm btn-danger">
                      <Link className="link" to="/movie/movie_detail">
                        Xem chi tiết
                      </Link>
                    </span>
                    <button className="btn btn-sm btn-danger ml-3">
                      Mua ve
                    </button>
                  </div>
                </div>
                <div className="product">
                  <img className="" src={s6} alt="First slide"/>
                  <div className="btn-play">
                    <button className="btn btn-lg btn-danger">Play</button>
                  </div>
                  <div className="product-content">
                    <h3>Ten phim</h3>
                    <span className="btn btn-sm btn-danger">
                      <Link className="link" to="/movie/movie_detail">
                        Xem chi tiết
                      </Link>
                    </span>
                    <button className="btn btn-sm btn-danger ml-3">
                      Mua ve
                    </button>
                  </div>
                </div>
                <div className="product">
                  <img className="" src={s7} alt="First slide"/>
                  <div className="btn-play">
                    <button className="btn btn-lg btn-danger">Play</button>
                  </div>
                  <div className="product-content">
                    <h3>Ten phim</h3>
                    <span className="btn btn-sm btn-danger">
                      <Link className="link" to="/movie/movie_detail">
                        Xem chi tiết
                      </Link>
                    </span>
                    <button className="btn btn-sm btn-danger ml-3">
                      Mua ve
                    </button>
                  </div>
                </div>
                <div className="product">
                  <img className="" src={s8} alt="First slide"/>
                  <div className="btn-play">
                    <button className="btn btn-lg btn-danger">Play</button>
                  </div>
                  <div className="product-content">
                    <h3>Ten phim</h3>
                    <span className="btn btn-sm btn-danger">
                      <Link className="link" to="/movie/movie_detail">
                        Xem chi tiết
                      </Link>
                    </span>
                    <button className="btn btn-sm btn-danger ml-3">
                      Mua ve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#slide-selection" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#slide-selection" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* ############ */}

      {/* Event */}
      <div className="event-selection">
        <div className="event-selection-title">
          <h2></h2>
        </div>
        <div id="event-selection" className="carousel slide event-selection carousel-multi-item w-100" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#event-selection" data-slide-to="0" className="active"></li>
            <li data-target="#event-selection" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-3 event">
                  <img className="d-block w-100 h-100" src={e1} alt="First slide"/>
                </div>
                <div className="col-3 event">
                  <img className="d-block w-100 h-100" src={e2} alt="First slide"/>
                </div>
                <div className="col-3 event">
                  <img className="d-block w-100 h-100" src={e3} alt="First slide"/>
                </div>
                <div className="col-3 event">
                  <img className="d-block w-100 h-100" src={e4} alt="First slide"/>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-3 event">
                  <img className="d-block w-100 h-100" src={e5} alt="First slide"/>
                </div>
                <div className="col-3 event">
                  <img className="d-block w-100 h-100" src={e6} alt="First slide"/>
                </div>
                <div className="col-3 event">
                  <img className="d-block w-100 h-100" src={e7} alt="First slide"/>
                </div>
                <div className="col-3 event">
                  <img className="d-block w-100 h-100" src={e8} alt="First slide"/>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#event-selection" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#event-selection" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;