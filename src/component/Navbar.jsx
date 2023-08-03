import { LuPhoneCall } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import { FaLuggageCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const { products } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const [condition, setCondition] = useState(false);
  return (
    <>
      <div>
        <div className="bg-[#003D2A]">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-2 justify-between items-center text-white py-2">
            <div className="flex gap-1">
              <LuPhoneCall className="mt-1" />
              <p className="">+8801755434678</p>
            </div>
            <div className="flex">
              <p className="">Get 50% Off on Selected Items</p>
              <p className="px-5">|</p>
              <p className="">Shop Now</p>
            </div>
            <div className="flex gap-5">
              <div className="flex items-center">
                <p className="">Eng</p>
                <IoIosArrowDown />
              </div>
              <div className="flex items-center">
                <p className="">Location</p>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
        {/* ================ desktop ============ */}
        <div className="max-w-screen-xl hidden  mx-auto py-4 md:flex justify-between items-center sticky top-0">
          <div className="flex items-center text-[#003D2A] font-bold text-xl gap-1">
            <FaLuggageCart className="mt-[2px]" />
            <p className="">Shopcart</p>
          </div>
          <div className="flex gap-10 font-semibold">
            <Link to="/">Categories</Link>
            <Link to="/">Deals</Link>
            <Link to="/">Whats New</Link>
            <Link to="/">Delivery</Link>
          </div>
          <div className="flex items-center gap-10">
            <div className="bg-[#F6F7F8] rounded-2xl flex gap-5 items-center px-5 py-1">
              <input
                type="text"
                placeholder="Search product"
                className="outline-none bg-[#F6F7F8]"
              />
              <BiSearch className="" />
            </div>
            <div className="flex items-center gap-3 font-semibold">
              <FiUser />
              <p className="">Account</p>
            </div>
            <div
              onClick={() => navigate("/cart")}
              className="flex items-center gap-3 font-semibold relative cursor-pointer"
            >
              <BsCartPlus />
              <p className="">Cart</p>
              <div className="absolute text-white p-1 rounded-full bg-black w-4 h-4 text-[12px] flex justify-center items-center -top-2 left-2">
                {products.length}
              </div>
            </div>
          </div>
        </div>

        {/* ============= mobile ================  */}
        <div className="relative md:hidden">
          <div className="flex z-5 justify-between px-3 py-5">
            <div className="flex items-center text-[#003D2A] font-bold text-xl gap-1">
              <FaLuggageCart className="mt-[2px]" />
              <p className="">Shopcart</p>
            </div>
            <div
              onClick={() => setCondition(true)}
              className="py-2 px-2 cursor-pointer z-10"
            >
              <RxHamburgerMenu />
            </div>
          </div>
          <div
            className={`absolute z-10 bg-blue-400 h-[100vh] top-0 w-[100vw] transition-all ease-in ${
              condition ? "left-0" : "left-[-500px]"
            }`}
          >
            <div onClick={() => setCondition(false)} className="px-5 py-5">
              <div className="flex items-center gap-3">
                <p className="text-2xl font-bold">X</p>{" "}
                <p className="text-2xl">Close</p>
              </div>
              <div className="flex flex-col">
                <Link
                  className="font-bold hover:bg-gray-300 py-3 px-5 text-xl"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="font-bold hover:bg-gray-300 py-3 px-5 text-xl"
                  to="/cart"
                >
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
