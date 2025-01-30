import firebaseImage from "../images/firebase.png";
import firebaseLogo from "../images/firebaseLogo.png";
import firebaseEmail from "../images/firebaseEmail.png";
import firebaseGoogle from "../images/firebaseGoogle.png";
import firebaseGit from "../images/firebaseGit.png";
import firebaseEmailVerification from "../images/firebaseEmailVerification.png";
const Home = () => {
    return (
        <div className="w-[80%] mx-auto lg:my-11">
            {/* Hero Section */}
            <section className="grid lg:grid-cols-2 grid-cols-1 items-center gap-x-11">
                <div className="rounded-xl">
                    <img src={firebaseImage} alt="" />
                </div>
                <div className="mt-4">
                    <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold">Welcome To Firebase Tour</h1>
                    <p className="text-justify leading-7 my-2">In this project, I'll implement Firebase authentication with Email-Pass login, Google login, and GitHub login. I'll also set up email verification for accounts created using Email-Pass. Additionally, I'll include a password reset feature and enable users to update their profiles. This project is a hands-on practice to deepen my understanding of Firebase authentication and its functionalities.</p>
                </div>
            </section>

            {/* About Project */}
            <section className="mt-24">
                <h1 className="lg:text-3xl text-xl font-semibold text-center"> 🚀 What I'll Do In This Project</h1>
                <div className="grid lg:grid-cols-3 grid-cols-1 my-5 gap-5">
                    {/* Firebase Authentication */}
                    <div className="bg-neutral-100 hover:shadow-md transition ease-in-out h-40 flex flex-col">
                        <div className="flex-1 flex items-center justify-center p-2">
                            <img src={firebaseLogo} alt="firebase_logo" className="w-20" />
                        </div>
                        <div className="bg-black mt-auto p-2">
                            <h1 className="text-center text-md font-semibold text-white">Firebase Authentication</h1>
                        </div>
                    </div>

                    {/* Email & Password Authentication */}
                    <div className="bg-neutral-100 hover:shadow-md transition ease-in-out h-40 flex flex-col">
                        <div className="flex-1 flex items-center justify-center p-2">
                            <img src={firebaseEmail} alt="firebase_email" className="w-20" />
                        </div>
                        <div className="bg-black mt-auto p-2">
                            <h1 className="text-center text-md font-semibold text-white">Email & Password Authentication</h1>
                        </div>
                    </div>

                    {/* Google Authentication */}
                    <div className="bg-neutral-100 hover:shadow-md transition ease-in-out h-40 flex flex-col">
                        <div className="flex-1 flex items-center justify-center p-2">
                            <img src={firebaseGoogle} alt="firebase_email" className="w-20" />
                        </div>
                        <div className="bg-black mt-auto p-2">
                            <h1 className="text-center text-md font-semibold text-white">Google Authentication</h1>
                        </div>
                    </div>

                    {/* GitHub Authentication */}
                    <div className="bg-neutral-100 hover:shadow-md transition ease-in-out h-40 flex flex-col">
                        <div className="flex-1 flex items-center justify-center p-2">
                            <img src={firebaseGit} alt="firebase_email" className="w-20" />
                        </div>
                        <div className="bg-black mt-auto p-2">
                            <h1 className="text-center text-md font-semibold text-white">GitHub Authentication</h1>
                        </div>
                    </div>

                    {/* Email Verification */}
                    <div className="bg-neutral-100 hover:shadow-md transition ease-in-out h-40 flex flex-col">
                        <div className="flex-1 flex items-center justify-center p-2">
                            <img src={firebaseEmailVerification} alt="firebase_email" className="w-20" />
                        </div>
                        <div className="bg-black mt-auto p-2">
                            <h1 className="text-center text-md font-semibold text-white">Email Verification</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;