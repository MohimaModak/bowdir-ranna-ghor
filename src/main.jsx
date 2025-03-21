import React from "react"; // Explicitly import React
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./assets/Component/Home/Home";
import './index.css';
import DailyMenu from "./assets/Component/DailyMenu/DailyMenu";
import WeekendSpecial from "./assets/Component/WeekendSpecial/WeekendSpecial";
import Dessert from "./assets/Component/Dessert/Dessert";
import Touch from "./assets/Component/Touch/Touch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/",
        // element: <Home></Home>,
        element: <div>Homee</div>,

      },

      {
        path: "/DailyMenu",
        // element: <DailyMenu></DailyMenu>,
        element: <div>Daily Menu</div>,

      },
      {
        path: "/WeekendSpecial",
        // element: <WeekendSpecial></WeekendSpecial>,
        element: <div>Weekend Special</div>,

      },
      {
        path: "/Dessert",
        // element: <Dessert></Dessert>,
        element: <div>Dessert</div>,

      },
      {
        path: "/Touch",
        // element: <Touch></Touch>,
        element: <div>Touch</div>,

      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
