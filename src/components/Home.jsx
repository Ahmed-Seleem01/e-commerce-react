import { Footer } from "./Footer";
import { Header } from "./Header";

export const Home = () => {
  return (
    <div className="font-Poppins font-normal min-h-[100vh] max-w-[1170px] mx-auto my-0 grid grid-cols-1 grid-rows-[minmax(0px,_1fr)_minmax(0px,_2fr)_minmax(0px,_1fr)] justify-items-center">
      <Header />
      <Footer />
    </div>
  );
};
