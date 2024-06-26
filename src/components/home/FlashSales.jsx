import { useTranslation } from "react-i18next";
import { GeneralHeader } from "../general";
import { ItemCard } from "../general";

export const FlashSales = (props) => {
  const { t } = useTranslation();

  const { cards, wishlistItems, cartItems } = props;
  return (
    <div className="flex flex-col gap-10 md:w-[105%]  md:pr-10">
      <GeneralHeader
        label={t("description.flash.Today")}
        heading={t("description.flash.FlashSales")}
        toggle
        dateCounter
      />
      <div className="flex flex-col gap-[30px] self-center   md:flex-row md:max-lg:flex-wrap  lg:w-[110%] lg:self-start lg:overflow-x-scroll lg:pr-40">
        {cards.map((card) => (
          <ItemCard
            key={card.productId}
            cardImage={card.mainImage}
            heading={card.heading}
            currentPrice={card.currentPrice}
            oldPrice={card.oldPrice}
            discount={card.discount}
            rating={card.rating}
            ratingValue={card.ratingValue}
            isInCart={cartItems.some(
              (item) => item.productId === card.productId,
            )}
            isInWishlist={wishlistItems.some(
              (item) => item.productId === card.productId,
            )}
            label="flashSales"
          />
        ))}
      </div>
      <button className="mt-5 self-center rounded bg-[#DB4444] px-12 py-4 text-base font-semibold text-white">
        {t("description.ViewAllProducts")}
      </button>
    </div>
  );
};
