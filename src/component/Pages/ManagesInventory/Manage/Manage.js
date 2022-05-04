import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Manage.css";

const Manage = ({ product, handleDelete }) => {
  const navigate = useNavigate();
  const totalPrice = parseInt(product.quantity) * parseInt(product.price);
  const navigateProductDeatils = (id) => {
    navigate(`/inventory/${id}`);
  };
  


  return (
    <tr>
      <td>{product.name}</td>
      <td>{product?.email}</td>
      <td>${product.price}</td>
      <td>{product.quantity}</td>
      <td>${totalPrice}</td>
      <td>{product.supplier}</td>
      <td className="d-flex justify-content-around">
        <button
          className="l-btn"
          onClick={() => navigateProductDeatils(product._id)}
        >
          Update Stock
        </button>
        <button
          onClick={() => handleDelete(product._id)}
          className="btn ml-1 l-btn"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Manage;
