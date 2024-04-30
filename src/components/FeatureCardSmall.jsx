export const FeatureCardSmall = (props) => {
  const { heading, description, image } = props;
  return (
    <div className="flex flex-col items-center gap-6 text-black">
      <img
        className="size-20 rounded-full  border-[12px] border-gray-300 bg-black p-2"
        src={image}
        alt={heading}
      />

      <div className="flex flex-col items-center gap-2">
        <h5 className=" text-xl font-semibold ">{heading}</h5>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
