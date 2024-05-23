import { ItemCard } from "./ItemCard";
import { GeneralHeader } from "./GeneralHeader";
import heart2 from "../assets/icons/heart2.svg";

import carBlack from "../assets/icons/icon-delivery-car-black.svg";
import returnIcon from "../assets/icons/Icon-return.svg";
import { useLoaderData } from "react-router-dom";
import { addToUserDB, auth, getProduct } from "../firebase.config";
import { useState } from "react";
import StarRating from "./StarRating";
import { PathDisplay } from "./PathDisplay";
import { useTranslation } from "react-i18next";

export async function load({ params }) {
  const product = await getProduct(params.productName);
  const coolerProduct = await getProduct("RGB liquid CPU Cooler");
  const lcdProduct = await getProduct("IPS LCD Gaming Monitor");
  const gamepadProduct = await getProduct("HAVIT HV-G92 Gamepad");
  const keyboardProduct = await getProduct("AK-900 Wired Keyboard");

  return {
    product,
    coolerProduct,
    lcdProduct,
    gamepadProduct,
    keyboardProduct,
  };
}

export const ProductDetails = () => {
  const { t } = useTranslation();
  const {
    product,
    coolerProduct,
    lcdProduct,
    gamepadProduct,
    keyboardProduct,
  } = useLoaderData();
  console.log(product);
  const {
    subImages,
    mainImage,
    heading,
    colors,
    sizes,
    currentPrice,
    description,
    rating,
    ratingValue,
    oldPrice,
  } = product[0];

  const [count, setCount] = useState(1);

  const addToCartHandler = () => {
    addToUserDB(auth.currentUser.uid, "cart", {
      cardImage: mainImage,
      heading,
      currentPrice,
    });
  };

  const addToWishlistHandler = () => {
    addToUserDB(auth.currentUser.uid, "wishlist", {
      cardImage: mainImage,
      heading,
      currentPrice,
      oldPrice,
    });
  };

  const increment = () => {
    setCount((pre) => Number(pre) + 1);
  };
  const decrement = () => {
    if (count > 1) setCount((pre) => pre - 1);
  };
  return (
    <div>
      <PathDisplay path={window.location.pathname} />
      <div className="flex w-full  flex-col justify-between gap-[140px]">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:flex-wrap md:gap-0">
          <div className="flex flex-col items-center gap-[30px] md:flex-row md:flex-wrap">
            <span className="flex flex-col gap-4">
              {subImages.map((subImage, i) => (
                <img
                  key={i}
                  className="h-[138px] w-[170px] rounded bg-[#F5F5F5] px-6 py-3"
                  src={subImage}
                  alt="side image"
                />
              ))}
            </span>
            <span className="order-[-1] flex h-[300px] w-full  items-center justify-center rounded bg-[rgb(245,245,245)] md:order-1 md:h-[600px] md:w-[500px]">
              <img className="w-[80%]" src={mainImage} alt="main image" />
            </span>
          </div>

          <div className="flex flex-col justify-between  ">
            <div className="mb-10 flex flex-col gap-6 border-b border-gray-400 pb-6 md:mb-0">
              <div className="flex flex-col gap-4">
                <h4 className="font-Inter text-2xl/6 font-semibold">
                  {heading}
                </h4>

                <div className="flex  items-center gap-3">
                  <div className=" flex items-center gap-4 text-gray-400">
                    <span className="flex items-center gap-2">
                      <StarRating
                        totalStars={5}
                        ratingValue={ratingValue ? ratingValue : 0}
                      />
                      <span>
                        ({rating} {t("description.ProductDescription.Reviews")})
                      </span>
                    </span>

                    <span>|</span>
                    <span className="text-sm text-[#00FF66]">
                      {t("description.ProductDescription.InStock")}
                    </span>
                  </div>
                </div>

                <div className=" flex items-center gap-3 font-Inter text-2xl/6">
                  <span>${currentPrice}</span>
                </div>
              </div>

              <p className="max-w-[373px] text-sm font-normal">{description}</p>
            </div>

            <div className=" flex flex-col gap-6 font-Inter text-xl/5">
              <div className="flex gap-6">
                <span> {t("description.ProductDescription.Colors")}:</span>
                <span className="flex gap-2">
                  {colors.map((_, i) => (
                    <span
                      key={i}
                      className="size-5 rounded-full hover:border-2 hover:border-white hover:outline"
                      style={{ backgroundColor: colors[i] }}
                    ></span>
                  ))}
                </span>
              </div>

              <div className="flex items-center gap-6">
                <span> {t("description.ProductDescription.Size")}:</span>
                <span className="flex gap-4 text-sm  font-medium">
                  {sizes.map((size, i) => (
                    <span
                      key={i}
                      className="flex size-8 items-center justify-center rounded border"
                    >
                      {size}
                    </span>
                  ))}
                </span>
              </div>

              <div className="flex h-11 items-center gap-4">
                <span className="flex h-[100%] w-[160px] items-center justify-between rounded border  border-black">
                  <button
                    onClick={decrement}
                    className="flex h-full w-10 items-center justify-center border-r border-r-black"
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button
                    onClick={increment}
                    className="flex h-full w-10 items-center justify-center border-l border-l-black"
                  >
                    +
                  </button>
                </span>

                <button
                  onClick={addToCartHandler}
                  className="primary-button h-[100%]  py-0 active:invert"
                >
                  {t("description.ProductDescription.BuyNow")}
                </button>
                <button
                  onClick={addToWishlistHandler}
                  className="size-10 rounded border bg-white p-2 active:bg-[#b44]"
                >
                  <img src={heart2} alt="love item" />
                </button>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-4 rounded border py-6 md:mt-5">
              <div className="flex gap-4 pl-4">
                <img src={carBlack} alt="" />
                <div>
                  <h5 className="mb-2 text-base  font-medium">
                    {t("description.ProductDescription.FreeDelivery")}
                  </h5>
                  <p className="text-xs/[18px] font-medium">
                    <a className=" underline" href="#">
                      {t("description.ProductDescription.PostalCode")}
                    </a>
                  </p>
                </div>
              </div>

              <span className="h-[1px] w-full bg-gray-200"></span>

              <div className="flex gap-4 pl-4">
                <img src={returnIcon} alt="" />
                <div>
                  <h5 className="mb-2 text-base  font-medium">
                    {t("description.ProductDescription.ReturnDelivery")}
                  </h5>
                  <p className="text-xs/[18px] font-medium">
                    {t("description.ProductDescription.FreeDeliveryReturns")}.
                    <a className=" underline" href="#">
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:pr-10">
          <GeneralHeader
            label={t("description.ProductDescription.RelatedItems")}
          />
          <div className="flex flex-col items-center self-center border md:flex-row md:flex-wrap md:justify-between md:self-start">
            <ItemCard
              cardImage={gamepadProduct[0].mainImage}
              heading="HAVIT HV-G92 Gamepad"
              currentPrice="120"
              oldPrice="160"
              discount="40"
              rating="88"
              ratingValue={gamepadProduct[0].ratingValue}
            />
            <ItemCard
              cardImage={keyboardProduct[0].mainImage}
              heading="AK-900 Wired Keyboard"
              currentPrice="960"
              oldPrice="1160"
              discount="35"
              rating="75"
              ratingValue={5}
            />
            <ItemCard
              cardImage={lcdProduct[0].mainImage}
              heading="IPS LCD Gaming Monitor"
              currentPrice="370"
              oldPrice="400"
              discount="30"
              rating="99"
              ratingValue={5}
            />
            <ItemCard
              cardImage={coolerProduct[0].mainImage}
              heading="RGB liquid CPU Cooler"
              currentPrice="160"
              oldPrice="170"
              rating="65"
              ratingValue={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
