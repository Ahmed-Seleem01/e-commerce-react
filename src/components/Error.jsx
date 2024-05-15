import { Link, useRouteError } from "react-router-dom";
import { PathDisplay } from "./PathDisplay";

export const Error = () => {
  const error = useRouteError();
  console.log({ error });
  return (
    <div className="mx-auto max-w-[1170px]">
      <PathDisplay path="404 Error" />
      <div className="flex  flex-col items-center justify-center">
        <h2 className=" font-Inter text-[110px]/[115px] font-medium">
          404 Not Found
        </h2>
        <p className="mb-20 mt-10">
          {error.status === 404
            ? "Your visited page not found. You may go home page."
            : error.statusText || error.message}
        </p>

        <Link to="">
          <button className=" primary-button font-medium">
            Back to home page
          </button>
        </Link>
      </div>
    </div>
  );
};
