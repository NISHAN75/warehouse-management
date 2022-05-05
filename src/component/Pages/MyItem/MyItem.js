import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyItem = ({item , handleDelete}) => {
  const navigate=useNavigate()

  const navigateMyItems = (id) => {
    navigate(`/inventory/${id}`);
  };
  
  const totalPrice = parseInt(item.quantity) * parseInt(item.price);
  return (
   <tr>
     <td>{item.name}</td>
     <td>{item?.email}</td>
     <td>{item?.price}</td>
     <td>{item?.quantity}</td>
     <td>{totalPrice}</td>
     <td>{item?.supplier}</td>
     <td className="d-flex justify-content-around">
        <button
          className="l-btn"
          onClick={() => navigateMyItems(item._id)}
        >
          Update Stock
        </button>
        <button
          onClick={() => handleDelete(item._id)}
          className="btn ml-1 l-btn"
        >
          Delete
        </button>
      </td>
   </tr>
  );
};

export default MyItem;