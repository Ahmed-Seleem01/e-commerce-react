import { GeneralHeader } from "./GeneralHeader";
import { ItemCard } from "./ItemCard";
// import gamepad from "../assets/images/items/gamepad.png";
// import keyboard from "../assets/images/items/wired-keyboard.png";
// import lcd from "../assets/images/items/lcd.png";
// import chair from "../assets/images/items/chair.png";

export const FlashSales = (props) => {
  const { cards } = props;
  console.log(cards);
  return (
    <div className="flex flex-col gap-10 md:w-[105%]  md:pr-10">
      <GeneralHeader label="Today’s" heading="Flash Sales" toggle dateCounter />
      <div className="flex flex-col gap-[30px] self-center   md:flex-row md:max-lg:flex-wrap  lg:w-[110%] lg:self-start lg:overflow-x-scroll lg:pr-40">
        {cards.map((card) => (
          <ItemCard
            key={card.productId}
            cardImage={card.mainImage}
            heading={card.heading}
            currentPrice={card.currentPrice}
            oldPrice={card.oldPrice}
            discount={card.discount}
            rating={card.rating}
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
