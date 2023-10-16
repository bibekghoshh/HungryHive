import { useRouteError } from "react-router-dom";

const Error = () => {
    const error=useRouteError();
  return (
    <div>
        <h1>OPPs......</h1>
        <p>Sorry, an Unexpected error has occurred</p>
        <p><b>{error.statusText || error.message}</b></p>
    </div>
  )
}

export default Error;