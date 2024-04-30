import { CategoryCard } from "./CategoryCard";
import { GeneralHeader } from "./GeneralHeader";
import phone from "../assets/icons/category/Category-CellPhone.svg";
import computer from "../assets/icons/category/Category-Computer.svg";
import smartWatch from "../assets/icons/category/Category-SmartWatch.svg";
import camera from "../assets/icons/category/Category-Camera.svg";
import headphone from "../assets/icons/category/Category-Headphone.svg";
import gamepad from "../assets/icons/category/Category-Gamepad.svg";

export const Category = () => {
  return (
    <div className=" border-b border-t pb-[70px] pt-[80px]">
      <GeneralHeader label="Categories" heading="Browse By Category" toggle />
      <div className="mt-[60px] flex justify-between">
        <CategoryCard image={phone} heading="Phones" />
        <CategoryCard image={computer} heading="Computers" />
        <CategoryCard image={smartWatch} heading="SmartWatch" />
        <CategoryCard image={camera} heading="Camera" />
        <CategoryCard image={headphone} heading="HeadPhones" />
        <CategoryCard image={gamepad} heading="Gaming" />
      </div>
    </div>
  );
};
