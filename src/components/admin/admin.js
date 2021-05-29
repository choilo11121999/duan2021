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
        <div className="nav-bar">
        <BootstrapNavbar getCollapsed={getCollapsed} setUser={setUser} />
        </div>
        {/* <div className={toggle ? "content-right" : "content-left"}>
          <div className="c-admin-content">
            <Route path="/admin/products" exact={true} component={Products}/>
            <Route path="/admin/shows" exact={true} component={Shows}/>
          </div>
        </div> */}
      </div>
    </Router>
  );
}

export default Admin;