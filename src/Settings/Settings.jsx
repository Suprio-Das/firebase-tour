import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

const Settings = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [name, setName] = useState(loggedInUser?.displayName || "");
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setLoggedInUser(user);
                setName(user.displayName)
            }
        })

        console.log(loggedInUser)
    }, [])
    return (
        <div className="w-[80%] mx-auto my-11 min-h-screen">
            <div className="p-5 max-w-md flex flex-col justify-center items-center mx-auto border-2 rounded-lg">
                <h1 className="text-center text-2xl font-semibold">🔥 Update Your Profile 🚀</h1>
                <div className="w-full">
                    <form action="">
                        <div className="mt-5">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="text" placeholder="E.g. Suprio Das" name="name" value={name} onChange={(e) => setName(e.target.value)} className="input w-full" />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="email" placeholder="E.g. Suprio Das" name="email" value={loggedInUser ? loggedInUser.email : ""} className="input w-full" disabled />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="email">
                                Password
                            </label>
                            <input type="text" placeholder="Type New Password" name="password" className="input w-full" />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="profile">
                                Profile URL
                            </label>
                            <input type="text" placeholder="Enter your profile url" name="profile" value={loggedInUser ? loggedInUser.photoURL : ""} className="input w-full" />
                        </div>
                        <button type="submit" className="btn btn-dark w-full mt-5 btn-neutral">
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Settings;