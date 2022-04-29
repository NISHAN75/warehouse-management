
import { Container, Row } from "react-bootstrap";
import useProducts from "../../../../hooks/useProducts";
import Product from "../Product/Product";

const Inventorys = () => {
  const [products] = useProducts([]);
 

  return (
    <div className="inventory-area mt-5 mb-5">
      
      <Container>
      <h1 className="text-center mb-5 text-uppercase"> Inventory Products</h1>
        <Row className="g-4">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Inventorys;
