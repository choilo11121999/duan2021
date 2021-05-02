import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "./../../css/Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [status, setStatus] = useState(0);
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passworErr, setPasswordErr] = useState(false);
  const [passworConfirmationErr, setPasswordConfirmationErr] = useState(false);

  useEffect(() => {
    validate();
  }, [name, email, password, password_confirmation]);

  const validateEmail = new RegExp("^[a-z0-9]+@gmail([\.])com$");

  const validatePassword = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[!@$^%()])[A-Za-][a-zA-Z0-9!@$%^&()]{6,}$"
  );
  const validdateName = new RegExp("^[a-zA-Z0-9]{1,20}$");

  const validate = () => {
    if (name !== "" && !validdateName.test(name)) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    if (email !== "" && !validateEmail.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (password !== "" && !validatePassword.test(password)) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    if (password_confirmation !== "" && password_confirmation !== password) {
      setPasswordConfirmationErr(true);
    } else {
      setPasswordConfirmationErr(false);
    }
  };

  const data = {
    name,
    email,
    password,
    password_confirmation,
  };
  let ErrNamemsg, ErrEmailmsg;

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/auth/signup", data)
      .then((res) => {
        setStatus(1);
      })
      .catch((err) => {
        setStatus(err.response.status);
      });
  };
  if (status === 1) {
    return <Redirect to={"/user/login"} />;
  } else if (status === 422) {
    ErrEmailmsg = "Email đã tồn tại";
  } else if (status === 500) {
    ErrNamemsg = "Tên người dùng đã tồn tại";
  } else {
    ErrEmailmsg = "";
    ErrNamemsg = "";
  }

  return (
    <div className="register">
      <div className="register-header">
        <h2 className="text-center w-100 font-weight-bold">Đăng ký</h2>
      </div>
      <div className="register-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group my-2">
            <label>
              Email:
              <input
                type="email"
                placeholder="Enter email"
                className="form-control"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailErr ? (
                <span style={{ color: "red" }}>Email sai định dạng</span>
              ) : (
                ""
              )}
            </label>
          </div>
          <div className="form-group my-2">
            <label>
              Tên người dùng:
              <input
                type="text"
                placeholder="Enter name"
                className="form-control"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              {nameErr ? (
                <span style={{ color: "red" }}>Tên sai định dạng</span>
              ) : (
                ""
              )}
            </label>
          </div>
          <div className="form-group my-2">
            <label>
              Mật khẩu:
              <input
                type="password"
                placeholder="Enter password"
                className="form-control"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passworErr ? (
                <span style={{ color: "red" }}>Mật khẩu sai định dạng</span>
              ) : (
                ""
              )}
            </label>
          </div>
          <div className="form-group my-2">
            <label>
              Nhập lại mật khẩu:
              <input
                type="password"
                placeholder="Enter password confirmation"
                className="form-control"
                name="password-confirmation"
                id="password-confirmation"
                onChange={(e) => setPassword_confirmation(e.target.value)}
                required
              />
              {passworConfirmationErr ? (
                <span style={{ color: "red" }}>Mậy khẩu không khớp</span>
              ) : (
                ""
              )}
            </label>
          </div>
          <div className="form-group my-2 form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                required
              />
              <p>
                Tôi đã đọc và đồng ý các điều kiện
                <Link to="/thoathuan"> Thỏa thuận sử dụng</Link>.
              </p>
            </label>
          </div>
          <div className="form-group my-2">
            <p className="err mb-1 text-center" style={{ color: "red" }}>
              {ErrEmailmsg}
            </p>
            <p className="err mb-1 text-center" style={{ color: "red" }}>
              {ErrNamemsg}
            </p>
            <button type="submit" className="btn btn-danger btn-block btn-lg">
              Đăng ký
            </button>
          </div>
        </form>
      </div>
      <div className="register-footer">
        <p>
          Bạn đã có tài khoản rồi? <Link to="/user/login">Đăng nhập</Link>.
        </p>
      </div>
    </div>
  );
};

export default Register;
