export const Cart = (props) => {
  const { products } = props;
  return (
    <div className="mt-[80px] w-full">
      <div>
        <ul className="grid w-full grid-cols-4 items-center justify-items-center border px-10 py-6 shadow-sm">
          <li className=" justify-self-start">Product</li>
          <li>Price</li>
          <li>Quantity</li>
          <li className="justify-self-end">Subtotal</li>
        </ul>
        {products.map((product, i) => (
          <ul
            key={i}
            className="grid w-full grid-cols-4 items-center justify-items-center border px-10 py-6 shadow-sm "
          >
            <li className="flex items-center gap-5  justify-self-start">
              <img
                className="size-[54px] object-contain"
                src={product.image}
                alt={product.heading}
              />
              {product.heading}
            </li>
            <li className="justify-self-center">${product.price}</li>
            <li>
              <input
                className=" flex w-[72px] items-center justify-center rounded border px-3 py-[6px]"
                type="number"
                defaultValue={1}
                min="01"
              />
            </li>
            <li className=" w-[65px] justify-self-end text-start">
              ${product.price * 1}
            </li>
          </ul>
        ))}
        <div className="mt-6 flex justify-between">
          <button className="rounded border px-12 py-4  font-medium">
            Return To Shop
          </button>
          <button className="rounded border px-12 py-4  font-medium">
            Update Cart
          </button>
        </div>
      </div>

      <div className="mt-[80px] flex items-start justify-between">
        <div className="flex items-center gap-4">
          <input
            className="max-w-[300px] rounded border px-6 py-4"
            type="text"
            placeholder="Coupon Code"
          />
          <button className=" primary-button">Apply coupon</button>
        </div>
        <div className="px-6 py-8">
          <h5 className=" text-xl font-medium">Cart Total</h5>
          <div className="flex flex-col py-6">
            <ul className="flex flex-col  gap-4 ">
              <li className="flex justify-between border-b pb-4">
                <span>Subtotal</span> ${1170}
              </li>
              <li className="flex justify-between border-b pb-4">
                <span>Shipping</span> Free
              </li>
              <li className="flex justify-between pb-4">
                <span>Total</span> ${1170}
              </li>
            </ul>
            <button className="primary-button">Process to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
