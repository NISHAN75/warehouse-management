
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner-area">
       <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/green-interior-modern-interior-living-room-style-with-soft-sofa-green-wall-3d-rendering_41470-3902.jpg?w=740&t=st=1651207128~exp=1651207728~hmac=c7e3e930ea897bd72283ac63af36eb2080aa382d18594d0f71d4fc2f94eb322c"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>hand made interiors</h1>
      <p>Treat your space like an empty canvas,<br/> filled with potential</p>
      <button as={Link} to="/about" className="btn btn-one">Read More</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg?t=st=1651206524~exp=1651207124~hmac=ebe72b24135a742015f927abf1b8723b5bc77fd47f4a1311819fbfb28db1dfe0&w=740"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>bespoke elements</h1>
      <p>Good design is good business. Not only does it attract attention,<br/> it spurs people to take action.</p>
      <button as={Link} to="/about" className="btn btn-one">Read More</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129803.jpg?t=st=1651207079~exp=1651207679~hmac=f1ca935609f87fcd0278375c607a9e0e1b5d5d50cc1a388396bc348e599462a9&w=740"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>Store with Love</h1>
      <p>Design creates culture. Culture shapes values.<br/> Values determine the future</p>
      <button as={Link} to="/about" className="btn btn-one">Read More</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Banner;