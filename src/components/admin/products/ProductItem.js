import React, { Component } from 'react';

function ProductItem (props) {

    const onUpdateCategory = () => {
        this.props.onUpdateCategory(this.props.task.id);
    }
    const onDeleteItem = () => {
        this.props.onDeleteTask(this.props.task.id);
    }
    const onSelectedItem = () => {
        this.props.onSelectedItem(this.props.task);
    }

    return (
        <tr>
            <td className="text-center pd-0">{this.props.index}</td>
            <td className="text-center pd-0">{this.props.task.name}</td>
            <td className="text-center pd-0">{this.props.task.category}</td>
            <td className="text-center pd-0">
                <img style={{width: '80%'}} src={this.props.task.src}/>
            </td>
            <td className="text-center pd-0">{this.props.task.duration}</td>
            <td className="text-center pd-0">{this.props.task.description}</td>
            <td className="text-center pd-0">{this.props.task.status}</td>
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

export default ProductItem;
