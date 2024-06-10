import { useTranslation } from "react-i18next";
import { GeneralHeader } from "../general";
import { ItemCard } from "../general";

export const BestSelling = ({ cards }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10 md:w-[105%] md:pr-10">
      <GeneralHeader
        label={t("description.bestSelling.ThisMonth")}
        heading={t("description.bestSelling.BestSellingProducts")}
        viewButton={t("description.bestSelling.ViewAll")}
      />
      <div className=" flex flex-col gap-10 self-center md:flex-row md:gap-[30px] md:self-start md:max-lg:flex-wrap">
        {cards.map((card) => (
          <ItemCard
            key={card.productId}
            cardImage={card.mainImage}
            heading={card.heading}
            currentPrice={card.currentPrice}
            oldPrice={card.oldPrice}
            rating={card.rating}
            ratingValue={card.ratingValue}
            isInCart={card.isInCart}
            isInWishlist={card.isInWishlist}
            label="bestSelling"
          />
        ))}
      </div>
    </div>
  );
};
