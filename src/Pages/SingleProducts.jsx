import { Link, useParams } from "react-router-dom";
import products from "../data.js";

const SingleProducts = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { name, image } = product;
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <Link to="/Products">Back to Products</Link>
    </div>
  );
};
export default SingleProducts;
