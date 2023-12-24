
import { Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import Login from "../Pages/Login";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const UserRoute = ({children}) => {

    const { user } = useAuth();
    if (user) {
        return (
            <>
            <Header></Header>
            <div className="min-h-[calc(100vh-608px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
        );
    }
    return <Login></Login>
};

export default UserRoute;