import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";

const MainRoute = () => {
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