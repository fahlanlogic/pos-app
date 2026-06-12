import { useEffect } from "react";

const ProductsPage = () => {
  useEffect(() => {
    // Mengambil data awal produk retail saat halaman pertama kali dibuka
    fetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>Products</div>;
};

export default ProductsPage;
