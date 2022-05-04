import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, img, description, price, quantity, supplier } = product;
  const totalPrice = parseInt(product.quantity) * parseInt(product.price)

  const navigateProductDeatils = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <Col lg={4} md={6} sm={12}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <h5>
              <span className="h-color">name</span>:
              <span className="n-color">{name}</span>
            </h5>
          </Card.Title>
          <Card.Text>
            <p className="d-color">{description}</p>
            <p>
              <span className="h-color">price</span> :{" "}
              <span className="n-color">${price}</span>
            </p>
            <p>
              <span className="h-color">quantity</span>:{" "}
              <span className="n-color">{quantity}</span>
            </p>
            <p>
              <span className="h-color">total</span>:{" "}
              <span className="n-color">${totalPrice}</span>
            </p>
            <h5>
              <span className="h-color">Supplier-name</span>:
              <span className="n-color">{supplier}</span>
            </h5>
          </Card.Text>
          <div className="btn-area">
            <button className="l-btn" onClick={() => navigateProductDeatils(_id)}>Update</button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
