import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDeatils = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  console.log(product)
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            <p></p>
            <p></p>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDeatils;
