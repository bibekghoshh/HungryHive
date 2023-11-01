import { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import "./index.css";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./src/components/Error";
import UserContextProvider from "./src/context/UserContextProvider";
import { Provider } from "react-redux";
import appStore from "./src/redux/appStore";
import { lazy } from "react";
import { Suspense } from "react";
import RestaurantMenuShimmerUi from "./src/components/shimmerUi/RestaurantMenuShimmerUi";

const About=lazy(()=>import("./src/components/About"));
const ItemCart=lazy(()=>import("./src/components/ItemCart"));
const RestaurantMenu=lazy(()=>import("./src/components/RestaurantMenu"));

const App = () => {
  return (
    <Provider store={appStore}>
    <UserContextProvider> 
      <Header />
      <Outlet />
    </UserContextProvider>
    </Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<div>Loading...</div>}><About/></Suspense>,
      },
      {
        path: "/cart",
        element:<Suspense fallback={<div>Loading...</div>}><ItemCart/></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <Suspense fallback={<RestaurantMenuShimmerUi/>}><RestaurantMenu/></Suspense>,
      },
    ],
    errorElement: <Error/>,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
