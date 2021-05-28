import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import DurationPicker from "react-duration-picker";

function ProductFormEdit ({ handleClose, product }) {
    const types = ["Action", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Thriller", "Animation"];
    const [checkedState, setCheckedState] = useState(
        new Array(types.length).fill(false)
    );
    const [id, setId] = useState(product.id)
    const [name, setName] = useState(product.film_name);
    const [category, setCategory] = useState([]);
    const [image, setImage] = useState(product.poster);
    const [duration, setDuration] = useState(product.duration);
    const [description, setDescription] = useState(product.film_description);
    const [status, setStatus] = useState(product.film_status.toString());

    //Get data category
    useEffect(() => {
        setcheckstate();
    }, [])
    const setcheckstate = () => {
        let updatedCheckedState = checkedState;
        product.category.map((val, index) => {
            let updatedCheckedState1 = updatedCheckedState.map((item, index) =>{
                if (updatedCheckedState[index] === true) {
                    return true;
                } else {
                    return index === types.indexOf(val.name) ? true : false;
                }
            })
            updatedCheckedState = updatedCheckedState1;
        })
        setCheckedState(updatedCheckedState);
    }

    //set category
    useEffect(() => {
        const categorySelected = [];
        const getCategory = checkedState.map((item, index) => {
            if (item === true) {
                categorySelected.push(types[index])
            }
        });
        setCategory(categorySelected);
    }, [checkedState]);

    const handleOnChangeCheckbox = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    };

    // const handleFileSelected = (e) => {
    //     setImage(e.target.files[0]);
    // }

    const onChangeDuration = (duration) => {
        const { hours, minutes, seconds } = duration;
        setDuration(`${hours}:${minutes}:${seconds}`);
    }

    const handleSubmit = (e) => {
        console.log(image)
        e.preventDefault();
        let fd = new FormData();
        fd.append('id', id);
        fd.append('film_name', name);
        fd.append('poster', image);
        fd.append('category', category);
        fd.append('duration', duration);
        fd.append('film_description', description);
        fd.append('film_status', parseInt(status));
        axios
            .put(`/api/products/${product.id}`, fd , {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    "Content-type": "multipart/form-data",
                }
            })
            .then((res) => {
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    text: 'Sửa thành công!',
                })
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    text: 'Sửa không thành công!',
                })
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
                        <label>Category:</label>
                        <ul className="list-types d-flex flex-wrap justify-content-start p-0">
                            {types.map((name, index) => {
                                return (
                                    <li key={index} className="form-check form-check-inline mr-0 ml-3 w-25">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`custom-checkbox-${index}`}
                                            name={name}
                                            value={name}
                                            checked={checkedState[index]}
                                            onChange={() => handleOnChangeCheckbox(index)}
                                        />
                                        <label className="form-check-label" htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="form-group">
                        <label>Ảnh Poster:</label>
                        {/*<input type="file" className="form-control-file" name="picture"*/}
                        {/*       onChange={(e) => handleFileSelected(e)}*/}
                        {/*/>*/}
                        <img src={axios.defaults.baseURL + image} />
                    </div>
                    <div className="form-group">
                        <label>Time Picker:</label>
                        <DurationPicker
                            onChange={onChangeDuration}
                            initialDuration={{ hours: product.duration.substring(0,2), minutes: product.duration.substring(3,5), seconds: product.duration.substring(6) }}
                            maxHours={5}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mô tả:</label>
                        <input type="textarea" className="form-control" name="description" value={description}
                               onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Trạng thái:</label>
                        <select className="form-control" name="status"
                                onChange={(e) => setStatus(e.target.value)}
                        >
                            <option selected={status === "" ? "selected" : ""}>Chọn</option>
                            <option value="1" selected={status === "1" ? "selected" : ""}>Đang chiếu</option>
                            <option value="2" selected={status === "2" ? "selected" : ""}>Sắp chiếu</option>
                            <option value="0" selected={status === "0" ? "selected" : ""}>Ngưng chiếu</option>
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

export default ProductFormEdit;
