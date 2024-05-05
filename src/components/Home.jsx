import { Ad } from "./Ad";
import { BestSelling } from "./BestSelling";
import { Category } from "./Category";
import { ExploreProducts } from "./ExploreProducts";
import { FlashSales } from "./FlashSales";
import { NewArrival } from "./NewArrival";
import { OpenningSection } from "./OpenningSection";

// import { SignIn } from "./SignIn";
// import { SignUP } from "./SignUp";
// const products = [
//   {
//     image: lcd,
//     heading: "LCD Monitor",
//     price: "650",
//   },
//   {
//     image: gamepad,
//     heading: "H1Gamepad",
//     price: "550",
//   },
// ];

export const Home = () => {
  return (
    <div className="flex w-[100%] flex-col gap-[140px] ">
      <OpenningSection />
      <FlashSales />
      <Category />
      <BestSelling />
      <Ad />
      <ExploreProducts />
      <NewArrival />
    </div>

    // {/* <Wishlist listLength="4" /> */}
    // {/* <Cart products={products} /> */}
    // {/* <Checkout products={products} /> */}
    // {/* <About /> */}
    // {/* <Contact /> */}
    // {/* <Error /> */}
    // {/* <Account /> */}
  );
};
