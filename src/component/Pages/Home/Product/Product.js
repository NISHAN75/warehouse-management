import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Product = ({ product }) => {
  const {_id, name, img,description, price, quantity, supplier } = product;
  return (
    <Col lg={4} md={6} sm={12}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title><h5>name:{name}</h5></Card.Title>
          <Card.Text>
            <p>{description}</p>
            <p>price:{price}</p>
            <p>quantity:{quantity}</p>
            <h5>Supplier-name:{supplier}</h5>
          </Card.Text>
          <div className="mx-auto text-center">
          <Button variant="primary" className="btn btn-one" >Update</Button>
          </div>
          
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
