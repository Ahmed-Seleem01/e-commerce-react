import { redirect } from "react-router-dom";
import {
  addToUserDB,
  getCardItems,
  updateProductStatus,
} from "../firebase.config";
import getUserUID from "../components/general/userAuth";

export async function action({ params }) {
  let product = {};
  const userUID = await getUserUID();
  const cardItems = await getCardItems("home", params.label);

  cardItems.cards.forEach((card) => {
    if (card.heading === params.heading) {
      const { mainImage: cardImage } = card;
      product = { ...card, cardImage, label: params.label, amount: 1 };
    }
  });

  await updateProductStatus(params.label, params.heading, "isInCart", true);
  await addToUserDB(userUID, "cart", product);

  return redirect("..");
}
