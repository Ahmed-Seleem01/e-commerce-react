import phone from "../assets/icons/icons-phone.svg";
import email from "../assets/icons/icons-mail.svg";
import { PathDisplay } from "./PathDisplay";

export const Contact = () => {
  return (
    <div>
      <PathDisplay path={window.location.pathname} />
      <div className=" flex w-full  justify-between  ">
        <div
          style={{ boxShadow: "0px 0px 5px 1px #eee" }}
          className="flex max-h-[460px] max-w-[340px] flex-col gap-8 px-[35px] pt-10"
        >
          <div className="flex flex-col">
            <span className="flex items-center gap-4 font-medium">
              <img src={phone} alt="phone icon" />
              Call To Us
            </span>
            <span className="mt-6 flex flex-col gap-4 text-sm">
              <span>We are available 24/7, 7 days a week.</span>
              <span>Phone: +8801611112222</span>
            </span>
          </div>

          <span className=" inline-block h-[1px] w-full bg-gray-400"></span>

          <div className="flex flex-col">
            <span className="flex items-center gap-4 font-medium">
              <img src={email} alt="mail icon" />
              Write To US
            </span>
            <span className="mt-6 flex flex-col gap-4 text-sm">
              <span>
                Fill out our form and we will contact you within 24 hours.
              </span>
              <span>Emails: customer@exclusive.com</span>
              <span>Emails: support@exclusive.com</span>
            </span>
          </div>
        </div>

        <div
          className="max-h-[460px]  max-w-[800px] px-8 py-10"
          style={{ boxShadow: "0px 0px 5px 1px #eee" }}
        >
          <form className="flex flex-col gap-8">
            <span className="flex justify-between gap-4">
              <label className="group relative mb-2 flex max-w-[235px] flex-col text-gray-500">
                <input
                  className="peer h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                  type="text"
                  name="firstName"
                  required
                />
                <span className="absolute left-4 top-3 peer-focus:hidden">
                  Your Name<span className=" text-red-400">*</span>
                </span>
              </label>
              <label className=" relative mb-2  flex max-w-[235px] flex-col text-gray-500">
                <input
                  className="peer h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                  type="email"
                  name="emailAddress"
                  required
                />
                <span className="absolute left-4 top-3 mb-[-10px] peer-focus:hidden">
                  Your Email<span className=" text-red-400">*</span>
                </span>
              </label>
              <label className=" relative  mb-2 flex max-w-[235px] flex-col text-gray-500">
                <input
                  className="peer h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                  type="tel"
                  name="phoneNumber"
                  required
                />
                <span className="absolute left-4 top-3 mb-[-10px] peer-focus:hidden">
                  Your Phone<span className=" text-red-400">*</span>
                </span>
              </label>
            </span>
            <textarea
              className="h-[210px] w-full bg-[#F5F5F5] pl-4 pt-3"
              placeholder="Your Message"
              name=""
              id=""
            ></textarea>
            <button className=" primary-button self-end font-medium">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
