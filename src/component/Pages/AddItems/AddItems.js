import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import App from "../../../App";
import useAuth from "../../../hooks/useAuth";

const AddItems = () => {
  const [auth] = useAuth();
  const [user] = useAuthState(auth);
  console.log(user);
  const handleInventory = (event) => {
    event.preventDefault();
    const email = user.email;
    const name = event.target.furnitureName.value;
    const description = event.target.description.value;
    const price = event.target.priceNumber.value;
    const quantity = event.target.quantityNumber.value;
    const supplier = event.target.supplierName.value;
    const img = event.target.photoUrl.value;

    const newInventory = {
      email,
      name,
      description,
      price,
      quantity,
      supplier,
      img,
    };
    fetch("https://tranquil-woodland-74123.herokuapp.com/inventory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newInventory),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("Add A Inventory Successfully");
        event.target.reset();
      });
  };

  return (
    <div className="mt-5 mx-auto">
      <Container>
        <Row>
        <h2 className="text-center mb-5">Add Items</h2>
          <Form onSubmit={handleInventory}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                disabled
                value={user.email}
                readOnly
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Furniture name</Form.Label>
              <Form.Control
                required
                name="furnitureName"
                type="text"
                placeholder="Enter Furniture Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                name="description"
                type="text"
                placeholder="Enter description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                required
                name="priceNumber"
                type="number"
                placeholder="Enter Price"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                required
                name="quantityNumber"
                type="number"
                placeholder="Enter Quantity"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSupplier">
              <Form.Label>Supplier</Form.Label>
              <Form.Control
                required
                name="supplierName"
                type="text"
                placeholder="Enter supplier name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSupplier">
              <Form.Label>Photo url</Form.Label>
              <Form.Control
                required
                name="photoUrl"
                type="text"
                placeholder="Enter supplier name"
              />
            </Form.Group>
            <div className="w-50 mx-auto mb-5  text-center">
              <button className="l-btn" type="submit">
                Submit
              </button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default AddItems;
