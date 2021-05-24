import axios from 'axios';
import React, { useEffect, useState } from 'react';

function TaskForm ({ handleClose }) {
    const types = ["Action", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Thriller", "Animation"];
    const [checkedState, setCheckedState] = useState(
        new Array(types.length).fill(false)
    );
    const [name, setName] = useState("");
    const [category, setCategory] = useState([]);
    const [poster, setPoster] = useState("");
    const [duration, setDuration] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    
    const handleOnChangeCheckbox = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
    };
    useEffect(() => {
        const categorySelected = [];
        const getCategory = checkedState.map((item, index) => {
            if (item === true) { 
                categorySelected.push(types[index]) 
            }
        });
        setCategory(categorySelected);
    }, [checkedState]);
    
    const handleFileSelected = (e) => {
        setPoster(e.target.files[0]);
    }
  
    const data = {
        name,
        category,
        poster,
        duration,
        description,
        status,
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        console.log(checkedState);
        axios
            .post('http://45.77.241.194:8080/api/products', data)
            .then((res) => {
                console.log(res);
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
                        <input type="text" className="form-control" name="name"
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
                        <input type="text" className="form-control" name="duration"              
                            onChange={(e) => setDuration(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Mô tả:</label>
                        <input type="textarea" className="form-control" name="description"              
                            onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Trạng thái:</label>
                        <select className="form-control" name="status" 
                        onChange={(e) => setStatus(e.target.value)}
                            >
                                <option selected>Chọn</option>
                                <option value="Đang chiếu">Đang chiếu</option>
                                <option value="Sắp chiếu">Sắp chiếu</option>
                                <option value="Ngưng chiếu">Ngưng chiếu</option>
                        </select>
                    </div>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning" onClick={handleClose}>
                            <span className="fa fa-plus mr-3"></span>Lưu Lại
                        </button>&nbsp;
                        <button type="button" className="btn btn-danger">
                            <span className="fa fa-close mr-3"></span>Hủy Bỏ
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;
