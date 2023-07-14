import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <NavLink to="/">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/">Blog</NavLink>
            <NavLink to="/">Info</NavLink>
            <NavLink to="/">JIJIJI</NavLink>
        </header>
    );
};