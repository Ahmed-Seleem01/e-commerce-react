import { GeneralHeader } from "./GeneralHeader";
import { ItemCard } from "./ItemCard";

export const BestSelling = ({ cards }) => {
  return (
    <div className="flex w-[100%] flex-col gap-[140px] ">
      <div className="flex w-[105%] flex-col gap-10 pr-10">
        <GeneralHeader
          label="This Month"
          heading="Best Selling Products"
          viewButton
        />
        <div className=" flex  gap-[30px]">
          {cards.map((card) => (
            <ItemCard
              key={card.productId}
              cardImage={card.mainImage}
              heading={card.heading}
              currentPrice={card.currentPrice}
              oldPrice={card.oldPrice}
              rating={card.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
