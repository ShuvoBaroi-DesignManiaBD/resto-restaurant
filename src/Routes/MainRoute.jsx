import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const MainRoute = () => {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        </>
    );
};

export default MainRoute;