import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { LayoutPage } from "./pages";

import { load as loadCart } from "./components/Cart";
import { load as loadCheckout } from "./components/Checkout";

import {
  About,
  Account,
  Cart,
  Checkout,
  Contact,
  Error,
  Home,
  SignUP,
  Wishlist,
} from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "sign-up",
        element: <SignUP />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "cart",
        element: <Cart />,
        loader: loadCart,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        loader: loadCheckout,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
