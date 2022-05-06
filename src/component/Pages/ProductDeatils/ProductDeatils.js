import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDeatils.css";

const ProductDeatils = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const url = `https://tranquil-woodland-74123.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const totalPrice = parseInt(product.quantity) * parseInt(product.price);

  const deliveredHandle = (event) => {
    event.preventDefault();
    const fieldQuantity = parseInt(product.quantity);
    const addQuantity = fieldQuantity - 1;
    const updateQuantity = { addQuantity };
    const url = `https://tranquil-woodland-74123.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        const quantity = updateQuantity.addQuantity;
        const newProduct = { ...product, quantity };
        setProduct(newProduct);
      });
  };

  const handleAddQuantity = (event) => {
    event.preventDefault();
    const fieldQuantity = parseInt(product.quantity);
    const inputQuantity = parseInt(event.target.number.value);
    const addQuantity = fieldQuantity + inputQuantity;
    const updateQuantity = { addQuantity };
    const url = `https://tranquil-woodland-74123.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const quantity = updateQuantity.addQuantity;
          const newProduct = { ...product, quantity };
          setProduct(newProduct);
          event.target.reset();
        }
      });
  };

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
                  <span id="quantity" className="n-color">
                    {product.quantity}
                  </span>
                </p>
                <p>
                  <span className="h-color">quantity</span>:{" "}
                  <span id="quantity" className="n-color">
                    ${totalPrice}
                  </span>
                </p>
                <button
                  onClick={deliveredHandle}
                  className="l-btn w-50 mx-auto mb-3"
                >
                  delivered furniture
                </button>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="update-form-area text-center">
              <Form onSubmit={handleAddQuantity}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="number"
                    name="number"
                    required
                    placeholder=" Add Quantity"
                  />
                </Form.Group>
                <button className="l-btn w-50 mx-auto" type="submit">
                  Add Quantity
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDeatils;
