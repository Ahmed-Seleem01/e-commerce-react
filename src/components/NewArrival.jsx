import { GeneralHeader } from "./GeneralHeader";
import { FeatureCard } from "./FeatureCard";
import playstation from "../assets/images/items/playstation_large.png";
import speakers from "../assets/images/items/speakers2.png";

import { FeatureCardSmall } from "./FeatureCardSmall";
import perfum from "../assets/images/items/perfum.png";
import delivery from "../assets/icons/icon-delivery.svg";
import service from "../assets/icons/Icon-Customer-service.svg";
import secure from "../assets/icons/Icon-secure.svg";

export const NewArrival = () => {
  return (
    <div>
      <GeneralHeader label="Featured" heading="New Arrival" />
      <div className="mb-[140px] mt-[60px] flex justify-between ">
        <FeatureCard
          image={playstation}
          heading="PlayStation 5"
          description="Black and White version of the PS5 coming out on sale."
        >
          <img className="self-end" src={playstation} alt="large playstation" />
        </FeatureCard>
        <div className=" flex flex-col justify-between gap-8">
          <FeatureCard
            heading="Women’s Collections"
            description="Featured woman collections that give you another vibe."
          ></FeatureCard>
          <div className="flex gap-[30px]">
            <FeatureCard
              heading="Speakers"
              description="Amazon wireless speakers"
            >
              <img
                className="self-center"
                src={speakers}
                alt="large playstation"
              />
            </FeatureCard>
            <FeatureCard heading="Perfume" description="GUCCI INTENSE OUD EDP">
              <img
                className="self-center"
                src={perfum}
                alt="large playstation"
              />
            </FeatureCard>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
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
          description="We reurn money within 30 days"
        />
      </div>
    </div>
  );
};
