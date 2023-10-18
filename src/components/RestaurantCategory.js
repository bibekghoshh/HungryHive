import React from "react";
import { BsChevronDown } from "react-icons/bs";
import ItemCards from "./ItemCards";

const RestaurantCategory = ({ category }) => {
  const { title, itemCards } = category.card.card;
//   console.log(itemCards);

  return (
    <div>
      <div>
        <div className="flex justify-between h-10 mx-4 mt-2 cursor-pointer">
          <div className="text-lg font-bold text-slate-700">
            {title} ({itemCards.length})
          </div>
          <div className="text-xl">
            <BsChevronDown />
          </div>
        </div>
        <div>
          {itemCards.map((items,index) => (
            <ItemCards key={index} items={items} />
          ))}
        </div>
      </div>
      <div className="h-4 bg-slate-100"></div>
    </div>
  );
};

export default RestaurantCategory;
