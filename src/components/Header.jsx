import heart from "../assets/icons/heart.svg";
import cart from "../assets/icons/Cart1.svg";
import search from "../assets/icons/search.svg";
import userIcon from "../assets/icons/user.svg";
import bagIcon from "../assets/icons/icon-mallbag.svg";
import cancelIcon from "../assets/icons/icon-cancel.svg";
import starIcon from "../assets/icons/Icon-Reviews.svg";
import logoutIcon from "../assets/icons/Icon-logout.svg";

export const Header = () => {
  return (
    <div className="col-span-full row-span-1 flex w-[100%] flex-col">
      <div className="relative flex h-[48px] w-[100%] items-stretch justify-center self-center py-3 text-[#FAFAFA] before:absolute before:top-0 before:z-[-1]  before:h-[100%] before:w-[100vw] before:bg-black before:content-['']">
        <p className="text-center text-sm/6">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a className=" ml-2 font-semibold underline">ShopNow</a>
        </p>
        <select className="absolute right-0 bg-transparent text-sm/6">
          <option value="english">English</option>
        </select>
      </div>
      <div className="mb-4 mt-10 flex h-[38px] items-center justify-between">
        <div className=" flex w-[60%] max-w-[675px] items-center justify-between text-black">
          <h1 className=" font-Inter text-2xl/6 font-bold">Exclusive</h1>
          <nav>
            <ul className="flex items-center justify-between gap-12 text-[16px]/6">
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
              <li>Sign Up</li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-between gap-6">
          <form className="flex h-[38px] max-w-[243px] items-center rounded-[4px]  bg-[#F5F5F5] p-0">
            <input
              className={`h-6 w-[100%] rounded-[4px] bg-[#F5F5F5] pl-2 pr-8 text-[12px]/[18px] outline-0`}
              type="text"
              placeholder="What are you looking for?"
            />
            <img className="ml-[-25px] size-4" src={search} alt="search icon" />
          </form>
          <div className="flex gap-4">
            <img src={heart} alt="heart icon" />
            <img src={cart} alt="cart icon" />
            <div className="group relative">
              <img
                className="rounded-full p-1 invert hover:bg-[#DB4444] hover:invert-0"
                src={userIcon}
                alt="account icon"
              />
              <ul className="absolute right-0 top-10 hidden w-[224px] flex-col justify-between gap-3 rounded-[4px] bg-gray-500 px-5 py-[18px] blur-[0.4px] group-hover:flex">
                <li className="flex gap-4 text-[14px]/[21px] text-white">
                  <img src={userIcon} alt="user account" /> Manage My Account
                </li>
                <li className="flex gap-4 text-[14px]/[21px] text-white">
                  <img src={bagIcon} alt="orders icon" /> My Order
                </li>

                <li className="flex gap-4 text-[14px]/[21px] text-white">
                  <img src={cancelIcon} alt="cancel icon" /> My Cancellations
                </li>

                <li className="flex gap-4 text-[14px]/[21px] text-white">
                  <img src={starIcon} alt="reviews icon" /> My Reviews
                </li>

                <li className="flex gap-4 text-[14px]/[21px] text-white">
                  <img src={logoutIcon} alt="logout icon" /> Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[100vw] self-center border-b-[1px] border-gray-300"></div>
    </div>
  );
};
