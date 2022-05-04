import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import useAuth from "../../../hooks/useAuth";
import { Container, Table } from "react-bootstrap";
import MyItem from "../MyItem/MyItem";

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
  return (
    <Container className="mt-5 mb-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Furniture Name</th>
            <th>Email Address</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>total</th>
            <th>Supplier Name</th>
          </tr>
        </thead>
        <tbody>
          {
            myItems.map(item=> <MyItem key={item._id} item={item}></MyItem>)
          }
        </tbody>
      </Table>
    </Container>
  );
};

export default MyItems;
