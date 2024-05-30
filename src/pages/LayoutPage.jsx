import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { Footer } from "../components";
import { Header } from "../components";
import { useEffect, useState } from "react";
import { LoginProvider } from "../components/general/context/auth-context";
import { MyProvider } from "../components/general/context/app-context";

export async function load({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  return { q };
}

export const LayoutPage = () => {
  const { q } = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  const navigation = useNavigation();
  return (
    <div className="mx-auto my-0 grid min-h-[100vh] max-w-full grid-cols-1 grid-rows-[auto_minmax(auto,_1fr)_auto] justify-items-center px-5 font-Poppins font-normal md:grid-rows-[144px_minmax(450px,_1fr)_auto] md:px-0 lg:max-w-[1170px]">
      <LoginProvider>
        <MyProvider>
          <Header q={q} />
          <div
            className={`" mb-[140px] flex w-full justify-center px-5 ${navigation.state === "loading" ? "opacity-40 transition-opacity duration-200 ease-in-out" : ""}`}
          >
            {!loading ? (
              <Outlet />
            ) : (
              <div className=" size-12 animate-spin self-center rounded-full border-8  border-blue-600 border-t-transparent  "></div>
            )}
          </div>
        </MyProvider>
      </LoginProvider>
      <Footer />
    </div>
  );
};
