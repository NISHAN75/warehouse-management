import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Manage from "../Manage/Manage";

const Manages = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleDelete = (id) => {
    const agree = window.confirm("Are You sure want to Delete This Inventory");
    if (agree) {
      console.log("click", id);
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <Container>
      <div className="manage-area">
        <Table className="mt-5">
          <thead>
            <tr>
            <th>Furniture Name</th>
              <th>Email Address</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Supplier Name</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <Manage
                key={product._id}
                handleDelete={handleDelete}
                product={product}
              ></Manage>
            ))}
          </tbody>
        </Table>

        <div className="add-btn w-50 mx-auto mt-5 mb-3 text-center">
          <Link to="/addItems">
            <button className="l-btn">add new item</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Manages;
