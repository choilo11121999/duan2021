import React, {useEffect, useState} from 'react';
import ShowFormEdit from "./ShowFormEdit";
import axios from "axios";
import Swal from "sweetalert2";
import {Modal} from "react-bootstrap";

const ShowList = () => {
    const [reload, setReload] = useState(false);
    const [listShow, setListShow] = useState(
        new Array()
    );
    const [showEditor, setShowEditor] = useState(false);

    useEffect(() => {
        getShows()
    }, [reload]);

    const getShows = () => {
        axios.get('/api/select-list/shows', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then((res) => {
                let data = res.data.data.data;
                setListShow(data);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const deleteShow = (id) => {
        axios.delete(`/api/select-list/show/${id}`)
            .then((res) => {
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    text: 'Xóa thành công!',
                })
                setReload(!reload)
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    text: 'Xóa Không thành công!',
                })
            });
    }

    const handleDelete = (e) => {
        const id = e.target.parentNode.parentNode.firstChild.innerText;
        console.log(id)
        Swal.fire({
            title: 'Do you want to delete this Show?',
            showCancelButton: true,
            confirmButtonText: `Delete`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                deleteShow(id);
            }
        })
    }

    const handleShow = () => {
        setShowEditor(true);
    };

    const handleClose = () => {
        setShowEditor(false);
    };

    const eleItem = listShow.map((timeList, index) => {
        return (
          <tr key={index} className="text-center">
              <td>{timeList.id}</td>
              <td>{timeList.film_name}</td>
              <td>{timeList.showTime}</td>
              <td>{timeList.showDate}</td>
              <td>{timeList.room}</td>
              <td><button className="btn btn-sm btn-primary" onClick={handleShow}>Edit</button></td>
              <Modal show={showEditor} onHide={handleClose} backdrop="static" keyboard={false}>
                  <Modal.Header closeButton>
                      <Modal.Title>
                          Sửa Phim
                      </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <ShowFormEdit handleClose={handleClose} timeList={timeList} />
                  </Modal.Body>
              </Modal>
              <td><button className="btn btn-sm btn-danger" onClick={(e) => handleDelete(e)}>Delete</button></td>
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
              <th className="text-center">Giờ chiếu</th>
              <th className="text-center">Ngày chiếu</th>
              <th className="text-center">Phòng chiếu</th>
              <th className="text-center">Sửa</th>
              <th className="text-center">Xóa</th>
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
