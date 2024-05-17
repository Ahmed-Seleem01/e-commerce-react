import bkash from "../assets/icons/Bkash.png";
import visa from "../assets/icons/visa.png";
import masterCard from "../assets/icons/master-card.png";
import pay from "../assets/icons/pay.png";

// import lcd from "../assets/images/items/lcd.png";
// import gamepad from "../assets/images/items/gamepad.png";
import { useLoaderData } from "react-router-dom";
import { auth, getUserCartItems } from "../firebase.config";
import { PathDisplay } from "./PathDisplay";

const SHIPPING = 0;
export async function load() {
  const user = auth.currentUser;
  console.log(user);
  const productsItems = await getUserCartItems(user.uid);
  return { productsItems };
}

export const Checkout = () => {
  const { productsItems } = useLoaderData();
  const { productItems: products } = productsItems;

  const subTotal = products.reduce((acc, cur) => acc + cur.currentPrice, 0);
  console.log(products);
  return (
    <div>
      <PathDisplay path={window.location.pathname} />
      <div className="md-gap-0 flex w-full flex-col items-center justify-between gap-10 md:flex-row md:max-lg:flex-wrap">
        <div>
          <h2 className=" font-Inter text-4xl/[30px]">Billing Details</h2>
          <form className="mt-12 flex max-w-[470px] flex-col gap-8">
            <label className=" mb-2 flex flex-col text-gray-500">
              <span>
                First Name<span className=" text-red-400">*</span>
              </span>
              <input
                className="h-[50px] rounded bg-[#F5F5F5]"
                type="text"
                name="firstName"
                required
              />
            </label>
            <label className=" mb-2 flex flex-col text-gray-500">
              <span>Company Name</span>

              <input
                className="h-[50px] rounded bg-[#F5F5F5]"
                type="text"
                name="companyName"
              />
            </label>
            <label className=" mb-2 flex flex-col text-gray-500">
              <span>
                Street Address<span className=" text-red-400">*</span>
              </span>

              <input
                className="h-[50px] rounded bg-[#F5F5F5]"
                type="text"
                name="streetAddress"
                required
              />
            </label>
            <label className=" mb-2 flex flex-col text-gray-500">
              <span>Apartment, floor, etc. (optional)</span>
              <input
                className="h-[50px] rounded bg-[#F5F5F5]"
                type="text"
                name="apartment"
              />
            </label>
            <label className=" mb-2 flex flex-col text-gray-500">
              <span>
                Town/City<span className=" text-red-400">*</span>
              </span>

              <input
                className="h-[50px] rounded bg-[#F5F5F5]"
                type="text"
                name="townCity"
                required
              />
            </label>
            <label className=" mb-2 flex flex-col text-gray-500">
              <span>
                Phone Number<span className=" text-red-400">*</span>
              </span>

              <input
                className="h-[50px] rounded bg-[#F5F5F5]"
                type="tel"
                name="phoneNumber"
                required
              />
            </label>
            <label className=" mb-2 flex flex-col text-gray-500">
              <span>
                Email Address<span className=" text-red-400">*</span>
              </span>

              <input
                className="h-[50px] rounded bg-[#F5F5F5]"
                type="email"
                name="emailAddress"
                required
              />
            </label>
            <label className=" flex items-center gap-4">
              <input
                className=" peer hidden  size-6 checked:bg-red-500"
                type="checkbox"
                name="saveInfo"
              />
              <span className="flex size-6 items-center justify-center rounded border peer-checked:bg-red-500">
                <span className="inline-block h-[14px]  w-[8px] translate-y-[-2px] rotate-45 border-b-2 border-r-2 border-white"></span>
              </span>
              Save this information for faster check-out next time
            </label>
          </form>
        </div>

        <div className="flex flex-col gap-8 md:w-[527px]">
          <div className="flex w-[80%] flex-col gap-8 ">
            {products.map((product, i) => (
              <ul key={i} className="flex items-center  justify-between">
                <li className="flex items-center gap-5 ">
                  <img
                    className="size-[54px] object-contain"
                    src={product.cardImage}
                    alt={product.heading}
                  />
                  {product.heading}
                </li>

                <li>${product.currentPrice * 1}</li>
              </ul>
            ))}
          </div>
          <div className="w-[80%] ">
            <ul className="flex flex-col  gap-4 ">
              <li className="flex justify-between border-b pb-4">
                <span>Subtotal</span> ${subTotal}
              </li>
              <li className="flex justify-between border-b pb-4">
                <span>Shipping</span> {SHIPPING === 0 ? "Free" : SHIPPING}
              </li>
              <li className="flex justify-between pb-4">
                <span>Total</span> ${subTotal + SHIPPING}
              </li>
            </ul>
          </div>
          <div className="flex w-[80%] flex-col gap-8">
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <input
                  className="size-4 outline-4"
                  type="radio"
                  name="pay"
                  id="bank"
                />
                <label htmlFor="bank">Bank</label>
              </div>
              <div className="flex items-center gap-2">
                <img src={bkash} alt="bkash card" />
                <img src={visa} alt="visa card" />
                <img src={masterCard} alt="master card" />
                <img src={pay} alt="pay card" />{" "}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <input
                className="size-4 outline-4"
                type="radio"
                name="pay"
                id="cash"
              />
              <label htmlFor="cash">Cash on delivery</label>
            </div>
          </div>
          <div className="gap-4v flex flex-col items-center gap-5 md:flex-row md:gap-0">
            <input
              className="max-w-[300px] rounded border px-6 py-4"
              type="text"
              placeholder="Coupon Code"
            />
            <button className=" primary-button self-start md:self-center">
              Apply coupon
            </button>
          </div>
          <button className=" primary-button max-w-[200px]">Place Order</button>
        </div>
      </div>
    </div>
  );
};
