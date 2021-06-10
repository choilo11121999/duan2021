import './../css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './user/Header';
import Footer from './user/Footer';
import Home from './user/Home';
import MoviePlaying from './user/MoviePlaying';
import MovieUpComing from './user/MovieUpComing';
import MovieDetail from './user/MovieDetail';
import Login from './auth/Login';
import Register from './auth/Register';
import Admin from './admin/admin.js';
import BookingTime from './user/BookingTime';
import ChangePassword from './auth/ChangePassword';
import ChangeInfo from './auth/ChangeInfo';
import { useEffect, useState } from 'react';
import axios from 'axios'; 
import BookingStatRoomOne from './user/BookingStat/BookingStatRoomOne';
import BookingStatRoomTwo from './user/BookingStat/BookingStatRoomTwo';
import BookingStatRoomThree from './user/BookingStat/BookingStatRoomThree';
import BookingStatRoomFour from './user/BookingStat/BookingStatRoomFour';
import Payment from './user/Payment';
import PaymentSucess from './user/PaymentSuccess';
import Recommend from './user/Recommend';
import PrivateRoute from './auth/PrivateRouter';
import ForgotPassword from './auth/ForgotPassword';

const App = () => {
  const [user, setUser] = useState('');
  const [productName, setProductName] = useState('');
  const [idBooking, setIdBooking] = useState("");
  const [dateBooking, setDateBooking] = useState("");
  const [timeBooking, setTimeBooking] = useState("");
  const [movie, setMovie] = useState({
    id: ""
  });
  const [urlPay, setUrlPay] = useState("");
  const role = localStorage.getItem('role');
  const [regetUser, setRegetUser] = useState(false);
  useEffect(() => {
    axios.get('/api/auth/user')
    .then(
      res => {
        setUserLogin(res.data.data)
      }
    )
    .catch(
      err => {
        console.log(err);
      }
    );
  }, [regetUser]);

  const setUserLogin = (user_login) => {
    setUser(user_login)
  };

  const setProductNameFromHome = (product_name) => {
    setProductName(product_name);
  };

  const getIdBooking = (id) => {
    setIdBooking(id);
  }

  const getIdDateTimeBooking = (id, date, time) => {
    setIdBooking(id);
    setDateBooking(date);
    setTimeBooking(time)
  }

  const getMovie = (movie) => {
    setMovie(movie);
  }

  const getUrlPay = (url) => {
    setUrlPay(url);
  }

  return (
    <Router>
      {
        role === "1" ? (
          <div className="Admin">
            <Route path="/admin" component={() => <Admin setUserLogin={setUserLogin} />} />
          </div>
        ) : (
          <div className="App"> 
            <Header user={user} setUserLogin={setUserLogin} />

            <Route path="/" exact component={() => <Home setProductNameFromHome={setProductNameFromHome} phimName={productName} getIdBooking={getIdBooking} getMovie={getMovie} user={user} />} />
            <Route path="/user/login" exact component={() => <Login setUserLogin={setUserLogin} />}/>
            <Route path="/user/register" exact component={Register}/>
            <Route path="/user/change_info" exact component={() => <ChangeInfo user={user} setUserLogin={setUserLogin} />}/>
            <Route path="/user/change_password" exact component={() => <ChangePassword setUserLogin={setUserLogin} />}/>
            <Route path="/user/forgot_password" exact component={ForgotPassword} />
            <Route path="/movie/movie_playing" exact component={() => <MoviePlaying getIdBooking={getIdBooking} getMovie={getMovie} />} />
            <Route path="/movie/movie_upcoming" exact component={() => <MovieUpComing getMovie={getMovie} />} />
            <Route path={`/movie/movie_detail/${movie.id}`} exact component={() => <MovieDetail movie={movie} getIdBooking={getIdBooking} />} />
            <PrivateRoute path={`/movie/booking_time/${idBooking}`} exact component={() => <BookingTime idBooking={idBooking} getIdDateTimeBooking={getIdDateTimeBooking} />} />
            <PrivateRoute path={`/movie/booking_stat_01/${idBooking}`} component={() => <BookingStatRoomOne idBooking={idBooking} dateBooking={dateBooking} timeBooking={timeBooking} user={user} getUrlPay={getUrlPay} />} />
            <PrivateRoute path={`/movie/booking_stat_02/${idBooking}`} component={() => <BookingStatRoomTwo idBooking={idBooking} dateBooking={dateBooking} timeBooking={timeBooking} user={user} getUrlPay={getUrlPay} />} />
            <PrivateRoute path={`/movie/booking_stat_03/${idBooking}`} component={() => <BookingStatRoomThree idBooking={idBooking} dateBooking={dateBooking} timeBooking={timeBooking} user={user} getUrlPay={getUrlPay} />} />
            <PrivateRoute path={`/movie/booking_stat_04/${idBooking}`} component={() => <BookingStatRoomFour idBooking={idBooking} dateBooking={dateBooking} timeBooking={timeBooking} user={user} getUrlPay={getUrlPay} />} />
            <PrivateRoute path="/payment" component={() => <Payment urlPay={urlPay} />} />
            <PrivateRoute path="/payment_success" component={() => <PaymentSucess />} />
            <Route path="/survey" component={() => <Recommend />} />

            <Footer />
          </div>
        )
      }
  </Router>
  );
}

export default App;
