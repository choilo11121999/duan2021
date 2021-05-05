import './../css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './user/Header';
import Footer from './user/Footer';
import Home from './user/Home';
import MoviePlaying from './user/MoviePlaying';
import MovieUpComing from './user/MovieUpComing';
import Login from './auth/Login';
import Register from './auth/Register';
import Admin from './admin/admin';
import Products from './admin/products/index';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState('');
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
  }

  return (
    <Router>
    <div className="container class"> 
      <Header user={user} setUserLogin={setUserLogin} />

      {/* Router */}
      <Route path="/" exact component={Home}/>
      <Route path="/admin" exact component={Admin}/>
      <Route path="/admin/products" component={Products} />
      <Route path="/user/login" component={() => <Login setUserLogin={setUserLogin} />}/>
      <Route path="/user/register" component={Register}/>
      <Route path="/movie/movie_playing" component={MoviePlaying} />
      <Route path="/movie/movie_upcoming" component={MovieUpComing} />
    </div>

    <Footer />
  </Router>
  );
}

export default App;
