import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU } from "../utils/constrains";
import { AiFillStar, AiOutlineSearch } from "react-icons/ai";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  console.log(restaurantMenu);
  //   console.log(category);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTAURANT_MENU + resId);
    const data = await response.json();

    setRestaurantMenu(data?.data);
    // console.log(data);
  };

  if (restaurantMenu === null) return <h1>Loading</h1>;

  const { name, areaName, city, avgRating, totalRatingsString, cuisines } =
    restaurantMenu?.cards[0]?.card?.card?.info;

  const category =
    restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (data) =>
        data.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="flex items-center justify-center mt-8  min-w-[1300px]">
      <div className="w-[900px]  flex flex-col gap-5">
        <div className="flex justify-between">
          <div className="text-[10px] text-slate-400">
            <span className="cursor-pointer hover:text-slate-600">Home </span> /{" "}
            <span className="cursor-pointer hover:text-slate-600">{city}</span>{" "}
            / <span className="text-slate-600"> {name}</span>
          </div>
          <div>
            <AiOutlineSearch className="text-3xl" />
          </div>
        </div>
        <div className="flex justify-between mx-4">
          <div>
            <p className="mb-2 text-xl font-semibold">{name}</p>
            <p className="text-sm text-slate-500">{cuisines.join(", ")}</p>
            <p className="text-sm text-slate-500">{areaName}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-16 gap-3 border-2">
            <div className="flex items-center gap-1 text-green-600">
              <AiFillStar />
              <span className="font-bold">{avgRating}</span>
            </div>
            <div className="w-12 border-[1px]"></div>
            <p className="text-[10px] font-bold text-slate-400">{totalRatingsString}</p>
          </div>
        </div>
        <div className="border-[1px] mx-4 mt-8 border-dashed border-slate-300"></div>
        <div>
          {
            category.map((category,index)=>(
              <RestaurantCategory key={index} category={category}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
