import { Link, useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  console.log({ error });
  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center">
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
  );
};
