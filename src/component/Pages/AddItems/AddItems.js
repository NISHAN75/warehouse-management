import React from "react";
import { Button, Form } from "react-bootstrap";

const AddItems = () => {
  const handleInventory=event=>{
    event.preventDefault();
    const name= event.target.furnitureName.value;
    const description= event.target.description.value;
    const price= event.target.priceNumber.value;
    const quantity= event.target.quantityNumber.value;
    const supplier= event.target.supplierName.value;
    const img=event.target.photoUrl.value;
  
    const newInventory={name,description,price, quantity,supplier,img}
    fetch('http://localhost:5000/inventory',{
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newInventory)
    })
    .then(res => res.json())
    .then(data => {
      console.log('success',data)
      alert('Add A Inventory Successfully')
      event.target.reset()
    })
  }

  
  return (
    <div className="mt-5 w-50 mx-auto">
      <Form onSubmit={handleInventory}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Furniture name</Form.Label>
          <Form.Control required name="furnitureName" type="text" placeholder="Enter Furniture Name" />
        </Form.Group>
        <Form.Group className="mb-3"  controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control required name="description" type="text" placeholder="Enter description"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control required name="priceNumber" type="number" placeholder="Enter Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control required name="quantityNumber" type="number" placeholder="Enter Quantity" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSupplier">
          <Form.Label>Supplier</Form.Label>
          <Form.Control required name="supplierName" type="text" placeholder="Enter supplier name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSupplier">
          <Form.Label>Photo url</Form.Label>
          <Form.Control required name="photoUrl" type="text" placeholder="Enter supplier name" />
        </Form.Group>
        <div className="w-50 mx-auto mb-5  text-center">
          <Button variant="primary" type="submit">
            Add inventory
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddItems;
