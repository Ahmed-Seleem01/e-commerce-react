export const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className=" font-Inter text-[110px]/[115px] font-medium">
        404 Not Found
      </h2>
      <p className="mb-20 mt-10">
        Your visited page not found. You may go home page.
      </p>

      <button className=" primary-button font-medium">Back to home page</button>
    </div>
  );
};
