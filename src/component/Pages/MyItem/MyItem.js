import React from 'react';

const MyItem = ({item}) => {
  console.log(item)
  const totalPrice = parseInt(item.quantity) * parseInt(item.price);
  return (
   <tr>
     <td>{item.name}</td>
     <td>{item?.email}</td>
     <td>{item?.price}</td>
     <td>{item?.quantity}</td>
     <td>{totalPrice}</td>
     <td>{item?.supplier}</td>
   </tr>
  );
};

export default MyItem;