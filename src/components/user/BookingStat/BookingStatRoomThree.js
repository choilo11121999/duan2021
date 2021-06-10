import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import base64 from 'uuid-base64';

function BookingStatRoomThree ({ idBooking, dateBooking, timeBooking, user, getUrlPay }) {
  const [listShowRoom, setListShowRoom] = useState({
    product: {
      film_name: "",
      poster: ""
    },
    show_room: []
  });
  const [checkedState, setCheckedState] = useState(
    new Array(28).fill(false)
  );

  const [calcPayment, setCalcPayment] = useState(0);
  const [pointMem, setPointMem] = useState(0);
  const [getpay, setGetpay] = useState(false);

  const [getListShow, setGetListShow] = useState(false);
  useEffect(() => {
    axios.get(`api/select-list/show?product_id=${idBooking}&show_date=${dateBooking}&show_time=${timeBooking}&room_id=3`).then((res) => {
      const data = res.data.data[0];
      setListShowRoom(data);
    })
  }, [getListShow]);

  // payment
  useEffect(() => {
    const data = {
      user_id: user.id,
      show_id: idBooking,
      show_room
    }
    axios.post('/api/payment/calculate_payment', data, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res) => {
      const pay = res.data.data.paid_amount;
      setCalcPayment(pay)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [getpay])

  const showRoom = listShowRoom.show_room;

  const handleOnChangeCheckbox = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    
    setCheckedState(updatedCheckedState);
  }

  const [show_room, setShow_room] = useState([]);
  const getInfoBooking = (status, id, show_id, seat_row, seat_column, type) => {
    let check = true;
    if (status) {
      show_room.forEach(room => {
        if (room.id === id) {
          check = false;
        }
      });
      if (check) {
        const updateShowRoom = [...show_room, {id, room_id: 1, show_id, seat_column, seat_row, condition: "empty", type}]
        setShow_room(updateShowRoom);
      }
    } else {
      const updateShowRoom = show_room.filter(room => room.id !== id);
      setShow_room(updateShowRoom);
    } 
    setGetpay(!getpay)
  }  

  const handlePostData = () => {
    const datapayment = {
      notifyUrl: "https://momo.vn",
      returnUrl: "http://localhost:3000/payment_success",
      orderId: base64.encode(uuidv4()),
      // amount: calcPayment,
      amount: 1000,
      requestId: base64.encode(uuidv4()),
      extraData: user.email
    }
    axios.post('/api/payment/momo_redirect', datapayment, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res) => {
      const url = res.data
      getUrlPay(url);
      const databooked =  {
        "user_id": user.id,
        "show_id": idBooking,
        show_room,
        "paid_amount": calcPayment,
        "mem_pts_plus": pointMem
      }
      localStorage.setItem("dataBooked", JSON.stringify(databooked));
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const element = showRoom.map((current, index) => {
    const temp = showRoom[0].id - 1;
    return (
      <div key={index} className="form-check col-2 my-2">
        <input
            className="form-check-input d-none"
            type="checkbox"
            id={`custom-checkbox-${index}`}
            name={current.id}
            value={current.id}
            checked={checkedState[index]}
            onChange={() => handleOnChangeCheckbox(index)}
            style={{cursor: "pointer"}}
        />
        {
          current.type === "vip" ? (
            current.condition === "0" ? (
              <label
                className={`form-check-label btn btn-sm ${checkedState[index] ? "btn-primary" : "btn-outline-primary"}`} 
                htmlFor={`custom-checkbox-${index}`} style={{cursor: "pointer"}}
                onClick={() => getInfoBooking(!checkedState[index], current.id, current.show_id, current.seat_row, current.seat_column, current.type)}
              >
                {
                  (current.id - temp) <= 5 ? "A" + (current.id - temp) :
                  (current.id - temp) <= 10 ? "B" + (current.id - temp - 5) :
                  (current.id - temp) <= 15 ? "C" + (current.id - temp - 10) :
                  (current.id -temp) <= 20 ? "D" + (current.id - temp - 15) :
                  (current.id -temp) <= 25 ? "E" + (current.id - temp - 20) :
                  "F" + (current.id -temp -25)}
              </label>
            ) : (
              <label
                className={`form-check-label bg-secondary text-center rounded py-2`} 
                htmlFor={`custom-checkbox-${index}`} style={{cursor: "not-allowed"}}
              >
                {
                  (current.id - temp) <= 5 ? "A" + (current.id - temp) :
                  (current.id - temp) <= 10 ? "B" + (current.id - temp - 5) :
                  (current.id - temp) <= 15 ? "C" + (current.id - temp - 10) :
                  (current.id -temp) <= 20 ? "D" + (current.id - temp - 15) :
                  (current.id -temp) <= 25 ? "E" + (current.id - temp - 20) :
                  "F" + (current.id -temp -25)}
              </label>
            )
          ) : current.type  === "sweetbox" ? (
            current.condition === "0" ? (
              <label
              className={`form-check-label btn btn-lg ${checkedState[index] ? "btn-danger" : "btn-outline-danger"}`} 
              htmlFor={`custom-checkbox-${index}`} style={{cursor: "pointer"}}
              onClick={() => getInfoBooking(!checkedState[index], current.id, current.show_id, current.seat_row, current.seat_column, current.type)}
            >
              {
                (current.id - temp) <= 5 ? "A" + (current.id - temp) :
                (current.id - temp) <= 10 ? "B" + (current.id - temp - 5) :
                (current.id - temp) <= 15 ? "C" + (current.id - temp - 10) :
                (current.id -temp) <= 20 ? "D" + (current.id - temp - 15) :
                (current.id -temp) <= 25 ? "E" + (current.id - temp - 20) :
                "F" + (current.id -temp -25)
              }
            </label>
            ) : (
              <label
                className={`form-check-label  bg-secondary text-center rounded py-3`} 
                htmlFor={`custom-checkbox-${index}`} style={{cursor: "not-allowed"}}
              >
                {
                  (current.id - temp) <= 5 ? "A" + (current.id - temp) :
                  (current.id - temp) <= 10 ? "B" + (current.id - temp - 5) :
                  (current.id - temp) <= 15 ? "C" + (current.id - temp - 10) :
                  (current.id -temp) <= 20 ? "D" + (current.id - temp - 15) :
                  (current.id -temp) <= 25 ? "E" + (current.id - temp - 20) :
                  "F" + (current.id -temp -25)}
              </label>
            )
          ) : (
            current.condition === "0" ? (
              <label
              className={`form-check-label btn btn-sm ${checkedState[index] ? "btn-success" : "btn-outline-success"}`} 
              htmlFor={`custom-checkbox-${index}`} style={{cursor: "pointer"}}
              onClick={() => getInfoBooking(!checkedState[index], current.id, current.show_id, current.seat_row, current.seat_column, current.type)}
            >
              {
                (current.id - temp) <= 5 ? "A" + (current.id - temp) :
                (current.id - temp) <= 10 ? "B" + (current.id - temp - 5) :
                (current.id - temp) <= 15 ? "C" + (current.id - temp - 10) :
                (current.id -temp) <= 20 ? "D" + (current.id - temp - 15) :
                (current.id -temp) <= 25 ? "E" + (current.id - temp - 20) :
                "F" + (current.id -temp -25)
               }
            </label>
            ) : (
              <label
                className={`form-check-label bg-secondary text-center rounded py-2`} 
                htmlFor={`custom-checkbox-${index}`} style={{cursor: "not-allowed"}}
              >
                {
                  (current.id - temp) <= 5 ? "A" + (current.id - temp) :
                  (current.id - temp) <= 10 ? "B" + (current.id - temp - 5) :
                  (current.id - temp) <= 15 ? "C" + (current.id - temp - 10) :
                  (current.id -temp) <= 20 ? "D" + (current.id - temp - 15) :
                  (current.id -temp) <= 25 ? "E" + (current.id - temp - 20) :
                  "F" + (current.id -temp -25)}
              </label>
            )
          )
        }
    </div>
    );
  })

  return (
    <>
    <div className="container my-4 p-0 border border-secondary rounded">
      <div className="header">
        <h3 className="title booking-stats-title m-3">Chọn ghế - Phòng 3</h3>
      </div>
      <div className="row mt-4 c-booking-stats">
        <div className="p-5 border border-primary rounded text-center mb-5" style={{width: "450px", marginLeft: "15%"}}>screen</div>
        <div className="col-1"></div>
        <div className="col-6 row w-50 mx-auto booking-stats-list-items">
          {element}
        </div>
        <div className="d-flex col-2 flex-column booking-stats-type">
          <div className="btn btn-outline-success booking-type-items">Normal</div>
          <div className="btn btn-outline-primary booking-type-items">Vip</div>
          <div className="btn btn-outline-danger booking-type-items">Sweetbox</div>
          <div className="btn btn-secondary booking-type-items">Booked</div>
        </div>
        <div className="col-1"></div>
      </div>

      <div className="footer d-flex justify-content-between mt-5 mx-0 bg-dark p-2" style={{color: "#fff", fontSize: "14px"}}>
        <Link to={`/movie/booking_time/${idBooking}`} className="btn btn-secondary h-100 my-auto" ><i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;Quay lại</Link>
        <div className="my-auto text-center"><img src={axios.defaults.baseURL+listShowRoom.product.poster} width={90} height={120} /></div>
        <div className="my-auto"><span>Tên phim: </span><strong>{listShowRoom.product.film_name}</strong></div>
        <div className="my-auto">
          <div><span>Suất chiếu: </span><strong>{timeBooking + ", " + dateBooking}</strong></div>
          <div><span>Phòng chiếu: </span><strong>Phòng số 1</strong></div>
        </div>
        <div className="my-auto"><span>Giá vé: </span><strong>{calcPayment} VND</strong></div>
        <Link to="/payment" className="btn btn-danger h-25 my-auto" onClick={() => handlePostData()}>Thanh toán &nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
      </div>
    </div>
    </>
  );
}

export default BookingStatRoomThree; 
