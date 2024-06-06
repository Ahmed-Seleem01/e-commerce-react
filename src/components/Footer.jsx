import sendIcon from "../assets/icons/send.svg";
import qrcode from "../assets/icons/Qrcode.png";
import appStore from "../assets/icons/download-appstore.png";
import googleStore from "../assets/icons/google-play-store-logo.png";
import facebookIcon from "../assets/icons/Icon-Facebook.svg";
import twitterIcon from "../assets/icons/Icon-Twitter.svg";
import instagramIcon from "../assets/icons/icon-instagram.svg";
import linkedinIcon from "../assets/icons/Icon-Linkedin.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className=" relative col-span-full row-start-3 row-end-4 flex h-[100%] w-[100%] justify-center gap-2 text-[#FAFAFA] before:absolute before:z-[-1] before:h-[100%] before:w-[100vw] before:bg-black ">
      <div className="mb-[180px] mt-[80px] flex w-[100%] flex-col items-center justify-between  gap-10  px-20 md:mb-[124px] md:flex-row md:flex-wrap md:items-start md:gap-0 md:px-0">
        <div className=" ">
          <ul className="mb-4 flex flex-col items-center  gap-6 md:items-start">
            <li className="font-Inter text-2xl/6 font-bold">Exclusive</li>
            <li className=" text-xl font-medium">
              {t("description.Footer.Subscribe")}
            </li>
            <li>{t("description.Footer.firstorder")}</li>
          </ul>
          <div className="flex h-12 w-[100%] max-w-[217px] gap-8 rounded-[4px] border-[1.5px] px-4 py-3">
            <input
              className="w-[100%] bg-transparent py-3 focus:outline-none"
              type="email"
              name="mail"
              placeholder={t("description.Footer.email")}
            />
            <img className="" src={sendIcon} alt="send icon" />
          </div>
        </div>
        <div className="flex max-w-[175px] flex-col items-center   gap-6 md:items-start">
          <h2 className=" text-xl font-medium">
            {t("description.Footer.Support")}
          </h2>
          <ul className="flex flex-col gap-4">
            <li>{t("description.Footer.address")}</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-6 md:items-start">
          <h2 className=" text-xl font-medium">
            {t("description.Footer.Account")}
          </h2>
          <ul className="flex flex-col items-center gap-4 md:items-start">
            <li>
              <Link to="account">{t("description.Footer.MyAccount")}</Link>
            </li>
            <li>
              <a href="login">{t("description.Footer.LoginRegister")}</a>
            </li>
            <li>
              <Link to="cart">{t("description.Footer.Cart")}</Link>
            </li>
            <li>
              <Link to="wishlist">{t("description.Footer.Wishlist")}</Link>
            </li>
            <li>
              <Link to="">{t("description.Footer.Shop")}</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-6 md:items-start">
          <h2 className=" text-xl font-medium">
            {t("description.Footer.QuickLink")}
          </h2>
          <ul className="flex flex-col items-center gap-4 md:items-start">
            <li>{t("description.Footer.PrivacyPolicy")}</li>
            <li>{t("description.Footer.TermsOfUse")}</li>
            <li>{t("description.Footer.FAQ")}</li>
            <li>
              <Link to="contact">{t("description.Footer.Contact")}</Link>
            </li>
            <li>
              <Link to="about">{t("description.Footer.About")}</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-6 md:items-start">
          <h2 className=" text-xl font-medium">
            {t("description.Footer.DownloadApp")}
          </h2>
          <div>
            <p className=" text-[12px]/[18px] font-medium text-gray-400">
              {t("description.Footer.Save")}
            </p>
            <div className="mt-2 flex gap-[10px]">
              <img src={qrcode} alt="qr code" />
              <div className="flex flex-col justify-between">
                <a href="#">
                  <img src={googleStore} alt="google store icon" />
                </a>
                <a href="">
                  <img src={appStore} alt="app store icon" />
                </a>
              </div>
            </div>
          </div>
          <ul className="flex gap-6">
            <li>
              <a href="#">
                <img src={facebookIcon} alt="facebook icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitterIcon} alt="twitter icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagramIcon} alt="instagram icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={linkedinIcon} alt="linkedin icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 w-[100vw] border-t-[2px] border-slate-900 pb-6 pt-4 text-center text-gray-600">
        <p className="md-flex-row  flex flex-col md:items-center md:justify-center md:gap-[6px]">
          <span className="text-2xl">&copy;</span> Copyright Ahmed Seleem 2024.
          All right reserved
        </p>
      </div>
    </footer>
  );
};
