import { Footer } from "./Footer";
import { Header } from "./Header";
import { SignUP } from "./SignUp";

export const Home = () => {
  return (
    <div className="mx-auto my-0 grid min-h-[100vh] max-w-[1170px] grid-cols-1 grid-rows-[144px_1fr_450px] justify-items-center font-Poppins font-normal">
      <Header />
      <SignUP />
      <Footer />
    </div>
  );
};
