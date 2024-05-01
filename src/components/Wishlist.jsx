import { GeneralHeader } from "./GeneralHeader";
import { ItemCard } from "./ItemCard";
import bag from "../assets/images/items/bag.png";
import speakers from "../assets/images/items/speaker.png";
import gamepad from "../assets/images/items/GP11_PRD3.png";
import jacket from "../assets/images/items/satin-jacket.png";
import laptop from "../assets/images/items/ideapad-gaming.png";
import lcd from "../assets/images/items/lcd.png";
import gampadRed from "../assets/images/items/gamepad.png";
import keyboard from "../assets/images/items/wired-keyboard.png";

export const Wishlist = (props) => {
  const { listLength } = props;
  return (
    <div className="my-[80px] flex w-full flex-col gap-[80px]">
      <div className="flex flex-col gap-[60px] ">
        <div className="flex items-center justify-between">
          <label className=" text-xl/[26px]">Wishlist ({listLength})</label>
          <button className="rounded border border-gray-400 px-12 py-4">
            Move All To Bag
          </button>
        </div>
        <div className="flex justify-between">
          <ItemCard
            cardImage={bag}
            heading="Gucci duffle bag"
            currentPrice="960"
            oldPrice="1160"
            deleteItem
          />
          <ItemCard
            cardImage={speakers}
            heading="RGB liquid CPU Cooler"
            currentPrice="160"
            oldPrice="170"
            deleteItem
          />
          <ItemCard
            cardImage={gamepad}
            heading="Explore Our Products"
            currentPrice="660"
            deleteItem
          />
          <ItemCard
            cardImage={jacket}
            heading="Explore Our Products"
            currentPrice="660"
            deleteItem
          />
        </div>
      </div>
      <div className="flex flex-col gap-[60px] ">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <span className=" inline-block h-10 w-5 rounded bg-[#DB4444]"></span>
            <label className=" text-xl/[26px]">Just For You</label>
          </div>
          <button className="rounded border border-gray-400 px-12 py-4">
            See All
          </button>
        </div>
        <div className="flex justify-between">
          <ItemCard
            cardImage={laptop}
            heading="ASUS FHD Gaming Laptop"
            currentPrice="960"
            oldPrice="1160"
            discount="35"
            rating="65"
            viewItem
          />
          <ItemCard
            cardImage={lcd}
            heading="IPS LCD Gaming Monitor"
            currentPrice="1160"
            rating="65"
            viewItem
          />
          <ItemCard
            cardImage={gampadRed}
            heading="HAVIT HV-G92 Gamepad"
            currentPrice="560"
            rating="65"
            newItem
            viewItem
          />
          <ItemCard
            cardImage={keyboard}
            heading="AK-900 Wired Keyboard"
            currentPrice="200"
            rating="65"
            viewItem
          />
        </div>
      </div>
    </div>
  );
};
