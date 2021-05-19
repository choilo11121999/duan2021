import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        if(this.props.itemEditing && this.props.itemEditing.id !== null){
            this.setState({
                id: this.props.itemEditing.id,
                name: this.props.itemEditing.name,
                category: this.props.itemEditing.category,
                // poster: this.props.itemEditing.poster,
                status: this.props.itemEditing.status,
                picture: this.props.itemEditing.picture,
                src: this.props.itemEditing.src,
                duration: this.props.itemEditing.duration,
                description: this.props.itemEditing.description
            });
        }else{
            this.onClear();
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemEditing){
            this.setState({
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                category: nextProps.itemEditing.category,
                // poster: nextProps.itemEditing.poster,
                status: nextProps.itemEditing.status,
                picture: nextProps.itemEditing.picture,
                src: nextProps.itemEditing.src,
                duration: nextProps.itemEditing.duration,
                description: nextProps.itemEditing.description
            });
        }else{
            this.onClear();
        }
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }

    handlePictureSelected = (event) => {
        var picture = event.target.files[0];
        var src     = URL.createObjectURL(picture);
        this.setState({
          picture: picture,
          src: src
        });
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        this.props.onSave(this.state);
        this.onClear();
    }

    onClear = () => {
        this.setState({
            id: '',
            name: '',
            category: '',
            // poster: '',
            status: false,
            picture: false,
            src: false,
            duration: '',
            description: ''
        });
    }

    onExitForm = () => {
        this.props.onExitForm();
    }

    render() {
        return (
            <div className="panel panel-warning">
                {/* <div className="panel-heading">
                    <h3 className="panel-title">
                        {!this.state.id ? 'Thêm Phim' : 'Cập Nhật Phim'}
                        <span
                            className="fa fa-times-circle text-right"
                            onClick={this.onExitForm}
                        ></span>
                    </h3>
                </div> */}
                <div className="panel-body">
                    <form onSubmit={this.onHandleSubmit} >
                        <div className="form-group">
                            <label>Tên:</label>
                            <input type="text" className="form-control" name="name"
                                value={this.state.name} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Category:</label>
                            {/* <input  type="text" className="form-control" name="category"           
                                value={this.state.category} onChange={this.onHandleChange}/> */}
                            <div className="form-row">
                                <div className="col">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                        <label class="form-check-label" for="inlineRadio1">Action</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                        <label class="form-check-label" for="inlineRadio2">Comedy</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                                        <label class="form-check-label" for="inlineRadio3">Drama</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option3"/>
                                        <label class="form-check-label" for="inlineRadio4">Fantasy</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option3"/>
                                        <label class="form-check-label" for="inlineRadio5">Horror</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option1"/>
                                        <label class="form-check-label" for="inlineRadio6">Mystery</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7" value="option2"/>
                                        <label class="form-check-label" for="inlineRadio7">Romance</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" value="option3"/>
                                        <label class="form-check-label" for="inlineRadio8">Thriller</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio9" value="option3"/>
                                        <label class="form-check-label" for="inlineRadio9">Animation</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Ảnh Poster:</label>
                            <input type="file" className="form-control-file" name="picture"              
                                value={this.state.poster} onChange={this.handlePictureSelected.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label>Time Picker:</label>
                            <input type="text" className="form-control" name="duration"              
                                value={this.state.duration} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Mô tả:</label>
                            <input type="textarea" className="form-control" name="description"              
                                value={this.state.description} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Trạng thái:</label>
                            <select className="form-control" name="status" 
                                value={this.state.status}>
                                    <option selected>Chọn</option>
                                    <option value="1">Đang chiếu</option>
                                    <option value="2">Sắp chiếu</option>
                                    <option value="3">Ngưng chiếu</option>
                            </select>
                        </div>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span className="fa fa-plus mr-3"></span>Lưu Lại
                            </button>&nbsp;
                            <button type="button" onClick={this.onClear} className="btn btn-danger">
                                <span className="fa fa-close mr-3"></span>Hủy Bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
