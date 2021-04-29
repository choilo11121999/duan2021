import './../../css/Login.css';
import { Link, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Login = ({ setUserLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [islogin, setIslogin] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passworErr, setPasswordErr] = useState(false);
  let msgEmailErr, msgPasswordErr;

  useEffect(() => {
    validate();
    console.log(email);
  }, [email, password]);

  const validatEmail = new RegExp(
    '^[a-zA-Z0-9_]+@gmail+.[a-z]+$'
  );

  const validPassword = new RegExp('^[a-zA-Z0-9_.]{4,}$');

  const validate =() => {
    if(email != '' && !validatEmail.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if(password != '' && !validPassword.test(password)) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false)
    }
  };
  
  const data = {
    email,
    password
  };
  const handleSubmit =(e) => {
    e.preventDefault();

    axios.post('/api/auth/login', data)
      .then(
        res => {
          console.log("login success");
          localStorage.setItem('token', res.data.data.access_token);
          setIslogin(true);
          setUserLogin(res.data.data.user);
        }
      )
      .catch(
        err => {
          console.log(err);
        }
      );
  };

  if(islogin) {
    return <Redirect to={'/'} />;
  }

  return (
    <div className="login">
      <div className="login-header">
        <h2 className="text-center w-100 font-weight-bold">
          Đăng Nhập
        </h2>
      </div>
      <div className="login-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group my-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailErr ? <p style={{color: 'red'}}>Email của bạn không đúng định dạng</p> : ''}
          </div>
          <div className="form-group my-4">
            <input
              type="password"
              className="form-control"
              placeholder="Mật khẩu"
              required="required"
              onChange={(e) => setPassword(e.target.value)}
            />
            {passworErr ? <p style={{color: 'red'}}>Mật khẩu của bạn không đúng định dạng</p> : ''}
          </div>
          <div className="form-group my-4">
            <input
              type="submit"
              className="btn btn-danger btn-block btn-lg"
              value="Đăng nhập"
            />
          </div>
        </form>
      </div>
      <div className="login-footer">
        <div>
          <Link to="/user/forgot_password">Quên mật khẩu?</Link>
        </div>
        <div>
          Bạn chưa có tài khoản? <Link to="/user/register">Đăng ký</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;