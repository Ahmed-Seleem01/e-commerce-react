export const FeatureCard = (props) => {
  const { heading, description, children } = props;
  return (
    <div className="relative flex min-h-[285px] rounded bg-black px-[32px] pb-0">
      {children}
      <div className="absolute bottom-[25px] flex flex-col gap-4 text-[#FAFAFA]">
        <h5 className=" font-Inter text-2xl/6  font-semibold ">{heading}</h5>
        <p className="max-w-[300px]">{description}</p>
        <a className=" w-[81px] border-b-[1px] text-base font-medium" href="#">
          Shop Now
        </a>
      </div>
    </div>
  );
};
