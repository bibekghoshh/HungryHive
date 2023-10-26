import React from "react";
import { CDN_URL } from "../utils/constrains";
import { BsCaretUpSquare } from "react-icons/bs";
import { BiCheckboxSquare } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const ItemCards = ({ items }) => {
  const { name, price, description, imageId } = items?.card?.info;
  const { vegClassifier } = items?.card?.info?.itemAttribute;
  // console.log(items);
  const dispatch=useDispatch();


  const handleAddItem=()=>{
      dispatch(addItem(items));
  }

  return (
    <div>
      <div className="flex justify-between gap-4 mx-4 ">
        <div className="w-[85%]">
          <div>
            {vegClassifier === "VEG" ? (
              <BiCheckboxSquare className="text-2xl text-green-500" />
            ) : (
              <BsCaretUpSquare className="text-red-600" />
            )}
          </div>
          <p className="text-lg font-semibold text-slate-600">{name}</p>
          <p>₹ {price / 100}</p>
          <p className="mt-4 text-xs text-slate-400">{description}</p>
        </div>
        <div className="flex flex-col items-center w-32 mb-8">
          <img
            className="object-cover h-24 rounded-lg w-28"
            src={CDN_URL + imageId}
            alt="Dish Photo"
          />
          <button className="px-6 py-2 text-xs font-bold text-green-700 bg-white rounded-md mt-[-25px] w-24 border-[2px] " onClick={handleAddItem}>
            ADD
          </button>
        </div>
      </div>
      <div className="m-2 mx-4 mb-8 border-[1px] border-slate-200"></div>
    </div>
  );
};

export default ItemCards;
