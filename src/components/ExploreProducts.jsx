import { GeneralHeader } from "./GeneralHeader";
import { ItemCard } from "./ItemCard";

// import book from "../assets/images/items/cat-book.png";
// import camera from "../assets/images/items/camera.png";
// import labtop from "../assets/images/items/ideapad-gaming.png";
// import cusmotic from "../assets/images/items/cat-book.png";
// import car from "../assets/images/items/car.png";
// import sneakers from "../assets/images/items/Copa_Sense.png";
// import gamepad from "../assets/images/items/GP11_PRD3.png";
// import jacket from "../assets/images/items/satin-jacket.png";

export const ExploreProducts = ({ cards }) => {
  return (
    <div className="flex flex-col gap-[60px]">
      <GeneralHeader
        label="Our Products"
        heading="Explore Our Products"
        toggle
      />

      <div className="grid grid-cols-4 grid-rows-2 gap-x-7 gap-y-[60px] ">
        {cards.map((card) => (
          <ItemCard
            key={card.productId}
            cardImage={card.mainImage}
            heading={card.heading}
            currentPrice={card.currentPrice}
            rating={card.rating}
            newItem={card.new ? true : false}
            colors={card.cardColors ? card.cardColors : ""}
          />
        ))}
      </div>
      <button className="mt-5 self-center rounded bg-[#DB4444] px-12 py-4 text-base font-semibold text-white">
        View All Products
      </button>
    </div>
  );
};
