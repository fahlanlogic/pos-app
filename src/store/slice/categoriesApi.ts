import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Categories {
  slug: string;
  name: string;
  url: string;
}

export const categoriesSlices = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getProductCategories: builder.query<Categories[], void>({
      query: () => "product/categories",
    }),
  }),
});

export const { useGetProductCategoriesQuery } = categoriesSlices;
