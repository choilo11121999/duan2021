import React, { Component, useState } from 'react';
import { Button } from 'react-bootstrap';

function TaskForm () {
    const [name, setName] = useState("");
    const [category, setCategory] = useState([]);
    const [poster, setPoster] = useState("");
    const [duration, setDuration] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    
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
                        <div className="form-row" onChange={(e) => setCategory(...category, e.target.value)}>
                            <div className="col">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="Action"/>
                                    <label class="form-check-label" for="inlineRadio1">Action</label>
                                </div>
                            </div>
                            <div className="col">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="Comedy"/>
                                    <label class="form-check-label" for="inlineRadio2">Comedy</label>
                                </div>
                            </div>
                            <div className="col">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="Drama"/>
                                    <label class="form-check-label" for="inlineRadio3">Drama</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio4" value="Fantasy"/>
                                    <label class="form-check-label" for="inlineRadio4">Fantasy</label>
                                </div>
                            </div>
                            <div className="col">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio5" value="Horror"/>
                                    <label class="form-check-label" for="inlineRadio5">Horror</label>
                                </div>
                            </div>
                            <div className="col">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio6" value="Mystery"/>
                                    <label class="form-check-label" for="inlineRadio6">Mystery</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio7" value="Romance"/>
                                    <label class="form-check-label" for="inlineRadio7">Romance</label>
                                </div>
                            </div>
                            <div className="col">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio8" value="Thriller"/>
                                    <label class="form-check-label" for="inlineRadio8">Thriller</label>
                                </div>
                            </div>
                            <div className="col">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio9" value="Animation"/>
                                    <label class="form-check-label" for="inlineRadio9">Animation</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Ảnh Poster:</label>
                        <input type="file" className="form-control-file" name="picture"              
                            /*value={this.state.poster} onChange={this.handlePictureSelected.bind(this)}*//>
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
                        <button type="submit" className="btn btn-warning">
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
