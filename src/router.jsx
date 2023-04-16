import {
    createBrowserRouter,
    
  } from "react-router-dom";
import From from "./From";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <From/>,
    },
  ]);