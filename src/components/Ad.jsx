import Countdown from "react-countdown";
import heroSpeaker from "../assets/images/boom-box-hero.png";
import { DateCounterRadial } from "./DateCounterRadial";

export const Ad = () => {
  return (
    <div className="mt-10 flex flex-col  items-center justify-between gap-20 bg-black px-5 py-[70px] text-[#FAFAFA] md:flex-row md:gap-0 md:pl-[56px]  md:pr-[60px] ">
      <div className="flex max-w-[450px] flex-col gap-8 ">
        <label className="text-base/5 font-semibold text-[#00FF66]">
          Categories
        </label>
        <h2 className=" font-Inter text-5xl/[60px] font-semibold">
          Enhance Your Music Experience
        </h2>
        <Countdown
          date={Date.now() + 1000 * 60 * 60 * 24 * 6}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              return <span>Expired</span>;
            } else {
              return (
                <span>
                  <div className="flex gap-3 md:gap-6 ">
                    <DateCounterRadial label="Hours" value={hours} />
                    <DateCounterRadial label="Days" value={days} />
                    <DateCounterRadial label="Minutes" value={minutes} />
                    <DateCounterRadial label="Seconds" value={seconds} />
                  </div>
                </span>
              );
            }
          }}
        />

        <button className="mt-2 max-w-[175px] self-center rounded bg-[#00FF66] px-12 py-4 text-base font-medium text-white md:self-start">
          Buy Now!
        </button>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="bg-radial-gradient absolute size-[250px] rounded-full opacity-40 blur-3xl md:size-[450px]"></div>
        <img className="z-10" src={heroSpeaker} alt="hero openning image" />
      </div>
    </div>
  );
};
