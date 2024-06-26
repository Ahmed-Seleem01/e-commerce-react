import Countdown from "react-countdown";
import arrowIcon from "../../assets/icons/arrow.svg";
import { DateCounter } from "./DateCounter";

export const GeneralHeader = (props) => {
  const { dateCounter, label, heading, toggle, viewButton } = props;
  return (
    <div className="flex w-[100%] flex-col justify-between md:flex-row">
      <div className="flex flex-col gap-5 md:flex-row md:gap-[87px]">
        <div>
          <div className="flex items-center gap-[10px]">
            <span className=" inline-block h-10 w-5 rounded bg-[#918c8c]"></span>
            <label className="font-semibold  text-[#DB4444]">{label}</label>
          </div>
          <h3 className=" mt-6 font-Inter text-4xl/[48px] font-semibold">
            {heading}
          </h3>
        </div>
        {dateCounter && (
          <div className=" self-start md:self-end">
            <Countdown
              date={Date.now() + 1000 * 60 * 60 * 24 * 4} // 10 seconds from now
              renderer={({ days, hours, minutes, seconds, completed }) => {
                if (completed) {
                  return <span>Expired</span>;
                } else {
                  return (
                    <span className=" self-end">
                      <div className=" mb-1 flex items-end gap-4 text-3xl text-[#E07575]">
                        <DateCounter label="Days" value={days} /> :
                        <DateCounter label="Hours" value={hours} /> :
                        <DateCounter label="Minutes" value={minutes} /> :
                        <DateCounter label="Seconds" value={seconds} />
                      </div>
                    </span>
                  );
                }
              }}
            />
          </div>
        )}
      </div>

      {(toggle && (
        <div className=" hidden gap-2 md:flex md:self-end ">
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
          <button className="mt-10 self-center rounded bg-[#DB4444] px-12 py-4 text-base font-medium text-[#FAFAFA] md:mt-0 md:self-end">
            {viewButton}
          </button>
        ))}
    </div>
  );
};
