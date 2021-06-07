import React, { } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BootstrapNavbar from "./BootstrapNavbar";
import '../../css/Admin.css';

const Admin = ({ setUserLogin }) => {
  const setUser = (value) => {
    setUserLogin(value);
  }
  return (
    <Router>
      <div className="admin-page d-flex">
        <div className="nav-bar w-100">
          <BootstrapNavbar setUser={setUser} />
        </div>
      </div>
    </Router>
  );
}

export default Admin;