import { useGetProductCategoriesQuery } from "@/store/slice/categoriesApi";

const ProductCategoriesPage = () => {
  // Panggil hook ajaib, data otomatis di-fetch saat komponen ini muncul di layar
  const { data, isLoading, error } = useGetProductCategoriesQuery();

  if (isLoading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  console.log(data);

  return (
    <div>
      {data?.map((cat) => (
        <li key={cat.slug} className="ml-4">
          {cat.name}
        </li>
      ))}
    </div>
  );
};

export default ProductCategoriesPage;
