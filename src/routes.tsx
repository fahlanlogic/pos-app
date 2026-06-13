import { createBrowserRouter, Outlet } from "react-router-dom";
import ProductPage from "./pages/private/product";
import ProductsPage from "./pages/private/products";
import DashboardPage from "./pages/private/dashboard";
import LoginPage from "./pages/public/login";
import ProtectedRoute from "./components/wrapper/protected-route";
import NotFoundPage from "./components/wrapper/not-found-page";
import ProductCategoriesPage from "./pages/private/product-categories";

export const appRouter = createBrowserRouter([
  {
    element: <Outlet />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/",
            element: <DashboardPage />,
            errorElement: <NotFoundPage />,
          },
          {
            path: "/products",
            element: <ProductsPage />,
          },
          {
            path: "/products/:productId",
            element: <ProductPage />,
          },
          {
            path: "/products/categories",
            element: <ProductCategoriesPage />,
          },
        ],
      },
    ],
  },
]);
