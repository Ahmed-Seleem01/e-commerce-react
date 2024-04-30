export const DateCounter = (props) => {
  const { label, value } = props;

  return (
    <div className="flex flex-col gap-1 text-black">
      <span className=" text-xs/[18px] font-medium">{label}</span>
      <span className=" font-Inter text-[32px]/[30px] font-bold">
        {value < 10 ? "0" + value : value}
      </span>
    </div>
  );
};
