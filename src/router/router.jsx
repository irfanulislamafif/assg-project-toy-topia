import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ToyDetails from "../pages/ToyDetails";
import MyProfile from "../pages/MyProfile";
import ForgetPassword from "../pages/ForgetPassword";
import ExtraRoute from "../pages/ExtraRoute";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllToys from "../pages/AllToys";
import AddToys from "../pages/AddToys"; 
import MyToys from "../pages/MyToys";   

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [

      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-toys",
        element: <AllToys />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
 
      {
        path: "/add-toy",
        element: (
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
   
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/extra",
        element: (
          <PrivateRoute>
            <ExtraRoute />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;