import sideImage from "../assets/images/Side Image.png";
import googleIcon from "../assets/icons/Icon-Google.svg";
import {
  signUpAndSignInWithGoogle,
  signUpWithEmailAndPassword,
} from "../authServices";
import { useRef, useState } from "react";
import { updateProfile } from "firebase/auth";
import { useTranslation } from "react-i18next";

export const SignUP = () => {
  const { t } = useTranslation();
  const nameRef = useRef();
  const mailRef = useRef();
  const passwordRef = useRef();

  const [message, setMessage] = useState("");
  // Function to redirect to the home page
  const redirectToHomePage = () => {
    // Redirect to the home page
    window.location.href = "/";
  };

  const signUpWithGoogleHandler = async (e) => {
    e.preventDefault();
    await signUpAndSignInWithGoogle();
    redirectToHomePage();
  };

  const signUpWithEmailAndPasswordHandler = (e) => {
    e.preventDefault();
    signUpWithEmailAndPassword(mailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // status.success = "successful sign up";
        const user = userCredential.user;
        redirectToHomePage();
        // Update the user's display name
        updateProfile(user, {
          displayName: nameRef.current.value,
        }).catch((error) => {
          // An error occurred
          console.error("Update profile error:", error.message);
        });
      })
      .catch((error) => {
        // An error occurred
        setMessage(`Sign-up error: ${error.message}`);
        console.error("Sign-up error:", error.code, { error });
      });
  };

  return (
    <div className="md-flex-row mt-[60px] flex w-[100%] flex-col items-center justify-between gap-20 md:gap-0 lg:flex-row lg:flex-wrap">
      <img
        className="w-auto md:ml-[-100px] md:max-w-[800px]"
        src={sideImage}
        alt="side page image"
      />
      <form
        onSubmit={signUpWithEmailAndPasswordHandler}
        className=" md:w-[370px] md:max-xl:mt-10"
      >
        <div className="mb-12">
          <h2 className=" mb-6 font-Inter text-[36px]/[30px] font-semibold">
            {t("description.signUp.CreateAccount")}
          </h2>
          <span> {t("description.signUp.EnterDetailsBelow")}</span>
        </div>
        <div className="flex flex-col gap-10">
          <input
            className="border-b-[1px] outline-none"
            type="text"
            id="name"
            name="name"
            placeholder={t("description.signUp.Name")}
            ref={nameRef}
            required
          />
          <input
            className="border-b-[1px] outline-none"
            type="text"
            name="email-phone"
            id="email-phone"
            placeholder={t("description.signUp.EmailOrPhoneNumber")}
            ref={mailRef}
            required
          />
          <input
            className="border-b-[1px] outline-none"
            type="password"
            name="password"
            id="password"
            placeholder={t("description.signUp.Password")}
            ref={passwordRef}
            required
          />
          {message && <div>{message}</div>}
          <div className="mb-8 flex flex-col gap-4">
            <button className=" rounded-[4px] bg-[#DB4444] py-4 text-[16px]/6 font-medium text-[#FAFAFA]">
              {t("description.signUp.CreateAccountButton")}
            </button>
            <button
              onClick={signUpWithGoogleHandler}
              className="flex items-center justify-center gap-4 rounded-[4px] border-[1px] py-4 text-[16px]/6 font-normal"
            >
              <img src={googleIcon} alt="google icon" />
              {t("description.signUp.SignUpWithGoogle")}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 text-gray-600">
          <span>{t("description.signUp.AlreadyHaveAccount")}?</span>
          <a href="/login" className=" font-medium underline">
            {t("description.signUp.LogIn")}
          </a>
        </div>
      </form>
    </div>
  );
};
