import { GoogleAuthProvider, createUserWithEmailAndPassword, 
    getRedirectResult, 
    signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "./firebase.config";

export const signUpAndSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then((result) => {
        // The signed-in user info.
        const user = result.user;
        
        // Create a new account in Firebase using the Google credentials
        createUserWithEmailAndPassword(auth, user.email, 'randomPassword')
          .then(() => {
            console.log('User created successfully');
          })
          .catch((error) => {
            console.error('Error creating user:', error.message);
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

export const signUpWithEmailAndPassword = ( email, password ) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
};

export const loginWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  signOut(auth)
};