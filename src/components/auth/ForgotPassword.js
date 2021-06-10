import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [new_password, setNew_password] = useState("");
  const [new_confirm_password, setNew_confirm_password] = useState("");
  const [status, setStatus] = useState("");
  const data = {email, new_password, new_confirm_password};
  const [passworErr, setPasswordErr] = useState(false);
  const [passworConfirmationErr, setPasswordConfirmationErr] = useState(false);

  const validatePassword = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[!@$^%()])[A-Za-][a-zA-Z0-9!@$%^&()]{8,}$"
  );

  useEffect(() => {
    validate();
  }, [new_password, new_confirm_password]);

  const validate = () => {
    if (new_password !== "" && !validatePassword.test(new_password)) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    if (new_confirm_password !== "" && new_confirm_password !== new_password) {
      setPasswordConfirmationErr(true);
    } else {
      setPasswordConfirmationErr(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/forget_password', data).then((res) => {
      console.log(res);
      setStatus(true);
      Swal.fire({
        icon: 'success',
        text: 'Lấy mật khẩu mới thành công!',
      })
    }).catch((err) => {
      setStatus(false)
     })
  }

  let msgErr;
  if (status) {
    return <Redirect to="/user/login" />
  } else if(status === false) {
    msgErr = "Tài khoản không tồn tại";
  }
  return (
    <div className="login rounded">
      <div className="login-header">
        <h2 className="text-center w-100 font-weight-bold">Lấy lại mật khẩu</h2>
      </div>
      <p className="mb-0 ml-4 text-center" style={{ color: "red" }}>
        {msgErr}
      </p>
      <div className="login-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group my-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email của bạn"
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group my-4">
            <input
              type="password"
              className="form-control"
              placeholder="Nhập mật khẩu mới"
              required="required"
              onChange={(e) => setNew_password(e.target.value)}
            />
            {passworErr ? (
                <span style={{ color: "red" }}>Mật khẩu sai định dạng (gồm ít nhất 8 chữ số gồm 1 chữ hoa, chữ thường, số và ký tự đặc biệt !@$^%())</span>
              ) : (
                ""
              )}
          </div>
          <div className="form-group my-4">
            <input
              type="password"
              className="form-control"
              placeholder="Nhập lại mật khẩu mới"
              required="required"
              onChange={(e) => setNew_confirm_password(e.target.value)}
            />
            {passworConfirmationErr ? (
                <span style={{ color: "red" }}>Mật khẩu không khớp</span>
              ) : (
                ""
              )}
          </div>
          <div className="form-group my-4">
            <button type="submit" className="btn btn-danger btn-block btn-lg">
              Xác nhận
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;