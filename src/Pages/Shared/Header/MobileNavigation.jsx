import { NavLink } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import { FiLogOut } from "react-icons/fi";
import UserDropdown from "../../../Components/Dropdowns/UserDropdown";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { CgCloseO } from "react-icons/cg";
import Logo from "../../../Components/Shared/Logo";

const MobileNavigation = ({ open, setOpen }) => {
    const { user, logout } = useAuth();
    const activeStatus = ({ isActive }) => (isActive ? "text font-medium text-primary" : "text font-medium text-white");
    return (
        <Dialog open={open === true} className="max-h-[85vh] overflow-x-hidden rounded-lg bg-[#2c220f]">
            <DialogBody>
                <div className="flex justify-end">
                    <CgCloseO className="w-8 h-8 text-red-500" onClick={() => setOpen(!open)}></CgCloseO>
                </div>
                <ul className="flex flex-col justify-start items-center gap-4 py-5 z-50">
                {!user && <Logo className='w-[180px] mb-8'></Logo>}
                    {user && <div className="flex flex-col justify-center items-center gap-4 border-b pb-3 w-2/3 border-[#6d5427]">
                        <img
                            src={user?.photoURL}
                            alt="avatar"
                            className="w-[50px] transition-all duration-1000 cursor-pointer rounded-full"
                        />
                        <p className="text-lg text-white font-medium">{user?.displayName}</p>

                    </div>}
                    <NavLink to="/" className={activeStatus}>
                        Home
                    </NavLink>
                    <NavLink to="/foods" className={activeStatus}>
                        All food items
                    </NavLink>
                    <NavLink to="/all-foods" className={activeStatus}>
                        Blog
                    </NavLink>

                    {user ?
                        <>
                            <NavLink to="/login" className="primaryBtn text text-white font-medium p-2 px-4 flex items-center gap-3" onClick={logout}>
                                Logout <FiLogOut></FiLogOut>
                            </NavLink>
                        </>
                        : <div className="flex gap-5 mt-5">
                            <NavLink to="/login" className="primaryBtn text text-white py-2">
                                Login
                            </NavLink>
                            <NavLink to="/register" className="primaryBtn text text-white py-2">
                                Register
                            </NavLink>
                        </div>}
                </ul>
            </DialogBody>
        </Dialog>

    );
};

export default MobileNavigation;