import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { LayoutPage } from "./pages";
import { load as loadCart } from "./components/Cart";
import { load as loadCheckout } from "./components/Checkout";
import { load as loadFlash } from "./components/Home";
import { load as loadWishlist } from "./components/Wishlist";
import { load as loadProductDetails } from "./components/ProductDetails";
import { load as loadLayout } from "./pages/LayoutPage";

import { action as destroyAction } from "./pages/destroy";
import { action as destroyCartAction } from "./pages/destroy-cart";
import { action as updateAmountAction } from "./pages/update-amount";

import {
  About,
  Account,
  Cart,
  Checkout,
  Contact,
  Error,
  Home,
  SignIn,
  SignUP,
  Wishlist,
  ProductDetails,
} from "./components";

const router = createBrowserRouter([
  {
    path: "",
    element: <LayoutPage />,
    loader: loadLayout,
    errorElement: <Error />,
    children: [
      // to show errors in the outlet for every child
      {
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Home />,
            loader: loadFlash,
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
            path: "login",
            element: <SignIn />,
          },
          {
            path: "sign-up",
            element: <SignUP />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
            loader: loadWishlist,
            children: [],
          },
          {
            path: "wishlist/:heading/destroy",
            element: <destroy />,
            action: destroyAction,
          },

          {
            path: "account/cart",
            element: <Cart />,
            loader: loadCart,
          },
          {
            path: ":heading/destroy-cart",
            element: <destroy-cart />,
            action: destroyCartAction,
          },
          {
            path: ":heading/:amount/update-amount",
            element: <update-amount />,
            action: updateAmountAction,
          },
          {
            path: "account",
            element: <Account />,
          },
          {
            path: "account/cart/checkout",
            element: <Checkout />,
            loader: loadCheckout,
          },
          // {
          //   path: "checkout",
          //   element: <Checkout />,
          //   loader: loadCheckout,
          // },
          {
            path: "product/:productName",
            element: <ProductDetails />,
            loader: loadProductDetails,
          },
          // {
          //   path: "product/:productName",
          //   element: <ProductDetail />,
          //   loader: loadProductDetails,
          // },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
