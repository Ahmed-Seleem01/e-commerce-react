import { Form, Link, useLoaderData, useNavigate } from "react-router-dom";
import cancelIcon from "../assets/icons/icon-cancel-small.svg";

import { auth, getUserCartItems } from "../firebase.config";
import { ItemsCounter } from "./ItemsCounter";
import { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { PathDisplay } from "./PathDisplay";
import appContext from "./general/context/app-context";
import { useTranslation } from "react-i18next";

const SHIPPING = 0;

export async function load() {
  const user = auth.currentUser;
  const productsItems = await getUserCartItems(user.uid);
  return { productsItems };
}

export const Cart = () => {
  const { setCartItemsCounter, subTotal, setSubTotal } = useContext(appContext);
  const navigate = useNavigate("/");
  const { t } = useTranslation();

  const { productsItems } = useLoaderData();
  const { productItems: products } = productsItems;
  console.log(products);
  useEffect(() => {
    setCartItemsCounter(products.length);
    setSubTotal(products.reduce((acc, cur) => acc + cur.currentPrice, 0));
  }, []);

  const updateCart = () => {
    // removeFromUserDB(auth.currentUser.uid, "cart");
  };

  // console.log(subTotal.current);
  return (
    <div className="w-full">
      <PathDisplay path={window.location.pathname} />

      <div className="flex flex-col gap-10">
        <ul
          style={{ boxShadow: "0px 0px 10px 1px #eee" }}
          className="grid w-full grid-cols-4 items-center justify-items-center bg-white px-2 py-6 drop-shadow-sm filter md:px-10 "
        >
          <li className=" justify-self-start">
            {t("description.cart.Product")}
          </li>
          <li>{t("description.cart.Price")}</li>
          <li>{t("description.cart.Quantity")}</li>
          <li className="justify-self-end">{t("description.cart.Subtotal")}</li>
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
              <li className="relative flex flex-col items-center gap-5 justify-self-start  text-sm md:flex-row md:text-base">
                <Form
                  action={`/${heading}/destroy-cart`}
                  method="post"
                  onSubmit={(event) => {
                    if (
                      !confirm("Please confirm you want to delete this record.")
                    ) {
                      event.preventDefault();
                    } else {
                      setCartItemsCounter((pre) => (pre -= 1));
                    }
                  }}
                >
                  <button
                    type="submit"
                    className="absolute left-0 top-0 -translate-x-3 "
                  >
                    <img src={cancelIcon}></img>
                  </button>
                </Form>

                <img
                  className="size-[54px] object-contain"
                  src={image}
                  alt={heading}
                />
                {heading}
              </li>
              <li className="justify-self-center">${price}</li>
              <ItemsCounter price={price} />
            </ul>
          );
        })}

        <div className="mt-[-16px] flex flex-col justify-between gap-5 md:flex-row md:gap-0">
          <button className="rounded border px-12 py-4  font-medium">
            <Link to=".." path="relative">
              {t("description.cart.ReturnToShop")}
            </Link>
          </button>
          <button
            onClick={updateCart}
            className="rounded border px-12 py-4  font-medium"
          >
            {t("description.cart.UpdateCart")}
          </button>
        </div>
      </div>

      <div className="mt-[80px] flex flex-col items-start justify-between gap-10 md:flex-row md:gap-0 md:max-lg:flex-wrap">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <input
            className="max-w-[300px] rounded border px-6 py-4"
            type="text"
            placeholder={t("description.cart.CouponCode")}
          />
          <button className=" primary-button self-start md:self-center">
            {t("description.cart.ApplyCoupon")}
          </button>
        </div>
        <div className="w-full rounded border-[1.5px] border-black px-6 py-8 md:w-[470px]">
          <h5 className=" text-xl font-medium">
            {" "}
            {t("description.cart.CartTotal")}
          </h5>
          <div className="flex flex-col py-6">
            <ul className="flex flex-col  gap-4 ">
              <li className="flex justify-between border-b pb-4">
                <span> {t("description.cart.Subtotal")}</span> ${subTotal}
              </li>
              <li className="flex justify-between border-b pb-4">
                <span> {t("description.cart.Shipping")}</span>{" "}
                {SHIPPING === 0 ? t("description.cart.Free") : SHIPPING}
              </li>
              <li className="flex justify-between pb-4">
                <span> {t("description.cart.Total")}</span> $
                {subTotal + SHIPPING}
              </li>
            </ul>
            <button className="primary-button self-center">
              <Link to="checkout">
                {" "}
                {t("description.cart.ProceedToCheckout")}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
