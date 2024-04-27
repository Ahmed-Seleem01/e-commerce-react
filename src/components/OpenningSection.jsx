import appleIcon from "../assets/icons/appleIcon.svg";
import arrowIcon from "../assets/icons/arrow.svg";
import heroPhone from "../assets/images/hero_phone.png";

export const OpenningSection = () => {
  return (
    <div className="flex justify-between ">
      <nav className="border-r-2 pr-4 pt-10">
        <ul className="flex w-[217px] flex-col gap-4 ">
          <li className="flex w-[100%] items-center justify-between">
            Woman’s Fashion
            <span className="inline-block size-2 rotate-45 border-r-2 border-t-2 border-black"></span>
          </li>
          <li className="flex w-[100%] items-center justify-between">
            Men’s Fashion
            <span className=" inline-block size-2 rotate-45 border-r-2 border-t-2 border-black"></span>
          </li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </nav>
      <div className="mt-10 flex flex-col items-center  bg-black pl-16 pr-10 pt-10 text-[#FAFAFA] ">
        <div className="flex items-center">
          <div className="flex max-w-[300px] flex-col gap-5">
            <div className="flex items-center gap-6">
              <img src={appleIcon} alt="apple icon" /> iPhone 14 Series
            </div>
            <h2 className=" font-Inter text-5xl/[60px] font-semibold">
              Up to 10% off Voucher
            </h2>
            <div className="flex gap-2">
              <a
                className=" border-b-[1px] pb-1 text-base font-medium"
                href="#"
              >
                Shop Now
              </a>
              <img src={arrowIcon} alt="arrow icon" />
            </div>
          </div>
          <img src={heroPhone} alt="hero openning image" />
        </div>
        <div className="mb-3 flex gap-3">
          <span className="inline-block size-3 rounded-full bg-gray-500 "></span>
          <span className="inline-block size-3 rounded-full bg-gray-500 "></span>
          <span className="inline-block size-3 rounded-full bg-gray-500 "></span>
          <span className="inline-block size-3 rounded-full bg-gray-500 "></span>
          <span className="inline-block size-3 rounded-full bg-gray-500 "></span>
        </div>
      </div>
    </div>
  );
};
