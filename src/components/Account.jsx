import { useTranslation } from "react-i18next";
import { auth } from "../firebase.config";
import { PathDisplay } from "./PathDisplay";

export const Account = () => {
  const { t } = useTranslation();
  const userName = auth.currentUser.displayName;
  console.log(userName);
  const nameArr = userName.split(" ");
  return (
    <div className="w-full">
      <div className="mb-16 flex w-full flex-col justify-between md:mb-0 md:flex-row md:items-center ">
        <PathDisplay path={window.location.pathname} />
        <span className="-mt-14">
          {t("description.account.Welcome")}!
          <h2 className=" inline-block text-[#DB4444]">{userName}</h2>
        </span>
      </div>
      <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-0 md:max-lg:flex-wrap">
        <div className="flex flex-col gap-6">
          <div>
            <h3 className=" font-medium">
              {t("description.account.ManageMyAccount")}
            </h3>
            <ul className="ml-[35px] text-gray-400">
              <li className="mt-4">
                <a className="text-[#DB4444]" href="#">
                  {t("description.account.MyProfile")}
                </a>
              </li>
              <li>
                <a href="#">{t("description.account.AddressBook")}</a>
              </li>
              <li>
                <a href="#">{t("description.account.MyPaymentOptions")}</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className=" font-medium">
              {t("description.account.MyOrders")}
            </h3>
            <ul className="ml-[35px] text-gray-400">
              <li className="mt-4">{t("description.account.MyReturns")}</li>
              <li>{t("description.account.MyCancellations")}</li>
            </ul>
          </div>
          <div>
            <h3 className=" font-medium">
              {t("description.account.MyWishList")}
            </h3>
            <ul className="ml-[35px] text-gray-400"></ul>
          </div>
        </div>

        <div>
          <form className="flex flex-col gap-6 px-5 py-10 shadow-md md:max-h-[630px] lg:px-[80px]">
            <h3 className="text-xl font-medium text-[#DB4444]">
              {t("description.account.EditYourProfile")}
            </h3>
            <span className="flex flex-col gap-[50px] md:flex-row">
              <label className=" flex flex-col gap-2">
                <span>{t("description.account.FirstName")}</span>
                <input
                  placeholder={nameArr[0] ? `${nameArr[0]}` : ""}
                  className="h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                  type="text"
                  name="firstName"
                  required
                />
              </label>
              <label className="flex flex-col gap-2">
                <span>{t("description.account.LastName")}</span>
                <input
                  placeholder={nameArr[1] ? `${nameArr[1]}` : ""}
                  className="h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                  type="text"
                  name="firstName"
                  required
                />
              </label>
            </span>
            <span className="flex flex-col gap-[50px] md:flex-row">
              <label className="flex flex-col gap-2">
                <span>{t("description.account.Email")}</span>
                <input
                  placeholder={auth.currentUser.email}
                  className="h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                  type="email"
                  name="emailAddress"
                  required
                />
              </label>
              <label className=" flex flex-col gap-2">
                <span>{t("description.account.Address")}</span>

                <input
                  placeholder={t("description.account.KingstonAddress")}
                  className="h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                  type="text"
                  name="streetAddress"
                  required
                />
              </label>
            </span>
            <span>
              <label className="flex flex-col gap-4">
                <span>{t("description.account.PasswordChanges")}</span>
                <input
                  placeholder={t("description.account.CurrentPassword")}
                  className="h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                  type="password"
                  name=""
                />
                <input
                  placeholder={t("description.account.NewPassword")}
                  className="h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                  type="password"
                  name=""
                />
                <input
                  placeholder={t("description.account.ConfirmNewPassword")}
                  className="h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                  type="password"
                  name=""
                />
              </label>
            </span>
            <span className="flex w-full items-center justify-between gap-8 md:w-auto md:justify-start md:self-end ">
              <button>{t("description.account.Cancel")}</button>
              <button className=" primary-button px-5 text-sm  font-medium md:px-10 md:text-base">
                {t("description.account.SaveChanges")}
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};
