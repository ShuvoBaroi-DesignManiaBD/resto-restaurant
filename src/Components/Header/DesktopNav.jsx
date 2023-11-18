import { NavLink } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { FiLogOut } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";

const DesktopNav = () => {
    const { user, logout } = useAuth();
    const activeStatus = ({ isActive, isPending }) => (isActive ? "text font-medium text-white dark:text-white " : "text text-white font-medium");
    return (
        <ul className="flex p-10 lg:p-0 flex-col gap-5 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 bg-transparent">

            <NavLink to="/" className={activeStatus}>
                Home
            </NavLink>
            <NavLink to="/foods" className={activeStatus}>
                All foods
            </NavLink>
            <NavLink to="/blog" className={activeStatus}>
                Blog
            </NavLink>
            <NavLink to="/my-cart" className={activeStatus}>
                My cart
            </NavLink>
            {user ?
                <>
                    <div className="flex items-center gap-4">
                        <p className="text-lg font-medium">{user?.displayName}</p>
                        <img
                            src={user?.photoURL}
                            alt="avatar"
                            className="w-[50px] transition-all duration-1000 cursor-pointer rounded-full"

                        />
                    </div>
                    <NavLink to="/login" className="primaryBtn text text-white font-medium p-2 px-4 flex items-center gap-3" onClick={logout}>
                        Logout <FiLogOut></FiLogOut>
                    </NavLink>
                </>
                : <div className="flex gap-5">
                    <NavLink to="/login" className="secondaryBtn text text-white py-2">
                        Login
                    </NavLink>
                    <NavLink to="/register" className="primaryBtn text text-white py-2">
                        Register
                    </NavLink>
                </div>}
        </ul>
    );
};

export default DesktopNav;