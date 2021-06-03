import axios from "axios";
import {useEffect} from "react";
import { Button } from "react-bootstrap";

const Booking = () => {
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
                <Button show active variant="light" className="clearfix item-button">
                  <div className="items-left">
                    <span className="items-top">06</span>
                    <span className="items-top">Wed</span>
                  </div>
                  <div className="items-right"><span>02</span></div>
                </Button>{' '}
                <Button show active variant="light" className="clearfix item-button">
                  <div className="items-left">
                    <span className="items-top">06</span>
                    <span className="items-bottom">Thur</span>
                  </div>
                  <div className="items-right"><span>03</span></div>
                </Button>{' '}
                <Button show active variant="light" className="clearfix item-button">
                  <div className="items-left">
                    <span className="items-top">06</span>
                    <span className="items-bottom">Fri</span>
                  </div>
                  <div className="items-right"><span>04</span></div>
                </Button>{' '}
              </div>
              <div className="c-booking-room">
                <div className="room-title">Phòng số 1: </div>
                <div className="room-time">
                  <Button variant="light">14:00 PM</Button>{' '}<Button variant="light">14:00 PM</Button>{' '}
                  <Button variant="light">14:00 PM</Button>{' '}<Button variant="light">14:00 PM</Button>{' '}
                  <Button variant="light">14:00 PM</Button>{' '}
                </div>
                <div className="room-title">Phòng số 2:</div>
                <div className="room-time">
                  <Button variant="light">14:00 PM</Button>{' '}<Button variant="light">14:00 PM</Button>{' '}
                  <Button variant="light">14:00 PM</Button>{' '}<Button variant="light">14:00 PM</Button>{' '}
                  <Button variant="light">14:00 PM</Button>{' '}
                </div>
                <div className="room-title">Phòng số 3:</div>
                <div className="room-time">
                  <Button variant="light">14:00 PM</Button>{' '}<Button variant="light">14:00 PM</Button>{' '}
                  <Button variant="light">14:00 PM</Button>{' '}<Button variant="light">14:00 PM</Button>{' '}
                  <Button variant="light">14:00 PM</Button>{' '}
                </div>
                <div className="room-title">Phòng số 4:</div>
                <div className="room-time">
                  <Button variant="light">14:00 PM</Button>{' '}<Button variant="light">14:00 PM</Button>{' '}
                  <Button variant="light">14:00 PM</Button>{' '}<Button variant="light">14:00 PM</Button>{' '}
                  <Button variant="light">14:00 PM</Button>{' '}
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