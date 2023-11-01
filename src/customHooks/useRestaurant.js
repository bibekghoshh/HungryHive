import { useContext, useEffect, useState } from "react";
import LatLngContext from "../context/LatLngContext";
import { RESTAURANT_LIST } from "../utils/constrains";

const useRestaurant=()=>{
    const [restaurantList, setRestaurantList] = useState(null);
  const [newRestaurantList, setNewRestaurantList] = useState(null);

  const {latlng}=useContext(LatLngContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        RESTAURANT_LIST + latlng.lat + "&lng=" + latlng.lng
      );
      const data = await response.json();

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



  return {restaurantList,newRestaurantList};
};

export default useRestaurant;