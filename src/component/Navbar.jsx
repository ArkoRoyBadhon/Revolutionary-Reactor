import { LuPhoneCall } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import { FaLuggageCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="bg-[#003D2A]">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center text-white py-2">
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
        <div className="max-w-screen-xl mx-auto py-4 flex justify-between items-center">
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
            <div className="flex items-center gap-3 font-semibold">
              <BsCartPlus />
              <p className="">Cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
