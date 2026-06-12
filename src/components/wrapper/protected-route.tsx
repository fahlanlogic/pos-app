import { Outlet } from "react-router-dom";
import SidebarWrapper from "./sidebar-wrapper";

const ProtectedRoute = () => {
  // const isAuthenticated = localStorage.getItem("token") !== null;

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }

  return (
    <SidebarWrapper>
      <Outlet />
    </SidebarWrapper>
  );
};

export default ProtectedRoute;
