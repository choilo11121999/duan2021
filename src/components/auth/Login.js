import "./../../css/Login.css";
import { Link, Redirect } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = ({ setUserLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [islogin, setIslogin] = useState(false);
  const [status, setStatus] = useState(false);
  let msgErr;

  const data = {
    email,
    password,
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/auth/login", data)
      .then((res) => {
        console.log("login success");
        localStorage.setItem("token", res.data.data.access_token);
        setIslogin(true);
        setUserLogin(res.data.data.user);
      })
      .catch((err) => {
        setStatus(true);
      });
  };

  if (islogin) {
    return <Redirect to={"/"} />;
  }
  if (status) {
    msgErr = "Nhập sai email hoặc password!";
  } else {
    msgErr = "";
  }

  return (
    <div className="login">
      <div className="login-header">
        <h2 className="text-center w-100 font-weight-bold">Đăng Nhập</h2>
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
          </div>
          <div className="form-group my-2">
            <input
              type="password"
              className="form-control"
              placeholder="Mật khẩu"
              required="required"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="mb-0 ml-4 text-center" style={{ color: "red" }}>
            {msgErr}
          </p>
          <div className="form-group my-4">
            <button type="submit" className="btn btn-danger btn-block btn-lg">
              Đăng nhập
            </button>
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
