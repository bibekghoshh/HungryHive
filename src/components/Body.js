import React, { useContext, useEffect, useState } from "react";
import { RESTAURANT_LIST } from "../utils/constrains";
import RestaurentCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import RestaurantCardShimmerUi from "./shimmerUi/RestaurantCardShimmerUi";
import LatLngContext from "../context/LatLngContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(null);
  const [newRestaurantList, setNewRestaurantList] = useState(null);
  const [searchText, setSearchText] = useState("");

  const { latlng } = useContext(LatLngContext);
  // console.log(restaurantList);
  //   console.log(searchText);

  const btnStyle =
    "px-3 py-1 text-gray-500 border-gray-400 rounded-full border-[1px] shadow-md";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        RESTAURANT_LIST + latlng.lat + "&lng=" + latlng.lng
      );
      // const response = await fetch(RESTAURANT_LIST);
      const data = await response.json();
      // console.log(data);
      setRestaurantList(
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setNewRestaurantList(
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };

    fetchData();
  }, [latlng]);

  const handleSearch = () => {
    const searchFilter = newRestaurantList.filter(
      (restaurant) => restaurant?.info?.name?.toLowerCase().includes(searchText) //||
      // restaurant.info.cuisines.toLowerCase().includes(searchText)
      // restaurant?.info?.cuisines.includes(searchText)
    );
    // console.log(searchFilter);
    setRestaurantList(searchFilter);
  };

  //   const a=newRestaurantList[0]?.info?.name?.toLowerCase().includes("mc");
  //   console.log(a);
  //   const b=newRestaurantList[0]?.info?.cuisines?.filter((c)=>(c.toLowerCase().includes("pizzas")));
  //         console.log(b);

  const rating = () => {
    const rating = newRestaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setRestaurantList(rating);
  };
  const costBetween300To600 = () => {
    const cost = newRestaurantList.filter(
      (restaurant) =>
        parseInt(restaurant.info.costForTwo.slice(1, 4)) > 300 &&
        parseInt(restaurant.info.costForTwo.slice(1, 4)) < 600
    );
    setRestaurantList(cost);
  };
  const costLessThan300 = () => {
    const cost = newRestaurantList.filter(
      (restaurant) => parseInt(restaurant.info.costForTwo.slice(1, 4)) < 300
    );
    setRestaurantList(cost);
  };
  const showAll = () => {
    setRestaurantList(newRestaurantList);
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
          <div className="text-lg text-center text-slate-600">Not Found....!</div>
        )}
      </div>
    </div>
  );
};

export default Body;
