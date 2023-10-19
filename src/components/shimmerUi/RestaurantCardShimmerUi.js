import React from "react";

const RestaurantCard=()=>{
    return(
<div className="flex flex-wrap items-center justify-center gap-8 mt-1">
      <div className="flex flex-col  w-[280px] h-[325px] rounded-md">
        <div className="w-full h-[180px] rounded-2xl bg-slate-200"></div>
        <div className="ml-4">
          <h2 className="h-5 mt-2 w-28 bg-slate-200"></h2>
          <div className="w-12 h-5 mt-2 bg-slate-200"></div>
          <div className="w-[250px] h-5 mt-2 bg-slate-200"></div>
          <p className="w-32 h-5 mt-2 bg-slate-200"></p>
        </div>
      </div>
      
    </div>
    )
}

const RestaurantCardShimmerUi = () => {
  return (
    <>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    </>
  );
};

export default RestaurantCardShimmerUi;
