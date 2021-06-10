import axios from 'axios';
import React, {Component, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import "../../css/ChangeInfo.css";

function ChangeInfo ({ user, setUserLogin }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [city, setCity] = useState(user.city);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const data = {
    id: user.id, name, email, phone, address, city,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/users/${user.id}`, data, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => {
      setUpdateSuccess(true);
      const user = {
        id: res.data.data.id,
        name: res.data.data.name,
        email: res.data.data.email,
        phone: res.data.data.phone,
        address: res.data.data.address,
        city: res.data.data.city
      }
      setUserLogin(user)
      Swal.fire({
        icon: 'success',
        text: 'Đổi thông tin thành công!',
      })
    })
  };
  if(updateSuccess === true) {
    return <Redirect to="/" />
  }
  return (
    <>
      <div className="c-change-info rounded">
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group my-4">
              <label>Email:
                <input type="email" name="email" id="email"
                  placeholder="Nhập email"
                  className="form-control" required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group my-4">
              <label>Số điện thoại:
                <input type="text" name="phone" id="phone"
                  placeholder="Nhập số điện thoại"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)} 
                />
              </label>
            </div>
            <div className="form-group my-4">
              <label>Địa chỉ:
                <input type="text" name="address" id="address"
                  placeholder="Nhập địa chỉ"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group my-4">
              <label>Thành phố:
                <input
                  type="text" name="city"id="city"
                  placeholder="Nhập thành phố"
                  className="form-control"
                  value={city}
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
