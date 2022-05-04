import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDeatils = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isReload ,setIsReload] =useState(false);
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [isReload]);

  const a=product.quantity;


const deliveredHandle =() =>{
  console.log('click')
}

  const handleAddQuantity = (event) => {
    const quantity = parseInt(product.quantity);
    const inputQuantity = parseInt(event.target.number.value);
    const addQuantity = quantity + inputQuantity;
    const updateQuantity = { addQuantity };
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then(data => setIsReload(!isReload))
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
                <Button onClick={deliveredHandle}
                className=" btn btn-one w-50 mx-auto mb-3"
              >
                delivered furniture
              </Button>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="update-form-area text-center mt-5">
              <Form onSubmit={handleAddQuantity}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="number"
                    name="number"
                    required
                    placeholder=" Add Quantity"
                  />
                </Form.Group>
                <Button
                  className="w-50 mx-auto"
                  variant="primary"
                  type="submit"
                >
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
