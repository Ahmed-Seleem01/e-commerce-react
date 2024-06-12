import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { LayoutPage } from "./pages";
import { load as loadCart } from "./components/Cart";
import { load as loadCheckout } from "./components/Checkout";
import { load as loadFlash } from "./components/home";
import { load as loadWishlist } from "./components/Wishlist";
import { load as loadProductDetails } from "./components/ProductDetails";
import { load as loadLayout } from "./pages/LayoutPage";

import { action as destroyAction } from "./pages/destroy";
import { action as destroyCartAction } from "./pages/destroy-cart";
import { action as updateAmountAction } from "./pages/update-amount";
import { action as wishlistAction } from "./pages/add-to-wishlist";
import { action as cartAction } from "./pages/add-to-cart";

import {
  Account,
  Cart,
  Checkout,
  Contact,
  Error,
  SignIn,
  SignUP,
  Wishlist,
  ProductDetails,
} from "./components";
import { HomePage } from "./pages";
import { About } from "./components/about";
import { Spinner } from "./components/general";

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
            element: <HomePage />,
            loader: loadFlash,
          },
          {
            path: ":label/:heading/add-to-wishlist",
            element: <add-to-wishlist />,
            action: wishlistAction,
          },
          {
            path: ":label/:heading/add-to-cart",
            element: <add-to-cart />,
            action: cartAction,
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
            path: "wishlist/:label/:heading/destroy",
            element: <destroy />,
            action: destroyAction,
          },

          {
            path: "account/cart",
            element: <Cart />,
            loader: loadCart,
          },
          {
            path: ":label/:heading/destroy-cart",
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
  return (
    <RouterProvider
      fallbackElement={<Spinner />}
      future={{ v7_startTransition: true }}
      router={router}
    />
  );
}

export default App;
