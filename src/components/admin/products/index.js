import React, {Component, useState} from 'react';
import '../../../css/Products.css';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import { Button, Modal } from 'react-bootstrap';
function Products (props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tasks: [],
  //     show: false,
  //     keyword: '',
  //     filterName: '',
  //     filterCategory: '',
  //     filterDuration: '',
  //     filterStatus : '0',
  //     filterPicture: false,
  //     filteSrc: false,
  //     filterDescription: '',
  //     itemEditing: null,
  //   };
  // }

  const s4 = async () => {
      return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  const guid = async() => {
      return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  const findIndex = (id) => {
      var {tasks} = this.state;
      var result = -1;
      tasks.forEach((task, index) => {
        if(task.id === id){
          result = index;
        }
      });
      return result;
  }

  const onUpdateStatus = (id) => { 
    var tasks = this.state.tasks;
    var index = this.findIndex(id);
    tasks[index].status = !tasks[index].status;
    this.setState({
        tasks : tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

  // onSave = (data) => {
  //   var tasks = this.state.tasks;
  //   data.status = data.status === 'true' ? true : false;
  //   if(data.id === ''){
  //     data.id = this.guid();
  //     tasks.push(data);
  //   }else{
  //     var index = this.findIndex(data.id);
  //     tasks[index] = data;
  //   }
  //   this.setState({
  //     tasks: tasks
  //   });
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }

  const onDeleteTask = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.onExitForm();
  }

  const onFilter = (filterName, filterCategory, filterStatus, filterDuration, filterDescription) => {
    this.setState({
      filterName: filterName,
      filterCategory: filterCategory,
      filterStatus: filterStatus,
      filterDuration: filterDuration,
      filterDescription: filterDescription,
    });
  }

  const onSelectedItem = (item) => {
    this.setState({
      itemEditing: item,
    })
  }

  const [show, setShow] = useState(false);
    // var {
    //   tasks, show, handleClose, handleShow,
    //   keyword, filterName,
    //   filterCategory, filterStatus, filterPicture, filteSrc, filterDuration, filterDescription,
    // } = this.state;

    // tasks = tasks.filter((task) => {
    //   return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    // });

    // if(filterName){
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    //   });
    // }
    // if(filterCategory){
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(filterCategory.toLowerCase()) !== -1
    //   });
    // }
    // if(filterPoster){
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(filterPoster.toLowerCase()) !== -1
    //   });
    // }
    // if(filterDuration){
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(filterDuration.toLowerCase()) !== -1
    //   });
    // }
    
    const handleClose = (show) => {
      this.setState({
        show: false
      })
    }
    const handleShow = (show) => {
      this.setState({
        show: true
      })
    }

    return (
      <div className="mr-5">
        <div className="text-left">
            <h1>Quản Lý Phim</h1><hr/>
        </div>
        <Button variant="primary" onClick={handleShow}>
          <span className="fa fa-plus mr-3"></span>Thêm Phim
        </Button><hr/>
        <ProductList
          // tasks={tasks} onUpdateCategory={this.onUpdateCategory}
          // onDeleteTask={this.onDeleteTask}
          // filterName={filterName} filterCategory={filterCategory}
          // filterStatus={filterStatus}
          // filteSrc={filteSrc} filterPicture={filterPicture}
          // filterDuration={filterDuration} filterDescription={filterDescription}
          // onFilter={this.onFilter} onSelectedItem={this.onSelectedItem} 
          />       
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>
              {/* {!this.state.id ? 'Thêm Phim' : 'Cập Nhật Phim'} */}
              Thêm Phim
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ProductForm handleClose={handleClose} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}

export default Products; 
