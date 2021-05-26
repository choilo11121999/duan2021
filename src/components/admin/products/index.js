import React, {Component, useState} from 'react';
import '../../../css/Products.css';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import { Button, Modal } from 'react-bootstrap';
function Products (props) {
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
            <h1>Quản Lý Phim</h1><hr/>
        </div>
        <Button variant="primary" onClick={handleShow}>
          <span className="fa fa-plus mr-3"></span>Thêm Phim
        </Button><hr/>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>
              Thêm Phim
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ProductForm handleClose={handleClose} />
          </Modal.Body>
        </Modal>
        <ProductList />
      </div>
    );
}

export default Products; 
