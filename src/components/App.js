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
import Booking from './user/Booking';
import { useEffect, useState } from 'react';
import axios from 'axios'; 

const App = () => {
  const [user, setUser] = useState('');
  const [productName, setProductName] = useState('');
  useEffect(() => {
    axios.get('/api/auth/user')
    .then(
      res => {
        console.log(res);
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
  console.log("user ", user);
  return (
    <Router>
      <div className="App"> 
        <Header user={user} setUserLogin={setUserLogin} />

        {/* Router */}
        <Route path="/" exact component={() => <Home setProductNameFromHome={setProductNameFromHome} phimName={productName} />} />
        <Route path="/admin" component={Admin} />
        <Route path="/user/login" component={() => <Login setUserLogin={setUserLogin} />}/>
        <Route path="/user/register" component={Register}/>
        <Route path="/movie/movie_playing" component={MoviePlaying} />
        <Route path="/movie/movie_upcoming" component={MovieUpComing} />
        <Route path={`/movie/movie_detail/${productName}`} component={MovieDetail} />
        <Route path="/movie/movie_detail/booking" component={Booking} />

      </div>

    <Footer />
    <Route path="/admin" exact component={Admin}/>
    <Route path="/admin/products" component={Products} />
  </Router>
  );
}

export default App;
