import { Outlet } from "react-router-dom";
import { Footer } from "../components";
import { Header } from "../components";

export const LayoutPage = () => {
  return (
    <div className="mx-auto my-0 grid min-h-[100vh] max-w-[1170px] grid-cols-1 grid-rows-[144px_minmax(450px,_1fr)_450px] justify-items-center font-Poppins font-normal">
      <Header />
      <div className="mb-[140px] w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
