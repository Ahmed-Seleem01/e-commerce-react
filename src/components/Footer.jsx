import sendIcon from "../assets/icons/send.svg";
import qrcode from "../assets/icons/Qrcode 1.png";
import appStore from "../assets/icons/download-appstore.png";
import googleStore from "../assets/icons/google-play-store-logo.png";
import facebookIcon from "../assets/icons/Icon-Facebook.svg";
import twitterIcon from "../assets/icons/Icon-Twitter.svg";
import instagramIcon from "../assets/icons/icon-instagram.svg";
import linkedinIcon from "../assets/icons/Icon-Linkedin.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className=" relative col-span-full row-start-3 row-end-4 flex h-[100%] w-[100%] justify-center gap-2 text-[#FAFAFA] before:absolute before:z-[-1] before:h-[100%] before:w-[100vw] before:bg-black ">
      <div className="mb-[180px] mt-[80px] flex w-[100%] flex-col items-center  justify-between gap-10 px-20 md:mb-[124px] md:flex-row md:flex-wrap md:items-start md:gap-0">
        <div className=" ">
          <ul className="mb-4 flex flex-col items-center  gap-6 md:items-start">
            <li className="font-Inter text-2xl/6 font-bold">Exclusive</li>
            <li className=" text-xl font-medium">Subscribe</li>
            <li>Get 10% off your first order</li>
          </ul>
          <div className="flex h-12 w-[100%] max-w-[217px] gap-8 rounded-[4px] border-[1.5px] px-4 py-3">
            <input
              className="w-[100%] bg-transparent py-3 focus:outline-none"
              type="email"
              name="mail"
              placeholder="Enter your email"
            />
            <img className="" src={sendIcon} alt="send icon" />
          </div>
        </div>
        <div className="flex max-w-[175px] flex-col items-center   gap-6 md:items-start">
          <h2 className=" text-xl font-medium">Support</h2>
          <ul className="flex flex-col gap-4">
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-6 md:items-start">
          <h2 className=" text-xl font-medium">Account</h2>
          <ul className="flex flex-col items-center gap-4 md:items-start">
            <li>
              <Link to="account">My Account</Link>
            </li>
            <li>
              <a href="login">Login / Register</a>
            </li>
            <li>
              <Link to="cart">Cart</Link>
            </li>
            <li>
              <Link to="wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="">Shop</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-6 md:items-start">
          <h2 className=" text-xl font-medium">Quick Link</h2>
          <ul className="flex flex-col items-center gap-4 md:items-start">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-6 md:items-start">
          <h2 className=" text-xl font-medium">Download App</h2>
          <div>
            <p className=" text-[12px]/[18px] font-medium text-gray-400">
              Save $3 with App New User Only
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
