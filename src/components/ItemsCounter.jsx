import { useState } from "react";

export const ItemsCounter = ({ price, subTotalRef }) => {
  const [count, setCount] = useState(1);

  const incrementHandler = () => {
    setCount((pre) => Number((pre += 1)));
    subTotalRef.current = 0;
  };
  const decrementHandler = () => {
    if (count > 1) setCount((pre) => Number((pre -= 1)));
    subTotalRef.current = 0;
  };

  subTotalRef.current += price * count;
  console.log(price);
  console.log(count);
  console.log(subTotalRef.current);

  // setSubTotal(subTotalRef.current);

  return (
    <>
      <li>
        <div className="flex h-11 w-[72px] items-center justify-between rounded border border-gray-400 px-3 py-2 font-Poppins">
          <div className="w-[80%]">
            {count < 10 && "0"}
            {count}
          </div>
          <div className="flex flex-col">
            <button className=" rotate-180 " onClick={incrementHandler}>
              ⌄
            </button>
            <button onClick={decrementHandler}>⌄</button>
          </div>
        </div>
      </li>

      <li className=" w-[65px] justify-self-end text-start">
        ${price * count}
      </li>
    </>
  );
};
