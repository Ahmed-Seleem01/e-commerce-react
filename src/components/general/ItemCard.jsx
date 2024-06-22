import eye from "../../assets/icons/eye.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import { Form, Link } from "react-router-dom";
import { addToUserDB, getUserItems } from "../../firebase.config";
import { StarRating } from "./StarRating";
import { useContext, useState } from "react";
import appContext from "./context/app-context";
import authContext from "./context/auth-context";

export const ItemCard = (props) => {
  const { setCartItemsCounter } = useContext(appContext);
  const { user } = useContext(authContext);
  const [hideAddToCart] = useState(false);

  const {
    cardImage,
    heading,
    currentPrice,
    oldPrice,
    rating,
    discount,
    newItem,
    colors,
    deleteItem,
    viewItem,
    ratingValue,
    isInCart,
    isInWishlist,
    label,
  } = props;

  // const addToCartHandler = async () => {
  //   await addToUserDB(user.uid, "cart", {
  //     cardImage,
  //     heading,
  //     currentPrice,
  //     amount: 1,
  //   });
  //   const { productItems } = await getUserItems(user.uid, "cart");
  //   setCartItemsCounter(productItems.length);
  //   // setHideAddToCart(true);
  // };

  // const addToWishlistHandler = async () => {
  // await updateProductStatus(label, heading, "isInWishlist", true);
  // await addToUserDB(user.uid, "wishlist", {
  //   cardImage,
  //   heading,
  //   currentPrice,
  //   oldPrice: oldPrice || 0,
  //   label,
  // });
  // const { productItems } = await getUserItems(user.uid, "wishlist");
  // setWishlistItemsCounter(productItems.length);
  // // setHideAddToWishlist(!isInWishlist);
  // // console.log(productItems);
  // };

  return (
    <div className="w-[270px] bg-white">
      <div className=" group relative flex h-[250px] w-[270px] cursor-pointer items-center justify-center rounded bg-[#F5F5F5] p-[50px]">
        <img src={cardImage} alt={heading} />
        {(discount && (
          <label className="absolute left-3 top-3 rounded bg-[#DB4444] px-3 py-1 text-xs/[18px] text-white">
            -{discount}%
          </label>
        )) ||
          (newItem && (
            <label className="absolute left-3 top-3 rounded bg-[#00FF66] px-3 py-1 text-xs/[18px] text-white">
              NEW
            </label>
          ))}
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          {(deleteItem && (
            <Form
              action={`${label}/${heading}/destroy`}
              method="post"
              onSubmit={(event) => {
                if (
                  !confirm("Please confirm you want to delete this record.")
                ) {
                  event.preventDefault();
                }
              }}
            >
              <button
                type="submit"
                className="size-[34px] rounded-full bg-white p-2 active:bg-[#DB4444]"
              >
                <img src={deleteIcon} alt="love item" />
              </button>
            </Form>
          )) ||
            (viewItem && (
              <Link to={`../product/${props.heading}`}>
                <button className="size-[34px] rounded-full bg-white p-2 active:bg-[#DB4444]">
                  <img src={eye} alt="love item" />
                </button>
              </Link>
            )) || (
              <>
                <Form
                  action={`${label}/${heading}/add-to-wishlist`}
                  method="post"
                >
                  <button
                    type="submit"
                    // onClick={addToWishlistHandler}
                    className="size-[34px] rounded-full bg-white p-2 active:bg-[#DB4444]"
                    disabled={isInWishlist}
                  >
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill={`${isInWishlist ? "#DB4444" : "none"}`}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 1C2.7912 1 1 2.73964 1 4.88594C1 6.61852 1.7 10.7305 8.5904 14.8873C8.71383 14.961 8.85552 15 9 15C9.14448 15 9.28617 14.961 9.4096 14.8873C16.3 10.7305 17 6.61852 17 4.88594C17 2.73964 15.2088 1 13 1C10.7912 1 9 3.35511 9 3.35511C9 3.35511 7.2088 1 5 1Z"
                        stroke="black"
                        strokeWidth={`${isInWishlist ? "0.2" : "1.5"}`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </Form>
                <Link to={`../product/${props.heading}`}>
                  <button className=" size-[34px] rounded-full bg-white p-[6px] active:bg-[#DB4444]">
                    <img src={eye} alt="love item" />
                  </button>
                </Link>
              </>
            )}
        </div>
        <Form
          className={`${isInCart ? "translate-y-0" : ""} absolute bottom-0  w-[99%] translate-y-10 overflow-hidden bg-black text-base font-medium text-white transition-transform  active:invert group-hover:z-10 group-hover:translate-y-0`}
          action={`/${label}/${heading}/add-to-cart`}
          method="post"
        >
          <button
            type="submit"
            className={`size-full py-1 ${isInCart ? "bg-green-400" : ""}`}
            disabled={isInCart}
          >
            {!isInCart ? "Add to cart" : "Already added to cart"}
          </button>
        </Form>
      </div>

      <div className="relative z-20 flex w-full flex-col gap-2 bg-white pt-4 text-base font-medium">
        <h4>{heading}</h4>
        <div className="flex w-[88%] flex-wrap items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="text-[#DB4444]">${currentPrice}</span>
            {oldPrice ? (
              <span className=" text-gray-500 line-through">${oldPrice}</span>
            ) : (
              ""
            )}
          </div>
          {rating && (
            <div className=" flex items-center text-gray-400">
              <StarRating
                totalStars={5}
                ratingValue={ratingValue ? ratingValue : 0}
              />
              <label className="ml-2 font-semibold">
                ({rating ? rating : 0})
              </label>
            </div>
          )}
        </div>
        {colors && (
          <div className="flex gap-2">
            <span
              className="size-5 rounded-full hover:border-2 hover:border-white hover:outline"
              style={{ backgroundColor: colors[0] }}
            ></span>
            <span
              className="size-5 rounded-full hover:border-2 hover:border-white hover:outline"
              style={{ backgroundColor: colors[1] }}
            ></span>
          </div>
        )}
      </div>
    </div>
  );
};
