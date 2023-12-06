import { useState } from "react";
import Logo from "../Components/Shared/Logo";
import { useAuth } from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import SocialLogin from "../Components/Shared/AuthElements/SocialLogin";
import Swal from "sweetalert2";
import LoadingSpinner from "../Components/Shared/LoadingSpinner";

const Register = () => {
    const { user, loading, createUserWithEmail } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = imageData?.data?.display_url;
        const userData = { photo, name, email, password, role };

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[_.!@$*=?#-])[A-Za-z\d_.!@$*=?#-]{8,24}$/;


        if (!regex.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Your password must have one uppercase, lowercase & special character!',
            });
        } else {
            try {
                // Register the user
                await createUserWithEmail(userData)
                .then(navigate('/'))
            } catch (error) {
                console.error('Error registering user:', error.message);
            }
        }
    };


    const togglePass = () => {
        setShowPassword(!showPassword);
    }

    {
        if (user) {

            return (
                <div className="flex items-center justify-center bg-bg w-full h-[100vh]">
                    <div className="max-w-lg p-10 text-center bg-white rounded-lg">
                        <p className='text-lg text-green-500 rounded-lg font-medium mb-5'>
                            You are logged in already!
                        </p>
                        <Link className="primaryBtn" to="/">Back to home </Link>

                    </div>
                </div>

            )
        } else {
            return (
                <main className="w-[100vw] h-[100vh] bg-[#291e0b] flex items-center justify-center mx-auto my-auto p-6">
                    <div className="w-[450px] mt-7 bg-[#131509] border rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-4 sm:p-7">
                            <div className="text-center">
                                <Logo className="w-[180px] mx-auto"></Logo>
                                <h1 className="block text-2xl mt-10 font-bold text-gray-800 dark:text-white">
                                    Sign up
                                </h1>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    Already have an account? <span> </span>
                                    <Link
                                        className="text-primary font-semibold decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        to="/login"
                                    >
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                            <div className="mt-5">
                                <SocialLogin></SocialLogin>

                                <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                                    Or
                                </div>
                                {/* Form */}
                                <form onSubmit={handleSubmit}>
                                    <div className="grid gap-y-4">
                                        <label htmlFor="file-input"
                                            className="text-sm">
                                            Profile image URL
                                        </label>
                                        <input
                                            type="text"
                                            name="image"
                                            placeholder="You profile image URL"
                                            className="py-3 px-4 block w-full border-2 focus:outline-primary border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                            required
                                        />
                                        {/* Form Group */}
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm mb-2 dark:text-white"
                                            >
                                                Your name
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="py-3 px-4 block w-full border-2 focus:outline-primary border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                                    placeholder="Enter your full name"
                                                    required
                                                    aria-describedby="email-error"
                                                />

                                            </div>

                                        </div>
                                        {/* End Form Group */}

                                        {/* Form Group */}
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm mb-2 dark:text-white"
                                            >
                                                Email address
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="py-3 px-4 block w-full border-2 focus:outline-primary border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                                    placeholder="Enter your email"
                                                    required
                                                    aria-describedby="email-error"
                                                />

                                            </div>

                                        </div>
                                        {/* End Form Group */}
                                        {/* Form Group */}
                                        <div>
                                            <div className="flex justify-between items-center">
                                                <label
                                                    htmlFor="password"
                                                    className="block text-sm mb-2 dark:text-white"
                                                >
                                                    Password
                                                </label>
                                                <a
                                                    className="text-sm text-primary decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                                    href="../examples/html/recover-account.html"
                                                >
                                                    Forgot password?
                                                </a>
                                            </div>
                                            <div className="relative">
                                                {showPassword ? <FiEye className="absolute bottom-3 right-3" onClick={togglePass}></FiEye> : <FiEyeOff className="absolute bottom-4 right-3" onClick={togglePass}></FiEyeOff>}
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    name="password"
                                                    minLength="8"
                                                    id="password"
                                                    placeholder="Enter your password"
                                                    className="py-3 px-4 block w-full border-2 focus:outline-primary border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                                    required
                                                />
                                            </div>

                                        </div>
                                        {/* End Form Group */}
                                        {/* Checkbox */}
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="remember"
                                                    aria-describedby="remember"
                                                    type="checkbox"
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 focus:ring-primary-600 ring-offset-gray-800"
                                                    required=""
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label
                                                    htmlFor="remember"
                                                    className="text-sm font-medium"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        {/* End Checkbox */}
                                        <button
                                            type="submit"
                                            className="w-full primaryBtn"
                                        >
                                            {loading? <LoadingSpinner></LoadingSpinner> : "Create account"}
                                        </button>
                                    </div>
                                </form>
                                {/* End Form */}
                            </div>
                        </div>
                    </div>
                </main>

            );

        }
    }
}

export default Register;