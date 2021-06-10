import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const PaymentSucess = () => {
  const {location} = useHistory();
  const dataBooked = JSON.parse(localStorage.getItem("dataBooked"));
  const handleBooking = () => {
    axios.post('/api/payments', dataBooked, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          text: 'Đặt vé thành công!',
        })
      })
      .catch((err) => console.log(err));

    localStorage.removeItem("datatBooked")
  }
  return (
    <div className="container my-4 rounded border border-primary text-center py-5">
      {
        location.search.includes("message=Success") ? (
          <div>
            <h2>Thanh toán thành công!</h2>
            <Link to="/" className="btn btn-lg btn-danger mt-3" onClick={() => handleBooking()}>Bấm để hoàn tất việc đặt vé</Link>
          </div>
        ) : (
          <div>
            <h2>Thanh toán không thành công!</h2>
            <Link to="/" className="btn btn-lg btn-danger mt-3">Đặt lại vé xem phim</Link>
          </div>
        )
      }
    </div>
  );
}

export default PaymentSucess;