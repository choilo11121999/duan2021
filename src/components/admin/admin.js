import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../css/Admin.css';
import Sidebar from "./Sidebar";
import Products from "./products/index";
import Shows from "./shows/index";
// import Rooms from "./rooms/index";
// import Cinemas from "./cinemas/index";

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
          <Sidebar getCollapsed={getCollapsed} setUser={setUser} />
        </div>
        <div className={toggle ? "content-right" : "content-left"}>
          <div className="c-admin-content">
            <Route path="/admin/products" exact={true} component={Products}/>
            <Route path="/admin/shows" exact={true} component={Shows}/>
            {/*<Route path="/admin/rooms" exact={true} component={Rooms}/>*/}
            {/*<Route path="/admin/cinemas" exact={true} component={Cinemas}/>*/}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Admin;