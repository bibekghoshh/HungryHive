import { useContext, useEffect, useState } from "react";
import LatLngContext from "../context/LatLngContext";
import { RESTAURANT_LIST } from "../utils/constrains";

const useRestaurant = () => {
  const [restaurantList, setRestaurantList] = useState(null);
  const [newRestaurantList, setNewRestaurantList] = useState(null);

  const { latlng } = useContext(LatLngContext);

  const updateData = (data) => {
    setRestaurantList(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          RESTAURANT_LIST + latlng.lat + "&lng=" + latlng.lng
        );
        if (!response.ok) {
          throw new Error("Network Response is not ok");
        }
        const data = await response.json();

        setRestaurantList(
          data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setNewRestaurantList(
          data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (error) {
        console.error("fetch error", error);
      }
    };

    fetchData();
  }, [latlng]);

  return { restaurantList, newRestaurantList, updateData };
};

export default useRestaurant;
