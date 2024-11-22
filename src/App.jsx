import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./features/cart/Cart";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import CreateOrder, {
  action as CreateOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLAyout from "./ui/AppLAyout";
const router = createBrowserRouter([
  {
    element: <AppLAyout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: CreateOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
