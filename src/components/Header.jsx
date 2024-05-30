import heart from "../assets/icons/heart.svg";
import cart from "../assets/icons/Cart1.svg";
import search from "../assets/icons/search.svg";
import userIcon from "../assets/icons/user.svg";
import bagIcon from "../assets/icons/icon-mallbag.svg";
import cancelIcon from "../assets/icons/icon-cancel.svg";
import starIcon from "../assets/icons/Icon-Reviews.svg";
import logoutIcon from "../assets/icons/Icon-logout.svg";
import { Form, Link, NavLink } from "react-router-dom";
import { logout } from "../authServices";
import { useContext, useEffect, useState } from "react";
import appContext from "./general/context/app-context";
import { useTranslation } from "react-i18next";
import authContext from "./general/context/auth-context";
import { getUserItems } from "../firebase.config";

export const Header = ({ q }) => {
  const { t, i18n } = useTranslation();

  const {
    cartItemsCounter,
    setCartItemsCounter,
    wishlistItemsCounter,
    setWishlistItemsCounter,
  } = useContext(appContext);

  const { user } = useContext(authContext);
  const [menu, setMenu] = useState("-80vw");

  useEffect(() => {
    if (user) {
      getUserItems(user.uid, "cart").then((productsItems) =>
        setCartItemsCounter(productsItems.productItems.length),
      );
      getUserItems(user.uid, "wishlist").then((productsItems) =>
        setWishlistItemsCounter(productsItems.productItems.length),
      );
    }
  }, [user]);

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  // Function to redirect to the home page
  const redirectToHomePage = () => {
    // Redirect to the home page
    window.location.href = "/";
  };

  const logoutHandler = () => {
    logout();
    redirectToHomePage();
  };

  const openMenu = () => {
    setMenu(0);
  };

  const closeMenu = () => {
    setMenu("-80vw");
  };
  return (
    <div className=" sticky top-0 z-40 col-span-full row-span-1 flex w-[100%] flex-col">
      <span className="absolute top-0 z-[-1] inline-block h-full w-[100vw] self-center bg-white"></span>
      <div className="relative flex w-[100%] items-stretch justify-center self-center py-3 text-[#FAFAFA] before:absolute before:top-0 before:z-[-1] before:h-[100%]  before:w-[100vw] before:bg-black md:h-[48px]">
        <p className="mr-auto w-60 text-center text-sm/6 md:mr-0 md:w-auto">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a className=" ml-2 font-semibold underline">ShopNow</a>
        </p>
        <select
          defaultValue={i18n.language}
          className="absolute right-0 bg-transparent text-sm/6"
          onChange={(e) => {
            i18n.changeLanguage(e.target.value);
          }}
        >
          <option className=" text-black" value="en">
            English
          </option>
          <option className=" text-black" value="ar">
            Arabic
          </option>
        </select>
      </div>

      <div className=" mb-4 mt-5 flex flex-col gap-5 md:mt-10  md:h-[38px] md:flex-row md:justify-between md:px-5 ">
        <div className=" flex flex-col gap-5 text-black  md:w-[60%] md:max-w-[675px] md:flex-row md:items-center md:justify-between md:gap-0 md:self-center">
          <div className="flex w-full items-center  gap-5 self-start md:self-center">
            <button
              className="flex w-6 flex-col gap-1 active:bg-gray-300 md:hidden"
              onClick={openMenu}
            >
              <span className="h-[2px] w-[50%] bg-black"></span>
              <span className="h-[2px] w-[75%] bg-black"></span>
              <span className="h-[2px] w-full bg-black"></span>
            </button>

            <div
              className=" absolute left-[-20px] top-0 flex h-[100vh] w-[80vw] flex-col gap-10 bg-gray-100  p-5  transition-transform md:hidden"
              style={{ transform: `translateX(${menu})` }}
            >
              <button
                className="flex size-6 flex-col justify-between border active:bg-gray-200"
                onClick={closeMenu}
              >
                <span className="inline-block h-[2px] w-full translate-y-[10px]  rotate-45 bg-black"></span>
                <span className="inline-block h-[2px] w-full -translate-y-[10px] -rotate-45 bg-black"></span>
              </button>
              <nav>
                <ul className="flex flex-col  justify-between gap-5 text-[16px]/6 md:gap-12">
                  <li>
                    <NavLink
                      to=""
                      className={({ isActive }) =>
                        isActive ? "border-b border-black" : ""
                      }
                    >
                      {t("description.home")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="contact"
                      className={({ isActive }) =>
                        isActive ? "border-b border-black" : ""
                      }
                    >
                      {t("description.contact")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="about"
                      className={({ isActive }) =>
                        isActive ? "border-b border-black" : ""
                      }
                    >
                      {t("description.about")}
                    </NavLink>{" "}
                  </li>
                  {!user && (
                    <>
                      <li>
                        <a
                          href="sign-up"
                          className={`${window.location.pathname === "/sign-up" && "underline"} `}
                        >
                          {t("description.signUpHome")}
                        </a>
                      </li>
                      <li>
                        <a
                          href="login"
                          className={`${window.location.pathname === "/sign-in" && "underline"} `}
                        >
                          {t("description.loginHome")}
                        </a>
                      </li>
                    </>
                  )}
                  {window.location.pathname !== "/login" &&
                    window.location.pathname !== "/sign-up" && (
                      <div className="flex items-center gap-4">
                        {user && (
                          <li>
                            <ul className="flex flex-col gap-3">
                              <li className=" text-[14px]/[21px] hover:underline">
                                <NavLink
                                  className="flex items-center gap-4"
                                  to="account"
                                >
                                  <img
                                    className="invert"
                                    src={userIcon}
                                    alt="user account"
                                  />{" "}
                                  Manage My Account
                                </NavLink>
                              </li>
                              <li className="flex gap-4 text-[14px]/[21px] hover:underline">
                                <NavLink
                                  className="flex items-center gap-4"
                                  to="account/cart/checkout"
                                >
                                  <img
                                    className="invert"
                                    src={bagIcon}
                                    alt="orders icon"
                                  />{" "}
                                  My Order
                                </NavLink>
                              </li>

                              <li className="flex items-center gap-4 text-[14px]/[21px] hover:underline">
                                <img
                                  className="invert"
                                  src={cancelIcon}
                                  alt="cancel icon"
                                />{" "}
                                My Cancellations
                              </li>

                              <li className="flex items-center gap-4 text-[14px]/[21px] hover:underline">
                                <img
                                  className="invert"
                                  src={starIcon}
                                  alt="reviews icon"
                                />{" "}
                                My Reviews
                              </li>

                              <li
                                onClick={logoutHandler}
                                className="flex cursor-pointer items-center gap-4  text-[14px]/[21px] hover:underline"
                              >
                                <img
                                  src={logoutIcon}
                                  className="invert"
                                  alt="logout icon"
                                />{" "}
                                Logout
                              </li>
                            </ul>
                          </li>
                        )}
                      </div>
                    )}
                </ul>
              </nav>
            </div>

            <h1 className=" font-Inter text-2xl/6 font-bold">
              <NavLink to="">Exclusive</NavLink>
            </h1>

            {window.location.pathname !== "/login" &&
              window.location.pathname !== "/sign-up" && (
                <div className="ml-auto flex items-center gap-4 md:hidden">
                  <Link to="wishlist">
                    <span className=" absolute flex size-4 -translate-y-[6px] translate-x-3  items-start justify-center rounded-full bg-[#DB4444] text-xs text-white">
                      {wishlistItemsCounter}
                    </span>
                    <img src={heart} alt="heart icon" />
                  </Link>

                  <Link to="account/cart">
                    <span className=" absolute  flex size-4 translate-x-4  items-start justify-center rounded-full bg-[#DB4444] text-xs text-white">
                      {cartItemsCounter}
                    </span>
                    <img src={cart} alt="cart icon" />
                  </Link>
                </div>
              )}
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center justify-between gap-5 text-[16px]/6 md:gap-5 md:max-lg:justify-center md:max-lg:gap-2 lg:gap-12">
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive
                      ? "text-nowrap border-b border-black"
                      : "text-nowrap"
                  }
                >
                  {t("description.home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-nowrap border-b border-black"
                      : "text-nowrap md:max-lg:hidden"
                  }
                >
                  {t("description.contact")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-nowrap border-b border-black"
                      : "text-nowrap md:max-lg:hidden"
                  }
                >
                  {t("description.about")}
                </NavLink>{" "}
              </li>
              {!user && (
                <li>
                  <a
                    href="sign-up"
                    className={`${window.location.pathname === "/sign-up" && "underline"} text-nowrap`}
                  >
                    {t("description.signUpHome")}
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <div className="items-center justify-between gap-6 self-center md:flex">
          <Form className="flex h-[38px] max-w-[243px] items-center rounded-[4px]  bg-[#F5F5F5] p-0">
            <input
              className={`h-6 w-[100%] rounded-[4px] bg-[#F5F5F5] pl-2 pr-8 text-[12px]/[18px] outline-0`}
              type="text"
              placeholder={t("description.search")}
              name="q"
              id="q"
              defaultValue={q}
            />
            <img className="ml-[-25px] size-4" src={search} alt="search icon" />
          </Form>

          {window.location.pathname !== "/login" &&
            window.location.pathname !== "/sign-up" && (
              <div className=" min-w[600px] hidden items-center gap-4 md:flex">
                <Link className="relative  shrink-0 grow-0" to="wishlist">
                  <span className=" absolute flex size-4 -translate-y-[6px] translate-x-3  items-start justify-center rounded-full bg-[#DB4444] text-xs text-white">
                    {wishlistItemsCounter}
                  </span>
                  <img
                    className=" shrink-0 grow-0"
                    src={heart}
                    alt="heart icon"
                  />
                </Link>

                <Link className="relative shrink-0 grow-0" to="account/cart">
                  <span className=" absolute  flex size-4 translate-x-4  items-start justify-center rounded-full bg-[#DB4444] text-xs text-white">
                    {cartItemsCounter}
                  </span>
                  <img src={cart} alt="cart icon" />
                </Link>

                {user ? (
                  <div className="relative hidden shrink-0 grow-0 md:block ">
                    <input className="peer hidden" type="checkbox" id="menu" />
                    <label
                      className=" inline-block rounded-full invert peer-checked:bg-[#DB4444] peer-checked:invert-0"
                      htmlFor="menu"
                    >
                      <img src={userIcon} alt="account icon" />
                    </label>

                    <ul className="absolute right-0 top-10 z-20 hidden w-[224px] flex-col justify-between gap-3 rounded-[4px] bg-gray-500 px-5 py-[18px] blur-[0.4px] peer-checked:flex">
                      <li className=" text-[14px]/[21px] text-white hover:underline">
                        <NavLink className="flex gap-4" to="account">
                          <img src={userIcon} alt="user account" />{" "}
                          {t("description.ManageMyAccount")}
                        </NavLink>
                      </li>
                      <li className="flex gap-4 text-[14px]/[21px] text-white hover:underline">
                        <NavLink
                          className="flex gap-4"
                          to="account/cart/checkout"
                        >
                          <img src={bagIcon} alt="orders icon" />{" "}
                          {t("description.MyOrder")}
                        </NavLink>
                      </li>

                      <li className="flex gap-4 text-[14px]/[21px] text-white hover:underline">
                        <img src={cancelIcon} alt="cancel icon" />{" "}
                        {t("description.MyCancellations")}
                      </li>

                      <li className="flex gap-4 text-[14px]/[21px] text-white hover:underline">
                        <img src={starIcon} alt="reviews icon" />{" "}
                        {t("description.MyReviews")}
                      </li>

                      <li
                        onClick={logoutHandler}
                        className="flex cursor-pointer gap-4 text-[14px]/[21px] text-white hover:underline"
                      >
                        <img src={logoutIcon} alt="logout icon" />{" "}
                        {t("description.Logout")}
                      </li>
                    </ul>
                  </div>
                ) : (
                  <a
                    href="../login"
                    className={`${window.location.pathname === "/sign-up" && "underline"} text-nowrap md:max-lg:hidden`}
                  >
                    {t("description.loginHome")}
                  </a>
                )}
              </div>
            )}
        </div>
      </div>

      <div className=" w-[100vw] self-center border-b-[1px] border-gray-300"></div>
    </div>
  );
};
