type ProductCardProps = {
  title: string;
  price: number;
  stock: number;
  isProductExpired: boolean;
  discountLabel?: string;
};

const ProductCard = ({
  title,
  price,
  stock,
  isProductExpired,
  discountLabel = "No Promo",
}: ProductCardProps) => {
  const discount: number = 5000;
  const imageUrl: string = "/assets/images/eyeshadow.jpg";

  return (
    <div>
      {/* Mengambil isi variabel string */}
      <p>Produk: {title}</p>
      {discountLabel && <span>{discountLabel}</span>}

      {/* Memasukkan variabel link gambar ke dalam atribut src */}
      <img src={imageUrl} alt="Menu Kopi" />

      {/* Jika isProductExpired bernilai true, maka tombol otomatis terkunci (disabled=true) */}
      <button disabled={isProductExpired}>Tambahkan ke Keranjang</button>

      {isProductExpired ? (
        <span>Produk Kadaluwarsa</span>
      ) : (
        <>
          <h4>Harga Promo: Rp {price - discount}</h4>
          <p>Stok: {stock}</p>
        </>
      )}
    </div>
  );
};

export default ProductCard;
