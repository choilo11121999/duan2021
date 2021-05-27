import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";

function ShowFormEdit ({ handleClose, timeList, product }) {
    const [name, setName] = useState(product.film_name);
    const [showTime, setShowTime] = useState(timeList.showTime);
    const [showDate, setShowDate] = useState(timeList.showDate);
    const [room, setRoom] = useState();

    // useEffect(() => {
    //     setShowTime();
    // });

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
                    text: 'Thêm phim thành công!',
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div className="panel panel-warning">
            <div className="panel-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Tên:</label>
                        <input type="text" className="form-control" name="name" value={name}
                               onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Giờ chiếu:</label>
                        <input type="text" className="form-control" name="showTime" value={showTime}
                               onChange={(e) => setShowTime(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Ngày chiếu:</label>
                        <input type="text" className="form-control" name="showDate" value={showDate}
                               onChange={(e) => setShowDate(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Room:</label>
                        <input type="text" className="form-control" name="room" value={room}
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

export default ShowFormEdit;
