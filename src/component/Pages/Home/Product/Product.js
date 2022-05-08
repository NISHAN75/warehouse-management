import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import { FaTelegramPlane } from "react-icons/fa";


const Product = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, img, description, price, quantity, supplier } = product;
  const totalPrice = parseInt(product.quantity) * parseInt(product.price)

  const navigateProductDeatils = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <Col lg={4} md={6} sm={12}>
      <Card className="p-card shadow-lg">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
              <span className="h-color">name</span>:
              <span className="n-color">{name}</span>
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
            <p>
              <span className="h-color">Supplier-name</span>:
              <span className="n-color">{supplier}</span>
            </p>
          </Card.Text>
          <div className="btn-area">
            <button className="l-btn " onClick={() => navigateProductDeatils(_id)}>Update <FaTelegramPlane/></button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
