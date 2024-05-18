import { GeneralHeader } from "./GeneralHeader";
import { ItemCard } from "./ItemCard";

export const ExploreProducts = ({ cards }) => {
  return (
    <div className="flex flex-col gap-[60px]">
      <GeneralHeader
        label="Our Products"
        heading="Explore Our Products"
        toggle
      />

      <div className="grid grid-cols-1 gap-y-[60px] self-center md:grid-cols-4 md:grid-rows-2 md:gap-x-7 md:self-start md:max-lg:grid-cols-2 ">
        {cards.map((card) => (
          <ItemCard
            key={card.productId}
            cardImage={card.mainImage}
            heading={card.heading}
            currentPrice={card.currentPrice}
            rating={card.rating}
            newItem={card.new ? true : false}
            colors={card.colors ? card.colors : ""}
            ratingValue={card.ratingValue}
          />
        ))}
      </div>
      <button className="mt-5 self-center rounded bg-[#DB4444] px-12 py-4 text-base font-semibold text-white">
        View All Products
      </button>
    </div>
  );
};
