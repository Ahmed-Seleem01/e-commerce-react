import { FeatureCardSmall } from "./FeatureCardSmall";
import delivery from "../assets/icons/icon-delivery.svg";
import service from "../assets/icons/Icon-Customer-service.svg";
import secure from "../assets/icons/Icon-secure.svg";
import { AboutCard } from "./AboutCard";
import { AboutCardPerson } from "./AboutCardPerson";

import shop from "../assets/icons/icon_shop.svg";
import sale from "../assets/icons/Icon-Sale.svg";
import shoppingBag from "../assets/icons/Icon-Shopping-bag.svg";
import moneyBag from "../assets/icons/Icon-Moneybag.svg";

import tom from "../assets/icons/tom.png";

import tom2 from "../assets/icons/tom2.png";
import { PathDisplay } from "./PathDisplay";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <PathDisplay path={window.location.pathname} />
      <div className="mt-[-40px] flex flex-col gap-[140px]">
        <div className="flex flex-col items-center justify-between md:flex-row md:max-lg:flex-wrap">
          <div className="md:w-[525px]">
            <h1 className="font-Inter text-[54px]/[64px] font-semibold">
              {t("description.About.OurStory")}
            </h1>
            <p
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
              className="mb-6 mt-10"
            >
              {t("description.About.Launched2015")}
            </p>
            <p dir={i18n.language === "ar" ? "rtl" : "ltr"}>
              {t("description.About.ExclusiveOffers")}
            </p>
          </div>
          <div className="hidden h-[605px] w-[655px] bg-[#EB7EA8] md:mr-[-140px] lg:inline-block"></div>
        </div>

        <div className="flex flex-col justify-between gap-10 self-center md:flex-row md:gap-0 md:self-start md:max-lg:flex-wrap">
          <AboutCard
            image={shop}
            heading="10.5k"
            description={t("description.About.SellersActiveOurSite")}
          />
          <AboutCard
            image={sale}
            heading="33k"
            description={t("description.About.MonthlyProductSale")}
          />
          <AboutCard
            image={shoppingBag}
            heading="45.5k"
            description={t("description.About.CustomerActiveOurSite")}
          />
          <AboutCard
            image={moneyBag}
            heading="25k"
            description={t("description.About.AnnualGrossSaleOurSite")}
          />
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col justify-between gap-10 md:flex-row  md:max-lg:flex-wrap">
            <AboutCardPerson
              image={tom}
              heading="Tom Cruise"
              description={t("description.About.FounderAndChairman")}
            />
            <AboutCardPerson
              image={tom2}
              heading="Will Smith"
              description={t("description.About.ManagingDirector")}
            />
            <AboutCardPerson
              image={tom2}
              heading="Will Smith"
              description={t("description.About.ProductDesigner")}
            />
          </div>
          <div className="flex gap-3 self-center">
            <span className="inline-block size-3 rounded-full bg-gray-500 hover:border-2 hover:bg-[#DB4444] hover:outline hover:outline-gray-400 "></span>
            <span className="inline-block size-3 rounded-full bg-gray-500 hover:border-2 hover:bg-[#DB4444] hover:outline hover:outline-gray-400"></span>
            <span className="inline-block size-3 rounded-full bg-gray-500 hover:border-2 hover:bg-[#DB4444] hover:outline hover:outline-gray-400"></span>
            <span className="inline-block size-3 rounded-full bg-gray-500 hover:border-2 hover:bg-[#DB4444] hover:outline hover:outline-gray-400 "></span>
            <span className="inline-block size-3 rounded-full bg-gray-500 hover:border-2 hover:bg-[#DB4444] hover:outline hover:outline-gray-400 "></span>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-[30px] md:flex-row">
          <FeatureCardSmall
            image={delivery}
            heading={t("description.Services.FREEANDFASTDELIVERY")}
            description={t("description.Services.Freedelivery")}
          />
          <FeatureCardSmall
            image={service}
            heading={t("description.Services.CUSTOMERSERVICE")}
            description={t("description.Services.customersupport")}
          />
          <FeatureCardSmall
            image={secure}
            heading={t("description.Services.MONEYBACK")}
            description={t("description.Services.ReturnMoney")}
          />
        </div>
      </div>
    </div>
  );
};
