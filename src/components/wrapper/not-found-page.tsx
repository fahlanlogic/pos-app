import { useRouteError } from "react-router-dom";

const NotFoundPage = () => {
  const router = useRouteError();
  console.error("ERRROOOORR", router);

  return <div>NotFoundPage</div>;
};
export default NotFoundPage;
