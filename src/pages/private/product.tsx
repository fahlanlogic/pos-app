import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();

  return <div>Product Detail {productId}</div>;
};

export default ProductPage;
