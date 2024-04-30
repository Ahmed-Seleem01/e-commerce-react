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
        <div className="flex gap-6">
          <DateCounterRadial label="Hours" value="23" />
          <DateCounterRadial label="Days" value="5" />
          <DateCounterRadial label="Minutes" value="59" />
          <DateCounterRadial label="Seconds" value="35" />
        </div>
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
