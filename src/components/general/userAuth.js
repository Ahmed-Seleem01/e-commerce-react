import { getAuth, onAuthStateChanged } from 'firebase/auth';

const getUserUID = () => {
  const auth = getAuth();

  return new Promise((resolve,) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user.uid);
      } else {
        resolve(null);
      }
      unsubscribe();
    });
  });
};

export default getUserUID;
