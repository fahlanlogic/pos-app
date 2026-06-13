import { CashierCart } from "@/components/block/cashier-cart";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();

  return (
    <div>
      Product Detail {productId}
      <CashierCart />
    </div>
  );
};

export default ProductPage;
