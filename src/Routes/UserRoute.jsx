
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { Spinner } from "@material-tailwind/react";

const UserRoute = ({children}) => {
    const {loading, user} = useAuth();
    const navigate = useNavigate();
    const {pathname} = useLocation();
    if (loading) {
        return <Spinner color="amber" className="h-8 w-8 col-span-4 mx-auto" />
    }
    if (user) return (
        <>
        <Header></Header>
        <div className="min-h-[calc(100vh-608px)]">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    );

    return navigate('/login', {state: pathname});
    }

export default UserRoute;