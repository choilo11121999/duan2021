import React, {Component, useState} from 'react';
import { Link } from 'react-router-dom';
import "../../css/ChangePassword.css";

function ChangePassword (props) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword_confirmation, setNewPassword_confirmation] = useState("");
  const data = {oldPassword, newPassword, newPassword_confirmation};
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="c-change-password">
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
                onChange={(e) => setOldPassword(e.target.value)}
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
                onChange={(e) => setNewPassword(e.target.value)}
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
                onChange={(e) => setNewPassword_confirmation(e.target.value)}
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
