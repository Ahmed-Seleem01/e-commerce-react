import sideImage from "../assets/images/Side Image.png";
import googleIcon from "../assets/icons/Icon-Google.svg";
import {
  signUpAndSignInWithGoogle,
  signUpWithEmailAndPassword,
} from "../authServices";
import { useRef, useState } from "react";
import { updateProfile } from "firebase/auth";

export const SignUP = () => {
  const nameRef = useRef();
  const mailRef = useRef();
  const passwordRef = useRef();

  const [message, setMessage] = useState("");
  // Function to redirect to the home page
  const redirectToHomePage = () => {
    // Redirect to the home page
    window.location.href = "/";
  };

  const signUpWithGoogleHandler = (e) => {
    e.preventDefault();
    signUpAndSignInWithGoogle();
    redirectToHomePage();
  };

  const signUpWithEmailAndPasswordHandler = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(mailRef.current.value);
    console.log(passwordRef.current.value);

    signUpWithEmailAndPassword(mailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // status.success = "successful sign up";
        const user = userCredential.user;
        redirectToHomePage();
        // Update the user's display name
        updateProfile(user, {
          displayName: nameRef.current.value,
        })
          .then(() => {
            // Update successful
            console.log("Display name set:", nameRef.current.value);
          })
          .catch((error) => {
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
    <div className="mb-[140px] mt-[60px] flex w-[100%] items-center justify-between">
      <img
        className="ml-[-100px] w-auto max-w-[800px]"
        src={sideImage}
        alt="side page image"
      />
      <form onSubmit={signUpWithEmailAndPasswordHandler} className=" w-[370px]">
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
            ref={nameRef}
            required
          />
          <input
            className="border-b-[1px] outline-none"
            type="text"
            name="email-phone"
            id="email-phone"
            placeholder="Email or Phone Number"
            ref={mailRef}
            required
          />
          <input
            className="border-b-[1px] outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
          {message && <div>{message}</div>}
          <div className="mb-8 flex flex-col gap-4">
            <button className=" rounded-[4px] bg-[#DB4444] py-4 text-[16px]/6 font-medium text-[#FAFAFA]">
              Create Account
            </button>
            <button
              onClick={signUpWithGoogleHandler}
              className="flex items-center justify-center gap-4 rounded-[4px] border-[1px] py-4 text-[16px]/6 font-normal"
            >
              <img src={googleIcon} alt="google icon" />
              Sign up with Google
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 text-gray-600">
          <span>Already have account?</span>
          <a href="/login" className=" font-medium underline">
            Log in
          </a>
        </div>
      </form>
    </div>
  );
};
