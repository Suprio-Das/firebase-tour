import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { auth } from "../Firebase/Firebase.config";
import { Link } from "react-router";
const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setsuccess] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const profile = e.target.profile.value;
        const password = e.target.password.value;
        console.log(name, email, profile, password)

        // reseting state
        setErrorMessage('');
        setsuccess(false)

        // validating password according to the length
        if (password.length < 6) {
            setErrorMessage('Password Must Be 6 Words Longer.')
            return;
        }

        // Validating password using regex
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage("Please give a strong password. E.g. helloBuddy123#!#");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

                // Sending verification email
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        setsuccess(true);
                    })

                // Update User Profile with more information
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: profile
                })
            })
            .catch(error => {
                setErrorMessage(error.message);
            })

        console.log(errorMessage)
    }
    return (
        <div className="flex flex-col items-center min-h-screen lg:mt-[-30px] justify-center mx-auto">
            <div className="max-w-xl border-2 border-dark p-5 rounded-lg">
                <h1 className="flex items-center text-xl font-semibold text-center"><IoPersonCircleSharp className="text-3xl mr-2" /> Register Your Firebase Account!</h1>
                <form onSubmit={handleRegister}>
                    <div className="mt-5">
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" placeholder="E.g. Suprio Das" name="name" className="input w-full" required />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" placeholder="abc@gmail.com" name="email" className="input w-full" required />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="profile">
                            Profile
                        </label>
                        <input type="text" placeholder="Upload Your Image Link" name="profile" className="input w-full" required />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="profile">
                            Password
                        </label>
                        <input type="password" placeholder="Create a strong password" name="password" className="input w-full" required />
                    </div>
                    <button type="submit" className="btn btn-dark w-full mt-5 btn-neutral">
                        Sign-up
                    </button>
                    <p className="text-sm text-center mt-2">Already Have an Account? <Link to="/login" className="text-blue-500 font-semibold">Login</Link></p>
                </form>
                {
                    success &&
                    <div className="mt-3">
                        <code className="block text-center text-green-700 text-sm font-semibold">Account Created Successfully!</code>
                        <code className="block text-center text-red-600"> Please Verfiy Your Email Before Login.</code>
                    </div>
                }
                {
                    errorMessage &&
                    <div className="mt-3">
                        <code className="block text-center text-red-600">{errorMessage}</code>
                    </div>
                }
            </div>
        </div>
    );
};

export default SignUp;