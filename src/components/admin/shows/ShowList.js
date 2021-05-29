import React, {useEffect, useState} from 'react';
import axios from "axios";
import Swal from "sweetalert2";

const ShowList = ({getListShow}) => {
    const [reload, setReload] = useState(false);
    const [listShow, setListShow] = useState(
        new Array()
    );
    const [showEditor, setShowEditor] = useState(false);

    useEffect(() => {
        getShows()
    }, [reload]);

    const getShows = () => {
        axios.get('/api/select-list/product?film_status=1', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then((res) => {
                console.log(res);
                let data = res.data.data;
                setListShow(data);
                getListShow(data);
            })
            .catch((err) => {
                console.log(err)
            });
    }
    const eleItem = listShow.map((timeList, index) => {
        return (
            <tr key={index} className="text-center">
                <td>{timeList.id}</td>
                <td>{timeList.film_name}</td>
                <td>{timeList.room}</td>
                <td>{timeList.showDate}</td>
                <td>{timeList.showTime}</td>
            </tr>
        );
    })
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Tên</th>
              <th className="text-center">Phòng chiếu</th>
              <th className="text-center">Ngày chiếu</th>
              <th className="text-center">Giờ chiếu</th>
            </tr>
          </thead>
          <tbody>
          {eleItem}
          </tbody>
        </table>
      </div>
    );
}

export default ShowList;
