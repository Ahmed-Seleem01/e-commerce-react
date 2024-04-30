import { GeneralHeader } from "./GeneralHeader";
import { ItemCard } from "./ItemCard";

import book from "../assets/images/items/cat-book.png";
import camera from "../assets/images/items/camera.png";
import labtop from "../assets/images/items/ideapad-gaming.png";
import cusmotic from "../assets/images/items/cat-book.png";
import car from "../assets/images/items/car.png";
import sneakers from "../assets/images/items/Copa_Sense.png";
import gamepad from "../assets/images/items/GP11_PRD3.png";
import jacket from "../assets/images/items/satin-jacket.png";

export const ExploreProducts = () => {
  return (
    <div className="flex flex-col gap-[60px]">
      <GeneralHeader
        label="Our Products"
        heading="Explore Our Products"
        toggle
      />

      <div className="grid grid-cols-4 grid-rows-2 gap-x-7 gap-y-[60px] ">
        <ItemCard
          cardImage={book}
          heading="Breed Dry Dog Food"
          currentPrice="100"
          rating="35"
        />
        <ItemCard
          cardImage={camera}
          heading="CANON EOS DSLR Camera"
          currentPrice="360"
          rating="95"
        />
        <ItemCard
          cardImage={labtop}
          heading="ASUS FHD Gaming Laptop"
          currentPrice="700"
          rating="325"
        />
        <ItemCard
          cardImage={cusmotic}
          heading="Curology Product Set"
          currentPrice="500"
          rating="145"
        />
        <ItemCard
          cardImage={car}
          heading="Kids Electric Car"
          currentPrice="960"
          rating="65"
          newItem
          colors
        />
        <ItemCard
          cardImage={sneakers}
          heading="Jr. Zoom Soccer Cleats"
          currentPrice="1160"
          rating="35"
          colors
        />
        <ItemCard
          cardImage={gamepad}
          heading="Explore Our Products"
          currentPrice="660"
          rating="55"
          newItem
          colors
        />
        <ItemCard
          cardImage={jacket}
          heading="Explore Our Products"
          currentPrice="660"
          rating="55"
          colors
        />
      </div>
      <button className="mt-5 self-center rounded bg-[#DB4444] px-12 py-4 text-base font-semibold text-white">
        View All Products
      </button>
    </div>
  );
};
