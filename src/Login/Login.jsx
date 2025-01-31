import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { IoPersonCircleSharp } from "react-icons/io5";
import { auth } from "../Firebase/Firebase.config";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { PiSmileyXEyesFill } from "react-icons/pi";


const Login = () => {
    const [loginError, setLoginError] = useState(false);
    const [view, setView] = useState(false);
    const navigate = useNavigate();
    const emailRef = useRef();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result)
                if (!result.user.emailVerified) {
                    setLoginError('Please Verify Your Email First.')
                    return;
                }
                else {
                    navigate("/")
                    window.location.reload();
                }
            })
            .catch(error => {
                setLoginError(error.message)
            })

    }

    // Handle Reset Password
    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert('Please provide a valid email.')
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('A Password reset email send to your inbox.')
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
    }
    return (
        <div className="flex flex-col items-center min-h-screen lg:mt-[-30px] justify-center mx-auto">
            <div className="max-w-xl border-2 border-dark p-5 rounded-lg">
                <h1 className="flex items-center justify-center text-xl font-semibold"><IoPersonCircleSharp className="text-3xl mr-2" /> Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mt-5">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" ref={emailRef} placeholder="abc@gmail.com" name="email" className="input w-full" required />
                    </div>
                    <div className="mt-5 relative">
                        <label htmlFor="profile">
                            Password
                        </label>
                        <input type={view ? "text" : "password"} placeholder="Type your password" name="password" className="input w-full" required />
                        <p className="absolute top-9 right-2 cursor-pointer" onClick={() => setView(!view)}>
                            {
                                view ? <BsFillEmojiHeartEyesFill /> : <PiSmileyXEyesFill />
                            }
                        </p>
                    </div>
                    <p className="text-xs underline cursor-pointer" onClick={handleResetPassword}>Forget Password?</p>
                    <button type="submit" className="btn btn-dark w-full mt-5 btn-neutral">
                        Login
                    </button>
                    <p className="text-sm text-center mt-2">Don't Have an Account? <Link to="/signup" className="text-blue-500 font-semibold">Signup</Link></p>
                </form>
                {
                    loginError &&
                    <div className="mt-3">
                        <code className="block text-center text-red-600">{loginError}</code>
                    </div>
                }
            </div>
        </div>
    );
};

export default Login;