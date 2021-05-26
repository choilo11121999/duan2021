import React, { Component } from 'react';

const ProductItem = ({ data }) => {
    console.log(data)
    console.log(typeof  data)
    const elementProduct = data ? data.map((product, index) => {
        return (
            <tr key={index}>
                <td>{product.id}</td>
                <td>{product.film_name}</td>
                <td>{product.category}</td>
                <td><img src={product.poster} /></td>
                <td>{product.duration}</td>
                <td>{product.film_description}</td>
                <td>{product.film_status}</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
            </tr>
        );
    }) : "";
    return (
        <>
            {elementProduct}
        </>
    );
}

export default ProductItem;
