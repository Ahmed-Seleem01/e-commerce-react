import { redirect } from "react-router-dom";
import {
  addToUserDB,
  getUserItems,
  removeFieldFromUserDB,
  removeFromUserDB,
  updateProductStatus,
} from "../firebase.config";
import getUserUID from "../components/general/userAuth";

export async function action({ params }) {
  const userUID = await getUserUID();
  await removeFieldFromUserDB(userUID, "wishlist", params.heading);
  await updateProductStatus(
    params.label,
    params.heading,
    "isInWishlist",
    false,
  );

  if (params.heading.toLowerCase() === "move all to bag") {
    const { productItems } = await getUserItems(userUID, "wishlist");
    await removeFromUserDB(userUID, "wishlist");
    await addToUserDB(userUID, "cart", productItems);
  }
  return redirect("../wishlist");
}
