import React, {Component, useState} from 'react';
import { Link } from 'react-router-dom';

function BookingStatRoomOne ({ idBooking, dateBooking, timeBooking, user }) {
  console.log(idBooking, dateBooking, timeBooking);
  const seatId = [];
  for(let i = 1; i < 20; i++) {
    i <= 4 ? seatId.push(`A${i}`) :
    i <= 8 ? seatId.push(`B${i-4}`) :
    i <= 12 ? seatId.push(`C${i-8}`) :
    i <= 16 ? seatId.push(`D${i-12}`) :
    seatId.push(`E${i-16}`)
    
  }
  const [checkedState, setCheckedState] = useState(
    new Array(seatId.length).fill(false)
  );

  const handleOnChangeCheckbox = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
  }

  const [show_room, setShow_room] = useState([]);
  const getInfoBooking = (status, id, seat_row, seat_column, type) => {
    console.log(status, id, seat_row, seat_column, type);
    let check = true;
    if (status) {
      show_room.forEach(room => {
        if (room.id === id) {
          check = false;
        }
      });
      if (check) {
        const updateShowRoom = [...show_room, {id, room_id: 1, show_id: idBooking, seat_column, seat_row, condition: "empty", type}]
        setShow_room(updateShowRoom);
      }
    } else {
      const updateShowRoom = show_room.filter(room => room.id !== id);
      setShow_room(updateShowRoom);
    } 
  }
  console.log(show_room);
  const data = {
    user_id: user.id,
    show_id: idBooking,
    show_room
  }

  const handlePostData = () => {
    console.log(data);
  }

  return (
    <>
    <div className="container my-4 p-4 border border-secondary rounded">
      <div className="header">
        <h5 className="title booking-stats-title">Chọn ghế - Phòng 1</h5>
      </div>
      <div className="p-5 border border-primary rounded w-50 text-center c-screen">screen</div>
      <div className="row mt-4 c-booking-stats">
        <div className="col-6 row w-50 mx-auto booking-stats-list-items">
          {
            seatId.map((seat, index) => {
              return (
                <div key={index} className="form-check col-3 my-2" >
                  <input
                      className="form-check-input d-none"
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={seat}
                      value={seat}
                      checked={checkedState[index]}
                      onChange={() => handleOnChangeCheckbox(index)}
                      style={{cursor: "pointer"}}
                  />
                  {
                    seat[0] === "C" ? (
                      <label
                        className={`form-check-label btn ${checkedState[index] ? "btn-primary" : "btn-outline-primary"}`} 
                        htmlFor={`custom-checkbox-${index}`} style={{cursor: "pointer"}}
                        onClick={() => getInfoBooking(!checkedState[index], index+1, seat[0], seat.substr(1), "vip")}
                      >{seat}</label>
                    ) : seat[0] === "E" ? (
                      <label
                        className={`form-check-label btn ${checkedState[index] ? "btn-danger" : "btn-outline-danger"}`} 
                        htmlFor={`custom-checkbox-${index}`} style={{cursor: "pointer"}}
                        onClick={() => getInfoBooking(!checkedState[index], index+1, seat[0], seat.substr(1), "sweetbox")}
                      >{seat}</label>
                    ) : (
                      <label
                        className={`form-check-label btn ${checkedState[index] ? "btn-success" : "btn-outline-success"}`} 
                        htmlFor={`custom-checkbox-${index}`} style={{cursor: "pointer"}}
                        onClick={() => getInfoBooking(!checkedState[index], index+1, seat[0], seat.substr(1), "normal")}
                      >{seat}</label>
                    )
                  }
              </div>
              );
            })
          }
        </div>
        <div className="d-flex col-2 flex-column booking-stats-type">
          <div className="btn btn-outline-success booking-type-items">Normal</div>
          <div className="btn btn-outline-primary booking-type-items">Vip</div>
          <div className="btn btn-outline-danger booking-type-items">Sweetbox</div>
        </div>
      </div>

      <div className="footer d-flex justify-content-between mt-5">
        <Link to={`/movie/booking_time/${idBooking}`} className="btn btn-secondary align-left" >Quay lại</Link>
        <div>Gia ve</div>
        <Link to="/payment" className="btn btn-primary" onClick={() => handlePostData}>Thanh toán</Link>
      </div>
    </div>
    </>
  );
}

export default BookingStatRoomOne; 
