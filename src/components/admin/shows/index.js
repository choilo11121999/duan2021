import React, {Component, useState} from 'react';
import ShowList from "./ShowList";
import ShowForm from "./ShowForm";

import { Button, Modal } from 'react-bootstrap';
function Show (props) {
  const [show, setShow] = useState(false);
  const [listShow, setListShow] = useState();
    const handleClose = (show) => {
      setShow(false);
    }
    const handleShow = (show) => {
      setShow(true);
    }
    const getListShow = (data) => {
      setListShow(data);
      console.log(data);
    }
    return (
      <div className="mr-5 ml-5 mb-5">
        <div className="text-left">
            <h1>Quản Lý Giờ chiếu</h1><hr/>
        </div>
        <Button variant="primary" onClick={handleShow}>
          <span className="fa fa-plus mr-3"></span>Thêm Giờ chiếu
        </Button><hr/>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>
              Thêm Giờ Chiếu
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ShowForm handleClose={handleClose} listShow={listShow} />
          </Modal.Body>
        </Modal>
        <ShowList getListShow={getListShow}/>
      </div>
    );
}

export default Show; 
