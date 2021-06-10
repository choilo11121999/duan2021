import axios from 'axios';
import React, {Component, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import "../../css/ChangePassword.css";

function ChangePassword ({ setUserLogin }) {
  const [current_password, setCurrent_password] = useState("");
  const [new_password, setNew_password] = useState("");
  const [new_confirm_password, setNew_confirm_password] = useState("");
  const [status, setStatus] = useState(false);
  const data = {current_password, new_password, new_confirm_password};
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/auth/change_password', data, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    }).then((res) => {
      setStatus(true);
      Swal.fire({
        icon: 'success',
        text: 'Đổi mật khẩu thành công!',
      });
    }).catch((err) => console.log(err))
  };
  if (status) {
    localStorage.clear();
    setUserLogin(null);
    return <Redirect to="/user/login" />
  }
  return (
    <>
      <div className="c-change-password rounded">
        <div className="change-password-header">
          <h2 className="text-center w-100 font-weight-bold">Đổi mật khẩu</h2>
        </div>
        <div className="change-password-body my-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group my-4">
              <input
                type="password"
                placeholder="Nhập mật khẩu cũ"
                className="form-control"
                name="old-password"
                id="old-password"
                onChange={(e) => setCurrent_password(e.target.value)}
                required
              />
            </div>
            <div className="form-group my-4">
              <input
                type="password"
                placeholder="Nhập mật khẩu mới"
                className="form-control"
                name="new-password"
                id="new-password"
                onChange={(e) => setNew_password(e.target.value)}
                required
              />
            </div>
            <div className="form-group my-4">
              <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                className="form-control"
                name="password-confirmation"
                id="password-confirmation"
                onChange={(e) => setNew_confirm_password(e.target.value)}
                required
              />
            </div>
            <div className="form-group my-4">
              <button type="submit" className="btn btn-danger btn-block btn-lg">
                Đổi mật khẩu
              </button>
            </div>
          </form>
        </div>
      </div> 
    </>
  );
}

export default ChangePassword; 
