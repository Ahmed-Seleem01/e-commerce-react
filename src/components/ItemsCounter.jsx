import { useEffect, useRef, useState } from "react";
import { Form } from "react-router-dom";

export const ItemsCounter = ({ amount, price, productHeading }) => {
  const [count, setCount] = useState(Number(amount));
  const subTotal = useRef(price);

  // const incrementHandler = () => {
  //   setCount((pre) => Number((pre += 1)));
  // };
  // const decrementHandler = () => {
  //   if (count > 1) setCount((pre) => Number((pre -= 1)));
  // };

  subTotal.current = price * count;

  return (
    <>
      <li>
        <div className="flex h-11 w-[72px] items-center justify-between rounded border border-gray-400 px-3 py-2 font-Poppins">
          <div className="w-[80%]">
            {count < 10 && "0"}
            {count}
          </div>
          <div className="flex flex-col">
            <Form
              action={`/${productHeading}/${Number(count + 1)}/update-amount`}
              method="post"
              onSubmit={() => {}}
            >
              <button className=" rotate-180">⌄</button>
            </Form>
            <Form
              action={`/${productHeading}/${Number(count - 1)}/update-amount`}
              method="post"
              onSubmit={() => {}}
            >
              <button>⌄</button>
            </Form>
          </div>
        </div>
      </li>

      <li className=" w-[65px] justify-self-end text-start">
        ${subTotal.current}
      </li>
    </>
  );
};
