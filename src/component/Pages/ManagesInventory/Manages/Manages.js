import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Manage from "../Manage/Manage";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { FaArrowRight } from "react-icons/fa";

const Manages = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://tranquil-woodland-74123.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleDelete = (id) => {
    const agree = window.confirm("Are You sure want to Delete This Inventory");
    if (agree) {
      console.log("click", id);
      const url = `https://tranquil-woodland-74123.herokuapp.com/inventory/${id}`;
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
    <div className="manage-area mt-5">
      <Container>
      <h2 className="text-center mb-5">Manage Items</h2>
        <Table className="text-center">
          <Thead>
            <Tr>
              <Th>Furniture</Th>
              <Th>Email Address</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>Total</Th>
              <Th>Supplier</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Manage
                key={product._id}
                handleDelete={handleDelete}
                product={product}
              ></Manage>
            ))}
          </Tbody>
        </Table>
        <div className="add-btn w-50 mx-auto mt-5 mb-3 text-center">
          <Link to="/addItems">
            <button className="l-btn">add new item <FaArrowRight/></button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Manages;
