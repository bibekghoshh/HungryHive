import React, { useState } from "react";
import { BsChevronDown ,BsChevronUp} from "react-icons/bs";
import ItemCards from "./ItemCards";

const RestaurantCategory = ({ category }) => {
  const { title, itemCards } = category.card.card;
  const [showItem,setShowItem]=useState(true);
//   console.log(itemCards);

const handleShowItem=()=>{
    setShowItem(!showItem);
}

  return (
    <div>
      <div>
        <div onClick={handleShowItem} className="flex justify-between h-10 mx-4 mt-2 cursor-pointer">
          <div className="text-lg font-bold text-slate-700">
            {title} ({itemCards.length})
          </div>
          <div className="text-xl">
            {showItem?<BsChevronUp/>:<BsChevronDown/>}
          </div>
        </div>
        {showItem && <div>
          {itemCards.map((items,index) => (
            <ItemCards key={index} items={items} />
          ))}
        </div>}
      </div>
      <div className="h-4 bg-slate-100"></div>
    </div>
  );
};

export default RestaurantCategory;
