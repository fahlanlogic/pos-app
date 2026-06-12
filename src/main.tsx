import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes.tsx";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "./components/wrapper/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
