import React, { Component } from 'react';

class TaskItem extends Component {
    // showStatusElement(){
    //     return (
    //         <span
    //             className={ this.props.task.status ? 'label label-danger' : 'label label-info' }
    //             onClick={ this.onUpdateStatus }
    //         >{ this.props.task.status === true ? 'Kích Hoạt' : 'Ẩn' }</span>
    //     );
    // }

    // onUpdateCategory = () => {
    //     this.props.onUpdateCategory(this.props.task.id);
    // }

    onDeleteItem = () => {
        this.props.onDeleteTask(this.props.task.id);
    }

    onSelectedItem = () => {
        this.props.onSelectedItem(this.props.task);
    }

    render() {
        return (
            <tr>
                <td className="text-center pd-0">{this.props.index}</td>
                <td className="text-center pd-0" >{this.props.task.name}</td>
                <td className="text-center pd-0">
                    {this.props.task.category}
                </td>
                <td className="text-center pd-0">
                    <img style={{width: '80%'}} src={this.props.task.src}/>
                </td>
                <td className="text-center pd-0">
                    {this.props.task.duration}
                </td>
                <td className="text-center pd-0">
                    {this.props.task.description}
                </td>
                <td className="text-center pd-0">
                    <button type="button" className="btn btn-warning" onClick={this.onSelectedItem}>
                        <span className="fa fa-pencil mr-3"></span>
                    </button>
                </td>
                <td className="text-center pd-0">
                    <button type="button" className="btn btn-danger" onClick={this.onDeleteItem}>
                        <span className="fa fa-trash mr-3"></span>
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
