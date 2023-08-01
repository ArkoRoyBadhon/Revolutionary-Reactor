import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const RootLayout = () => {
    return (
        <>
        <Navbar />
        <div className="">
            <Outlet />
        </div>
        </>
    );
};

export default RootLayout;