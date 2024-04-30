export const DateCounterRadial = (props) => {
  const { label, value } = props;

  return (
    <div className="flex size-[62px] flex-col items-center justify-center rounded-full bg-white text-black">
      <span className=" font-Inter text-base/[20px] font-semibold">
        {value < 10 ? "0" + value : value}
      </span>
      <span className=" text-[11px]/[18px]">{label}</span>
    </div>
  );
};
