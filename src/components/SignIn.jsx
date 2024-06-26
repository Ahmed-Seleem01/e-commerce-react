import sideImage from "../assets/images/Side Image.png";
import googleIcon from "../assets/icons/Icon-Google.svg";
import { loginWithEmailAndPassword, signInWithGoogle } from "../authServices";
import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import authContext from "./general/context/auth-context";

export const SignIn = () => {
  const { user, loading } = useContext(authContext);
  const [message, setMessage] = useState("");

  const mailRef = useRef();
  const passwordRef = useRef();

  const { t } = useTranslation();

  useEffect(() => {
    if (user) {
      redirectToHomePage();
    }
  }, [user]);

  // Function to redirect to the home page
  const redirectToHomePage = () => {
    // Check if the current location is already the home page
    if (window.location.pathname !== "/") {
      // Redirect to the home page
      window.location.href = "/"; // Replace '/home' with the path to your home page
    }
  };

  const signInWithMailAndPasswordHandler = (e) => {
    e.preventDefault();
    loginWithEmailAndPassword(
      mailRef.current.value,
      passwordRef.current.value,
    ).catch((error) => {
      // An error occurred
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Login error:", errorCode, errorMessage);
      setMessage(errorMessage);
    });
  };

  const signInWithGoogleHandler = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then(() => redirectToHomePage())
      .catch((error) => {
        // Handle errors here.
        const errorMessage = error.message;
        setMessage(errorMessage);
      });
  };

  return (
    <>
      {!loading && !user ? (
        <div className=" mt-[60px] flex w-[100%] flex-col items-center justify-between gap-20 md:flex-row md:flex-wrap md:gap-0">
          <img
            className="w-auto md:ml-[-100px] md:max-w-[800px]"
            src={sideImage}
            alt="side page image"
          />
          <form className=" md:w-[370px]">
            <div className="mb-12">
              <h2 className=" mb-6 font-Inter text-[36px]/[30px] font-semibold">
                {t("description.login.LoginToExclusive")}
              </h2>
              <span> {t("description.login.EnterDetailsBelow")}</span>
            </div>
            <div className="flex flex-col gap-10">
              <input
                className="border-b-[1px] outline-none"
                type="text"
                name="email-phone"
                id="email-phone"
                placeholder={t("description.login.EmailOrPhoneNumber")}
                ref={mailRef}
              />
              <input
                className="border-b-[1px] outline-none"
                type="password"
                name="password"
                id="password"
                placeholder={t("description.login.Password")}
                ref={passwordRef}
              />
              {message && <div>{message}</div>}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={signInWithMailAndPasswordHandler}
                  className=" rounded-[4px] bg-[#DB4444] px-12 py-4 text-[16px]/6 font-medium text-[#FAFAFA]"
                >
                  {t("description.login.LogInButton")}
                </button>
                <a className="text-[#DB4444]">
                  {" "}
                  {t("description.login.ForgetPassword")}?
                </a>
                <button
                  onClick={signInWithGoogleHandler}
                  className="flex cursor-pointer items-center justify-center gap-4 rounded-[4px] border-[1px] p-4 text-[16px]/6 font-normal"
                >
                  <img src={googleIcon} alt="google icon" />
                  {t("description.login.SignInWithGoogle")}
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>You have already logged in, redirecting to homepage...</div>
      )}
    </>
  );
};
