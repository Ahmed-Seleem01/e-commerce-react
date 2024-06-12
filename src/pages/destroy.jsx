import { redirect } from "react-router-dom";
import {
  addToUserDB,
  getUserItems,
  removeFieldFromUserDB,
  removeFromUserDB,
  updateProductStatus,
} from "../firebase.config";
import getUserUID from "../components/general/userAuth";

async function updateStatus(products, label, status) {
  for (const product of products) {
    await updateProductStatus(product.label, product.heading, label, status);
  }
}

export async function action({ params }) {
  const userUID = await getUserUID();

  if (params.heading.toLowerCase() === "move all to bag") {
    let { productItems } = await getUserItems(userUID, "wishlist");
    productItems = productItems.map((product) => ({ ...product, amount: 1 }));
    await removeFromUserDB(userUID, "wishlist");
    await addToUserDB(userUID, "cart", productItems);
    await updateStatus(productItems, "isInWishlist", false);
    await updateStatus(productItems, "isInCart", true);
  } else {
    await removeFieldFromUserDB(userUID, "wishlist", params.heading);
    await updateProductStatus(
      params.label,
      params.heading,
      "isInWishlist",
      false,
    );
  }
  return redirect("../wishlist");
}
