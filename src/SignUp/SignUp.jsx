import { useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const profile = e.target.profile.value;
        const password = e.target.password.value;
        console.log(name, email, profile, password)

        // reseting state
        setErrorMessage(false);

        // Validating password
        const passwordRegex = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/";
        if (!password.test(passwordRegex)) {
            setErrorMessage(true);
            return;
        }
    }
    return (
        <div className="flex flex-col items-center min-h-screen lg:mt-[-30px] justify-center mx-auto">
            <div className="max-w-xl border-2 border-dark p-5 rounded-lg">
                <h1 className="flex items-center text-xl font-semibold"><IoPersonCircleSharp className="text-3xl mr-2" /> Register Your Firebase Account!</h1>
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
                </form>
            </div>
        </div>
    );
};

export default SignUp;