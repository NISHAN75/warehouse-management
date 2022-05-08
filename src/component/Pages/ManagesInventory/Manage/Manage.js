
import { useNavigate } from "react-router-dom";
import "./Manage.css";
import { Tr, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { FaTelegramPlane ,FaBan } from "react-icons/fa";


const Manage = ({ product, handleDelete }) => {
  const navigate = useNavigate();
  const totalPrice = parseInt(product.quantity) * parseInt(product.price);
  const navigateManageItems = (id) => {
    navigate(`/inventory/${id}`);
  };
  
  return (
    <Tr>
      <Td className="mt-5">{product.name}</Td>
      <Td className="mt-5">{product?.email}</Td>
      <Td className="mt-5">${product.price}</Td>
      <Td className="mt-5">{product.quantity}</Td>
      <Td className="mt-5">${totalPrice}</Td>
      <Td className="mt-5">{product.supplier}</Td>
     
        <Td>
        <button
          className="u-btn l-btn"
          onClick={() => navigateManageItems(product._id)}
        >
          Update
          <FaTelegramPlane/>
        </button>
        <button
          onClick={() => handleDelete(product._id)}
          className="l-btn"
        >
          Delete
          <FaBan/>
        </button>
        </Td>
    </Tr>
    

  );
};

export default Manage;
