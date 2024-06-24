import { useLoaderData } from "react-router-dom";
import { getCardItems, getProduct, getUserItems } from "../../firebase.config";
import { Ad } from "./Ad";
import { BestSelling } from "./BestSelling";
import { Category } from "./Category";
import { ExploreProducts } from "./ExploreProducts";
import { FlashSales } from "./FlashSales";
import { NewArrival } from "./NewArrival";
import { OpenningSection } from "./OpenningSection";
import { ItemCard } from "../general";
import arrowUp from "../../assets/icons/icons_arrow-up.svg";
import getUserUID from "../general/userAuth";
import { useContext, useEffect } from "react";
import appContext from "../general/context/app-context";

export async function load({ request }) {
  const user = await getUserUID();
  const productsItems = user
    ? await getUserItems(user, "wishlist")
    : { productItems: [] };
  const cartProductsItems = user
    ? await getUserItems(user, "cart")
    : { productItems: [] };

  const flashSales = await getCardItems("home", "flashSales");
  const bestSelling = await getCardItems("home", "bestSelling");
  const exploreProducts = await getCardItems("home", "exploreProducts");
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const searchProducts = q ? await getProduct(q) : [];

  return {
    flashSales,
    bestSelling,
    exploreProducts,
    searchProducts,
    productsItems,
    cartProductsItems,
    q,
  };
}

export const Home = () => {
  const {
    flashSales,
    bestSelling,
    exploreProducts,
    searchProducts,
    productsItems,
    cartProductsItems,
    q,
  } = useLoaderData();
  const { productItems: wishlistItems } = productsItems;
  const { productItems: cartItems } = cartProductsItems;

  const { setWishlistItemsCounter, setCartItemsCounter } =
    useContext(appContext);

  useEffect(() => {
    setWishlistItemsCounter(wishlistItems.length);
    setCartItemsCounter(cartItems.length);
  }, [wishlistItems.length, cartItems.length]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return !q ? (
    <div className="mb-8  flex w-[100%] flex-col gap-[140px]">
      <OpenningSection />
      <FlashSales
        cards={flashSales.cards}
        wishlistItems={wishlistItems}
        cartItems={cartItems}
      />
      <Category />
      <BestSelling
        cards={bestSelling.cards}
        wishlistItems={wishlistItems}
        cartItems={cartItems}
      />
      <Ad />
      <ExploreProducts
        cards={exploreProducts.cards}
        wishlistItems={wishlistItems}
        cartItems={cartItems}
      />
      <NewArrival />
      <button
        onClick={scrollToTop}
        className=" mr-[-23px] size-[46px] self-center rounded-full bg-[#F5F5F5] p-3 md:mt-[-78px] md:self-end"
      >
        <img src={arrowUp} alt="go to the top of the bag " />
      </button>
    </div>
  ) : searchProducts.length ? (
    <div className="mt-10 flex min-h-[100vh] flex-col items-center gap-5 md:mt-0 md:flex-row md:flex-wrap">
      {searchProducts.map((product) => (
        <ItemCard key={product.Id} {...product} cardImage={product.mainImage} />
      ))}
    </div>
  ) : (
    <div className="flex min-h-[100vh] items-center justify-center gap-5 font-Inter text-2xl">
      Sorry, Nothing found...
    </div>
  );
};
