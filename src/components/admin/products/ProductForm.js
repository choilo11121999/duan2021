import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import DurationPicker from "react-duration-picker";

function ProductForm ({ handleClose, getReLoad }) {
    const types = ["Hành Động", "Hài Kịch", "Drama", "Kì Thú", "Kinh Dị", "Bí Ẩn", "Lãng Mạng", "Kịch Tính", "Hoạt Hình"];
    const [checkedState, setCheckedState] = useState(
        new Array(types.length).fill(false)
    );
    const [name, setName] = useState("");
    const [category, setCategory] = useState([]);
    const [oldPoster, setOldPoster] = useState("");
    const [trailer, setTrailer] = useState("");
    const [duration, setDuration] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    
    const handleOnChangeCheckbox = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
    };

    const handleFileSelected = (e) => {
        const formdata = new FormData();
        formdata.append('poster', e.target.files[0]);
        formdata.append('old_poster', oldPoster);
        axios.post('/api/save/image', formdata, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                "Content-type": "multipart/form-data",
            }
        }).then((res) => {
            setOldPoster(res.data);
        }).catch((err) => {
            console.log(err)
        })
    }

    const onChangeDuration = (duration) => {
        const { hours, minutes, seconds } = duration;
        setDuration(`${hours}:${minutes}:${seconds}`);
    }

    useEffect(() => {
        const categorySelected = [];
        const getCategory = checkedState.map((item, index) => {
            if (item === true) { 
                categorySelected.push(types[index]) 
            }
        });
        setCategory(categorySelected);
    }, [checkedState]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let fd = new FormData();
        fd.append('film_name', name);
        fd.append('poster', oldPoster);
        fd.append('film_trailer', trailer);
        fd.append('category', category);
        fd.append('duration', duration);
        fd.append('film_description', description);
        fd.append('film_status', parseInt(status));
        axios
            .post('/api/products', fd , {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    text: 'Thêm phim thành công!',
                })
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    text: 'Thêm phim không thành công!',
                })
            });
        setTimeout(() => {
            getReLoad(true);
        }, 500);
    }
    return (
        <div className="panel panel-warning">
            <div className="panel-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Tên phim:</label>
                        <input type="text" className="form-control" name="name"
                            onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Thể loại:</label>
                        <ul className="list-types d-flex flex-wrap justify-content-start p-0">
                            {types.map((name, index) => {
                                return (
                                    <li key={index} className="form-check form-check-inline mr-0 ml-3 w-25" >
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`custom-checkbox-${index}`}
                                            name={name}
                                            value={name}
                                            checked={checkedState[index]}
                                            onChange={() => handleOnChangeCheckbox(index)}
                                            style={{cursor: "pointer"}}
                                        />
                                        <label className="form-check-label" htmlFor={`custom-checkbox-${index}`} style={{cursor: "pointer"}}>{name}</label>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="form-group">
                        <label htmlFor="file" className="btn btn-sm btn-primary w-25" >Chọn ảnh</label>
                        <input type="file" className="form-control-file" name="picture" id="file" style={{display:'none'}}
                               onChange={(e) => handleFileSelected(e)}
                        />
                        <span className="ml-2">{oldPoster}</span>
                    </div>
                    <div className="form-group">
                        <label>Trailer:</label>
                        <input type="text" className="form-control" name="name"
                            onChange={(e) => setTrailer(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Thời lượng phim:</label>
                        <DurationPicker
                            onChange={onChangeDuration}
                            initialDuration={{ hours: 1, minutes: 45, seconds: 0 }}
                            maxHours={3}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mô tả:</label>
                        <textarea className="form-control" name="description" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Trạng thái:</label>
                        <select className="form-control" name="status" 
                        onChange={(e) => setStatus(e.target.value)}
                            >
                                <option selected>Chọn</option>
                                <option value="1">Đang chiếu</option>
                                <option value="2">Sắp chiếu</option>
                                <option value="0">Ngưng chiếu</option>
                        </select>
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

export default ProductForm;
