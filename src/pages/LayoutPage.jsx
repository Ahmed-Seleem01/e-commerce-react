import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "../components";
import { Header } from "../components";

export const LayoutPage = () => {
  const navigation = useNavigation();
  return (
    <div className=" mx-auto my-0 grid min-h-[100vh] max-w-full grid-cols-1 grid-rows-[144px_minmax(450px,_1fr)_450px] justify-items-center font-Poppins font-normal lg:max-w-[1170px]">
      <Header />
      <div
        className={`"mb-[140px] w-full ${navigation.state === "loading" ? "opacity-40 transition-opacity duration-200 ease-in-out" : ""}`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
