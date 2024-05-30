import heart2 from "../assets/icons/heart2.svg";
import eye from "../assets/icons/eye.svg";
import deleteIcon from "../assets/icons/delete.svg";
import { Form, Link } from "react-router-dom";
import { addToUserDB, getUserItems } from "../firebase.config";
import StarRating from "./StarRating";
import { useContext, useState } from "react";
import appContext from "./general/context/app-context";
import authContext from "./general/context/auth-context";

export const ItemCard = (props) => {
  const { setCartItemsCounter, setWishlistItemsCounter } =
    useContext(appContext);
  const { user } = useContext(authContext);
  const [hideAddToCart, setHideAddToCart] = useState(false);
  const [hideAddToWishlist, setHideAddToWishlist] = useState(false);

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
  } = props;

  const addToCartHandler = async () => {
    await addToUserDB(user.uid, "cart", {
      cardImage,
      heading,
      currentPrice,
      amount: 1,
    });
    const { productItems } = await getUserItems(user.uid, "cart");
    setCartItemsCounter(productItems.length);
    setHideAddToCart(true);
  };

  const addToWishlistHandler = async () => {
    await addToUserDB(user.uid, "wishlist", {
      cardImage,
      heading,
      currentPrice,
      oldPrice: oldPrice || 0,
    });
    const { productItems } = await getUserItems(user.uid, "wishlist");
    setWishlistItemsCounter(productItems.length);
    setHideAddToWishlist(true);
  };

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
              action={`${heading}/destroy`}
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
                <button
                  onClick={addToWishlistHandler}
                  className="size-[34px] rounded-full bg-white p-2 active:bg-[#DB4444]"
                  hidden={hideAddToWishlist}
                >
                  <img src={heart2} alt="love item" />
                </button>
                <Link to={`../product/${props.heading}`}>
                  <button className=" size-[34px] rounded-full bg-white p-[6px] active:bg-[#DB4444]">
                    <img src={eye} alt="love item" />
                  </button>
                </Link>
              </>
            )}
        </div>
        <button
          onClick={addToCartHandler}
          className=" absolute bottom-0  w-[99%] translate-y-10 overflow-hidden bg-black  py-1 text-base font-medium text-white transition-transform  active:invert group-hover:z-10 group-hover:translate-y-0"
          hidden={hideAddToCart}
        >
          Add to cart
        </button>
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
