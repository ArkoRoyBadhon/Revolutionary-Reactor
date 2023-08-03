import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../redux/features/product/productApi";
import { CiDeliveryTruck } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { AiTwotoneStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/product/productSlice";

const ProductPage = () => {
  const { id } = useParams();
  const { data } = useGetSingleProductQuery(id);
  const dispatch = useDispatch();

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div className="flex">
        <div className="w-[50%]">
          <div className="flex justify-center">
            <img src={data?.image} alt="image" className="w-60 " />
          </div>
          <div className="flex gap-10 mt-5">
            <img
              src={data?.image}
              alt="image"
              className="w-20 hover:shadow-md p-3"
            />
            <img
              src={data?.image}
              alt="image"
              className="w-20 hover:shadow-md p-3"
            />
            <img
              src={data?.image}
              alt="image"
              className="w-20 hover:shadow-md p-3"
            />
            <img
              src={data?.image}
              alt="image"
              className="w-20 hover:shadow-md p-3"
            />
          </div>
        </div>
        <div className="w-[50%]">
          <h2 className="text-2xl font-bold">{data?.title}</h2>
          <small>
            <b>Category: </b> {data?.category}
          </small>
          <p className="leading-3 mt-5">
            <b>Price: </b>${data?.price}
          </p>
          <small>Suggested products with EMI 0% interest</small>
          <br />
          <div className="flex items-center">
                      <AiTwotoneStar className="text-orange-400" />
                      <AiTwotoneStar className="text-orange-400" />
                      <AiTwotoneStar className="text-orange-400" />
                      <AiTwotoneStar className="text-orange-400" />
                      <AiTwotoneStar />
                      <p>(121)</p>
                    </div>

          <div className="my-5">
            <div
              onClick={() => dispatch(addToCart(data))}
              className=" my-5 rounded-3xl border border-gray-500 py-1 px-5 w-fit cursor-pointer hover:bg-green-800 font-semibold hover:border-green-800 hover:text-white transition-all ease-in"
            >
              Add To Cart
            </div>
            <div className="text-[14px]">
              Only{" "}
              <span className="text-orange-400 font-semibold">12 items</span>{" "}
              Left! <br /> Dont miss it
            </div>
          </div>
          <div className="">
            <div className="flex gap-5">
              <div className="w-[5%]">
                <CiDeliveryTruck className="text-3xl text-orange-400" />
              </div>
              <div>
                <h6 className="font-bold">Free Delivery</h6>
                <p className="text-[12px] underline cursor-pointer">
                  Enter your code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-2">
              <div className="w-[5%]">
                <SlCalender className="text-xl text-orange-400 ml-1" />
              </div>
              <div>
                <h6 className="font-bold">Return Delivery</h6>
                <p className="text-[12px] underline cursor-pointer">
                  Free 30 Days delivery Returns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="font" />
      <div className=" mt-20">
        <b className="">Description: </b> {data?.description}
      </div>
    </div>
  );
};

export default ProductPage;
