import { ItemCard } from "./ItemCard";
import { auth, getProduct, getUserWishlistItems } from "../firebase.config";
import { Form, useLoaderData } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect } from "react";
import appContext from "./general/context/app-context";
import { useTranslation } from "react-i18next";

export async function load() {
  console.log(auth);
  let user = auth.currentUser.uid;
  console.log(user);
  const productsItems = await getUserWishlistItems(user);
  const laptopProduct = await getProduct("ASUS FHD Gaming Laptop");
  const lcdProduct = await getProduct("IPS LCD Gaming Monitor");
  const gamepadProduct = await getProduct("HAVIT HV-G92 Gamepad");
  const keyboardProduct = await getProduct("AK-900 Wired Keyboard");

  return {
    productsItems,
    laptopProduct,
    lcdProduct,
    gamepadProduct,
    keyboardProduct,
  };
}

export const Wishlist = () => {
  const { t } = useTranslation();
  const { setWishlistItemsCounter } = useContext(appContext);
  const {
    productsItems,
    laptopProduct,
    lcdProduct,
    gamepadProduct,
    keyboardProduct,
  } = useLoaderData();
  const { productItems: products } = productsItems;

  useEffect(() => {
    setWishlistItemsCounter(products.length);
  }, []);
  return (
    <div className="mt-[80px] flex w-full flex-col gap-[80px]">
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center md:gap-0">
          <label className=" text-xl/[26px]">
            {t("description.wishlist.Wishlist")} ({products.length})
          </label>
          <Form
            action={`Move All To Bag/destroy`}
            method="post"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to move them to cart.")) {
                event.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              className="rounded border border-gray-400 px-12 py-4"
            >
              {t("description.wishlist.MoveAllToBag")}
            </button>
          </Form>
        </div>
        <div className="flex flex-col flex-wrap gap-4 md:flex-row md:max-lg:flex-wrap">
          {products.map((product) => {
            product.id = uuidv4();
            const { cardImage, heading, currentPrice, oldPrice, productId } =
              product;
            return (
              <div key={productId}>
                <ItemCard
                  cardImage={cardImage}
                  heading={heading}
                  currentPrice={currentPrice}
                  oldPrice={oldPrice}
                  deleteItem
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-[60px] ">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-0">
          <div className="flex items-center gap-4">
            <span className=" inline-block h-10 w-5 rounded bg-[#DB4444]"></span>
            <label className=" text-xl/[26px]">
              {" "}
              {t("description.wishlist.JustForYou")}
            </label>
          </div>
          <button className="rounded border border-gray-400 px-12 py-4">
            {t("description.wishlist.SeeAll")}
          </button>
        </div>
        <div className="flex w-full flex-col items-center justify-between md:flex-row md:flex-wrap">
          <ItemCard
            cardImage={laptopProduct[0].mainImage}
            heading={laptopProduct[0].heading}
            currentPrice={laptopProduct[0].currentPrice}
            oldPrice={1160}
            discount={laptopProduct[0].discount}
            rating={laptopProduct[0].rating}
            viewItem
            ratingValue={laptopProduct[0].ratingValue}
          />
          <ItemCard
            cardImage={lcdProduct[0].mainImage}
            heading={lcdProduct[0].heading}
            currentPrice={lcdProduct[0].currentPrice}
            rating={lcdProduct[0].rating}
            viewItem
            ratingValue={lcdProduct[0].ratingValue}
          />
          <ItemCard
            cardImage={gamepadProduct[0].mainImage}
            heading={gamepadProduct[0].heading}
            currentPrice={gamepadProduct[0].currentPrice}
            rating={gamepadProduct[0].rating}
            newItem
            viewItem
            ratingValue={gamepadProduct[0].ratingValue}
          />
          <ItemCard
            cardImage={keyboardProduct[0].mainImage}
            heading={keyboardProduct[0].heading}
            currentPrice={keyboardProduct[0].currentPrice}
            rating={keyboardProduct[0].rating}
            viewItem
            ratingValue={keyboardProduct[0].ratingValue}
          />
        </div>
      </div>
    </div>
  );
};
