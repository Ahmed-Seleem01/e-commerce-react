import { GoogleAuthProvider, createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase.config";

export const signUpAndSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
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

 export const signInWithGoogle = (e) => {
    e.preventDefault()
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      
      .catch((error) => {
        // Handle errors here.
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  export const signUpWithEmailAndPassword = ( email, password ) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  export const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  export const logout = () => {
    signOut(auth)
  };