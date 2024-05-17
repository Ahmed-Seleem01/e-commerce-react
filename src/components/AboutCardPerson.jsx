import twitter from "../assets/icons/twitter.png";
import insta from "../assets/icons/insta.svg";

import linkedin from "../assets/icons/linkedin.svg";

export const AboutCardPerson = (props) => {
  const { image, heading, description } = props;
  return (
    <div className="flex flex-col md:h-[564px] md:w-[370px]">
      <div className="flex items-end justify-center bg-gray-200">
        <img className=" mt-10 object-contain" src={image}></img>
      </div>
      <h4 className=" mt-8 font-Inter text-2xl font-medium">{heading}</h4>
      <p className="mb-4 mt-2">{description}</p>
      <div className="flex items-center gap-4">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img className="size-6 p-[3px]" src={twitter}></img>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img className="size-6 p-[3px]" src={insta}></img>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img className="size-6 p-[3px]" src={linkedin}></img>
        </a>
      </div>
    </div>
  );
};
