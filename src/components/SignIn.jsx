import sideImage from "../assets/images/Side Image.png";
import googleIcon from "../assets/icons/Icon-Google.svg";
import { loginWithEmailAndPassword, signInWithGoogle } from "../authServices";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useRef, useState } from "react";

export const SignIn = () => {
  const [isUser, setIsUser] = useState();
  const [message, setMessage] = useState("");

  useEffect(() => {
    let a = 0;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setIsUser(user);
      a = setTimeout(() => {
        if (user) redirectToHomePage();
      }, 3000);
    });

    return () => {
      unsubscribe();
      clearTimeout(a);
    };
  }, []);

  // Function to redirect to the home page
  const redirectToHomePage = () => {
    // Check if the current location is already the home page
    if (window.location.pathname !== "/") {
      // Redirect to the home page
      window.location.href = "/"; // Replace '/home' with the path to your home page
    }
  };
  const mailRef = useRef();
  const passwordRef = useRef();

  const signInWithMailAndPasswordHandler = (e) => {
    e.preventDefault();
    loginWithEmailAndPassword(mailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log("User signed in:", user.uid);
        redirectToHomePage();
      })
      .catch((error) => {
        // An error occurred
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login error:", errorCode, errorMessage);
        setMessage(errorMessage);
      });
  };

  console.log(isUser);
  return (
    <>
      {!isUser ? (
        <div className=" mt-[60px] flex w-[100%] flex-col items-center justify-between gap-20 md:flex-row md:flex-wrap md:gap-0">
          <img
            className="w-auto md:ml-[-100px] md:max-w-[800px]"
            src={sideImage}
            alt="side page image"
          />
          <form className=" md:w-[370px]">
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
                ref={mailRef}
              />
              <input
                className="border-b-[1px] outline-none"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                ref={passwordRef}
              />
              {message && <div>{message}</div>}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={signInWithMailAndPasswordHandler}
                  className=" rounded-[4px] bg-[#DB4444] px-12 py-4 text-[16px]/6 font-medium text-[#FAFAFA]"
                >
                  Log In
                </button>
                <a className="text-[#DB4444]">Forget Password?</a>
                <button
                  onClick={signInWithGoogle}
                  className="flex cursor-pointer items-center justify-center gap-4 rounded-[4px] border-[1px] p-4 text-[16px]/6 font-normal"
                >
                  <img src={googleIcon} alt="google icon" />
                  Sign in with Google
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
