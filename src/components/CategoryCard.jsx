export const CategoryCard = (props) => {
  const { image, heading } = props;
  return (
    <button className="group flex h-[145px] w-[170px] flex-col items-center justify-center gap-4 rounded border-2 text-black hover:bg-[#DB4444]">
      <img
        className=" group-hover:invert"
        src={image}
        alt={`${heading} category`}
      />
      <h5 className=" group-hover:invert">{heading}</h5>
    </button>
  );
};
