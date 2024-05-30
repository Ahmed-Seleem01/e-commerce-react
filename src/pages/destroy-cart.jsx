import { redirect } from "react-router-dom";
import { auth, removeFieldFromUserDB } from "../firebase.config";

export async function action({ params }) {
  const user = auth.currentUser;
  await removeFieldFromUserDB(user.uid, "cart", params.heading);
  return redirect("../account/cart");
}
