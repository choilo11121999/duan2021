import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import DurationPicker from "react-duration-picker";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

function ShowForm ({ handleClose, listShow }) {
    const [product_id, setProduct_id] = useState("");
    const [show_time, setShow_time] = useState("");
    const [show_date, setShow_date] = useState("");
    const [room_id, setRoom_id] = useState("");
    
    const onChangeShowTime = (showTime) => {
        console.log(showTime);
        const { hours, minutes, seconds } = showTime;
        setShow_time(`${hours}:${minutes}:${seconds}`);
    }
    const onChangeShowDate = (showDate) => {
        const splitTime = showDate.toLocaleDateString().split(/[/]+/);
        const days= splitTime[1];
        const months = splitTime[0];
        const years = splitTime[2];
        setShow_date(`${years}-${months}-${days}`);
        console.log(showDate);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {product_id, show_time, show_date, room_id};
        console.log(data);
        axios
            .post(`/api/shows`, data , {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
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
                        <select className="form-control" name="name" 
                            onChange={(e) => setProduct_id(e.target.value)}
                            >
                                <option selected>Chọn</option>
                                {listShow.map((name, index)  => {
                                    return <option key={index} value={name.id}>{name.film_name}</option>
                                })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Room:</label>
                        <select className="form-control" name="room" 
                            onChange={(e) => setRoom_id(e.target.value)}>
                                <option selected>Chọn</option>
                                <option value="1">Phòng 1</option>
                                <option value="2">Phòng 2</option>
                                <option value="3">Phòng 3</option>
                                <option value="4">Phòng 4</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Ngày chiếu:</label>
                        <DayPickerInput showOutsideDays onDayChange={onChangeShowDate}/> 
                    </div>
                    <div className="form-group">
                        <label>Giờ chiếu:</label>
                        <DurationPicker
                            onChange={onChangeShowTime}
                            initialDuration={{ hours: 1, minutes: 45, seconds: 3 }}
                            maxHours={23}
                        />
                    </div><br/>
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
