import firebaseImage from "../images/firebase.png";
const Home = () => {
    return (
        <div className="w-[80%] mx-auto lg:my-11">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-x-11">
                <div className="rounded-xl">
                    <img src={firebaseImage} alt="" />
                </div>
                <div className="mt-4">
                    <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold">Welcome To Firebase Tour</h1>
                    <p className="text-justify leading-7 my-2">In this project, I'll implement Firebase authentication with Email-Pass login, Google login, and GitHub login. I'll also set up email verification for accounts created using Email-Pass. Additionally, I'll include a password reset feature and enable users to update their profiles. This project is a hands-on practice to deepen my understanding of Firebase authentication and its functionalities.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;