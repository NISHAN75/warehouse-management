import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import useAuth from "../../../hooks/useAuth";
import { Container } from "react-bootstrap";
import MyItem from "../MyItem/MyItem";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import axiosPrivate from "../../../api/axiosPrivate";
import { FaArrowRight } from "react-icons/fa";

const MyItems = () => {
  const [auth] = useAuth();
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;
      const url = `https://tranquil-woodland-74123.herokuapp.com/myItems?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setMyItems(data);
      } catch (error) {
        toast(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getItems();
  }, [user]);
  const handleDelete = (id) => {
    const agree = window.confirm("Are You sure want to Delete This Inventory");
    if (agree) {
      console.log("click", id);
      const url = `https://tranquil-woodland-74123.herokuapp.com/myItems/${id}`;
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
        <h2 className="text-center mb-5">My Items</h2>
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
            <button className="l-btn">add new item <FaArrowRight/></button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default MyItems;
