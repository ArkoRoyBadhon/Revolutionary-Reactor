import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductListing from "../pages/ProductListing";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductListing />,
      }
    ],
  },
]);

export default routes;
