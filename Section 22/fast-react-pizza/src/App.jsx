import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";

// using createBrowserRouter we can fetch/load data
const router = createBrowserRouter([
  {
    element: <AppLayout />, // parent route of all other routes
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader, // 2. connect loader to route
        errorElement: <Error />, // if error is not handled here it will bubble up to the parent route (/) and only the error component will be displayed on whole page
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;

/**
 * Idea behind Loader is
 * 1. We define a function that uses a API to fetch some data
 * 2. We then provide this Loader function to one of the routes,
 *    That route will fetch the data as soon as the application goes to that route
 * 3. In the end, once that data is arrived it will be provided to the page component itself using a custom hook
 */
