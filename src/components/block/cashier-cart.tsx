import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { incrementCart } from "@/store/slice/cartSlice";

export const CashierCart = () => {
  const dispatch = useAppDispatch();

  // TypeScript otomatis tahu totalItems berjenis 'number' karena sudah terkunci di RootState
  const totalItems = useAppSelector((state) => state.cart.totalItems);

  return (
    <nav>
      <span>Keranjang: {totalItems} Item</span>
      <button onClick={() => dispatch(incrementCart())}>+ Scan</button>
    </nav>
  );
};
