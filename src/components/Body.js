import React, { useState } from "react";
import RestaurentCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import RestaurantCardShimmerUi from "./shimmerUi/RestaurantCardShimmerUi";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import useRestaurant from "../customHooks/useRestaurant";

const Body = () => {
  const { restaurantList, newRestaurantList, updateData } = useRestaurant();
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const btnStyle =
    "px-3 py-1 text-gray-500 border-gray-400 rounded-full border-[1px] shadow-md";

  const handleSearch = () => {
    const searchFilter = newRestaurantList.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText)
    );
    updateData(searchFilter);
  };

  const rating = () => {
    const rating = newRestaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    updateData(rating);
  };
  const costBetween300To600 = () => {
    const cost = newRestaurantList.filter(
      (restaurant) =>
        parseInt(restaurant.info.costForTwo.slice(1, 4)) > 300 &&
        parseInt(restaurant.info.costForTwo.slice(1, 4)) < 600
    );
    updateData(cost);
  };
  const costLessThan300 = () => {
    const cost = newRestaurantList.filter(
      (restaurant) => parseInt(restaurant.info.costForTwo.slice(1, 4)) < 300
    );
    updateData(cost);
  };
  const showAll = () => {
    updateData(newRestaurantList);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 min-w-[1300px]">
      <div className="mt-20">
        <input
          type="text"
          placeholder="Search Your restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value.toLowerCase())}
          className="px-6 w-[400px] py-2 border-2 border-blue-500 rounded-l-[50px] outline-none"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 rounded-r-[50px] text-lg text-white"
        >
          Search
        </button>
      </div>
      <div className="flex gap-5">
        <button className={btnStyle} onClick={rating}>
          Rating 4.0+
        </button>
        <button className={btnStyle} onClick={costLessThan300}>
          &lt; Rs. 300
        </button>
        <button className={btnStyle} onClick={costBetween300To600}>
          Rs. 300 - Rs. 600
        </button>
        <button className={btnStyle} onClick={showAll}>
          Show all
        </button>
      </div>

      <div className="w-[1250px] flex flex-wrap gap-8  mt-1 items-center justify-center">
        {restaurantList === null || restaurantList === undefined ? (
          <RestaurantCardShimmerUi />
        ) : restaurantList.length != 0 ? (
          restaurantList.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurentCard resdata={restaurant} />
            </Link>
          ))
        ) : (
          <div className="text-lg text-center text-slate-600">
            Not Found....!
          </div>
        )}
      </div>
      {onlineStatus ? null : (
        <div className="fixed h-12 px-4 py-1 text-white transition bg-slate-700 bottom-16">
          <p className="text-sm font-medium ">Connection Error</p>
          <p className="text-xs text-slate-300">
            Please check your internet connection and try again.
          </p>
        </div>
      )}
    </div>
  );
};

export default Body;
