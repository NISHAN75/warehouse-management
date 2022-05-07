import React from "react";
import { Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-area mx-auto  p-5 mb-5 mt-5">
      <Container>
        <Row>
          <h2 className="text-center mb-5 text-uppercase">Get in Touch</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                name="name"
                type="text"
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Your Address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter Your email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter Your Phone number"
              />
            </Form.Group>
            <FloatingLabel
              className="mb-3"
              controlId="floatingTextarea2"
              label="Enter Your Message"
            >
              <Form.Control
                required
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <div className="send-btn mx-auto text-center">
            <button className="l-btn  w-50" type="submit">
              Send
            </button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
