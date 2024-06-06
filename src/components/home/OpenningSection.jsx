import { useTranslation } from "react-i18next";
import appleIcon from "../../assets/icons/appleIcon.svg";
import arrowIcon from "../../assets/icons/arrow.svg";
import heroPhone from "../../assets/images/hero_phone.png";

export const OpenningSection = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-between md:flex-row md:items-start md:gap-[45px]">
      <nav className=" self-stretch pr-4 pt-10 md:border-r-2">
        <ul className="flex flex-col items-center gap-4 md:w-[217px] md:items-stretch">
          <li className="flex items-center justify-between md:w-[100%]">
            {t("description.opening.WomanFashion")}
            <span className="hidden size-2 rotate-45 border-r-2 border-t-2 border-black md:inline-block"></span>
          </li>
          <li className="flex items-center justify-between md:w-[100%]">
            {t("description.opening.MenFashion")}

            <span className=" hidden size-2 rotate-45 border-r-2 border-t-2 border-black md:inline-block "></span>
          </li>
          <li> {t("description.opening.Electronics")}</li>
          <li> {t("description.opening.HomeLifestyle")}</li>
          <li> {t("description.opening.Medicine")}</li>
          <li> {t("description.opening.SportsOutdoor")}</li>
          <li> {t("description.opening.BabyToys")}</li>
          <li> {t("description.opening.GroceriesPets")}</li>
          <li> {t("description.opening.HealthBeauty")}</li>
        </ul>
      </nav>
      <div className="mt-10 flex flex-col items-center bg-black px-5 py-4 text-[#FAFAFA]  md:pl-16 md:pr-10 ">
        <div className="flex flex-col items-center gap-6 md:flex-row md:max-lg:flex-wrap">
          <div className="flex flex-col items-center gap-5 md:max-w-[300px] md:items-start">
            <div className="flex items-center gap-6 text-center md:text-start">
              <img src={appleIcon} alt="apple icon" /> iPhone 14 Series
            </div>
            <h2 className=" text-center font-Inter text-5xl/[60px] font-semibold md:text-start">
              Up to 10% off Voucher
            </h2>
            <div className="flex gap-2">
              <a
                className=" border-b-[1px] pb-1 text-base font-medium"
                href="#"
              >
                Shop Now
              </a>
              <img src={arrowIcon} alt="arrow icon" />
            </div>
          </div>
          <img src={heroPhone} alt="hero openning image" />
        </div>
        <div className="flex gap-3 md:ml-[-150px] md:mt-[-20px]">
          <span className="inline-block size-3 rounded-full bg-gray-500 "></span>
          <span className="inline-block size-3 rounded-full bg-gray-500 "></span>
          <span className="inline-block size-3 rounded-full bg-gray-500 "></span>
          <span className="inline-block size-3 rounded-full bg-gray-500 "></span>
          <span className="inline-block size-3 rounded-full bg-gray-500 "></span>
        </div>
      </div>
    </div>
  );
};
