import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import About from "../About/Contact";
import Contact from "../Contact/Contact";
import Profile from "../Profile/Profile";
import Settings from "../Settings/Settings";


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
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/settings',
                element: <Settings></Settings>
            }
        ]
    }
])