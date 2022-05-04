import React, { useEffect, useState } from 'react';
import Manage from '../Manage/Manage'

const Manages = () => {
  const [products,setProducts] =useState([]);
  useEffect( () => {
    fetch('http://localhost:5000/inventory')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  const handleDelete = (id)=>{
    const agree=window.confirm('Are You sure want to Delete This Inventory');
    if(agree){
      console.log('click',id)
      const url=`http://localhost:5000/inventory/${id}`;
      fetch(url,{
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          const remaining =products.filter(product => product._id !== id);
          setProducts(remaining);
        }
      })
    }
    
  }
  return (
    <div className="manage-area">
      {
        products.map(product => <Manage key={product._id} handleDelete={handleDelete} product={product}></Manage>)
      }
    </div>
  );
};

export default Manages;