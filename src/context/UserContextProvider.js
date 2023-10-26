import { useState } from "react"
import LatLngContext from "./LatLngContext";

const UserContextProvider=({children})=>{

    const [latlng,setLatlng]=useState({lat:12.9715987,lng:77.5945627});
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [headerLocation,setHeaderLocation]=useState("Kolkata,West bengal,India");

    return(
        <LatLngContext.Provider value={{latlng,setLatlng,isSearchOpen,setIsSearchOpen,headerLocation,setHeaderLocation}}>
            {children}
        </LatLngContext.Provider>
    )
};

export default UserContextProvider;