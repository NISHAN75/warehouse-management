import React from "react";
import { Button, Form } from "react-bootstrap";

const AddItems = () => {
  return (
    <div className="mt-5 w-50 mx-auto">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Furniture name</Form.Label>
          <Form.Control type="text" placeholder="Enter Furniture Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="Enter Quantity" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSupplier">
          <Form.Label>Supplier</Form.Label>
          <Form.Control type="text" placeholder="Enter supplier name" />
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
