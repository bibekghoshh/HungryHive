import React, { useContext } from "react";
import { GoLocation } from "react-icons/go";
import { LAT_LNG } from "../utils/constrains";
import LatLngContext from "../context/LatLngContext";
import { Link } from "react-router-dom";

const LocationItemCard = ({ locationdetails }) => {
  const { structured_formatting, place_id } = locationdetails;
  const { main_text, secondary_text } = structured_formatting;
  
  const {setLatlng,setIsSearchOpen,setHeaderLocation}=useContext(LatLngContext);

  const handleClick = async () => {
    const response = await fetch(LAT_LNG + place_id);
    const data = await response.json();

    const latlngdata=data?.data[0]?.geometry?.location;
    setLatlng(latlngdata);
    setIsSearchOpen(false);
    setHeaderLocation(main_text+", "+secondary_text);
  };

  return (
    <Link to="/">
    <div className="w-[370px]" onClick={handleClick}>
      <div className="flex gap-4 pt-6 mx-4 cursor-pointer hover:text-orange-400">
        <div>
          <GoLocation className="text-lg hover:text-slate-800 text-slate-800" />
        </div>
        <div className="flex flex-col ">
          <div className="font-medium text-slate-700">{main_text}</div>
          <div className="pb-6 text-[13px] text-slate-400">
            {secondary_text}
          </div>
        </div>
      </div>
      <div className="w-[335px] ml-12 border-dashed border-[1px] border-slate-400"></div>
    </div>
    </Link>
  );
};

export default LocationItemCard;
