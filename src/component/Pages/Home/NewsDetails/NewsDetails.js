import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './NewsDetails.css'

const NewsDetails = ({ information }) => {
  const {img,name,description}=information
  return (
    <Col lg={4} md={6} sm={12}>
      <Card className="news-card shadow-lg border-none">
        <Card.Img variant="top" src={img} className="img-fluid" />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {
              description
            }
          </Card.Text>
          <div className="news-btn">
          <Link to="/blog">
          <button className="l-btn">Read More</button>
          </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NewsDetails;
