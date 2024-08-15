import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Product from "../pages/products/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Product />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
