import Countdown from "react-countdown";
import heroSpeaker from "../assets/images/boom-box-hero.png";
import { DateCounterRadial } from "./DateCounterRadial";

export const Ad = () => {
  return (
    <div className="mt-10  flex items-center justify-between bg-black py-[70px] pl-[56px] pr-[60px]  text-[#FAFAFA] ">
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
                  <div className="flex gap-6">
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

        <button className="mt-2 max-w-[175px] rounded bg-[#00FF66] px-12 py-4 text-base font-medium text-white">
          Buy Now!
        </button>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="bg-radial-gradient absolute size-[450px] rounded-full opacity-40 blur-3xl"></div>
        <img className="z-10" src={heroSpeaker} alt="hero openning image" />
      </div>
    </div>
  );
};
