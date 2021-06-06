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
import Products from './admin/products/index';
import BookingTime from './user/BookingTime';
import { useEffect, useState } from 'react';
import axios from 'axios'; 
import BookingStatRoomOne from './user/BookingStat/BookingStatRoomOne';
import BookingStatRoomTwo from './user/BookingStat/BookingStatRoomTwo';
import BookingStatRoomThree from './user/BookingStat/BookingStatRoomThree';
import BookingStatRoomFour from './user/BookingStat/BookingStatRoomFour';

const App = () => {
  const [user, setUser] = useState('');
  const [productName, setProductName] = useState('');
  const [idBooking, setIdBooking] = useState("");
  const role = localStorage.getItem('role');
  console.log("role",role);
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
  }, []);

  const setUserLogin = (user_login) => {
    setUser(user_login)
  };

  const setProductNameFromHome = (product_name) => {
    setProductName(product_name);
  };

  const getIdBooking = (id) => {
    setIdBooking(id);
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

            <Route path="/" exact component={() => <Home setProductNameFromHome={setProductNameFromHome} phimName={productName} />} />
            <Route path="/user/login" component={() => <Login setUserLogin={setUserLogin} />}/>
            <Route path="/user/register" component={Register}/>
            <Route path="/movie/movie_playing" component={() => <MoviePlaying getIdBooking={getIdBooking} />} />
            <Route path="/movie/movie_upcoming" component={MovieUpComing} />
            <Route path={`/movie/movie_detail/${productName}`} component={MovieDetail} />
            <Route path="/movie/booking_time" component={() => <BookingTime idBooking={idBooking} />} />
            <Route path="/movie/booking_stat_01" component={() => <BookingStatRoomOne idBooking={idBooking} />} />
            <Route path="/movie/booking_stat_02" component={() => <BookingStatRoomTwo idBooking={idBooking} />} />
            <Route path="/movie/booking_stat_03" component={() => <BookingStatRoomThree idBooking={idBooking} />} />
            <Route path="/movie/booking_stat_04" component={() => <BookingStatRoomFour idBooking={idBooking} />} />
            
            <Footer />
          </div>
        )
      }
  </Router>
  );
}

export default App;
