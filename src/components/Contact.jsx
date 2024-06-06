import phone from "../assets/icons/icons-phone.svg";
import email from "../assets/icons/icons-mail.svg";
import { PathDisplay } from "./general";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <PathDisplay path={window.location.pathname} />
      <div className=" md: flex w-full  flex-col  justify-between gap-10 md:flex-row md:gap-0 md:max-lg:flex-wrap">
        <div
          style={{ boxShadow: "0px 0px 5px 1px #eee" }}
          className="flex max-h-[460px] max-w-[340px] flex-col gap-8 px-[35px] pb-5 pt-10 md:pb-0"
        >
          <div className="flex flex-col">
            <span className="flex items-center gap-4 font-medium">
              <img src={phone} alt="phone icon" />
              {t("description.call.CallToUs")}
            </span>
            <span className="mt-6 flex flex-col gap-4 text-sm">
              <span> {t("description.call.Availability")}</span>
              <span>Phone: +8801611112222</span>
            </span>
          </div>

          <span className=" inline-block h-[1px] w-full bg-gray-400"></span>

          <div className="flex flex-col">
            <span className="flex items-center gap-4 font-medium">
              <img src={email} alt="mail icon" />
              {t("description.call.WriteToUs")}
            </span>
            <span className="mt-6 flex flex-col gap-4 text-sm">
              <span>{t("description.call.ContactFormInstruction")}</span>
              <span>Emails: customer@exclusive.com</span>
              <span>Emails: support@exclusive.com</span>
            </span>
          </div>
        </div>

        <div
          className="max-w-[800px]  px-8 py-10 md:max-h-[460px]"
          style={{ boxShadow: "0px 0px 5px 1px #eee" }}
        >
          <form className="flex flex-col gap-8">
            <span className="flex flex-col justify-between gap-4 md:flex-row ">
              <label className="group relative mb-2 flex max-w-[235px] flex-col text-gray-500">
                <input
                  className="peer h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                  type="text"
                  name="firstName"
                  required
                />
                <span className="absolute left-4 top-3 peer-focus:hidden">
                  {t("description.call.YourName")}
                  <span className=" text-red-400">*</span>
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
                  {t("description.call.YourEmail")}
                  <span className=" text-red-400">*</span>
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
                  {t("description.call.YourPhone")}
                  <span className=" text-red-400">*</span>
                </span>
              </label>
            </span>
            <textarea
              className="h-[210px] w-full bg-[#F5F5F5] pl-4 pt-3"
              placeholder={t("description.call.YourMessage")}
              name=""
              id=""
            ></textarea>
            <button className=" primary-button font-medium md:self-end">
              {t("description.call.SendMessage")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
