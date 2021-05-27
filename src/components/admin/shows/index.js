import React, {Component, useState} from 'react';
import ShowList from "./ShowList";
import ShowForm from "./ShowForm";

import { Button, Modal } from 'react-bootstrap';
function Show (props) {
  const [show, setShow] = useState(false);

    const handleClose = (show) => {
      setShow(false);
    }
    const handleShow = (show) => {
      setShow(true);
    }

    return (
      <div className="mr-5">
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
            <ShowForm handleClose={handleClose} />
          </Modal.Body>
        </Modal>
        <ShowList/>
      </div>
    );
}

export default Show; 
