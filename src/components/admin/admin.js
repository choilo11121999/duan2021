import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import '../../css/Admin.css';
import Navbar from "./Navbar";
import Products from "./products/index";

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
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
      <Router>
        <header>
          <GiHamburgerMenu onClick={() => setCollapsed(!collapsed)}/>
        </header>
        <Navbar show={collapsed}/>
        <div className="c-admin-content">
          <Route path="/admin/products" exact={true} component={Products}/>
        </div>
      </Router>
    </>
  );
}

export default Admin;