import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaCheck,FaArrowRight } from "react-icons/fa";


const Blogs = () => {
  return (
    <div className="blog-area mb-5 mt-5">
      <Container>
        <Row>
          <div className="blog-info">
            <div className="q-area text-warning ">
              <h3>1. Difference between javascript and nodejs</h3>
            </div>
            <div className="j-ans-area">
              <h4><FaCheck/>Javascript	</h4>
              <div className="j-ans-info">
                <p>1. <FaArrowRight/> Javascript is a programming language that is used for writing scripts on the website.</p>
                <p>
                  2. <FaArrowRight/> Javascript can only be run in the browsers.	
                </p>
                <p>
                  3. <FaArrowRight/> It is basically used on the client-side.	
                </p>
                <p>
                  4. <FaArrowRight/> Javascript is capable enough to add HTML and play with the DOM. 	
                </p>
                <p>
                  5. <FaArrowRight/> Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.	
                </p>
                <p>
                  6. <FaArrowRight/> It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. 
                </p>
                <p>
                 7. <FaArrowRight/> Some of the javascript frameworks are RamdaJS, TypedJS, etc. 
                </p>
              </div>
            </div>
            <div className="n-ans-area">
              <h4><FaCheck/>NodeJS	</h4>
              <div className="n-ans-info">
                <p>1. <FaArrowRight/>NodeJS is a Javascript runtime environment.</p>
                <p>
                  2. <FaArrowRight/>We can run Javascript outside the browser with the help of NodeJS.</p>
                <p>
                  3. <FaArrowRight/>It is mostly used on the server-side.
                </p>
                <p>
                  4. <FaArrowRight/> Nodejs does not have capability to add HTML tags. 	
                </p>
                <p>
                  5. <FaArrowRight/>V8 is the Javascript engine inside of node.js that parses and runs Javascript. 	
                </p>
                <p>
                  6. <FaArrowRight/> Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. 
                </p>
                <p>
                 7. <FaArrowRight/>Nodejs is written in C, C++ and Javascript.
                </p>
              </div>
            </div>
          </div>
          <div className="blog-info">
            <div className="q-area text-warning ">
              <h3>2. When should you use nodejs and when should you use mongodb</h3>
            </div>
            <div className="node-ans-area">
              <h4><FaCheck/>When i should  use nodejs</h4>
              <div className="j-ans-info">
                <p>Node js is primarily used for non-blocking, event-driven servers,data-intensive due to its single-threaded nature. It's used for traditional web sites and back-end API services. Node JS is best suited for real-time collaborative drawing or editing applications. </p>
              </div>
            </div>
            <div className="mongodb-ans-area">
              <h4><FaCheck/>When i should  use mongodb</h4>
              <div className="mong-db-ans-info">
                <p>SQL. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases </p>
              </div>
            </div>
          </div>
          <div className="blog-info">
            <div className="q-area text-warning ">
              <h3>3.Differences between sql and nosql databases</h3>
            </div>
            <div className="s-ans-area">
              <h4><FaCheck/>SQL</h4>
              <div className="j-ans-info">
                <p>1. <FaArrowRight/>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</p>
                <p>
                  2. <FaArrowRight/>These databases have fixed or static or predefined schema		
                </p>
                <p>
                  3. <FaArrowRight/>These databases are not suited for hierarchical data storage.		
                </p>
                <p>
                  4. <FaArrowRight/>These databases are best suited for complex queries	 	
                </p>
                <p>
                  5. <FaArrowRight/>Vertically Scalable		
                </p>
                <p>
                  6. <FaArrowRight/>Follows ACID property	 
                </p>
              </div>
            </div>
            <div className="n-ans-area">
              <h4><FaCheck/>NoSQL</h4>
              <div className="n-ans-info">
                <p>1. <FaArrowRight/>Non-relational or distributed database system.</p>
                <p>
                  2. <FaArrowRight/>They have dynamic schema</p>
                <p>
                  3. <FaArrowRight/>These databases are best suited for hierarchical data storage.
                </p>
                <p>
                  4. <FaArrowRight/> These databases are not so good for complex queries 	
                </p>
                <p>
                  5. <FaArrowRight/>Horizontally scalable 	
                </p>
                <p>
                  6. <FaArrowRight/>Follows CAP(consistency, availability, partition tolerance) 
                </p>
              </div>
            </div>
          </div>
          <div className="blog-info">
            <div className="jwt-area text-warning ">
              <h3>4.What is the purpose of jwt and how does it work</h3>
            </div>
            <div className="jwt-ans-area">
              <h4><FaCheck/>What is the purpose of jwt</h4>
              <div className="j-ans-info">
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued</p>
              </div>
            </div>
            <div className="jwt-ans-area">
              <h4><FaCheck/>how does it work</h4>
              <div className="jwt-db-ans-info">
                <p>1.Users will start by authenticating with a username and password managed by Auth0. </p>
                <p>2.Once authenticated, the client will receive a JWT representing an access token. </p>
                <p>3.The client will include the access token in the authorization header of every request to a secure endpoint.</p>
                <p>4.The server will validate the access token and determine if it has the right permissions, using the information within the token.</p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Blogs;