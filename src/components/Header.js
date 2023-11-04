import { useContext, useState } from "react";
import logo1 from "../asset/a.png";
import { AiOutlineDown, AiOutlineShoppingCart } from "react-icons/ai";
import { GoSignIn } from "react-icons/go";
import { Link } from "react-router-dom";
import LocationSeachPage from "./LocationSearchPage";
import LatLngContext from "../context/LatLngContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { isSearchOpen, setIsSearchOpen, headerLocation } =
    useContext(LatLngContext);
  const cart = useSelector((store) => store.cart.items);

  return (
    <>
      {isSearchOpen && <LocationSeachPage />}
      <div className="shadow-lg min-w-[1300px] z-0">
        <div className="flex justify-between mx-36">
          <div className="flex gap-10">
            <div>
              <img className="w-[100px] invert" src={logo1} alt="Logo" />
            </div>
            <div
              className="flex items-center"
              onClick={() => setIsSearchOpen(true)}
            >
              <div className="flex h-6 max-w-xs overflow-hidden cursor-pointer text-slate-500 hover:text-slate-900">
                {headerLocation}
              </div>
              <div className="cursor-pointer">
                <AiOutlineDown />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-12 font-semibold list-none">
            <li className="cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            {/* <li className="flex items-center cursor-pointer">
              <GoSignIn />
              Sign In
            </li> */}
            <li className="text-4xl cursor-pointer ">
              <Link to="/cart">
                <div className="flex w-16 ">
                  <div>
                    <AiOutlineShoppingCart />
                  </div>
                  <div>
                    {cart.length!=0?(<p className="relative z-40 px-2 text-lg rounded-full right-2 bottom-2">
                      {cart.length}
                    </p>):null}
                  </div>
                </div>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
