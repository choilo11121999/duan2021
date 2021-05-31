import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BootstrapNavbar from "./BootstrapNavbar";
import Products from "./products/index";
import Shows from "./shows/index";
import '../../css/Admin.css';

const Admin = ({ setUserLogin }) => {
  const [toggle, setToggle] = useState(false);
  const getCollapsed = (value) => {
    setToggle(value);
  }

  const setUser = (value) => {
    setUserLogin(value);
  }
  return (
    <Router>
      <div className="admin-page d-flex">
        <div className="nav-bar w-100">
          <BootstrapNavbar getCollapsed={getCollapsed} setUser={setUser} />
        </div>
      </div>
    </Router>
  );
}

export default Admin;