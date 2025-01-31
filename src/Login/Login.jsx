import { IoPersonCircleSharp } from "react-icons/io5";

const Login = () => {
    return (
        <div className="flex flex-col items-center min-h-screen lg:mt-[-30px] justify-center mx-auto">
            <div className="max-w-xl border-2 border-dark p-5 rounded-lg">
                <h1 className="flex items-center justify-center text-xl font-semibold"><IoPersonCircleSharp className="text-3xl mr-2" /> Login</h1>
                <form>
                    <div className="mt-5">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" placeholder="abc@gmail.com" name="email" className="input w-full" required />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="profile">
                            Password
                        </label>
                        <input type="password" placeholder="Type your password" name="password" className="input w-full" required />
                    </div>
                    <button type="submit" className="btn btn-dark w-full mt-5 btn-neutral">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;