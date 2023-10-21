import {useState} from "react";
import logo1 from "../asset/a.png";
import { AiOutlineDown, AiOutlineShoppingCart } from "react-icons/ai";
import { GoSignIn } from "react-icons/go";
import { Link } from "react-router-dom";
import LocationSeachPage from "./LocationSearchPage";

const Header = () => {

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };
  

  return (
    <>
   {isSearchOpen && <div className=""> <LocationSeachPage onClose={closeSearch}/></div>}
    <div className="shadow-lg min-w-[1300px] z-0">
      <div className="flex justify-between mx-36">
        <div className="flex gap-10">
          <div>
            <img className="w-[100px] invert" src={logo1} alt="Logo" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-900" onClick={openSearch}>
            Kolkata,West Bengal,India <AiOutlineDown />
          </div>
        </div>
        <div className="flex items-center gap-12 font-semibold list-none">
            <div>
                <input type="text" className="" placeholder="" />
                <button>Search</button>
            </div>
            <li className="cursor-pointer"><Link to="/">Home</Link></li>
          <li className="cursor-pointer"><Link to="/about">About</Link></li>
          <li className="flex items-center cursor-pointer">
            <GoSignIn />
            Sign In
          </li>
          <li className="text-4xl cursor-pointer"><Link to="/cart">
            <AiOutlineShoppingCart /></Link>
          </li>
        </div>
      </div>
    </div>
    </>

  );
  
};

export default Header;
