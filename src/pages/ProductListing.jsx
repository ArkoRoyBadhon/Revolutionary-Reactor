import { useGetAllProductsQuery } from "../redux/features/product/productApi";
import {GiSelfLove} from 'react-icons/gi'


const ProductListing = () => {
  const { data: productList } = useGetAllProductsQuery();



  return (
    <div className="max-w-screen-xl mx-auto">
      {/* <p>Navbar</p> */}
      <h4 className="">Products For You!</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {productList &&
          productList.map((product) => {

            const price = product?.price

            const IntPrice = Math.floor(price)
            const FloatPrice = price - IntPrice

            return (
              <div key={product.id} className="relative border rounded-md custom-shadow">
                <div className="absolute top-2 right-3">
                  <GiSelfLove className="text-xl hover:text-red-500 cursor-pointer" />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={product?.image}
                    alt="product-img"
                    className="w-60 h-48 p-5"
                  />
                </div>
                <div className="px-5">
                  <div className="flex justify-between gap-5 h-14 ">
                    <p className="font-bold leading-4">{product?.title.slice(0,60)}{product?.title.length > 60 && "..."  }</p>
                    <p className="font-bold w-20 text-center"><sup>$</sup>{IntPrice}<sup>{FloatPrice.toFixed(2).slice(1,4)}</sup> </p>
                  </div>
                  <p className="capitalize"><small><b>Category: </b>{product?.category}</small></p>
                  <div className=" my-5 rounded-3xl border border-gray-500 py-1 px-5 w-fit cursor-pointer hover:bg-green-800 font-semibold hover:border-green-800 hover:text-white transition-all ease-in">
                    Add To Cart
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductListing;
