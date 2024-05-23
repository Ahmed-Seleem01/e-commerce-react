import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { arrayUnion, collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";

// import {v4 as uuidv4} from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyBbpfccgap6pQdwty84oj7NHcLaN_Fyfjo",
  authDomain: "e-commerce-1d8ff.firebaseapp.com",
  projectId: "e-commerce-1d8ff",
  storageBucket: "e-commerce-1d8ff.appspot.com",
  messagingSenderId: "107627747970",
  appId: "1:107627747970:web:df1e87a026c51db8b7f29b",
  measurementId: "G-4C5S0HBJBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize authentication
export const auth = getAuth(app);
export const analytics = getAnalytics(app);


const db = getFirestore(app);

export const getCardItems = async (collection, documentId) => {
    const docRef = doc(db, collection, documentId);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      console.log('Document data:', docSnapshot.data().cards);
      return docSnapshot.data()
    } else {
      console.log('No such document!');
    }

}

// const card = {
//   productId: uuidv4(),
//   mainImage:
//   "https://firebasestorage.googleapis.com/v0/b/e-commerce-1d8ff.appspot.com/o/items%2Fsatin-jacket.png?alt=media&token=19dfdad4-834e-42c0-8944-a6ce05a53fb7",
//   heading: "Quilted Satin Jacket",
//   currentPrice: 660,
//   oldPrice: 0,
//   discount: 0,
//   rating: 55,
//   description:
//     "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
//   sizes: ["XS", "S", "M", "L", "XL"],
//   subImages: ["https://firebasestorage.googleapis.com/v0/b/e-commerce-1d8ff.appspot.com/o/items%2Fsatin-jacket.png?alt=media&token=19dfdad4-834e-42c0-8944-a6ce05a53fb7", "https://firebasestorage.googleapis.com/v0/b/e-commerce-1d8ff.appspot.com/o/items%2Fsatin-jacket.png?alt=media&token=19dfdad4-834e-42c0-8944-a6ce05a53fb7", "https://firebasestorage.googleapis.com/v0/b/e-commerce-1d8ff.appspot.com/o/items%2Fsatin-jacket.png?alt=media&token=19dfdad4-834e-42c0-8944-a6ce05a53fb7", "https://firebasestorage.googleapis.com/v0/b/e-commerce-1d8ff.appspot.com/o/items%2Fsatin-jacket.png?alt=media&token=19dfdad4-834e-42c0-8944-a6ce05a53fb7"],
//   colors: ["yellow", "red"],
// }

export const addToUserDB= async (userId, docId, data)=>{
  const userRef = doc(db, "users", userId);
  const itemsRef = doc(userRef, docId, "items");
  setDoc(
    itemsRef,
    {
      productItems: arrayUnion(data)
    },
    { merge: true },
  );

}

export const getUserCartItems = async (userId)=>{
  const docRef = doc(db, "users", userId);
  const itemsRef = doc(docRef, "cart", "items");

  const docSnapshot = await getDoc(itemsRef);

  if (docSnapshot.exists()) {
    console.log('Document data:', docSnapshot.data().productItems);
    return docSnapshot.data()
  } else {
    console.log('No such document!');
  }
}

export const getUserWishlistItems = async (user)=>{
  const docRef = doc(db, "users", user);
  const itemsRef = doc(docRef, "wishlist", "items");

  const docSnapshot = await getDoc(itemsRef);

  if (docSnapshot.exists()) {
    console.log('Document data:', docSnapshot.data().productItems);
    return docSnapshot.data()
  } else {
    console.log('No such document!');
  }
}

export const removeFromUserDB = async(userId, docId )=> {
  const userRef = doc(db, "users", userId);
  const itemsRef = doc(userRef, docId, "items")
  console.log(itemsRef)
  setDoc(
    itemsRef,
    {
      productItems: []
    },
  ).then(() => {
      console.log('Document successfully deleted');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
}

export const removeFieldFromUserDB = async (userId, docId, productName )=> {
  const userRef = doc(db, "users", userId);
  const itemsRef = doc(userRef, docId, "items")
  console.log(itemsRef)
  const products = docId === "wishlist" ? await getUserWishlistItems(userId): await getUserCartItems(userId)
  console.log(products)
  setDoc(
    itemsRef,
    {
      productItems: products.productItems.filter(product=> product.heading !== productName)
    },
    { merge: true },
  ).then(() => {
      console.log('Document successfully deleted');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
}


export const getProduct = async (productName)=>{
  let product = []
  const collectionRef = collection(db, "home");
  const querySnapshot = await getDocs(collectionRef)

querySnapshot.forEach((doc) => {
  const productArr = doc.data().cards.filter(card => {
    console.log(card.heading.toLowerCase())
        return card.heading.toLowerCase().includes(productName.toLowerCase()); 
  });
  if (productArr.length ){
    product = productArr
    return;
  }
})
console.log(product)
return product
}
