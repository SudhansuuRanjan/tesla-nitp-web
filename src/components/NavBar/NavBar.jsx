import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";


const NavBar = () => {
    const [menu, setMenu] = useState(false);
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 0) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };

    window.addEventListener("scroll", changeNavbarColor);

    return (
        <div className={`fixed z-10 w-[100%] items-center justify-center ${colorChange && "border-b bg-black transition-all delay-100  ease-in-out bg-opacity-20 backdrop-blur-md border-gray-800 shadow-lg"}`}>
            <div className="flex items-center justify-between lg:w-[65rem] md:w-[100%] px-4 md:px-3 py-5 m-auto text-lg">
                <div className="flex items-center">
                    <Link style={{ textDecoration: "none" }} to="/">
                        <img src="/images/logo.svg" alt="logo" className="h-10" />
                    </Link>
                </div>
                <div className="flex items-center">
                    <ul className="md:flex gap-8 hidden items-center text-base">
                        <li>
                            <NavLink style={{ textDecoration: "none" }} to="/admin/gallery">
                                {({ isActive, isPending }) => (
                                    <span className={`hover:underline underline-offset-4 decoration-pink-500 ${isActive ? "text-sky-500 font-medium" : "text-white"}`}>Gallery</span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={{ textDecoration: "none" }} to="/admin/events">
                                {({ isActive, isPending }) => (
                                    <span className={`hover:underline underline-offset-4 decoration-pink-500 ${isActive ? "text-sky-500 font-medium" : "text-white"}`}>Events</span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={{ textDecoration: "none" }} to="/admin/blogs">
                                {({ isActive, isPending }) => (
                                    <span className={`hover:underline underline-offset-4 decoration-pink-500 ${isActive ? "text-sky-500 font-medium" : "text-white"}`}>Blogs</span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={{ textDecoration: "none" }} to="/admin/projects">
                                {({ isActive, isPending }) => (
                                    <span className={`hover:underline underline-offset-4 decoration-pink-500 ${isActive ? "text-sky-500 font-medium" : "text-white"}`}>Projects</span>
                                )}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink style={{ textDecoration: "none" }} to="/admin/team">
                                {({ isActive, isPending }) => (
                                    <span className={`hover:underline underline-offset-4 decoration-pink-500 ${isActive ? "text-sky-500 font-medium" : "text-white"}`}>Team</span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={{ textDecoration: "none" }} to="/admin/profile">
                                {({ isActive, isPending }) => (
                                    <span className={`hover:underline underline-offset-4 decoration-pink-500 ${isActive ? "text-sky-500 font-medium" : "text-white"}`}>Profile</span>
                                )}
                            </NavLink>
                        </li>

                    </ul>


                    <button
                        type="button"
                        onClick={() => {
                            if (menu == false) {
                                setMenu(true);
                            } else {
                                setMenu(false);
                            }
                        }}
                        className="animate-pulse md:hidden border focus:ring-[2.5px] focus:outline-none font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center focus:ring-gray-500 bg-gray-800 border-gray-900 text-white hover:bg-gray-700 mr-2"
                    >
                        {!menu ? <HiMenuAlt3 /> : <FiX />}
                    </button>
                </div>
            </div>
            {menu && (
                <div className="md:hidden fixed top-[4rem] right-0 rounded-xl w-[12rem] py-2 mr-5 shadow-md text-white bg-gray-900 border-gray-700 border">
                    <ul>
                        <li>
                            <NavLink style={{ textDecoration: "none" }} to="/">
                                <button
                                    onClick={() => {
                                        setMenu(false);
                                        // setFocus(0);
                                    }}
                                    className="hover:underline hover:border-blue-300 border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                >
                                    Home
                                </button>
                            </NavLink>
                        </li>
                        <li>
                            <Link style={{ textDecoration: "none" }} to="/admin/gallery">
                                <button
                                    onClick={() => {
                                        setMenu(false);
                                        // setFocus(0);
                                    }}
                                    className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                >
                                    Gallery
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link style={{ textDecoration: "none" }} to="/admin/events">
                                <button
                                    onClick={() => {
                                        setMenu(false);
                                        // setFocus(0);
                                    }}
                                    className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                >
                                    Events
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link style={{ textDecoration: "none" }} to="/admin/projects">
                                <button
                                    onClick={() => {
                                        setMenu(false);

                                    }}
                                    className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                >
                                    Projects
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link style={{ textDecoration: "none" }} to="/admin/profile">
                                <button
                                    onClick={() => {
                                        setMenu(false);

                                    }}
                                    className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                >
                                    Profile
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link style={{ textDecoration: "none" }} to="/admin/team">
                                <button
                                    onClick={() => {
                                        setMenu(false);

                                    }}
                                    className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                >
                                    Team
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link className="visited:text-white text-white" style={{ textDecoration: "none" }} to="/admin/blogs">
                                <button
                                    onClick={() => {
                                        setMenu(false);

                                    }}
                                    className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                >
                                    Blogs
                                </button>
                            </Link>
                        </li>

                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavBar;