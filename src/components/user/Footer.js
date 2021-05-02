import { Link } from "react-router-dom";
import "./../../css/Footer.css";
import logo4dx from "./../../img/logo-4dx.png";
import logoimax from "./../../img/logo-imax.png";
import logoscreenx from "./../../img/logo-screenx.png";
import logostarium from "./../../img/logo-starium.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-brand-slide row align-items-center">
        <div className="col">
          <Link to='4dx' >
            <img src={logo4dx} />
          </Link>
        </div>
        <div className="col">
          <Link to='imax'>
            <img src={logoimax} />
          </Link>
        </div>
        <div className="col">
          <Link to='screenx'>
            <img src={logoscreenx} />
          </Link>
        </div>
        <div className="col">
          <Link to='starium'>
            <img src={logostarium} />
          </Link>
        </div>
      </div>
      <div className="footer-policy row">
        <div className="col">
          <h3>CGV Viet Nam</h3>
          <ul>
            <li>Gioi thieu</li>
            <li>Tien ich Online</li>
            <li>The qua tang</li>
            <li>Tuyen dung</li>
            <li>Lien he quang cao</li>
          </ul>
        </div>
        <div className="col">
          <h3>Dieu khoan su dung</h3>
          <ul>
            <li>Dieu khoan chung</li>
            <li>Dieu khoan giao dich</li>
            <li>Chinh sach thanh toan</li>
            <li>Chinh sach bao mat</li>
            <li>Cau hoi thuong gap</li>
          </ul>
        </div>
        <div className="col">
          <h3>Ket noi voi chung toi</h3>
          <ul className="d-flex">
            <li>Facebook</li>
            <li>Youtube</li>
            <li>Instagram</li>
            <li>Zalo</li>
          </ul>
          <div className="cgv-premission">
          </div>
        </div>
        <div className="col">
          <h3>Cham soc khach hang</h3>
          <p>
            Hotline: 1900 6017 <br/>
            Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết) <br/>
            Email hỗ trợ: <a href="mailto:hoidap@cgv.vn">hoidap@cgv.vn</a>
          </p>
        </div>
      </div>
      <div className="footer-address row mt-1">
        <div className="logo-cgv col-3">
        </div>
        <div className="col-9">
          <h3>CÔNG TY TNHH CJ CGV VIETNAM</h3>
          <p>Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5 ngày 14/10/2015,
             cấp bởi Sở KHĐT thành phố Hồ Chí Minh.</p>
          <p>Địa Chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM.</p>
          <p>Hotline: 1900 6017</p>
          <p>COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .</p>
        </div>
      </div>
      <div className="row" style={{height: '100px'}}>
        <div className="col-12 bg-footer"></div>
      </div>
    </div>
  );
};

export default Footer;