import { Button } from "bootstrap";
import React from "react";
import { Table } from "react-bootstrap";
import "./Manage.css";

const Manage = ({ product,handleDelete }) => {
  
  return (
    <Table className="mt-5">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Furniture Name</th>
          <th>Quantity</th>
          <th>Delete Inventory</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{product.name}</td>
          <td>{product.quantity}</td>
          <td>
            <button onClick={()=> handleDelete(product._id)} className="btn l-btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Manage;
