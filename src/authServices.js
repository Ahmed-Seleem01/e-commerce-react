import { GoogleAuthProvider, createUserWithEmailAndPassword, 
    getRedirectResult, 
    signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "./firebase.config";
import { isMobile } from 'react-device-detect';

export const signUpAndSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider)

    getRedirectResult(auth).then((result) => {
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
    
    
      signInWithRedirect(auth, provider).catch((error) => {
            // Handle errors here.
            const errorMessage = error.message;
            console.error(errorMessage);
          });

      // Another method by popup
    // signInWithPopup(auth, provider).catch((error) => {
    //     // Handle errors here.
    //     const errorMessage = error.message;
    //     console.error(errorMessage);
    //   });
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