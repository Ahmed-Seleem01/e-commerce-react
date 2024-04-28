import arrowIcon from "../assets/icons/arrow.svg";

export const GeneralHeader = (props) => {
  const { additional, label, heading, toggle } = props;
  return (
    <div className="flex w-[100%] justify-between">
      <div className=" flex gap-[87px]">
        <div className="">
          <div className="flex items-center gap-[10px]">
            <span className=" inline-block h-10 w-5 rounded bg-[#DB4444]"></span>
            <label className="font-semibold  text-[#DB4444]">{label}</label>
          </div>
          <h3 className=" mt-6 font-Inter text-4xl/[48px] font-semibold">
            {heading}
          </h3>
        </div>
        <div className=" self-end">{additional}</div>
      </div>

      {toggle && (
        <div className="flex gap-2 self-end ">
          <img
            className=" size-12 rotate-180 rounded-full bg-gray-900 p-3 invert"
            src={arrowIcon}
            alt="arrow left icon"
          />
          <img
            className=" size-12 rounded-full bg-gray-900 p-3 invert"
            src={arrowIcon}
            alt="arrow right icon"
          />
        </div>
      )}
    </div>
  );
};
