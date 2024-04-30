import arrowIcon from "../assets/icons/arrow.svg";
import { DateCounter } from "./DateCounter";

export const GeneralHeader = (props) => {
  const { dateCounter, label, heading, toggle, viewButton } = props;
  return (
    <div className="flex w-[100%] justify-between">
      <div className="flex gap-[87px]">
        <div>
          <div className="flex items-center gap-[10px]">
            <span className=" inline-block h-10 w-5 rounded bg-[#DB4444]"></span>
            <label className="font-semibold  text-[#DB4444]">{label}</label>
          </div>
          <h3 className=" mt-6 font-Inter text-4xl/[48px] font-semibold">
            {heading}
          </h3>
        </div>
        {dateCounter && (
          <div className=" mb-1 flex items-end gap-4 text-3xl text-[#E07575]">
            <DateCounter label="Days" value={3} /> :
            <DateCounter label="Hours" value={23} /> :
            <DateCounter label="Minutes" value={19} /> :
            <DateCounter label="Seconds" value={56} />
          </div>
        )}
      </div>

      {(toggle && (
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
      )) ||
        (viewButton && (
          <button className="self-end rounded bg-[#DB4444] px-12 py-4 text-base font-medium text-[#FAFAFA]">
            View All
          </button>
        ))}
    </div>
  );
};
