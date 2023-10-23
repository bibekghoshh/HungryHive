import { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import "./index.css";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/components/About";
import ItemCart from "./src/components/ItemCart";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContextProvider from "./src/context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider> 
      <Header />
      <Outlet />
    </UserContextProvider>
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
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
