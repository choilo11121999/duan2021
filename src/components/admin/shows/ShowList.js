import React, {useEffect, useState} from 'react';
import axios from "axios";
import Swal from "sweetalert2";

const ShowList = ({getListShow, load}) => {
    const [reload, setReload] = useState(false);
    const [listShow, setListShow] = useState(
        new Array()
    );
    const [listShowDate, setListShowDate] = useState(
        new Array()
    );
    const [showEditor, setShowEditor] = useState(false);
    useEffect(() => {
            setReload(!reload);
    }, [load])
    useEffect(() => {
        getShows();
        getShowList()
    }, [reload]);

    const getShows = () => {
        axios.get('/api/select-list/product?film_status=1', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then((res) => {
                let data = res.data.data;
                console.log(data);
                setListShow(data);
                getListShow(data);
            })
            .catch((err) => {
                console.log(err)
            });
    };
    const getShowList = () => {
        const url = `/api/select-list/show`;
        axios.get( url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then((res) => {
                let data = res.data.data;
                setListShowDate(data);
            })
            .catch((err) => {
                console.log(err)
            });
    };

    const eleItem = listShowDate.map((product, index) => {
        let name = "";
        listShow.forEach((val, index) => {
            if (val.id === product.product_id) {
                name = val.film_name;
            }
        })
        return (
            <tr key={index} className="text-center">
                <td>{product.id}</td>
                <td>{name}</td>
                <td>{product.show_date}</td>
                <td>{product.show_time}</td>
                <td>{product.room_id}</td>
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
              <th className="text-center">Ngày chiếu</th>
              <th className="text-center">Giờ chiếu</th>
              <th className="text-center">Phòng chiếu</th>
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
