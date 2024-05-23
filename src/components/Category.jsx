import { CategoryCard } from "./CategoryCard";
import { GeneralHeader } from "./GeneralHeader";
import phone from "../assets/icons/category/Category-CellPhone.svg";
import computer from "../assets/icons/category/Category-Computer.svg";
import smartWatch from "../assets/icons/category/Category-SmartWatch.svg";
import camera from "../assets/icons/category/Category-Camera.svg";
import headphone from "../assets/icons/category/Category-Headphone.svg";
import gamepad from "../assets/icons/category/Category-Gamepad.svg";
import { useTranslation } from "react-i18next";

export const Category = () => {
  const { t } = useTranslation();
  return (
    <div className=" border-b-2 border-t-2 pb-[70px] pt-[80px]">
      <GeneralHeader
        label={t("description.Categories")}
        heading={t("description.categories.BrowseByCategory")}
        toggle
      />
      <div className="mt-[60px] flex flex-col items-center justify-between gap-5 md:flex-row md:gap-0 ">
        <CategoryCard
          image={phone}
          heading={t("description.categories.Phones")}
        />
        <CategoryCard
          image={computer}
          heading={t("description.categories.Computers")}
        />
        <CategoryCard
          image={smartWatch}
          heading={t("description.categories.SmartWatch")}
        />
        <CategoryCard
          image={camera}
          heading={t("description.categories.Camera")}
        />
        <CategoryCard
          image={headphone}
          heading={t("description.categories.HeadPhones")}
        />
        <CategoryCard
          image={gamepad}
          heading={t("description.categories.Gaming")}
        />
      </div>
    </div>
  );
};
