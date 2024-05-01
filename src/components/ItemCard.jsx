import heart2 from "../assets/icons/heart2.svg";
import eye from "../assets/icons/eye.svg";
import deleteIcon from "../assets/icons/delete.svg";

export const ItemCard = (props) => {
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
  } = props;
  return (
    <div className="bg-white">
      <div className=" group relative flex h-[250px] w-[270px] cursor-pointer items-center justify-center rounded bg-[#F5F5F5] p-[50px]">
        <img src={cardImage} alt="gamepad card" />
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
            <button className="size-[34px] rounded-full bg-white p-2">
              <img src={deleteIcon} alt="love item" />
            </button>
          )) ||
            (viewItem && (
              <button className="size-[34px] rounded-full bg-white p-2">
                <img src={eye} alt="love item" />
              </button>
            )) || (
              <>
                <button className="size-[34px] rounded-full bg-white p-2">
                  <img src={heart2} alt="love item" />
                </button>
                <button className=" size-[34px] rounded-full bg-white p-[6px]">
                  <img src={eye} alt="love item" />
                </button>
              </>
            )}
        </div>
        <button className=" absolute bottom-0 z-[-1] w-full translate-y-10 overflow-hidden bg-black  py-1 text-base font-medium text-white transition-transform group-hover:z-10 group-hover:translate-y-0">
          <a href="#">Add to cart</a>
        </button>
      </div>
      <div className="relative z-20 flex flex-col gap-2 bg-white pt-4 text-base font-medium ">
        <h4>{heading}</h4>
        <div className="flex w-[80%] flex-wrap items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="text-[#DB4444]">${currentPrice}</span>
            {oldPrice && (
              <span className=" text-gray-500 line-through">${oldPrice}</span>
            )}
          </div>
          {rating && (
            <div className=" flex items-center text-gray-400">
              <span className="flex gap-1">
                <span className=" text-xl text-gray-400">&#9733;</span>
                <span className=" text-xl text-gray-400">&#9733;</span>
                <span className=" text-xl text-gray-400">&#9733;</span>
                <span className=" text-xl text-gray-400">&#9733;</span>
                <span className=" text-xl text-gray-400">&#9733;</span>
              </span>
              <label className="ml-2 font-semibold">
                ({rating ? rating : 0})
              </label>
            </div>
          )}
        </div>
        {colors && (
          <div className="flex gap-2">
            <span className="size-5 rounded-full bg-red-600 hover:border-2 hover:border-white hover:outline"></span>
            <span className="size-5 rounded-full bg-red-600 hover:border-2 hover:border-white hover:outline"></span>
          </div>
        )}
      </div>
    </div>
  );
};
