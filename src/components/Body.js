import React, { useEffect, useState } from 'react'
import { RESTAURANT_LIST } from '../utils/constrains';
import RestaurentCard from './RestaurantCard';

const Body = () => {
    const [restaurantList,setRestaurantList]=useState([]);
        console.log(restaurantList);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const response= await fetch(RESTAURANT_LIST);
        const data=await response.json();
        // console.log(data);
        setRestaurantList( data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

  return (
    <div className='flex items-center justify-center border-4 border-red-300'>

    <div className='w-[1200px] flex flex-wrap gap-5 border-4 border-red-300'>
       {restaurantList.map((restaurant)=>(
           <RestaurentCard key={restaurant.info.id} resdata={restaurant}/>
           ))}
    </div>
           </div>
  )
}

export default Body;