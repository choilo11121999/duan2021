import { NavLink, Link } from "react-router-dom";
import './../../css/Header.css';
import imgLogo from "./../../img/cgvlogo.png";
import kencine from "../../img/kenhcine.gif";
import muavengay from "../../img/banner/banner-mua-ve-ngay.png";
const Header = ({ user, setUserLogin }) => {
  const handleLogout = () => {
    localStorage.clear();
    setUserLogin(null);
    console.log("logout success");
  }
  return (
    <div className="header">
      <div className="container header-language-background p-1 clearfix">
        <div className="navbar navbar-expand-sm navbar-light bg-light float-right p-0">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink activeClassName="active-link" className="nav-Navlink p-0" to="/news">
                <i class="fa fa-newspaper-o mr-5px" aria-hidden="true"></i>Tin mới & ưu đãi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active-link" className="nav-Navlink p-0" to="/my_ticket">
                <i className="fa fa-ticket mr-5px" aria-hidden="true"></i>Vé của tôi
              </NavLink>
            </li>
            <li className="nav-item">
              {
                user ?
                (<div>
                    <i className="fa fa-user-circle mr-5px" aria-hidden="true"></i>
                    <span>{user.name}</span>
                  </div>) :
                (
                  <NavLink activeClassName="active-link" className="nav-Navlink p-0" to="/user/login">
                    <i className="fa fa-sign-in mr-5px" aria-hidden="true"></i>Đăng nhập
                  </NavLink>
                )
              }
            </li>
            <li className="nav-item">
             {
               user ?
               (
                <Link className="nav-Navlink p-0" to="/user/login" onClick={handleLogout}>
                  <i className="fa fa-sign-out mr-5px" aria-hidden="true"></i>Đăng xuất
                </Link>
               ) :
               (
                <NavLink activeClassName="active-link" className="nav-Navlink p-0" to="/user/register">
                  <i className="fa fa-user-plus mr-5px" aria-hidden="true"></i>Đăng ký
                </NavLink>
               )
             }
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active-link" className="nav-Navlink" 
                to="/vn" id="VN">VN
              </NavLink>
              <NavLink activeClassName="active-link" className="nav-Navlink" 
                to="/en" id="EN">EN
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-page d-flex align-items-center">
        <nav className="container navbar navbar-expand-lg navbar-light">
          <NavLink className="navbar-brand" to="/">
            <img src={imgLogo} width="150" height="70" alt="logo" />
          </NavLink>
          <div className="navbar mt-4">
            <ul className="navbar-nav">
              <li className="nav-item position-relative show-menu">
                <NavLink activeClassName="active-link" className="nav-Navlink text-dark font-weight-bold" to="/movie">
                  PHIM
                </NavLink>
                <div className="menu">
                  <div className="list-menu d-flex flex-column">
                    <NavLink activeClassName="active-link" to="/movie/movie_playing" className="">
                      Phim Đang Chiếu
                    </NavLink>
                    <NavLink activeClassName="active-link" to="/movie/movie_upcoming" className="">
                      Phim Sắp Chiếu
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className="nav-item position-relative show-menu">
                <NavLink activeClassName="active-link" className="nav-Navlink text-dark font-weight-bold" to="/theater">
                  RẠP CGV
                </NavLink>
                <div className="menu">
                  <div className="list-menu d-flex flex-column">
                    <NavLink activeClassName="active-link" to="/theater/theater_all" className="">
                      Tất Cả Các Rạp
                    </NavLink>
                    <NavLink activeClassName="active-link" to="/theater/theater_special" className="">
                      Rạp Đặc Biệt
                    </NavLink>
                    <NavLink activeClassName="active-link" to="/theater/theater_upcoming" className="">
                      Rạp Sắp Mở
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className="nav-item position-relative show-menu">
                <NavLink activeClassName="active-link" className="nav-Navlink text-dark font-weight-bold" to="/member">
                  THÀNH VIÊN
                </NavLink>
                <div className="menu">
                  <div className="list-menu d-flex flex-column">
                    <NavLink activeClassName="active-link" to="/member/account" className="">
                      Tài Khoản CGV
                    </NavLink>
                    <NavLink activeClassName="active-link" to="/member/right" className="">
                      Quyền Lợi
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className="nav-item position-relative show-menu">
                <NavLink activeClassName="active-link" className="nav-Navlink text-dark font-weight-bold" to="/cultureplex">
                  CULTUREPLEX
                </NavLink>
                <div className="menu">
                  <div className="list-menu d-flex flex-column">
                    <NavLink activeClassName="active-link" to="/quay_online" className="">
                      Quầy Online
                    </NavLink>
                    <NavLink activeClassName="active-link" to="/event" className="">
                      Sự Kiện & Vé Nhóm
                    </NavLink>
                    <NavLink activeClassName="active-link" to="cgv_restaurant" className="">
                      Nhà Hàng CGV
                    </NavLink>
                    <NavLink activeClassName="active-link" to="/gif" className="">
                      Thẻ Quà Tặng
                    </NavLink>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="search-buy-infor">
            <a href="#" className="news"><img src={kencine} alt=""/></a>
            <a href="#" className="buy-tickets"><img src={muavengay} alt=""/></a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;