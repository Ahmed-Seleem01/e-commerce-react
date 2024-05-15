import { Link, useLoaderData } from "react-router-dom";
// import lcd from "../assets/images/items/lcd.png";
// import gamepad from "../assets/images/items/gamepad.png";
import { auth, getUserCartItems, removeFromUserDB } from "../firebase.config";
import { ItemsCounter } from "./ItemsCounter";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PathDisplay } from "./PathDisplay";

export async function load() {
  const user = auth.currentUser;
  const productsItems = await getUserCartItems(user.uid);
  return { productsItems };
}

export const Cart = () => {
  const [subTotal, setSubTotal] = useState(0);
  console.log(subTotal);
  const shipping = 1;
  const subTotalRef = useRef(0);

  const { productsItems } = useLoaderData();
  const { productItems: products } = productsItems;
  console.log(products);

  const updateCart = () => {
    removeFromUserDB(auth.currentUser.uid, "cart");
    setSubTotal(12);
  };

  useEffect(() => {
    // setSubTotal(subTotalRef.current);
    subTotalRef.current = 0;
  }, []);

  // console.log(subTotal.current);
  return (
    <div className="w-full">
      <PathDisplay path={window.location.pathname} />

      <div className="flex flex-col gap-10">
        <ul
          style={{ boxShadow: "0px 0px 10px 1px #eee" }}
          className="grid w-full grid-cols-4 items-center justify-items-center bg-white px-10 py-6 drop-shadow-sm filter "
        >
          <li className=" justify-self-start">Product</li>
          <li>Price</li>
          <li>Quantity</li>
          <li className="justify-self-end">Subtotal</li>
        </ul>
        {products.map((product) => {
          product.productId = uuidv4();
          const {
            cardImage: image,
            currentPrice: price,
            heading,
            productId,
          } = product;

          return (
            <ul
              key={productId}
              style={{ boxShadow: "0px 0px 10px 1px #eee" }}
              className="grid w-full grid-cols-4 items-center justify-items-center bg-white px-10 py-6 drop-shadow-sm filter "
            >
              <li className="flex items-center gap-5  justify-self-start">
                <img
                  className="size-[54px] object-contain"
                  src={image}
                  alt={heading}
                />
                {heading}
              </li>
              <li className="justify-self-center">${price}</li>
              <ItemsCounter
                price={price}
                subTotalRef={subTotalRef}
                setSubTotal={setSubTotal}
              />
            </ul>
          );
        })}

        <div className="mt-[-16px] flex justify-between">
          <button className="rounded border px-12 py-4  font-medium">
            <Link to=".." path="relative">
              Return To Shop
            </Link>
          </button>
          <button
            onClick={updateCart}
            className="rounded border px-12 py-4  font-medium"
          >
            Update Cart
          </button>
        </div>
      </div>

      <div className="mt-[80px] flex items-start justify-between">
        <div className="flex items-center gap-4">
          <input
            className="max-w-[300px] rounded border px-6 py-4"
            type="text"
            placeholder="Coupon Code"
          />
          <button className=" primary-button">Apply coupon</button>
        </div>
        <div className="w-[470px] rounded border-[1.5px] border-black px-6 py-8">
          <h5 className=" text-xl font-medium">Cart Total</h5>
          <div className="flex flex-col py-6">
            <ul className="flex flex-col  gap-4 ">
              <li className="flex justify-between border-b pb-4">
                <span>Subtotal</span> ${subTotalRef.current}
              </li>
              <li className="flex justify-between border-b pb-4">
                <span>Shipping</span> {shipping === 1 ? "Free" : shipping}
              </li>
              <li className="flex justify-between pb-4">
                <span>Total</span> ${subTotalRef.current * shipping}
              </li>
            </ul>
            <button className="primary-button self-center">
              <Link to="checkout">Process to checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
