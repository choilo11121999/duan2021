import React, {Component, useState} from 'react';
import { Link } from 'react-router-dom';

function BookingStatRoomOne ({idBooking}) {
  return (
    <>
    <div className="container my-4 p-4 border border-secondary rounded">
     <div className="header">
        <h5 className="title">Chọn ghế</h5>
      </div>
      <div className="body c-booking-stats">
        <div id="room-1" className="booking-stats-id">
          <div className="booking-stats-title">Phòng 1</div>
          <div className="booking-stats-items">
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn btn-success btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn btn-success btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn btn-success btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn btn-success btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
          </div>
          <div className="booking-stats-items">
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn btn-success btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn btn-success btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn btn-success btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn btn-success btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
          </div>
          <div className="booking-stats-items">
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn-primary btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn-primary btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn-primary btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn-primary btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
          </div>
          <div className="booking-stats-items">
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn btn-success btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn btn-success btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn btn-success btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn btn-success btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
          </div>
          <div className="booking-stats-items">
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn-danger btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn-danger btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2">
              <label className="btn btn-danger btn-sm">A00
                <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
              </label>
            </div>
          </div>
        </div>
        </div>
      <div className="footer d-flex justify-content-between">
        <Link to="/movie/booking_time" type="button" className="btn btn-secondary align-left" >Quay lại</Link>
        <button type="button" className="btn btn-primary">Đặt chỗ</button>
      </div>
    </div>
    </>
  );
}

export default BookingStatRoomOne; 
