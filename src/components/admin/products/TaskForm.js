import React, { Component } from 'react';

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
        this.onExitForm();
    }

    onClear = () => {
        this.setState({
            id: '',
            name: '',
            category: '',
            // poster: '',
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
                <div className="panel-heading">
                    <h3 className="panel-title">
                        { !this.state.id ? 'Thêm Phim' : 'Cập Nhật Phim' }
                        <span
                            className="fa fa-times-circle text-right"
                            onClick={this.onExitForm}
                        ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onHandleSubmit} >
                        <div className="form-group">
                            <label>Tên:</label>
                            <input type="text" className="form-control" name="name"
                                value={this.state.name} onChange={ this.onHandleChange }/>
                        </div>
                        <div className="form-group">
                            <label>Radio Button:</label>
                            <input  type="text" className="form-control" name="category"           
                                value={this.state.category} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Ảnh Poster:</label>
                            <input type="file" className="form-control-file" name="picture"              
                                value={this.state.poster} onChange={this.handlePictureSelected.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label>Thời gian phim:</label>
                            <input type="text" className="form-control" name="duration"              
                                value={this.state.duration} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Mô tả:</label>
                            <input type="text" className="form-control" name="description"              
                                value={this.state.description} onChange={this.onHandleChange}/>
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
