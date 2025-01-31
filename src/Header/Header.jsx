import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const Header = () => {
    const [user, setUser] = useState(null);
    const [userVerified, setUserVerified] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setUserVerified(currentUser.emailVerified);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Handle Logout
    const handleLogOut = () => {
        signOut(auth)
            .then(() => navigate('/login'))
            .catch((error) => console.log(error.message));
    };

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Firebase-Tour</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {loading ? (
                        <span className="loading loading-dots"></span>
                    ) : user && userVerified ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Profile" src={user.photoURL || "https://via.placeholder.com/40"} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                                <li><a>Profile</a></li>
                                <li><a>Settings</a></li>
                                <li className="text-xs" onClick={handleLogOut}><a>Logout</a></li>
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <NavLink to="/login" className="btn btn-neutral ms-2">Login</NavLink>
                            <NavLink to="/signup" className="btn btn-neutral ms-2">Sign-up</NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
