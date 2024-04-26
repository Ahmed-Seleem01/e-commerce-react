import sideImage from "../assets/images/Side Image.png";

export const SignIn = () => {
  return (
    <div className="mb-[140px] mt-[60px] flex w-[100%] items-center justify-between">
      <img
        className="ml-[-100px] w-auto max-w-[800px]"
        src={sideImage}
        alt="side page image"
      />
      <form className=" w-[370px]">
        <div className="mb-12">
          <h2 className=" mb-6 font-Inter text-[36px]/[30px] font-semibold">
            Log in to Exclusive
          </h2>
          <span>Enter your details below</span>
        </div>
        <div className="flex flex-col gap-10">
          <input
            className="border-b-[1px] outline-none"
            type="text"
            name="email-phone"
            id="email-phone"
            placeholder="Email or Phone Number"
          />
          <input
            className="border-b-[1px] outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <div className="flex items-center justify-between gap-4">
            <button className=" rounded-[4px] bg-[#DB4444] px-12 py-4 text-[16px]/6 font-medium text-[#FAFAFA]">
              Log In
            </button>
            <a className="text-[#DB4444]">Forget Password?</a>
          </div>
        </div>
      </form>
    </div>
  );
};
