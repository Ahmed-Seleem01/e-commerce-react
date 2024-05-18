import { useState } from "react";
import appContext from "./app-context";

const MyProvider = ({ children }) => {
  const [cartItemsCounter, setCartItemsCounter] = useState(0);

  const [wishlistItemsCounter, setWishlistItemsCounter] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  return (
    <appContext.Provider
      value={{
        cartItemsCounter,
        setCartItemsCounter,
        wishlistItemsCounter,
        setWishlistItemsCounter,
        subTotal,
        setSubTotal,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default MyProvider;
