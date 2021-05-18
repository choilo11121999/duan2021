import React, { Component } from 'react';
import '../../../css/Products.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskControl from './TaskControl';
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
      keyword: '',
      filterName: '',
      filterCategory: '',
      filterDuration: '',
      filterPicture: false,
      filteSrc: false,
      filterDescription: '',
      itemEditing: null,
      sortBy : 'name',
      sortValue : 1
    };
  }

  componentWillMount() {
      if(localStorage && localStorage.getItem('tasks')){
          var tasks = JSON.parse(localStorage.getItem('tasks'));
          this.setState({
              tasks: tasks
          });
      }
  }

  s4() {
      return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  guid() {
      return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  findIndex = (id) => {
      var {tasks} = this.state;
      var result = -1;
      tasks.forEach((task, index) => {
        if(task.id === id){
          result = index;
        }
      });
      return result;
  }

  // onUpdateCategory = (id) => {
  //     var tasks = this.state.tasks;
  //     var index = this.findIndex(id);
  //     tasks[index].category = !tasks[index].category;
  //     this.setState({
  //         tasks : tasks
  //     });
  //     localStorage.setItem('tasks', JSON.stringify(tasks));
  // }

  onSave = (data) => {
    var tasks = this.state.tasks;
    if(data.id === ''){
      data.id = this.guid();
      tasks.push(data);
    }else{
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onToggleForm = () => {
    if(this.state.itemEditing !== null){
      this.setState({
        itemEditing: null
      });
    }else{
      this.setState({
          isDisplayForm: !this.state.isDisplayForm
      });
    }
  }

  onExitForm = () =>{
    this.setState({
      isDisplayForm: false,
      itemEditing: null
    });
  }

  onDeleteTask = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.onExitForm();
  }

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword
    });
  }

  onFilter = (filterName, filterCategory, filterDuration, filterDescription) => {
    this.setState({
      filterName: filterName,
      filterCategory: filterCategory,
      filterDuration: filterDuration,
      filterDescription: filterDescription,
    });
  }

  onSelectedItem = (item) => {
    this.setState({
      itemEditing: item,
      isDisplayForm: true
    })
  }

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    })
  }

  render() {
    var {
      tasks,
      isDisplayForm,
      keyword, filterName,
      filterCategory,
      filterPicture,
      filteSrc,
      filterDuration,
      filterDescription,
      itemEditing,
      sortBy,
      sortValue
    } = this.state;

    tasks = tasks.filter((task) => {
      return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    if(filterName){
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
      });
    }
    if(filterCategory){
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(filterCategory.toLowerCase()) !== -1
      });
    }
    // if(filterPoster){
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(filterPoster.toLowerCase()) !== -1
    //   });
    // }
    if(filterDuration){
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(filterDuration.toLowerCase()) !== -1
      });
    }
    if(sortBy === 'name'){
      tasks.sort((a, b) => {
        if(a.name > b.name) return sortValue;
        else if(a.name < b.name) return -sortValue;
        else return 0;
      });
    }
    // else{
    //     tasks.sort((a, b) => {
    //         if(a.status > b.status) return -sortValue;
    //         else if(a.status < b.status) return sortValue;
    //         else return 0;
    //     });
    // }
    var elmForm = isDisplayForm === true ? 
      <TaskForm onSave={this.onSave} onExitForm={this.onExitForm}
        itemEditing={ itemEditing } /> : '';
    return (
      <div className="container">
        <div className="text-center">
            <h1>Quản Lý Phim</h1><hr/>
        </div>
        <div className="row">
          <div className={ isDisplayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
              {elmForm}
          </div>
          <div className={ isDisplayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
            <button type="button" className="btn btn-primary" onClick={this.onToggleForm} >
              <span className="fa fa-plus mr-3"></span>Thêm Phim
            </button>
            <TaskControl onSearch={this.onSearch} onSort={this.onSort}
              sortBy={sortBy} sortValue={sortValue} /><br/>
            <TaskList
              tasks={tasks} // onUpdateCategory={this.onUpdateCategory}
              onDeleteTask={this.onDeleteTask}
              filterName={filterName} filterCategory={filterCategory}
              filteSrc={filteSrc} filterPicture={filterPicture}
              filterDuration={filterDuration} filterDescription={filterDescription}
              onFilter={this.onFilter} onSelectedItem={this.onSelectedItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
