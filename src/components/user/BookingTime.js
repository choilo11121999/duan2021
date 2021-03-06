import axios from "axios";
import {useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookingTime = ({ idBooking, getIdDateTimeBooking }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [valueDate, setValueDate] = useState("");
  const [valueTime, setValueTime] = useState("");
  const [dateData, setDateData] = useState(new Array());
  const [timeData, setTimeData] = useState(new Array());
  const listDate = [];

  useEffect(() => {
    axios
    .get(`api/select-list/show?product_id=${idBooking}`)
    .then((res) => {
      setDateData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [idBooking]);

  dateData.map((date, index) => listDate.push(date.show_date));
  const listDate1 = new Set(listDate);
  const listDate2 = [...listDate1];

  const roomData = {
    1: [],
    2: [],
    3: [],
    4: []
  };
  timeData.map((time, index) => {
    Object.keys(roomData).forEach(key => {
      if (time.room_id.toString() === key)
        roomData[key].push(time.show_time.substring(0, 5))
    });
  })
  const getTime = (date) => {
    setValueDate(date);
    axios
    .get(`api/select-list/show?product_id=${idBooking}&show_date=${date}`)
    .then((res) => {
      setTimeData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="container my-4 p-4 border border-secondary rounded">
     <div className="header">
        <h5 className="title">Chọn ngày và giờ</h5>
      </div>
      <div className="body">
        <div className="c-booking-items">
          <div className="radio-btn btn-group-toggle d-flex justify-content-center mb-3 mr-2" data-toggle="buttons">
            {
              listDate2.sort().map((date, index) => {
                const day = new Date(date);
                const dayWeek = day.toString().slice(0,3)
                const dateArr = date.split(/[-]+/);
                return (
                  <label key={index}  className="btn btn-light btn-sm mx-1" onClick={() => getTime(date)}>
                    <div className="items-left">
                      <span className="items-top">{dateArr[1]}</span>
                      <span className="items-top">{dayWeek}</span>
                    </div>
                    <div className="items-right"><span>{dateArr[2]}</span></div>
                    <input id={date} className ="d-none" value={date} name="select" type="radio"/>
                  </label>
                );
              })
            }
            </div>
        </div>
        <div className="c-booking-room btn-group-toggle" data-toggle="buttons">
          <div className="room-title">Phòng số 1: </div>
          <div className="room-time">
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2" 
              >
                {
                  roomData[1].map((time, index) => (
                    <label key={index} className="btn btn-light btn-sm mx-1" onClick={(e) => setValueTime(e.currentTarget.querySelector("input").value)}>{time}
                      <input id={time} className ="d-none" value={`1-${time}`} name="select" type="radio" />
                    </label>
                  ))
                }
            </div>
          </div>
          <div className="room-title">Phòng số 2: </div>
          <div className="room-time">
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2"
              >
                {
                  roomData[2].map((time, index) => (
                    <label key={index} className="btn btn-light btn-sm mx-1" onClick={(e) => setValueTime(e.currentTarget.querySelector("input").value)}>{time}
                      <input id={time} className ="d-none" value={`2-${time}`} name="select" type="radio" />
                    </label>
                  ))
                }
            </div>
          </div>
          <div className="room-title">Phòng số 3: </div>
          <div className="room-time">
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2"
              >
                {
                  roomData[3].map((time, index) => (
                    <label key={index} className="btn btn-light btn-sm mx-1" onClick={(e) => setValueTime(e.currentTarget.querySelector("input").value)}>{time}
                      <input id={time} className ="d-none" value={`3-${time}`} name="select" type="radio" />
                    </label>
                  ))
                }
            </div>
          </div>
          <div className="room-title">Phòng số 4: </div>
          <div className="room-time">
            <div className="radio-btn d-flex justify-content-center mb-3 mr-2"
              >
                {
                  roomData[4].map((time, index) => (
                    <label key={index} className="btn btn-light btn-sm mx-1" onClick={(e) => setValueTime(e.currentTarget.querySelector("input").value)}>{time}
                      <input id="detail" className ="d-none" value={`4-${time}`} name="select" type="radio" />
                    </label>
                  ))
                }
            </div>
          </div>
        </div>
      </div>
      <div className="footer d-flex justify-content-between">
        <Link to="/movie/movie_playing" type="button" className="btn btn-secondary align-left" ><i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp; Chọn phim</Link>
          <Link to={valueTime[0] === "1" ? `/movie/booking_stat_01/${idBooking}` :
                    valueTime[0] === "2" ? `/movie/booking_stat_02/${idBooking}` :
                    valueTime[0] === "3" ? `/movie/booking_stat_03/${idBooking}` :
                    `/movie/booking_stat_04/${idBooking}`}
                    onClick={() => getIdDateTimeBooking(idBooking, valueDate, valueTime.substr(2))}
                    className="btn btn-danger"
          >Chọn ghế &nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
      </div>
    </div>
  );
};

export default BookingTime;