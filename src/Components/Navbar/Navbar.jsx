import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const navLinkStyle = ({ isActive }) =>
        isActive
            ? "text-green-600 font-semibold border-b-2 border-green-500 pb-1"
            : "text-gray-600 hover:text-green-500";

    const links = (
        <>
            <NavLink to="/" className={navLinkStyle}>Home</NavLink>
            <NavLink to="/wishListBooks" className={navLinkStyle}>WishList Books</NavLink>
            <NavLink to="/readList" className={navLinkStyle}>Read List</NavLink>
            <NavLink to="/hook" className={navLinkStyle}>HookForm</NavLink>
        </>
    );

    return (
        <div className="bg-white shadow-md mt-10">
            <div className="navbar w-11/12 mx-auto">

                {/* Mobile Menu */}
                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} className="btn btn-ghost lg:hidden">
                            ☰
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-white rounded-box w-52 space-y-2"
                        >
                            {links}
                        </ul>
                    </div>

                    {/* Logo */}
                    <h1 className="md:text-2xl font-bold text-green-600">
                        Book Vibe 📚
                    </h1>

                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-6">
                        {links}
                    </ul>
                </div>

                {/* Buttons */}
                <div className="navbar-end gap-2 md:gap-3">

                    <button className="
        border border-green-500 text-green-500 
        text-xs md:text-base
        px-2 py-1 md:px-4 md:py-2
        rounded-lg hover:bg-green-500 hover:text-white transition
    ">
                        Sign In
                    </button>

                    <button className="
        bg-green-500 text-white
        text-xs md:text-base
        px-2 py-1 md:px-4 md:py-2
        rounded-lg hover:bg-green-600 transition
    ">
                        Sign Up
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Navbar;