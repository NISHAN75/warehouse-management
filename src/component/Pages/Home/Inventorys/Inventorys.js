
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../../../hooks/useProducts";
import Product from "../Product/Product";
import { FaArrowRight } from "react-icons/fa";

const Inventorys = () => {
  const [products] = useProducts([]);
 



  return (
    <div className="inventory-area mt-5 mb-5">
      <Container>
      <h1 className="text-center mb-5 text-uppercase"> Inventory Products</h1>
        <Row className="g-4">
          {products.slice(0,6).map((product) => (
            <Product key={product._id}  product={product}></Product>
          ))}
        </Row>
         <div className="m-btn-area w-50 mx-auto text-center mt-5">
          <Link to="/manage"><button className="l-btn">Manage Inventory <FaArrowRight/></button></Link>
         </div>
      </Container>
    </div>
  );
};

export default Inventorys;
