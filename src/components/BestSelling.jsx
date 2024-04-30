import { GeneralHeader } from "./GeneralHeader";
import { ItemCard } from "./ItemCard";
import jacket from "../assets/images/items/jacket.png";
import bag from "../assets/images/items/bag.png";
import speaker from "../assets/images/items/speaker.png";
import table from "../assets/images/items/table.png";

export const BestSelling = () => {
  return (
    <div className="flex w-[100%] flex-col gap-[140px] ">
      <div className="flex w-[105%] flex-col gap-10 pr-10">
        <GeneralHeader
          label="This Month"
          heading="Best Selling Products"
          viewButton
        />
        <div className=" flex  gap-[30px]">
          <ItemCard
            cardImage={jacket}
            heading="The north coat"
            currentPrice="260"
            oldPrice="360"
            rating="65"
          />
          <ItemCard
            cardImage={bag}
            heading="Gucci duffle bag"
            currentPrice="960"
            oldPrice="1160"
            rating="65"
          />
          <ItemCard
            cardImage={speaker}
            heading="RGB liquid CPU Cooler"
            currentPrice="160"
            oldPrice="170"
            rating="65"
          />
          <ItemCard
            cardImage={table}
            heading="Small BookSelf"
            currentPrice="360"
            rating="65"
          />
        </div>
      </div>
    </div>
  );
};
