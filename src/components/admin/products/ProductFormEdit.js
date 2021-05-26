import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";

function ProductFormEdit ({ handleClose, product }) {
    const types = ["Action", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Thriller", "Animation"];
    const [checkedState, setCheckedState] = useState(
        new Array(types.length).fill(false)
    );
    const [name, setName] = useState(product.film_name);
    const [category, setCategory] = useState([]);
    const [image, setImage] = useState();
    const [duration, setDuration] = useState(product.duration);
    const [description, setDescription] = useState(product.film_description);
    const [status, setStatus] = useState(product.status);

    const handleOnChangeCheckbox = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    };

    const handleFileSelected = (e) => {
        setImage(e.target.files[0]);
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
        fd.append('poster', image);
        fd.append('category', category);
        fd.append('duration', duration);
        fd.append('film_description', description);
        fd.append('film_status', parseInt(status));
        axios
            .post('/api/products', fd , {
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
                        <input type="file" className="form-control-file" name="picture"
                               onChange={(e) => handleFileSelected(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Time Picker:</label>
                        <input type="text" className="form-control" name="duration" value={duration}
                               onChange={(e) => setDuration(e.target.value)}/>
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
