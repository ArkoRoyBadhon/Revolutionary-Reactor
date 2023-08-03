import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeOneFromCart,
} from "../redux/features/product/productSlice";

const CartPage = () => {
  const { products, totalPrice } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <h2 className="text-center font-bold text-xl">My Cart</h2>
      <div className="flex flex-col-reverse md:flex-row mt-10 gap-5 mx-5 md:mx-0">
        <div className="md:w-[60%] text-[12px]">
          <div className="">
            {products.length > 0 ? (
              products.map((product) => {
                return (
                  <div
                    key={product?.id}
                    className="flex gap-10 mb-5 border rounded-md px-4 py-5"
                  >
                    <div className="flex justify-center">
                      <img src={product?.image} alt="img" className="w-20" />
                    </div>
                    <div className="flex justify-between w-full">
                      <div className=" ">
                        <p className="font-semibold">{product?.title}</p>
                        <p className="">
                          <b>Category: </b>
                          {product?.category}
                        </p>
                        <div className="flex h-fit mt-5">
                          <div
                            onClick={() => dispatch(removeOneFromCart(product))}
                            className="px-5 py-1 bg-[#F5F6F6] hover:bg-gray-200 rounded-l-2xl cursor-pointer"
                          >
                            -
                          </div>
                          <div className="px-5 py-1 bg-[#F5F6F6] hover:bg-gray-200 cursor-pointer">
                            {product?.quantity}
                          </div>
                          <div
                            onClick={() => dispatch(addToCart(product))}
                            className="px-5 py-1 bg-[#F5F6F6] hover:bg-gray-200 rounded-r-2xl cursor-pointer"
                          >
                            +
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <p>Each</p>
                        <b>${product?.price}</b>
                      </div>
                      <div className="">
                        <p>Total</p>
                        <b>
                          ${(product?.quantity * product?.price).toFixed(2)}
                        </b>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="flex justify-center items-center text-2xl pt-40">
                No Product In Cart
              </p>
            )}
          </div>
        </div>
        <div className="md:w-[40%] border h-fit px-3 py-5 rounded-md">
          <div className="sticky top-[400px]">
            <p className="text-[12px] uppercase">Enter promo code</p>
            <div className="flex">
              <form
                action=""
                className="outline outline-1 outline-blue-400  rounded-md mt-2"
              >
                <input
                  type="text"
                  placeholder="promo code"
                  className="px-2 outline-none"
                />
                <input
                  type="submit"
                  value="Apply"
                  className="bg-blue-400 hover:bg-blue-500 px-2 py-1 rounded-md text-white cursor-pointer font-bold"
                />
              </form>
            </div>
            <div className="mt-6">
              <div className="flex justify-between">
                <p className="">Total Cost</p>
                <p className="">${totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="">Tax</p>
                <p className="">${totalPrice > 0 ? 30 : 0}</p>
              </div>
              <div className="flex justify-between">
                <p className="">Delivery Charge</p>
                <p className="">${totalPrice > 0 ? 120 : 0}</p>
              </div>
              <hr className="h-px my-3 bg-gray-200 border-2 dark:bg-gray-700" />
              <div className="flex justify-between">
                <p className="">Total</p>
                <p className="">
                  ${totalPrice > 0 ? (totalPrice + 30 + 120).toFixed(2) : 0}
                </p>
              </div>

              <div className="px-20 bg-blue-400 w-fit mt-10 text-white font-bold py-1 rounded-md cursor-pointer hover:bg-blue-500">
                Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
