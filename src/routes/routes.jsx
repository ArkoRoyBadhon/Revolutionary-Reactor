import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductListing from "../pages/ProductListing";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductListing />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default routes;
