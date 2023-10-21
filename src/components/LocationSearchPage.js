import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import LocationItemCard from "./LocationItemCard";
import { SEARCH_LOCATION } from "../utils/constrains";

const LocationSeachPage = ({onClose}) => {
  const [locationSearchText, setLocationSearchText] = useState("");
  const [locationLists, setLocationLists] = useState(null);

  console.log(locationLists);

  useEffect(() => {
    if (locationSearchText.length >= 3) {
      fetchData();
    }
  }, [locationSearchText]);

  const fetchData = async () => {
    const response = await fetch(
      SEARCH_LOCATION + locationSearchText.toLowerCase()
    );
    const data = await response.json();
    // console.log(data);
    setLocationLists(data?.data);
  };

  const clearSearchText = () => {
    setLocationSearchText("");
  };

  // if(locationLists===null) return <h1>Loading.......</h1>

  return (
    <div className="w-[600px] h-[700px]  overflow-y-scroll z-10  fixed bg-white">
      <div className="pl-[20%] mt-8">
        <div onClick={onClose} className="w-10 p-2 cursor-pointer">
          <AiOutlineClose className="text-2xl text-slate-600" />
        </div>
        <div className="flex items-center my-6 mb-6">
          <input
            type="text"
            placeholder="Search for area, street name.."
            className="px-6 py-3 font-semibold border-2 outline-none w-96 "
            value={locationSearchText}
            onChange={(e) => setLocationSearchText(e.target.value)}
          />

          {locationSearchText.length != 0 ? (
            <p
              className="font-semibold text-orange-600 ml-[-70px] cursor-pointer text-sm"
              onClick={clearSearchText}
            >
              Cancel
            </p>
          ) : null}
        </div>
        <div>
          {locationLists === null || locationSearchText.length < 3 ? (
            <div className="text-sm text-slate-400">
              Type atleast 3 letter for Results
            </div>
          ) : (
            locationLists.map((locationdetails) => (
              <LocationItemCard
                key={locationdetails.place_id}
                locationdetails={locationdetails}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationSeachPage;
