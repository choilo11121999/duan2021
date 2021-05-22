import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../css/Admin.css';
import Navbar from "./Navbar";
import Products from "./products/index";

const Admin = () => {
  const [toggle, setToggle] = useState(false);
  const getCollapsed = (value) => {
    setToggle(value);
  }
  console.log(toggle);
  return (
    <Router>
      <div className="admin-page d-flex">
        <div className="nav-bar">
          <Navbar getCollapsed={getCollapsed}/>
        </div>
        <div className={toggle ? "content-right" : "content-left"}>
          <div className="c-admin-content">
            <Route path="/admin/products" exact={true} component={Products}/>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Admin;