import React, {Component, useState} from 'react';
import { Link } from 'react-router-dom';
import "../../css/ChangeInfo.css";

function ChangeInfo (props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const data = {
    name, email, phone, address, city,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="c-change-info">
        <div className="change-info-header">
          <h2 className="text-center w-100 font-weight-bold">Sửa thông tin cá nhân</h2>
        </div>
        <div className="change-info-body my-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group my-4">
              <label>Tên:
                <input
                  type="text" name="name" id="name"
                  placeholder="Nhập tên"
                  className="form-control" required
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group my-4">
              <label>Email:
                <input type="email" name="email" id="email"
                  placeholder="Nhập email"
                  className="form-control" required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group my-4">
              <label>Số điện thoại:
                <input type="text" name="phone" id="phone"
                  placeholder="Nhập số điện thoại"
                  className="form-control" required
                  onChange={(e) => setPhone(e.target.value)} 
                />
              </label>
            </div>
            <div className="form-group my-4">
              <label>Địa chỉ:
                <input type="text" name="address" id="address"
                  placeholder="Nhập địa chỉ"
                  className="form-control" required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group my-4">
              <label>Thành phố:
                <input
                  type="text" name="city"id="city"
                  placeholder="Nhập thành phố"
                  className="form-control" required
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group my-4">
              <button type="submit" className="btn btn-danger btn-block btn-lg">
                Cập nhật
              </button>
            </div>
          </form>
        </div>
      </div> 
    </>
  );
}

export default ChangeInfo; 
