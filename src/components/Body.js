import React, { useEffect, useState } from "react";
import { RESTAURANT_LIST } from "../utils/constrains";
import RestaurentCard from "./RestaurantCard";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [newRestaurantList, setNewRestaurantList] = useState([]);

  const [searchText, setSearchText] = useState([]);

  const btnStyle =
    "px-3 py-1 text-gray-500 border-gray-400 rounded-full border-[1px] shadow-md";
  console.log(restaurantList);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTAURANT_LIST);
    const data = await response.json();
    // console.log(data);
    setRestaurantList(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setNewRestaurantList(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const rating = () => {
    const rating = newRestaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setRestaurantList(rating);
  };
  const costBetween300To600 = () => {
    const cost = newRestaurantList.filter(
      (restaurant) => parseInt(restaurant.info.costForTwo.slice(1, 4)) > 300 && parseInt(restaurant.info.costForTwo.slice(1, 4)) < 600
    );
    setRestaurantList(cost);
  };
  const costLessThan300 = () => {
    const cost = newRestaurantList.filter(
      (restaurant) => parseInt(restaurant.info.costForTwo.slice(1, 4)) < 300 );
    setRestaurantList(cost);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 ">
      <div className="mt-20">
        <input
          type="text"
          placeholder="Search Your restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="px-6 w-[400px] py-2 border-2 border-blue-500 rounded-l-[50px] outline-none"
        />
        <button className="px-4 py-2 bg-blue-500 rounded-r-[50px] text-lg text-white">
          Search
        </button>
      </div>
      <div className="flex gap-5">
        <button className={btnStyle} onClick={rating}>
          Rating 4.0+
        </button>
        <button className={btnStyle} onClick={costLessThan300}>&lt;  Rs. 300</button>
        <button className={btnStyle} onClick={costBetween300To600}>
          Rs. 300 - Rs. 600
        </button>
      </div>

      <div className="w-[1250px] flex flex-wrap gap-8 border-4 border-red-300 mt-1 items-center justify-center">
        {restaurantList.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
