import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])