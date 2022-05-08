import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tr, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { FaTelegramPlane ,FaBan } from "react-icons/fa";


const MyItem = ({item , handleDelete}) => {
  const navigate=useNavigate()

  const navigateMyItems = (id) => {
    navigate(`/inventory/${id}`);
  };
  
  const totalPrice = parseInt(item.quantity) * parseInt(item.price);
  return (
    <Tr>
    <Td className="mt-5">{item.name}</Td>
    <Td className="mt-5">{item?.email}</Td>
    <Td className="mt-5">${item.price}</Td>
    <Td className="mt-5">{item.quantity}</Td>
    <Td className="mt-5">${totalPrice}</Td>
    <Td className="mt-5">{item.supplier}</Td>
   
      <Td>
      <button
        className="u-btn l-btn"
        onClick={() => navigateMyItems(item._id)}
      >
        Update
        <FaTelegramPlane/>
      </button>
      <button
        onClick={() => handleDelete(item._id)}
        className="l-btn"
      >
        Delete
        <FaBan/>
      </button>
      </Td>
  </Tr>
  );
};

export default MyItem;