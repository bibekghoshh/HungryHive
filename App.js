import { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import "./index.css";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/components/About";
import ItemCart from "./src/components/ItemCart";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import LocationSeachPage from "./src/components/LocationSearchPage";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
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
        element: <About />,
      },
      {
        path: "/cart",
        element: <ItemCart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      },
    ],
    errorElement: <Error/>,
  },
  {
    path:"/search",
    element:<LocationSeachPage/>
  }
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
