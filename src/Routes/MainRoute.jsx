import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { useAuth } from "../Hooks/useAuth";
import { Spinner } from "@material-tailwind/react";
import Login from "../Pages/Login";

const MainRoute = () => {
    const {loading} = useAuth();
    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <Spinner color="amber" className="h-14 w-14 col-span-4 mx-auto" />
            </div>
        )
    }
    return (
        <>
        <Header></Header>
        <div className="min-h-[calc(100vh-608px)]">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    );

};

export default MainRoute;