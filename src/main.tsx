import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes.tsx";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "./components/wrapper/theme-provider.tsx";
import { ConnectionStatusBar } from "./components/block/connection-status-bar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ConnectionStatusBar />
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
