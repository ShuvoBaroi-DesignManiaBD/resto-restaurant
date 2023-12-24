
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { Spinner } from "@material-tailwind/react";

const PrivateRoute = ({ children }) => {
    const { loading, user } = useAuth();
    const { pathname } = useLocation();
    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <Spinner color="amber" className="h-14 w-14 col-span-4 mx-auto" />
            </div>
        )
    }
    if (user) return (
        <>
            <Header></Header>
            <div className="min-h-[calc(100vh-608px)]">
            {/* <Outlet></Outlet> */}
            {children}
            </div>
            <Footer></Footer>
        </>
    );

    return <Navigate to='/login' state={pathname}></Navigate>
}



export default PrivateRoute;