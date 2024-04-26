import sideImage from "../assets/images/Side Image.png";
import googleIcon from "../assets/icons/Icon-Google.svg";

export const SignUP = () => {
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
            Create an account
          </h2>
          <span>Enter your details below</span>
        </div>
        <div className="flex flex-col gap-10">
          <input
            className="border-b-[1px] outline-none"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
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
          <div className="mb-8 flex flex-col gap-4">
            <button className=" rounded-[4px] bg-[#DB4444] py-4 text-[16px]/6 font-medium text-[#FAFAFA]">
              Create Account
            </button>
            <button className="flex items-center justify-center gap-4 rounded-[4px] border-[1px] py-4 text-[16px]/6 font-normal">
              <img src={googleIcon} alt="google icon" />
              Sign up with Google
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 text-gray-600">
          <span>Already have account?</span>
          <a className=" font-medium underline">Log in</a>
        </div>
      </form>
    </div>
  );
};
