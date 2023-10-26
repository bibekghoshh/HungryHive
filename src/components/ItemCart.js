import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiCheckboxSquare } from "react-icons/bi";
import { BsCaretUpSquare } from "react-icons/bs";
import { clearCart } from "../redux/cartSlice";
import EmptyCartPage from "./EmptyCartPage";

const Items = ({ item }) => {
  const items = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-col min-w-[600px]">
      <div className="flex items-center justify-between h-10 gap-4 mt-2 mb-2">
        <div className="flex items-center gap-2">
          <div>
            {item.itemAttribute.vegClassifier === "VEG" ? (
              <BiCheckboxSquare className="text-2xl text-green-500" />
            ) : (
              <BsCaretUpSquare className="text-red-600" />
            )}
          </div>
          <p>{item.name}</p>
        </div>
        <p>₹ {item.price / 100 || item.defaultPrice / 100}</p>
      </div>
      <div className="border-[1px] border-solid border-slate-200 ml-4"></div>
    </div>
  );
};

const ItemCart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch=useDispatch();
  let TotalSum = 0;
  items.forEach((item) => {
    TotalSum = TotalSum + (item.price / 100 || item.defaultPrice / 100);
  });

  const handleClearCart=()=>{
    dispatch(clearCart());
  }
  
  return items.length===0?<EmptyCartPage/>:(
    <div className="flex items-center justify-center mt-5">
      <div>
      <div>
          <button className="px-3 py-1 font-medium text-white bg-blue-400 rounded-lg" onClick={handleClearCart}>Clear All</button>
        </div>
        <div>
          {items.map((i, index) => (
            <Items key={index} item={i} />
          ))}
        </div>
        <div className="flex justify-between mt-5">
          <div className="text-lg font-medium">To Pay :</div>
          <div className="text-lg font-medium">₹ {TotalSum}</div>
        </div>
        <div className="flex justify-end">
          <button className="w-[75%] px-4 py-2  mt-8 text-white bg-orange-500 rounded-lg hover:bg-orange-600">
            Place Your Order
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ItemCart;
