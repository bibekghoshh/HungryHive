import { useRouteError } from "react-router-dom";
import React from 'react';


const Error = () => {
    const error=useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-orange-100 gap-10">
        <h1 className="text-3xl">Opps......</h1>
        <p className="text-xl">Sorry, an Unexpected error has occurred</p>
        <p className="text-xl"><b>{error.statusText || error.message}</b></p>
    </div>
  )
}

export default Error;