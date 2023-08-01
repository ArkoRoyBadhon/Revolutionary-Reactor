import { useNavigate } from "react-router-dom";
import Banner from "../component/Banner";
import { useGetAllProductsQuery } from "../redux/features/product/productApi";
import { GiSelfLove } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

const ProductListing = () => {
  const { data: productList } = useGetAllProductsQuery();
  const navigate = useNavigate()

  const handleDetailPage = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Banner />

        <div className="flex justify-between mt-10">
          <div className="flex gap-5">
            <div className="flex items-center bg-[#EAECEC] px-5 py-1 rounded-2xl cursor-pointer">
              <p className="">Headphone Type</p>
              <IoIosArrowDown className="mt-1" />
            </div>
            <div className="flex items-center bg-[#EAECEC] px-5 py-1 rounded-2xl cursor-pointer">
              <p className="">price</p>
              <IoIosArrowDown className="mt-1" />
            </div>
            <div className="flex items-center bg-[#EAECEC] px-5 py-1 rounded-2xl cursor-pointer">
              <p className="">Review</p>
              <IoIosArrowDown className="mt-1" />
            </div>
            <div className="flex items-center bg-[#EAECEC] px-5 py-1 rounded-2xl cursor-pointer">
              <p className="">Color</p>
              <IoIosArrowDown className="mt-1" />
            </div>
            <div className="flex items-center bg-[#EAECEC] px-5 py-1 rounded-2xl cursor-pointer">
              <p className="">Material</p>
              <IoIosArrowDown className="mt-1" />
            </div>
            <div className="flex items-center bg-[#EAECEC] px-5 py-1 rounded-2xl cursor-pointer">
              <p className="">Offer</p>
              <IoIosArrowDown className="mt-1" />
            </div>
            <div className="flex items-center bg-[#EAECEC] px-5 py-1 rounded-2xl cursor-pointer">
              <p className="">All Filters</p>
              <IoIosArrowDown className="mt-1" />
            </div>
          </div>
          <div className="flex items-center hover:bg-[#EAECEC] border px-5 py-1 rounded-2xl cursor-pointer">
              <p className="">Sort By</p>
              <IoIosArrowDown className="mt-1" />
            </div>
        </div>

        <h4 className="text-xl font-bold mb-8 mt-14">Products For You!</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
          {productList &&
            productList.map((product) => {
              const price = product?.price;

              const IntPrice = Math.floor(price);
              const FloatPrice = price - IntPrice;

              return (
                <div
                  key={product.id}
                  className="relative border rounded-md custom-shadow"
                >
                  <div className="absolute top-2 right-3">
                    <GiSelfLove className="text-xl hover:text-red-500 cursor-pointer" />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                    onClick={()=> handleDetailPage(product?.id)}
                      src={product?.image}
                      alt="product-img"
                      className="w-60 h-48 p-5"
                    />
                  </div>
                  <div className="px-5">
                    <div className="flex justify-between gap-5 h-14 ">
                      <p className="font-bold leading-4">
                        {product?.title.slice(0, 60)}
                        {product?.title.length > 60 && "..."}
                      </p>
                      <p className="font-bold w-20 text-center">
                        <sup>$</sup>
                        {IntPrice}
                        <sup>{FloatPrice.toFixed(2).slice(1, 4)}</sup>{" "}
                      </p>
                    </div>
                    <p className="capitalize">
                      <small>
                        <b>Category: </b>
                        {product?.category}
                      </small>
                    </p>
                    <div className=" my-5 rounded-3xl border border-gray-500 py-1 px-5 w-fit cursor-pointer hover:bg-green-800 font-semibold hover:border-green-800 hover:text-white transition-all ease-in">
                      Add To Cart
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ProductListing;
