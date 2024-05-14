import star from "../assets/icons/star.svg";
import starYellow from "../assets/icons/star-yellow.svg";

const StarRating = ({ totalStars, ratingValue }) => {
  const fullStars = Math.floor(Number(ratingValue));
  const hasHalfStar = ratingValue % 1 !== 0;
  console.log(fullStars);
  console.log(hasHalfStar);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <img
          key={index}
          src={starYellow}
          alt="yellow star"
          className="h-6 w-6 fill-current text-yellow-500"
        />
      ))}
      {hasHalfStar && (
        <span className="flex">
          <img
            src={starYellow}
            alt="yellow star"
            className="h-6 w-6 fill-current text-yellow-500"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
          <img
            src={star}
            alt="star"
            className="ml-[-24px] inline-block h-6 w-6"
            style={{ clipPath: "inset(0 0 0 50%)" }}
          />
        </span>
      )}
      {totalStars - Math.ceil(ratingValue) > 0 &&
        [...Array(totalStars - Math.ceil(ratingValue))].map((_, index) => (
          <img
            key={index + fullStars + (hasHalfStar ? 1 : 0)}
            src={star}
            alt="star"
            className="h-6 w-6 "
          />
        ))}
    </div>
  );
};

export default StarRating;
