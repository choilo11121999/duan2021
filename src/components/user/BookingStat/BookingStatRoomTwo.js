import React, {Component, useState} from 'react';
import { Link } from 'react-router-dom';

function BookingStatRoomTwo (props) {
  return (
    <>
      <div className="container my-4 p-4 border border-secondary rounded">
        <div className="header">
            <h5 className="title booking-stats-title">Chọn ghế - Phòng 2</h5>
          </div>
          <div className="body c-booking-stats">
            <div className="booking-stats-list-row">
              <div className="radio-btn booking-stats-row">
                <label className="btn btn-outline-info btn-sm">A
                  <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                </label>
              </div>
              <div className="radio-btn booking-stats-row">
                <label className="btn btn-outline-info btn-sm">B
                  <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                </label>
              </div>
              <div className="radio-btn booking-stats-row">
                <label className="btn btn-outline-info btn-sm">C
                  <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                </label>
              </div>
              <div className="radio-btn booking-stats-row">
                <label className="btn btn-outline-info btn-sm">D
                  <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                </label>
              </div>
              <div className="radio-btn booking-stats-row">
                <label className="btn btn-outline-info btn-sm">E
                  <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                </label>
              </div>
            </div>
            <div id="room-2" className="booking-stats-id">
              <div className="c-screen">SCREEN</div>
              <div className="booking-stats-list-items">
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-success btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-success btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-success btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-success btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-success btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
              </div>
              <div className="booking-stats-list-items">
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-success btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-success btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn d-flex justify-content-icenter mb-3 mr-2">
                  <label className="btn btn-success btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-success btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-success btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
              </div>
              <div className="booking-stats-list-items">
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-primary btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-primary btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-primary btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-primary btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-primary btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
              </div>
              <div className="booking-stats-list-items">
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-success btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-success btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-primary btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-success btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-success btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
              </div>
              <div className="booking-stats-list-items">
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-danger btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-danger btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-danger btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn booking-stats-items">
                  <label className="btn btn-danger btn-sm">A00
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
              </div>
            </div>
            <div className="booking-stats-type">
              <div className="radio-btn booking-type-items">
                <label className="btn btn-success btn-sm">Normal</label>
              </div>
              <div className="radio-btn booking-type-items">
                <label className="btn btn-primary btn-sm">Vip</label>
              </div>
              <div className="radio-btn booking-type-items">
                <label className="btn btn-danger btn-sm">Sweetbox</label>
              </div>
            </div>
          </div>
          <div className="footer d-flex justify-content-between">
            <Link to="/movie/booking_time" type="button" className="btn btn-secondary align-left" >Quay lại</Link>
            <button type="button" className="btn btn-primary"><Link to="/payment">Thanh toán</Link></button>
          </div>
        </div>
      </>
  );
}

export default BookingStatRoomTwo; 
