import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
        <div className="flex flex-col items-center pb-20 w-full h-[100vh] bg-cover object-cover bg-[url('https://i.ibb.co/3s6H6xr/error-page-bg.webp')]">
            <div className="container h-full mx-auto flex flex-col justify-center items-center space-y-5">
                <h2 className="primaryHeading text-6xl text-center mb-5">Oops!</h2>
                <img src="https://i.ibb.co/NZCvfj6/404.webp" alt="404 error" className="sm:max-w-[600px] mx-auto" />
                <p className="text-center text-[28px] pt-4 max-w-[30vw]">The page does not found , something went wrong. Go to Homepage</p>
                <Link to='/' className="primaryBtn">Got to homepage</Link>
            </div>
        </div>
        </>
    );
};

export default ErrorPage;