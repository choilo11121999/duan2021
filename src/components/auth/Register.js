import axios from 'axios';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './../../css/Register.css';
function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [status, setStatus] = useState(0);
  const data = {
    name, 
    email,
    password,
    password_confirmation
  };
  let ErrNamemsg, ErrEmailmsg;
  
  const handleSubmit = (e) => {
    e.preventDefault();

   axios.post('/api/auth/signup', data)
    .then(
      res => {
        console.log(res);
        setStatus(1);
      }
    )
    .catch(
      err => {
        console.log(typeof err);
        console.log(Object.keys(err));
       setStatus(err.response.status);
      }
    )
  }
  if(status === 1) {
    return <Redirect to={'/user/login'} />;
  } else if(status === 422) {
    ErrEmailmsg = (
      <span style={{color: 'red'}}>Email đã tồn tại</span>
    );
  } else if(status === 500) {
    ErrNamemsg = (
      <span style={{color: 'red'}}>Tên người dùng đã tồn tại</span>
    );
  }

  return (
    <div className="register">
      <div className="register-header">
        <h2 className="text-center w-100 font-weight-bold">
          Đăng ký
        </h2>
      </div>
      <div className="register-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Email:
              <input type="email" placeholder="Enter email" className="form-control" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
              {ErrEmailmsg}
            </label>
          </div>
          <div className="form-group">
            <label>
              Tên người dùng:
              <input type="text" placeholder="Enter name" className="form-control" name="name" id="name" onChange={(e) => setName(e.target.value)} />
              {ErrNamemsg}
            </label>
          </div> 
          <div className="form-group">
            <label>
              Mật khẩu:
              <input type="password" placeholder="Enter password" className="form-control" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
            </label>
          </div>
          <div className="form-group">
            <label>
              Nhập lại mật khẩu:
              <input type="password" placeholder="Enter password confirmation" className="form-control" name="password-confirmation" id="password-confirmation" onChange={(e) => setPassword_confirmation(e.target.value)} />
            </label>
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
                <input className="form-check-input" type="checkbox" id="gridCheck" required/>
                <p >Tôi đã đọc và đồng ý các điều kiện 
                    <Link to="/thoathuan"> Thỏa thuận sử dụng</Link>.
                </p>
            </label>
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-danger btn-block btn-lg"
              value="Đăng ký"
            />
          </div> 
        </form>
      </div>
      <div className="register-footer">
        <p>Bạn đã có tài khoản rồi? <Link to="/user/login">Đăng nhập</Link>.</p>
      </div>
    </div>
  );
}

export default Register;