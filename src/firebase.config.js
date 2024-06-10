import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { arrayUnion, collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";

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
      return docSnapshot.data()
    } else {
      console.log('No such document!');
    }

}

export const addToUserDB= async (userId, docId, data)=>{
  const userRef = doc(db, "users", userId);
  const itemsRef = doc(userRef, docId, "items");
  
  if(Array.isArray(data)){
    const { productItems } = await getUserItems(userId, docId);
    await setDoc(
      itemsRef,
      {
        productItems: [...productItems, ...data]
      },
      { merge: true },
    );
  }else{
    await setDoc(
      itemsRef,
      {
        productItems: arrayUnion(data)
      },
      { merge: true },
    );
    }
  }

export const getUserItems = async (userId, docId)=>{
  const docRef = doc(db, "users", userId);
  const itemsRef = doc(docRef, docId, "items");

  const docSnapshot = await getDoc(itemsRef);

  if (docSnapshot.exists()) {
    return docSnapshot.data()
  } else {
    console.log('No such document!');
  }
}

export const removeFromUserDB = async(userId, docId )=> {
  const userRef = doc(db, "users", userId);
  const itemsRef = doc(userRef, docId, "items")
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
  const products =  await getUserItems(userId, docId);
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

export const updateProductAmount = async (userId, docId, productName, amount=0 )=> {
  const userRef = doc(db, "users", userId);
  const itemsRef = doc(userRef, docId, "items")
  const products =  await getUserItems(userId, docId);
  setDoc(
    itemsRef,
    {
      productItems: products.productItems.map(product=> {
        if(product.heading === productName){
          product.amount = Number(amount);
        }
        return product;
      })
    },
    { merge: true },
  ).then(() => {
      console.log('Document successfully deleted');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
}

export const updateProductStatus = async ( docId, productName, section, status )=> {
  const homeRef = doc(db, "home", docId);
  // const itemsRef = doc(userRef, docId, "items")
  const products =  await getCardItems("home", docId);
  setDoc(
    homeRef,
    {
      cards: products.cards.map (product => {
        if(product.heading === productName){
          product[section] = status;
        }
        return product;
      })
    },
    { merge: true },
  ).then(() => {
      console.log('Document successfully modified');
    })
    .catch((error) => {
      console.error('Error modifying document: ', error);
    });
}

export const getProduct = async (productName)=>{
  let product = []
  const collectionRef = collection(db, "home");
  const querySnapshot = await getDocs(collectionRef)

querySnapshot.forEach((doc) => {
  const productArr = doc.data().cards.filter(card => {
        return card.heading.toLowerCase().includes(productName.toLowerCase()); 
  });
  if (productArr.length ){
    product = productArr
    return;
  }
})
return product
}

// export const getCardItems2 = async (collection, documentId) => {
//   const docRef = doc(db, collection, documentId);
//   const docSnapshot = await getDoc(docRef);
//   if (docSnapshot.exists()) {
//    const modified = docSnapshot.data().cards.map((card)=>{
//       return({...card, isInCart: false, isInWishlist: false})
//    });
//    setDoc(docRef,{cards: modified},{ merge: true })

//   } else {
//     console.log('No such document!');
//   }

// }

// getCardItems2("home", "exploreProducts")



