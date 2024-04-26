import { Footer } from "./Footer";
import { Header } from "./Header";
import { SignUP } from "./SignUp";

export const Home = () => {
  return (
    <div className="mx-auto my-0 grid min-h-[100vh] max-w-[1170px] grid-cols-1 grid-rows-[minmax(0px,_1fr)_minmax(0px,_2fr)_minmax(0px,_1fr)] justify-items-center font-Poppins font-normal">
      <Header />
      <SignUP />
      <Footer />
    </div>
  );
};
