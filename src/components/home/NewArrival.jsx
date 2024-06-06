import { GeneralHeader } from "../general";
import { FeatureCard } from "./FeatureCard";
import playstation from "../../assets/images/items/playstation_large.png";
import speakers from "../../assets/images/items/speakers2.png";

import { FeatureCardSmall } from "./FeatureCardSmall";
import perfum from "../../assets/images/items/perfum.png";
import delivery from "../../assets/icons/icon-delivery.svg";
import service from "../../assets/icons/Icon-Customer-service.svg";
import secure from "../../assets/icons/Icon-secure.svg";
import { useTranslation } from "react-i18next";

export const NewArrival = () => {
  const { t } = useTranslation();

  return (
    <div>
      <GeneralHeader
        label={t("description.NewArrival.Featured")}
        heading={t("description.NewArrival.NewArrival")}
      />
      <div className="mb-[140px] mt-[60px] flex flex-col justify-between gap-10 md:flex-wrap lg:flex-row lg:gap-0">
        <FeatureCard
          image={playstation}
          heading={t("description.NewArrival.PlayStation5")}
          description={t("description.NewArrival.PlayStation5")}
        >
          <img className="self-end" src={playstation} alt="large playstation" />
        </FeatureCard>
        <div className=" flex flex-col justify-between gap-8 md:max-xl:mt-10">
          <FeatureCard
            heading={t("description.NewArrival.WomenCollections")}
            description={t("description.NewArrival.FeaturedDescription")}
          ></FeatureCard>
          <div className="flex flex-col gap-[30px] md:flex-row">
            <FeatureCard
              heading={t("description.NewArrival.Speakers")}
              description={t("description.NewArrival.WirelessSpeakers")}
            >
              <img
                className="self-center"
                src={speakers}
                alt="large playstation"
              />
            </FeatureCard>
            <FeatureCard
              heading={t("description.NewArrival.Perfume")}
              description={t("description.NewArrival.GucciIntenseOudEDP")}
            >
              <img className="self-center" src={perfum} alt="perfume" />
            </FeatureCard>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-0">
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
  );
};
