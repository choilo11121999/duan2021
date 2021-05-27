import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import DurationPicker from "react-duration-picker";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

function ShowForm ({ handleClose }) {
    const [name, setName] = useState("");
    const [showTime, setShowTime] = useState("");
    const [showDate, setShowDate] = useState("");
    const [room, setRoom] = useState("");
    
    const onChangeShowTime = (showTime) => {
        const { hours, minutes, seconds } = showTime;
        setShowTime(`${hours}:${minutes}:${seconds}`);
    }
    const onChangeShowDate = (showDate) => {
        const { days, months, years } = showDate;
        setShowDate(`${days}:${months}:${years}`);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let fd = new FormData();
        fd.append('film_name', name);
        fd.append('showTime', showTime);
        fd.append('showDate', showDate);
        fd.append('room', room);
        axios
            .post('/api/shows', fd , {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    "Content-type": "multipart/form-data",
                }
            })
            .then((res) => {
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    text: 'Thêm giờ chiếu thành công!',
                })
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    text: 'Thêm giờ chiếu không thành công!',
                })
            });
    }
    return (
        <div className="panel panel-warning">
            <div className="panel-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Tên:</label>
                        <input type="text" className="form-control" name="name"
                            onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Giờ chiếu:</label>
                        <DurationPicker
                            onChange={onChangeShowTime}
                            initialTime={{ hours: 1, minutes: 45, seconds: 3 }}
                            maxHours={23}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ngày chiếu:</label>
                        <DayPickerInput showOutsideDays onDayChange={onChangeShowDate}/> 

                    </div>
                    <div className="form-group">
                        <label>Room:</label>
                        <input type="text" className="form-control" name="room"
                            onChange={(e) => setRoom(e.target.value)}/>
                    </div>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning" onClick={handleClose}>
                            <span className="fa fa-plus mr-3"></span>Lưu Lại
                        </button>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={handleClose}>
                            <span className="fa fa-close mr-3"></span>Hủy Bỏ
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ShowForm;
