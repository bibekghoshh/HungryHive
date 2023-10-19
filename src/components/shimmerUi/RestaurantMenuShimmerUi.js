import React from "react";

const ItemCardsShimmer = () => {
  return (
    <div>
      <div className="flex justify-between gap-4 mx-4 ">
        <div className="w-[85%]">
          <div className="w-8 h-5 mt-4 bg-slate-200"></div>
          <p className="mt-1 w-28 h-7 bg-slate-200"></p>
          <p className="w-20 h-5 mt-1 bg-slate-200"></p>
          <p className="mt-2 w-80 h-7 bg-slate-200"></p>
        </div>
        <div className="w-32 mb-8 rounded-lg h-28 bg-slate-200"></div>
      </div>
      <div className="m-2 mx-4 mb-8 border-[1px] border-slate-200"></div>
    </div>
  );
};

const RestaurantMenuShimmerUi = () => {
  return (
    <div className="flex items-center justify-center mt-8  min-w-[1300px]">
      <div className="w-[900px]  flex flex-col gap-5">
        <div className="flex justify-between">
          <div className="flex">
            <div className="w-8 h-2 mr-2 bg-slate-200"></div>
            <div className="w-10 h-2 mr-2 bg-slate-200"></div>
            <div className="w-16 h-2 bg-slate-200"> </div>
          </div>
          <div className="w-10 h-6 bg-slate-200"></div>
        </div>
        <div className="flex justify-between mx-4">
          <div>
            <p className="h-6 mb-2 w-28 bg-slate-200"></p>
            <p className="h-5 mt-2 bg-slate-200 w-36"></p>
            <p className="w-20 h-5 mt-2 bg-slate-200"></p>
          </div>
          <div className="flex flex-col items-center justify-center w-16 gap-3 border-2">
            <div className="w-12 h-5 bg-slate-200"></div>
            <div className="w-12 border-[1px]"></div>
            <p className="w-12 h-5 bg-slate-200"></p>
          </div>
        </div>
        <div className="border-[1px] mx-4 mt-8 border-dashed border-slate-300"></div>
        <div>
          <div>
            <div>
              <div className="flex justify-between h-10 mx-4 mt-2 ">
                <div className="w-64 h-10 bg-slate-200"></div>
                <div className="w-10 h-6 bg-slate-200"></div>
              </div>
              <ItemCardsShimmer />
              <ItemCardsShimmer />
              <ItemCardsShimmer />
            </div>
            <div className="h-4 bg-slate-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuShimmerUi;
