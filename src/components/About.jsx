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

export const About = () => {
  return (
    <div className="mb-[140px] flex flex-col gap-[140px]">
      <div className="flex items-center justify-between">
        <div className="w-[525px]">
          <h1 className="font-Inter text-[54px]/[64px] font-semibold">
            Our Story
          </h1>
          <p className="mb-6 mt-10">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="mr-[-90px] h-[605px] w-[705px] bg-[#EB7EA8]"></div>
      </div>
      <div className="flex justify-between">
        <AboutCard
          image={shop}
          heading="10.5k"
          description="Sallers active our site"
        />
        <AboutCard
          image={sale}
          heading="33k"
          description="Mopnthly Produduct Sale"
        />
        <AboutCard
          image={shoppingBag}
          heading="45.5k"
          description="Customer active in our site"
        />
        <AboutCard
          image={moneyBag}
          heading="25k"
          description="Anual gross sale in our site"
        />
      </div>
      <div className="flex justify-between">
        <AboutCardPerson
          image={tom}
          heading="Tom Cruise"
          description="Founder & Chairman"
        />
        <AboutCardPerson
          image={tom2}
          heading="Will Smith"
          description="Managing Director"
        />
        <AboutCardPerson
          image={tom2}
          heading="Will Smith"
          description="Product Designer"
        />
      </div>
      <div className="flex justify-between gap-[30px]">
        <FeatureCardSmall
          image={delivery}
          heading="FREE AND FAST DELIVERY"
          description="Free delivery for all orders over $140"
        />
        <FeatureCardSmall
          image={service}
          heading="24/7 CUSTOMER SERVICE"
          description="Friendly 24/7 customer support"
        />
        <FeatureCardSmall
          image={secure}
          heading="MONEY BACK GUARANTEE"
          description="We return money within 30 days"
        />
      </div>
    </div>
  );
};