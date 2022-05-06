import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import useAuth from "../../../hooks/useAuth";
import { Container } from "react-bootstrap";
import MyItem from "../MyItem/MyItem";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Link } from "react-router-dom";

const MyItems = () => {
  const [auth] = useAuth();
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/myItems?email=${email}`;
      const { data } = await axios.get(url);
      setMyItems(data);
    };
    getItems();
  }, []);
  const handleDelete = (id) => {
    const agree = window.confirm("Are You sure want to Delete This Inventory");
    if (agree) {
      console.log("click", id);
      const url = `http://localhost:5000/myItems/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = myItems.filter((item) => item._id !== id);
            setMyItems(remaining);
          }
        });
    }
  };
  return (
    <div className="items-area mt-5">
      <Container>
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
            {myItems.map((item) => (
              <MyItem
                key={item._id}
                handleDelete={handleDelete}
                item={item}
              ></MyItem>
            ))}
          </Tbody>
        </Table>
        <div className="add-btn w-50 mx-auto mt-5 mb-3 text-center">
          <Link to="/addItems">
            <button className="l-btn">add new item</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default MyItems;
