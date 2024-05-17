import { Link, useLoaderData } from "react-router-dom";
// import lcd from "../assets/images/items/lcd.png";
// import gamepad from "../assets/images/items/gamepad.png";
import { auth, getUserCartItems, removeFromUserDB } from "../firebase.config";
import { ItemsCounter } from "./ItemsCounter";
import { useContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PathDisplay } from "./PathDisplay";
import appContext from "./general/context/app-context";

const SHIPPING = 0;

export async function load() {
  const user = auth.currentUser;
  const productsItems = await getUserCartItems(user.uid);
  return { productsItems };
}

export const Cart = () => {
  // const [subTotal, setSubTotal] = useState(0);
  const { value, setValue } = useContext(appContext);

  const subTotalRef = useRef(0);

  const { productsItems } = useLoaderData();
  const { productItems: products } = productsItems;
  console.log(products);
  const subTotal = products.reduce((acc, cur) => acc + cur.currentPrice, 0);

  useEffect(() => {
    setValue(products.length);
  }, []);
  const updateCart = () => {
    removeFromUserDB(auth.currentUser.uid, "cart");
    // setSubTotal(12);
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
          className="grid w-full grid-cols-4 items-center justify-items-center bg-white px-2 py-6 drop-shadow-sm filter md:px-10 "
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
              className="grid w-full grid-cols-4 items-center justify-items-center bg-white px-2 py-6 drop-shadow-sm filter md:px-10 "
            >
              <li className="flex flex-col items-center gap-5 justify-self-start  text-sm md:flex-row md:text-base">
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
                // setSubTotal={setSubTotal}
              />
            </ul>
          );
        })}

        <div className="mt-[-16px] flex flex-col justify-between gap-5 md:flex-row md:gap-0">
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

      <div className="mt-[80px] flex flex-col items-start justify-between gap-10 md:flex-row md:gap-0 md:max-lg:flex-wrap">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <input
            className="max-w-[300px] rounded border px-6 py-4"
            type="text"
            placeholder="Coupon Code"
          />
          <button className=" primary-button self-start md:self-center">
            Apply coupon
          </button>
        </div>
        <div className="w-full rounded border-[1.5px] border-black px-6 py-8 md:w-[470px]">
          <h5 className=" text-xl font-medium">Cart Total</h5>
          <div className="flex flex-col py-6">
            <ul className="flex flex-col  gap-4 ">
              <li className="flex justify-between border-b pb-4">
                <span>Subtotal</span> ${subTotal}
              </li>
              <li className="flex justify-between border-b pb-4">
                <span>Shipping</span> {SHIPPING === 0 ? "Free" : SHIPPING}
              </li>
              <li className="flex justify-between pb-4">
                <span>Total</span> ${subTotal + SHIPPING}
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
