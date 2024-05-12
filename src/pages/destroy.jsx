import { redirect } from "react-router-dom";
import {
  addToUserDB,
  auth,
  getUserWishlistItems,
  removeFieldFromUserDB,
  removeFromUserDB,
} from "../firebase.config";

export async function action({ params }) {
  const user = auth.currentUser;
  console.log("removed", params.heading);
  await removeFieldFromUserDB(user.uid, "wishlist", params.heading);

  if (params.heading.toLowerCase() === "move all to bag") {
    const { productItems } = await getUserWishlistItems(user.uid);
    console.log(productItems);
    productItems.forEach(async (product) => {
      await addToUserDB(auth.currentUser.uid, "cart", product);
      await removeFromUserDB(auth.currentUser.uid, "wishlist", product);
    });
  }
  return redirect("../wishlist");
}
