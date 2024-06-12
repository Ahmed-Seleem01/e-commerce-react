import { redirect } from "react-router-dom";
import {
  auth,
  removeFieldFromUserDB,
  updateProductStatus,
} from "../firebase.config";

export async function action({ params }) {
  const user = auth.currentUser;
  await updateProductStatus(params.label, params.heading, "isInCart", false);

  await removeFieldFromUserDB(user.uid, "cart", params.heading);
  return redirect("../account/cart");
}
