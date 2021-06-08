import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const PaymentSucess = () => {
  const {location} = useHistory();
  const dataBooked = JSON.parse(localStorage.getItem("dataBooked"));
  console.log(dataBooked);
  console.log(location.search.includes("message=Success"));
  const handleBooking = () => {
    axios.post('/api/payments', dataBooked)
      .then((res) => {
        console.log(res);
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