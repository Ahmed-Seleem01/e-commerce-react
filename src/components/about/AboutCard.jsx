export const AboutCard = (props) => {
  const { image, heading, description } = props;
  return (
    <div className=" group flex h-[230px] w-[270px] cursor-pointer flex-col items-center rounded border  py-[30px] hover:bg-[#DB4444] hover:text-white ">
      <img
        className="size-[84px] rounded-full border-[10px] bg-black  p-3  group-hover:border-[#246672] group-hover:invert "
        src={image}
      ></img>
      <h4 className=" mb-3 mt-6 font-Inter text-2xl font-bold">{heading}</h4>
      <p>{description}</p>
    </div>
  );
};
