import { useLoaderData } from "react-router-dom";
import { getCardItems } from "../firebase.config";
import { Ad } from "./Ad";
import { BestSelling } from "./BestSelling";
import { Category } from "./Category";
import { ExploreProducts } from "./ExploreProducts";
import { FlashSales } from "./FlashSales";
import { NewArrival } from "./NewArrival";
import { OpenningSection } from "./OpenningSection";

export async function load() {
  const flashSales = await getCardItems("home", "flashSales");
  const bestSelling = await getCardItems("home", "bestSelling");
  const exploreProducts = await getCardItems("home", "exploreProducts");

  return { flashSales, bestSelling, exploreProducts };
}

export const Home = () => {
  const { flashSales, bestSelling, exploreProducts } = useLoaderData();

  return (
    <div className="flex w-[100%] flex-col gap-[140px] ">
      <OpenningSection />
      <FlashSales cards={flashSales.cards} />
      <Category />
      <BestSelling cards={bestSelling.cards} />
      <Ad />
      <ExploreProducts cards={exploreProducts.cards} />
      <NewArrival />
    </div>
  );
};
