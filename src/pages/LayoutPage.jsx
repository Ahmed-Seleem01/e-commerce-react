import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { Footer } from "../components";
import { Header } from "../components";

export async function load({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");

  return { q };
}

export const LayoutPage = () => {
  const { q } = useLoaderData();
  const navigation = useNavigation();
  return (
    <div className=" mx-auto my-0 grid min-h-[100vh] max-w-full grid-cols-1 grid-rows-[144px_minmax(450px,_1fr)_450px] justify-items-center font-Poppins font-normal lg:max-w-[1170px]">
      <Header q={q} />
      <div
        className={`"mb-[140px] w-full ${navigation.state === "loading" ? "opacity-40 transition-opacity duration-200 ease-in-out" : ""}`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
