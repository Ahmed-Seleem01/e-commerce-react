import { useRef } from "react";
import { Form } from "react-router-dom";

export const ItemsCounter = ({ amount, price, productHeading }) => {
  const count = Number(amount);
  const subTotal = useRef(price);

  subTotal.current = price * count;

  return (
    <>
      <li>
        <div className="flex h-11 w-[72px] items-center justify-between rounded border border-gray-400 px-3 py-2 font-Poppins">
          <div className="w-[80%]">
            {count < 10 && "0"}
            {count}
          </div>
          <div className="flex flex-col items-center justify-center gap-2 ">
            <Form
              className="flex h-2"
              action={`/${productHeading}/${count + 1}/update-amount`}
              method="post"
            >
              <button className="size-2 rotate-45 border-l-2 border-t-2 border-gray-700"></button>
            </Form>
            <Form
              className="flex h-2"
              action={`/${productHeading}/${count - 1}/update-amount`}
              method="post"
            >
              <button
                disabled={count < 2}
                className="size-2 rotate-45 border-b-2 border-r-2 border-gray-700"
              ></button>
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
