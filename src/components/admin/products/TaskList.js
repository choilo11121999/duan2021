import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterCategory: '',
      filterStatus: '',
      filterSrc: '',
      filterDuration: '',
      filterDescription: ''
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.props.onFilter(name === 'filterName' ? value : this.state.filterName, 
      name === 'filterCategory' ? value : this.state.filterCategory,
      name === 'filterStatus' ? value : this.state.filterStatus,
      name === 'filterSrc' ? value : this.state.filterSrc,
      name === 'filterDuration' ? value : this.state.filterDuration,
      name === 'filterDescription' ? value : this.state.filterDescription
    );
    this.setState({
      [name]: value
    });
  }

  render() {
    var {tasks} = this.props;
    var elmTasks = tasks.map((task, index) => {
      return (
        <TaskItem key={task.id} task={task} index={index + 1}
          onUpdateStatus={this.props.onUpdateStatus}
          onDeleteTask={this.props.onDeleteTask}
          onSelectedItem = {this.props.onSelectedItem}/>
      )
    });
    return (
      <div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Tên</th>
              <th className="text-center">Category</th>
              <th className="text-center">Poster</th>
              <th className="text-center">Thời gian phim</th>
              <th className="text-center">Mô tả</th>
              <th className="text-center">Trạng thái</th>
              <th className="text-center">Sửa</th>
              <th className="text-center">Xóa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input type="text" className="form-control pd-0" name="filterName"
                  onChange={this.onChange} value={this.state.filerName}/>
              </td>
              <td>
                <input type="text" className="form-control pd-0" name="filterCategory"
                  onChange={this.onChange} value={this.state.filerCategory} />
              </td>
              <td>
                <input type="text" className="form-control pd-0" name="filterSrc"
                  onChange={this.onChange} value={this.state.filerSrc} />
              </td>
              <td>
                <input type="number" className="form-control pd-0" name="filterDuration"
                  onChange={this.onChange} value={this.state.filterDuration} />
              </td>
              <td>
                <input type="textarea" className="form-control pd-0" name="filterDescription"
                  onChange={this.onChange} value={this.state.filterDescription} />
              </td>
              <td></td>
              <td></td>
            </tr>
            {elmTasks}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskList;
