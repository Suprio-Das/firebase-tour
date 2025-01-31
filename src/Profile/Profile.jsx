import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const Profile = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);
    return (
        <div className="w-[80%] mx-auto my-20">
            {
                loading ? <p className="max-w-xl loading loading-spin min-h-screen justify-center items-center text-center"></p> :
                    <div className="w-1/3 mx-auto bg-gray-100 p-3 ">
                        <div className="flex justify-center">
                            <img src={user.photoURL} alt="" className="w-28 h-28 rounded-full border-4" />
                        </div>
                        <div>
                            <h2 className="text-center text-xl font-semibold my-2">{user.displayName}</h2>
                            <p className="text-center text-md">{user.email}</p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Profile;