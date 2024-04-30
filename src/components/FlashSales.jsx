import { GeneralHeader } from "./GeneralHeader";
import { ItemCard } from "./ItemCard";
import gamepad from "../assets/images/items/gamepad.png";
import keyboard from "../assets/images/items/wired-keyboard.png";
import lcd from "../assets/images/items/lcd.png";
import chair from "../assets/images/items/chair.png";

export const FlashSales = () => {
  return (
    <div className="flex w-[105%] flex-col gap-10 pr-10">
      <GeneralHeader label="Today’s" heading="Flash Sales" toggle dateCounter />
      <div className="scrol flex w-[100vw] gap-[30px] overflow-x-scroll pr-40">
        <ItemCard
          cardImage={gamepad}
          heading="HAVIT HV-G92 Gamepad"
          currentPrice="120"
          oldPrice="160"
          discount="40"
          rating="88"
        />
        <ItemCard
          cardImage={keyboard}
          heading="AK-900 Wired Keyboard"
          currentPrice="960"
          oldPrice="1160"
          discount="35"
          rating="75"
        />
        <ItemCard
          cardImage={lcd}
          heading="IPS LCD Gaming Monitor"
          currentPrice="370"
          oldPrice="400"
          discount="30"
          rating="99"
        />
        <ItemCard
          cardImage={chair}
          heading="S-Series Comfort Chair"
          currentPrice="375"
          oldPrice="400"
          discount="25"
          rating="99"
        />
        <ItemCard
          cardImage={chair}
          heading="S-Series Comfort Chair"
          currentPrice="375"
          oldPrice="400"
          discount="25"
          rating="99"
        />
      </div>
      <button className="mt-5 self-center rounded bg-[#DB4444] px-12 py-4 text-base font-semibold text-white">
        View All Products
      </button>
    </div>
  );
};
