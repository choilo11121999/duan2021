import React, {useEffect, useState} from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import {Modal} from "react-bootstrap";
import ProductFormEdit from "./ProductFormEdit";

const ProductList = ({ getReLoad }) => {
    const [reload, setReload] = useState(false);
    useEffect(() => {
            setReload(!reload);
    }, [getReLoad])
    const [listProduct, setListProduct] = useState(
        new Array()
    );
    const [showEditor, setShowEditor] = useState(false);
    const [productId, setProductId] = useState({
        film_name: "",
        duration: "",
        film_description: "",
        film_status: "",
    });
    useEffect(() => {
        getProducts();
    }, [reload]);

    const getProducts = () => {
        axios.get('/api/products', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then((res) => {
                let data = res.data.data.data;
                setListProduct(data);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const deleteProduct = (id) => {
        axios.delete(`/api/products/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then((res) => {
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

    const handleEdit = (e) => {
        const id = e.target.parentNode.parentNode.firstChild.innerText;
        handleShow();
        listProduct.forEach(product => {
            if (product.id.toString() === id) {
                setProductId(product);
            }
        })
    }

    const handleDelete = (e) => {
        const id = e.target.parentNode.parentNode.firstChild.innerText;
        Swal.fire({
            title: 'Do you want to delete this product?',
            showCancelButton: true,
            confirmButtonText: `Delete`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                deleteProduct(id);
            }
        })
    }

    const handleShow = () => {
        setShowEditor(true);
    };

    const handleClose = () => {
        setShowEditor(false);
    };
    const handleReload = (val) => {
        setReload(!reload);
    }
    const eleItem = listProduct.map((product, index) => {
        return (
          <tr key={index} className="text-center">
              <td>{product.id}</td>
              <td>{product.film_name}</td>
              <td>{product.category.map((value, index) => {
                  return index < product.category.length -1 ?  value.name + ", " : value.name;
              })}</td>
              <td className="w-25"><img className="w-25" src={axios.defaults.baseURL + product.poster} /></td>
              <td>{product.duration}</td>
              <td>{product.film_description}</td>
              <td>{product.film_status === 0 ? "Không chiếu" : product.film_status === 1 ? "Đang chiếu" : "Sắp chiếu"}</td>
              <td><button className="btn btn-sm btn-primary" onClick={(e) => handleEdit(e)}>Edit</button></td>
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
              <th className="text-center">Category</th>
              <th className="text-center">Poster</th>
              <th className="text-center">Thời gian phim</th>
              <th className="text-center">Mô tả</th>
              <th className="text-center">Trạng thái</th>
              <th className="text-center">Sửa</th>
              <th className="text-center">Xóa</th>
            </tr>
          </thead>
          <tbody>
          {eleItem}
          </tbody>
        </table>
          <Modal show={showEditor} onHide={handleClose} backdrop="static" keyboard={false}>
              <Modal.Header closeButton>
                  <Modal.Title>
                      Sửa Phim
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <ProductFormEdit handleClose={handleClose} product={productId} handleReload={handleReload} />
              </Modal.Body>
          </Modal>
      </div>
    );
}

export default ProductList;
