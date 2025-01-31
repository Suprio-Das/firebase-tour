import { IoPersonCircleSharp } from "react-icons/io5";
const SignUp = () => {
    return (
        <div className="flex flex-col items-center min-h-screen justify-center mx-auto">
            <div className="max-w-xl">
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
                </form>
            </div>
        </div>
    );
};

export default SignUp;