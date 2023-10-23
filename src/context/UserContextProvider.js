import { useState } from "react"
import LatLngContext from "./LatLngContext";

const UserContextProvider=({children})=>{

    const [latlng,setLatlng]=useState({lat:12.9715987,lng:77.5945627});
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return(
        <LatLngContext.Provider value={{latlng,setLatlng,isSearchOpen,setIsSearchOpen}}>
            {children}
        </LatLngContext.Provider>
    )
};

export default UserContextProvider;