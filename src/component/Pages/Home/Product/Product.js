import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Product = ({ product }) => {
  const {_id, name, img,description, price, quantity, supplier } = product;
  console.log(description)
  return (
    <Col lg={4} md={6} sm={12}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title><h5>name:{name}</h5></Card.Title>
          <Card.Text>
            <p>product-about:{description}</p>
            <p>price:{price}</p>
            <p>quantity:{quantity}</p>
            <h5>Supplier-name:{supplier}</h5>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
