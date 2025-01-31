import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config"

const Header = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(user)
        });
    }, []);

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                            {/* <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/signup">Sign-up</NavLink></li> */}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Firebase-Tour</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        {/* <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/signup">Sign-up</NavLink></li> */}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Profile Image"
                                            src={user.photoURL ? (user.photoURL) : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                            :
                            <div>
                                <NavLink to="/login" className="btn btn-neutral ms-2">Login</NavLink>
                                <NavLink to="/signup" className="btn btn-neutral ms-2">Sign-up</NavLink>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;