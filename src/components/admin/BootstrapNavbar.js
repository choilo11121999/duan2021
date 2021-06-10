import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

import Products from "./products/index";
import Shows from "./shows/index";
import Admin from "./admin";
import '../../css/Admin.css';

const BootstrapNavbar = ({ setUser }) => {
    const handleLogout = () => {
        localStorage.clear();
        setUser(null);
        window.location.href="/user/login"
    }
    return (
        <Router>
            <Navbar bg="light" variant="light" expand="lg" sticky="top">
                <Navbar.Brand>CGV Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navbar-link">
                        <NavLink activeClassName="active-link-admin mr-3" to="/admin/products" style={{fontSize: "20px"}}><i class="fa fa-film" aria-hidden="true"></i>&nbsp;Quản Lý Phim</NavLink>
                        <NavLink activeClassName="active-link-admin ml-3" to="/admin/shows" style={{fontSize: "20px"}}><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;Quản lý giờ chiếu</NavLink>
                    </Nav>
                    <Form inline>
                        <Button variant="warning" href="/user/login" onClick={handleLogout}
                            ><i className="fa fa-sign-out admin-signout" aria-hidden="true">&nbsp; Đăng xuất</i></Button>
                    </Form> 
                </Navbar.Collapse>
            </Navbar><br />
            <Switch>
                <Route exact path="/admin">
                    <Admin />
                </Route>
                <Route path="/admin/products">
                    <Products />
                </Route>
                <Route path="/admin/shows">
                    <Shows />
                </Route>
            </Switch>
        </Router>
    );
}
export default BootstrapNavbar; 
 