import { createBrowserRouter, Routes } from "react-router-dom";
import Blog from "../Blog/Blog";
import Erropage from "../ErrorPage/Erropage";
import Faq from "../Faq/Faq";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Checkout from "../Checkout/Checkout";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import PrivateRoute from "../Auth/PrivateRoute/PrivateRoute";
import TeamInfo from "../TeamInfo/TeamInfo";
import TeamInfoDeatils from "../TeamInfoDeatils/TeamInfoDeatils";
import AllCard from "../AllCard/AllCard";
import ShowReview from "../ShowReview/ShowReview";
import AddService from "../AddService/AddService";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Erropage></Erropage>,
      children:[
        {
            path: "/",
            element:<Home></Home>,
          },
            {
            path: "blog",
            element: <Blog></Blog>,
          },
          {
            path: "faq",
            element: <Faq></Faq>,
          },
          {
            path: "teaminfo",
          
            element: <TeamInfo></TeamInfo>,
          
          },
          {
            path:"teamDeatils/:id",
            loader:({params})=> fetch(`https://sports-server.vercel.app/sports/${params.id}`),
            element: <TeamInfoDeatils></TeamInfoDeatils>,
          
          },
          {
            path: "login",
            element: <Login></Login>,
          },
          {
            path: "register",
            element: <Register></Register>,
          },
          {
            path: "checkout/:id",
            loader:({params})=> fetch(`https://sports-server.vercel.app/sports/${params.id}`),
            element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
          },
         {
          path:'allcard',
          loader: async()=>fetch('https://sports-server.vercel.app/sports'),
          element:<AllCard></AllCard>
         },
         {
            path:'review',
            element:<PrivateRoute><ShowReview></ShowReview></PrivateRoute>                                             
         },
         {
          path:"addservice",
          element:<AddService></AddService>
         }
         
      ]
    },
  
  ]);

  export default router;