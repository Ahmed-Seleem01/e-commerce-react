import sideImg1 from "../assets/images/product/side-image1.png";
import sideImg2 from "../assets/images/product/side-image2.png";
import sideImg3 from "../assets/images/product/side-image3.png";
import sideImg4 from "../assets/images/product/side-image4.png";
import mainImg from "../assets/images/product/main-img.png";
import { ItemCard } from "./ItemCard";

import speakers from "../assets/images/items/speaker.png";
import lcd from "../assets/images/items/lcd.png";
import gampadRed from "../assets/images/items/gamepad.png";
import keyboard from "../assets/images/items/wired-keyboard.png";
import { GeneralHeader } from "./GeneralHeader";
import heart2 from "../assets/icons/heart2.svg";

import carBlack from "../assets/icons/icon-delivery-car-black.svg";
import returnIcon from "../assets/icons/Icon-return.svg";

export const ProductDetails = () => {
  return (
    <div className="mb-[140px] flex w-full  flex-col justify-between gap-[140px]">
      <div className="flex justify-between">
        <div className="flex gap-[30px]">
          <span className="flex flex-col gap-4">
            <img
              className="h-[138px] w-[170px] rounded bg-[#F5F5F5] px-6 py-3"
              src={sideImg1}
              alt="side image"
            />
            <img
              className="h-[138px] w-[170px] rounded bg-[#F5F5F5] px-6 py-3"
              src={sideImg2}
              alt="side image"
            />
            <img
              className="h-[138px] w-[170px] rounded bg-[#F5F5F5] px-6 py-3"
              src={sideImg3}
              alt="side image"
            />
            <img
              className="h-[138px] w-[170px] rounded bg-[#F5F5F5] px-6 py-3"
              src={sideImg4}
              alt="side image"
            />
          </span>
          <span className="flex h-[600px] w-[500px] items-center justify-center rounded bg-[#F5F5F5]">
            <img src={mainImg} alt="main image" />
          </span>
        </div>

        <div className="flex flex-col justify-between  ">
          <div className="flex flex-col gap-6 border-b border-gray-400 pb-6">
            <div className="flex flex-col gap-4">
              <h4 className="font-Inter text-2xl/6 font-semibold">
                Havic HV G-92 Gamepad
              </h4>

              <div className="flex  items-center gap-3">
                <div className=" flex items-center gap-4 text-gray-400">
                  <span className="flex items-center gap-2">
                    <span className="flex gap-1">
                      <span className=" text-xl text-gray-400">&#9733;</span>
                      <span className=" text-xl text-gray-400">&#9733;</span>
                      <span className=" text-xl text-gray-400">&#9733;</span>
                      <span className=" text-xl text-gray-400">&#9733;</span>
                      <span className=" text-xl text-gray-400">&#9733;</span>
                    </span>
                    <span>(150 Reviews)</span>
                  </span>

                  <span>|</span>
                  <span className="text-sm text-[#00FF66]"> In Stock</span>
                </div>
              </div>

              <div className=" flex items-center gap-3 font-Inter text-2xl/6">
                <span>$192.00</span>
              </div>
            </div>

            <p className="max-w-[373px] text-sm font-normal">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>

          <div className=" flex flex-col gap-6 font-Inter text-xl/5">
            <div className="flex gap-6">
              <span>Colors:</span>
              <span className="flex gap-2">
                <span className="size-5 rounded-full bg-red-600 hover:border-2 hover:border-white hover:outline"></span>
                <span className="size-5 rounded-full bg-red-600 hover:border-2 hover:border-white hover:outline"></span>
              </span>
            </div>

            <div className="flex items-center gap-6">
              <span>Size:</span>
              <span className="flex gap-4 text-sm  font-medium">
                <span className="flex size-8 items-center justify-center rounded border">
                  XS
                </span>
                <span className="flex size-8 items-center justify-center rounded border">
                  S
                </span>
                <span className="flex size-8 items-center justify-center rounded border">
                  M
                </span>
                <span className="flex size-8 items-center justify-center rounded border">
                  L
                </span>
                <span className="flex size-8 items-center justify-center rounded border">
                  XL
                </span>
              </span>
            </div>

            <div className="flex h-11 items-center gap-4">
              <span className="flex h-[100%] w-[160px] items-center justify-between rounded border  border-black">
                <button className="flex h-full w-10 items-center justify-center border-r border-r-black">
                  -
                </button>
                <span>2</span>
                <button className="flex h-full w-10 items-center justify-center border-l border-l-black">
                  +
                </button>
              </span>

              <button className="primary-button h-[100%]  py-0">Buy Now</button>
              <button className="size-10 rounded border bg-white p-2">
                <img src={heart2} alt="love item" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded border py-6">
            <div className="flex gap-4 pl-4">
              <img src={carBlack} alt="" />
              <div>
                <h5 className="mb-2 text-base  font-medium">Free Delivery</h5>
                <p className="text-xs/[18px] font-medium">
                  <a className=" underline" href="#">
                    Enter your postal code for Delivery Availability
                  </a>
                </p>
              </div>
            </div>

            <span className="h-[1px] w-full bg-gray-200"></span>

            <div className="flex gap-4 pl-4">
              <img src={returnIcon} alt="" />
              <div>
                <h5 className="mb-2 text-base  font-medium">Return Delivery</h5>
                <p className="text-xs/[18px] font-medium">
                  Free 30 Days Delivery Returns.{" "}
                  <a className=" underline" href="#">
                    Details
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 pr-10">
        <GeneralHeader label="Related Item" />
        <div className="flex justify-between">
          <ItemCard
            cardImage={gampadRed}
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
            cardImage={speakers}
            heading="RGB liquid CPU Cooler"
            currentPrice="160"
            oldPrice="170"
            rating="65"
          />
        </div>
      </div>
    </div>
  );
};
