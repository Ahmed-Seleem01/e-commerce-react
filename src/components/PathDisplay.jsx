export const PathDisplay = (props) => {
  let { path } = props;
  path = path.split("/");
  console.log(path);

  return (
    <div className="my-[80px] text-gray-400">
      Home
      {path.length &&
        path.map(
          (subPath, i) =>
            subPath && (
              <span key={i}>
                <span> / </span>
                <span className={i === path.length - 1 ? "text-black" : ""}>
                  {(subPath[0].toUpperCase() + subPath.slice(1)).replaceAll(
                    "%20",
                    " ",
                  )}
                </span>
              </span>
            ),
        )}
    </div>
  );
};
