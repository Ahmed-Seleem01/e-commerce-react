import { ItemCard } from "./ItemCard";
import { auth, getProduct, getUserWishlistItems } from "../firebase.config";
import { Form, useLoaderData } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { onAuthStateChanged } from "firebase/auth";

export async function load() {
  console.log(auth);
  let user = auth.currentUser.uid;
  console.log(user);
  const productsItems = await getUserWishlistItems(user);
  const laptopProduct = await getProduct("ASUS FHD Gaming Laptop");
  const lcdProduct = await getProduct("IPS LCD Gaming Monitor");
  const gamepadProduct = await getProduct("HAVIT HV-G92 Gamepad");
  const keyboardProduct = await getProduct("AK-900 Wired Keyboard");

  return {
    productsItems,
    laptopProduct,
    lcdProduct,
    gamepadProduct,
    keyboardProduct,
  };
}

export const Wishlist = () => {
  const {
    productsItems,
    laptopProduct,
    lcdProduct,
    gamepadProduct,
    keyboardProduct,
  } = useLoaderData();
  const { productItems: products } = productsItems;

  return (
    <div className="my-[80px] flex w-full flex-col gap-[80px]">
      <div className="flex flex-col gap-[60px] ">
        <div className="flex items-center justify-between">
          <label className=" text-xl/[26px]">
            Wishlist ({products.length})
          </label>
          <Form
            action={`Move All To Bag/destroy`}
            method="post"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to move them to cart.")) {
                event.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              className="rounded border border-gray-400 px-12 py-4"
            >
              Move All To Bag
            </button>
          </Form>
        </div>
        <div className="flex flex-wrap justify-between">
          {products.map((product) => {
            product.id = uuidv4();
            const { cardImage, heading, currentPrice, oldPrice, productId } =
              product;
            return (
              <div key={productId}>
                <ItemCard
                  cardImage={cardImage}
                  heading={heading}
                  currentPrice={currentPrice}
                  oldPrice={oldPrice}
                  deleteItem
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-[60px] ">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <span className=" inline-block h-10 w-5 rounded bg-[#DB4444]"></span>
            <label className=" text-xl/[26px]">Just For You</label>
          </div>
          <button className="rounded border border-gray-400 px-12 py-4">
            See All
          </button>
        </div>
        <div className="flex justify-between">
          <ItemCard
            cardImage={laptopProduct.mainImage}
            heading="ASUS FHD Gaming Laptop"
            currentPrice="960"
            oldPrice="1160"
            discount="35"
            rating="65"
            viewItem
          />
          <ItemCard
            cardImage={lcdProduct.mainImage}
            heading="IPS LCD Gaming Monitor"
            currentPrice="1160"
            rating="65"
            viewItem
          />
          <ItemCard
            cardImage={gamepadProduct.mainImage}
            heading="HAVIT HV-G92 Gamepad"
            currentPrice="560"
            rating="65"
            newItem
            viewItem
          />
          <ItemCard
            cardImage={keyboardProduct.mainImage}
            heading="AK-900 Wired Keyboard"
            currentPrice="200"
            rating="65"
            viewItem
          />
        </div>
      </div>
    </div>
  );
};
