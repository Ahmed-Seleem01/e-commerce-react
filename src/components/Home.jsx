import { useLoaderData } from "react-router-dom";
import { getCardItems, getProduct } from "../firebase.config";
import { Ad } from "./Ad";
import { BestSelling } from "./BestSelling";
import { Category } from "./Category";
import { ExploreProducts } from "./ExploreProducts";
import { FlashSales } from "./FlashSales";
import { NewArrival } from "./NewArrival";
import { OpenningSection } from "./OpenningSection";
import { ItemCard } from "./ItemCard";

export async function load({ request }) {
  const flashSales = await getCardItems("home", "flashSales");
  const bestSelling = await getCardItems("home", "bestSelling");
  const exploreProducts = await getCardItems("home", "exploreProducts");
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const searchProducts = await getProduct(q);

  return { flashSales, bestSelling, exploreProducts, searchProducts, q };
}

export const Home = () => {
  const { flashSales, bestSelling, exploreProducts, searchProducts, q } =
    useLoaderData();

  return !q ? (
    <div className="flex w-[100%] flex-col gap-[140px]">
      <OpenningSection />
      <FlashSales cards={flashSales.cards} />
      <Category />
      <BestSelling cards={bestSelling.cards} />
      <Ad />
      <ExploreProducts cards={exploreProducts.cards} />
      <NewArrival />
    </div>
  ) : searchProducts.length ? (
    <div className="flex min-h-[100vh] items-center gap-5">
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
