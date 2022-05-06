import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import NewsDetails from "../NewsDetails/NewsDetails";
import "./News.css";

const News = () => {
  const [informations, setInformation] = useState([]);
  useEffect(() => {
    fetch("https://tranquil-woodland-74123.herokuapp.com/news")
      .then((res) => res.json())
      .then((data) => setInformation(data));
  }, []);
  return (
    <div className="mt-5 mb-5">
      <Container>
        <h1 className="text-center mb-5 text-uppercase">From Our News</h1>
        <p className="text-center mt-3 mb-5">
          Read about the latest modern furniture design notes on the furnob
          blog.
        </p>
        <Row className="g-4">
          {informations.map((information) => (
            <NewsDetails
              key={information._id}
              information={information}
            ></NewsDetails>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default News;
