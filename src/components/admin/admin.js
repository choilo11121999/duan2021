import React, { Component } from 'react';

const Admin = () => {
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
    </>
  );
}

export default Admin;