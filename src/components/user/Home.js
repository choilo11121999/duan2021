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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Slider from "react-slick";

const Home = ({ setProductNameFromHome, phimName, getIdBooking, getMovie }) => {
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
        setListMovie(res.data.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll:1,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="container home mb-4">
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
            <img className="rounded border border-secondary d-block w-100 h-100" src={i1} alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="rounded border border-secondary d-block w-100 h-100" src={i2} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="rounded border border-secondary d-block w-100 h-100" src={i3} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="rounded border border-secondary d-block w-100 h-100" src={i4} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="rounded border border-secondary d-block w-100 h-100" src={i5} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="rounded border border-secondary d-block w-100 h-100" src={i6} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="rounded border border-secondary d-block w-100 h-100" src={i7} alt="Third slide"/>
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
        <Slider {...settings} className="mt-4">
          {listMovie.map((movie) => (
            <div className="product position-relative" key={movie.id}>
              <img src={urlImg+movie.poster} className="rounded border border-primary mx-auto d-block" width={260} height={370} />
              <div className="btn-trailer position-absolute text-center" style={{top: "30%", left: "0", width: "100%"}}>
                <button className="btn btn-lg btn-danger">Xem Trailer</button>
              </div>
              <div className="product-content position-absolute px-3" style={{bottom: "5px", left: "0", width: "100%"}}>
                <h3 style={{color: "#fff", textAlign: "center"}}>{movie.film_name}</h3>
                <div className="d-flex justify-content-around">
                  <Link to={`/movie/movie_detail/${movie.id}`} title="Xem chi tiết" className="button btn-sm btn-danger" onClick={() => getMovie(movie)}>
                      Xem chi tiết
                  </Link>
                  <Link to={`/movie/booking_time/${movie.id}`} title="Mua vé" className="button btn-sm btn-danger" onClick={() => getIdBooking(movie.id)}>
                      Mua vé
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* ############ */}

      {/* Event */}
      <div className="event-selection">
        <div className="event-selection-title">
          <h2></h2>
        </div>
        <div id="event-selection" className="carousel slide event-selection carousel-multi-item w-100 mt-4" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#event-selection" data-slide-to="0" className="active"></li>
            <li data-target="#event-selection" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-3 event">
                  <img className="rounded border border-secondary d-block w-100 h-100" src={e1} alt="First slide"/>
                </div>
                <div className="col-3 event">
                  <img className="rounded border border-secondary d-block w-100 h-100" src={e2} alt="First slide"/>
                </div>
                <div className="col-3 event">
                  <img className="rounded border border-secondary d-block w-100 h-100" src={e3} alt="First slide"/>
                </div>
                <div className="col-3 event">
                  <img className="rounded border border-secondary d-block w-100 h-100" src={e4} alt="First slide"/>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-3 event">
                  <img className="rounded border border-secondary d-block w-100 h-100" src={e5} alt="First slide"/>
                </div>
                <div className="col-3 event">
                  <img className="rounded border border-secondary d-block w-100 h-100" src={e6} alt="First slide"/>
                </div>
                <div className="col-3 event">
                  <img className="rounded border border-secondary d-block w-100 h-100" src={e7} alt="First slide"/>
                </div>
                <div className="col-3 event">
                  <img className="rounded border border-secondary d-block w-100 h-100" src={e8} alt="First slide"/>
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