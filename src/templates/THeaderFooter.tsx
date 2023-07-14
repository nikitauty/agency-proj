import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const THeaderFooter = () => {
    return (
        <>
            <Header />

            <Outlet />
            
            <footer>2023</footer>
        </>
    );
};