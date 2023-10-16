import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import ScrollStatus from "../scroll/ScrollStatus";


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

    useEffect(() => {
        window.addEventListener("scroll", changeNavbarColor);

        return () => {
            window.removeEventListener("scroll", changeNavbarColor);
        };
    }, []);

    const navLinks = [
        {
            title: "Home",
            path: "/",
            id: 0,
        },
        {
            title: "About",
            path: "/about",
            id: 1,
        },
        {
            title: "Events",
            path: "/events",
            id: 2,
        },
        {
            title: "News",
            path: "/news",
            id: 3,
        },
        {
            title: "Projects",
            path: "/projects",
            id: 4,
        },
        {
            title: "Team",
            path: "/team",
            id: 5,
        },
        {
            title: "Gallery",
            path: "/gallery",
            id: 6,
        },
        {
            title: "Admin",
            path: "/admin/dashboard",
            id: 7,
        },
    ]

    return (
        <div className="fixed top-0 z-[100] w-full">
            <div className={`w-[100%] fixed items-center justify-center ${colorChange && " bg-black transition-all delay-100  ease-in-out bg-opacity-20 backdrop-blur-md border-gray-800 shadow-lg"}`}>
                <div className="flex items-center justify-between lg:w-[65rem] md:w-[100%] px-4 md:px-3 lg:py-5 md:py-5 py-4 m-auto text-lg">
                    <div className="flex items-center">
                        <Link style={{ textDecoration: "none" }} to="/">
                            <img height={42} width={100} src="/images/logo.svg" alt="logo" className="h-10" />
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <ul className="md:flex gap-8 hidden items-center text-base">
                            {
                                navLinks.slice(1, 7).map((link) => (
                                    <li key={link.id}>
                                        <NavLink style={{ textDecoration: "none" }} to={link.path}>
                                            {({ isActive, isPending }) => (
                                                <span className={`hover:underline underline-offset-4 decoration-pink-500 ${isActive ? "text-sky-500 font-medium" : "text-white"}`}>{link.title}</span>
                                            )}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>


                        <button
                            onClick={() => setMenu(!menu)}
                            className="animate-pulse md:hidden border focus:ring-[2.5px] focus:outline-none font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-centerfocus:ring-gray-500 bg-gray-800 border-gray-900 text-white hover:bg-gray-700 z-50 mr-2"
                            aria-label={menu ? "Close Menu" : "Open Menu"}
                        >
                            {!menu ? <HiMenuAlt3 /> : <FiX />}
                        </button>

                    </div>
                </div>

                <div className={`md:hidden fixed inset-0 w-screen h-screen flex items-center flex-col justify-center bg-gradient-to-t from-gray-800 via-gray-900 to-black translate-x-0 text-white py-5 transition-all delay-75 ease-in-out lg:gap-8 md:gap-9 gap-10 ${!menu && '-translate-x-[100%] z-[100]'}`}>
                    {
                        navLinks.map((link) => (
                            <NavLink key={link.id} style={{ textDecoration: "none" }} to={link.path}>
                                <button
                                    onClick={() => {
                                        setMenu(!menu);
                                    }}
                                    className="hover:underline hover:text-sky-500 hover:scale-105 w-[100%] cursor-pointer text-2xl font-medium"
                                >
                                    {link.title}
                                </button>
                            </NavLink>
                        ))
                    }
                </div>

                <ScrollStatus />
            </div>
        </div>
    );
};

export default NavBar;