import { redirect } from "react-router-dom";
import { auth, updateProductAmount } from "../firebase.config";

export async function action({ params }) {
  const user = auth.currentUser;
  await updateProductAmount(user.uid, "cart", params.heading, params.amount);
  return redirect("../account/cart");
}
