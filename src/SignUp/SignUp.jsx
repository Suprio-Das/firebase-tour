import { IoPersonCircleSharp } from "react-icons/io5";
const SignUp = () => {
    return (
        <div className="flex flex-col items-center min-h-screen justify-center mx-auto">
            <div className="max-w-xl border-2 border-dark p-5 rounded-lg">
                <h1 className="flex items-center text-xl font-semibold"><IoPersonCircleSharp className="text-3xl mr-2" /> Register Your Firebase Account!</h1>
                <form>
                    <div className="mt-5">
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" placeholder="E.g. Suprio Das" name="name" className="input w-full" />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" placeholder="abc@gmail.com" name="email" className="input w-full" />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="profile">
                            Profile
                        </label>
                        <input type="text" placeholder="Upload Your Image Link" name="profile" className="input w-full" />
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