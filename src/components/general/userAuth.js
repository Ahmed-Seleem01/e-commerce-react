import { getAuth, onAuthStateChanged } from 'firebase/auth';

const getUserUID = () => {
  const auth = getAuth();

  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user.uid);
      } else {
        reject(new Error('User not authenticated'));
      }
      unsubscribe();
    });
  });
};

export default getUserUID;
