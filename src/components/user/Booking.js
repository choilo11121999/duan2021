import axios from "axios";
import {useEffect, useState} from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const Booking = () => {
  const arr = [1, 2, 3];
  const [selectedDay, setSelectedDay] = useState(new Date())
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
  const handleDayCLick = (day, { selected, disabled }) => {
    if (disabled) {
      // Day is disabled, do nothing
      return;
    }
    if (selected) {
      // Unselect the day if already selected
      setSelectedDay(undefined );
      return;
    }
    setSelectedDay(day);
  }
  console.log(selectedDay.toLocaleDateString().split(/[/]+/))

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
                <DayPicker
                  onDayClick={handleDayCLick}
                  selectedDays={selectedDay}
                  disabledDays={{ before: new Date()}}
                />
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