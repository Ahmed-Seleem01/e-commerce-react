import { GeneralHeader } from "./GeneralHeader";
import { ItemCard } from "./ItemCard";

export const BestSelling = ({ cards }) => {
  return (
    <div className="flex flex-col gap-10 md:w-[105%] md:pr-10">
      <GeneralHeader
        label="This Month"
        heading="Best Selling Products"
        viewButton
      />
      <div className=" flex flex-col gap-10 self-center md:flex-row md:gap-[30px] md:self-start md:max-lg:flex-wrap">
        {cards.map((card) => (
          <ItemCard
            key={card.productId}
            cardImage={card.mainImage}
            heading={card.heading}
            currentPrice={card.currentPrice}
            oldPrice={card.oldPrice}
            rating={card.rating}
            ratingValue={card.ratingValue}
          />
        ))}
      </div>
    </div>
  );
};
