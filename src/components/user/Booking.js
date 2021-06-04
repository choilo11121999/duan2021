import axios from "axios";
import {useEffect, useState} from "react";
import { Button } from "react-bootstrap";

const Booking = () => {
  const [valueRadio, setValueRadio] = useState('detail');
  const handleChecked = (e) => {
    e.preventDefault();
    if(e.target.checked) {
      setValueRadio(true);
    } else {
      setValueRadio(false)
    }
  };
  useEffect(() => {
    axios
    .get("api/select-list/show?product_id=1")
    .then((res) => {
      console.log("login success");
    })
    .catch((err) => {
      
    });
  }, []);

  return (
    <div>
      <div className="modal fade modal-z-index" id="selectTime" tabindex="-1" role="dialog" aria-labelledby="selectTimeTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="selectTimeTitle">Chọn ngày và giờ</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="c-booking-items">
                <div className="radio-btn d-flex justify-content-center mb-3 mr-2" 
                  onChange={(e) => setValueRadio(e.target.value)}>
                  <label className="btn btn-light btn-sm">
                    <div className="items-left">
                      <span className="items-top">06</span>
                      <span className="items-top">Wed</span>
                    </div>
                    <div className="items-right"><span>02</span></div>
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn d-flex justify-content-center mb-3 mr-2" 
                  onChange={(e) => setValueRadio(e.target.value)}>
                  <label className="btn btn-light btn-sm">
                    <div className="items-left">
                      <span className="items-top">06</span>
                      <span className="items-top">Wed</span>
                    </div>
                    <div className="items-right"><span>02</span></div>
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
                <div className="radio-btn d-flex justify-content-center mb-3 mr-2" 
                  onChange={(e) => setValueRadio(e.target.value)}>
                  <label className="btn btn-light btn-sm">
                    <div className="items-left">
                      <span className="items-top">06</span>
                      <span className="items-top">Wed</span>
                    </div>
                    <div className="items-right"><span>02</span></div>
                    <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                  </label>
                </div>
              </div>
              <div className="c-booking-room">
                <div className="room-title">Phòng số 1: </div>
                <div className="room-time">
                  <div className="radio-btn d-flex justify-content-center mb-3 mr-2" 
                    onChange={(e) => setValueRadio(e.target.value)}>
                    <label className="btn btn-dark btn-sm">14:00
                      <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                    </label>
                  </div>
                  <div className="radio-btn d-flex justify-content-center mb-3 mr-2" 
                    onChange={(e) => setValueRadio(e.target.value)}>
                    <label className="btn btn-dark btn-sm">14:00
                      <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                    </label>
                  </div>
                  <div className="radio-btn d-flex justify-content-center mb-3 mr-2" 
                    onChange={(e) => setValueRadio(e.target.value)}>
                    <label className="btn btn-dark btn-sm">14:00
                      <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                    </label>
                  </div>
                  <div className="radio-btn d-flex justify-content-center mb-3 mr-2" 
                    onChange={(e) => setValueRadio(e.target.value)}>
                    <label className="btn btn-dark btn-sm">14:00
                      <input id="detail" className="d-none" value="detail" name="select" type="radio" />
                    </label>
                  </div>
                </div>
                <div className="room-title">Phòng số 2:</div>
                <div className="room-time">
                  <div className="radio-btn d-flex justify-content-center mb-3 mr-2" 
                    onChange={(e) => setValueRadio(e.target.value)}>
                    <label className="btn btn-dark btn-sm">14:00
                      <input id="detail" className="d-none" value="detail" name="select" type="radio" />
                    </label>
                  </div>
                  <div className="radio-btn d-flex justify-content-center mb-3 mr-2" 
                    onChange={(e) => setValueRadio(e.target.value)}>
                    <label className="btn btn-dark btn-sm">14:00
                      <input id="detail" className ="d-none" value="detail" name="select" type="radio" />
                    </label>
                  </div>
                  <div className="radio-btn d-flex justify-content-center mb-3 mr-2" 
                    onChange={(e) => setValueRadio(e.target.value)}>
                    <label className="btn btn-dark btn-sm">14:00
                      <input id="detail" className="d-none" value="detail" name="select" type="radio" />
                    </label>
                  </div>
                </div>
                <div className="room-title">Phòng số 3:</div>
                <div className="room-time">
                  <div className="radio-btn d-flex justify-content-center mb-3 mr-2" 
                    onChange={(e) => setValueRadio(e.target.value)}>
                    <label className="btn btn-dark btn-sm">14:00
                      <input id="detail" className="d-none" value="detail" name="select" type="radio" />
                    </label>
                  </div>
                  <div className="radio-btn d-flex justify-content-center mb-3 mr-2" 
                    onChange={(e) => setValueRadio(e.target.value)}>
                    <label className="btn btn-dark btn-sm">14:00
                      <input id="detail" className="d-none" value="detail" name="select" type="radio" />
                    </label>
                  </div>
                </div>
                <div className="room-title">Phòng số 4:</div>
                <div className="room-time">
                  <div className="radio-btn d-flex justify-content-center mb-3 mr-2" 
                    onChange={(e) => setValueRadio(e.target.value)}>
                    <label className="btn btn-dark btn-sm">14:00
                      <input id="detail" className="d-none" value="detail" name="select" type="radio" />
                    </label>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
              <button type="button" className="btn btn-primary">Đặt vé</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;