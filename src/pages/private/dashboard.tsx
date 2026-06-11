import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div>
      <p>CashierDashboard</p>
      <Link to={"/products"}>To Products</Link>
    </div>
  );
};

export default DashboardPage;
