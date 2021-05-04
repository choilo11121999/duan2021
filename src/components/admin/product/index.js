import React, { Component } from 'react';
import TaskList from './TaskList'; 
import { Link, Redirect } from 'react-router-dom';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      isDisplayForm: false,
      taskEditing: null,
      filter: {
        name: '',
        status: -1
      },
    }
    this.handleToggleForm = this.handleToggleForm.bind(this);
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); //tạo 1 chuỗi bất kỳ
  }

  generateID() {  //tạo ID bất kỳ
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4()
      + '-' + this.s4() + '-' + this.s4();
  }

  handleToggleForm() { //hiển thị hoặc ẩn form
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null,
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null,
      });
    }

  }

  onShowForm() { //hiển thị hoặc ẩn form
    this.setState({
      isDisplayForm: true,
    });
  }

  onUpdate = (id) => {
    var { task } = this.state;
    var index = this.findIndex(id);
    var taskEditing = task[index];

    this.setState({
      taskEditing: taskEditing,
    });
    this.onShowForm();
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus,
      }
    });
  }

  render() {
    var { task, isDisplayForm, taskEditing, filter } = this.state;

    if (filter) {
      if (filter.name) {
        task = task.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;  //tìm kiếm theo name
        });
      }
      task = task.filter((task) => {
        if (filter.status === -1) {
          return task;
        } else {
          return task.status === (filter.status === 1 ? true : false); // tìm kiếm theo status
        }
      });
    }
    return (
        <>
            <div className="admin container my-4">
                <form className='row'>
                    <div className='form-group d-flex col-9'>
                        <input type='text' className="form-control" placeholder='input text' />
                        <button type='submit' className='btn btn-primary'>Search</button>
                    </div>
                    <div className="dropdown col-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">ID</a>
                        <a className="dropdown-item" href="#">Name</a>
                        <a className="dropdown-item" href="#"></a>
                    </div>
                     </div>
                </form>
            </div>
        `<div className="container">
            {/* <Link to='/'><button type="button" className="btn btn-warning"><i className="fas fa-home"></i>&nbsp;Home</button></Link> */}
            <div className="text-center">
              <h1>Quản Lý Phim</h1><hr/>
            </div>
            <div className="row">
              <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList task={task} onUpdateStatus={this.onUpdateStatus} 
                          onDelete={this.onDelete} onUpdate={this.onUpdate} onFilter={this.onFilter} />
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </>
    );
  }
}

export default Product;
