import axios from "axios";
import { useEffect } from "react";

const Booking = () => {
  const arr = [1, 2, 3];
  useEffect(() => {
    axios
    .get("api/select-list/show?product_id=1")
    .then((res) => {
      console.log("login success");
    })
    .catch((err) => {
      
    });
  }, []);
  const Days = arr.map((value, index) => {
      return (
        <label key={index}>
          {value}
          <input type="radio" name="day" id={index} value={value} />
        </label>
      );
    });
  return (
    <div>
      <div class="modal fade" id="selectTime" tabindex="-1" role="dialog" aria-labelledby="selectTimeTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="selectTimeTitle">Chọn ngày và giờ</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div>
                {Days}
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
              <button type="button" class="btn btn-primary">Đặt vé</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;