import React, { useContext } from "react";
import { CDN_URL } from "../utils/constrains";
import rating from "../asset/rating.svg";

const RestaurentCard = ({ resdata }) => {
  // console.log(resdata);
  const { name, areaName,avgRating, cuisines, cloudinaryImageId } =
    resdata?.info;

  return (
    <div className="flex flex-col  w-[280px] h-[325px] rounded-md hover:scale-95 ease-in-out duration-300 cursor-pointer">
      <div>
        <img
          className="object-cover w-full h-[180px] rounded-2xl"
          src={CDN_URL + cloudinaryImageId}
          alt="res-img"
        />
      </div>
      <div className="ml-4">
        <h2 className="mt-2 text-lg font-medium ">{name}</h2>
        <div className="flex items-center w-12 ">
          <div>
          <img src={rating} alt="rating" />
          </div>
          <p className="font-medium">{avgRating}</p>
        </div>
        <div className="w-[250px] h-7 overflow-hidden">
          <p className="text-gray-500 ">{cuisines.join(", ")}</p>
        </div>
          <p className="text-gray-500 ">{areaName}</p>
      </div>
    </div>
  );
};

// export const withPromotedLabel=(RestaurentCard)=>{
//   return(props)=>{
//     return(
//       <div>
//         <label>Promoted</label>
//         <RestaurentCard {...props}/>
//       </div>
//     )
//   }
// }

export default RestaurentCard;
