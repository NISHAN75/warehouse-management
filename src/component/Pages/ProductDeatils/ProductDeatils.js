import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDeatils = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  console.log(product);
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="update-area">
      <Container className="mt-5 mb-5">
      <Row>
        <Col lg={6} md={6} sm={12}>
          <div className="update-info text-center border-lg p-3 shadow-lg">
            <img src={product.img} className="img-fluid" alt="" />
            <div className="mt-2">
              <h4>
                <span className="h-color">supplier</span>:
                <span className="n-color">{product.supplier}</span>
              </h4>
              <h4>
                <span className="h-color">name</span>:{" "}
                <span className="n-color">{product.name}</span>
              </h4>
              <p>
                <span className="h-color">price</span>:{" "}
                <span className="n-color">${product.price}</span>
              </p>
              <p>
                <span className="h-color">quantity</span>:{" "}
                <span className="n-color">{product.quantity}</span>
              </p>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <div className="update-form-area mt-5 text-center">
            <Form>
              <Button className=" btn btn-one w-50 mx-auto mb-3 mt-5">
                delivered furniture
              </Button>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  name="name"
                  placeholder=" Add Quantity"
                />
              </Form.Group>
              <Button className="w-50 mx-auto" variant="primary" type="submit">
                Add Quantity
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ProductDeatils;
