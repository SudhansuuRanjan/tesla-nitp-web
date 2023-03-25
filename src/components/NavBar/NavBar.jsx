import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";


const NavBar = () => {
    const [menu, setMenu] = useState(false);
    const [focus, setFocus] = useState(-1);
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
        <div className={`fixed z-10 w-[100%] items-center justify-center ${colorChange && "border-b bg-gray-700 transition-all delay-100  ease-in-out bg-opacity-20 backdrop-blur-md border-gray-900 shadow-md"}`}>
            <div className="flex items-center justify-between lg:w-[75rem] md:w-[100%] px-4 md:px-3 py-5 m-auto text-lg">
                <div className="flex items-center">
                    <Link to="/">
                        <img src="/images/logo.svg" alt="logo" className="h-10" />
                    </Link>
                </div>
                <div className="flex items-center">
                    <ul className="md:flex hidden items-center">
                        <li
                            className={
                                focus === 0
                                    ? "hover:underline mx-3 border-blue-300  border-[3px]  bg-blue-50 dark:bg-[#7b2c5d] px-2 py-1"
                                    : "hover:underline hover:text-blue-500 px-2 py-1 mx-3 border-[3px] border-none dark:border-gray-800"
                            }

                        >
                            <Link to="/events">Events</Link>
                        </li>
                        <li
                            className={
                                focus === 1
                                    ? "hover:underline mx-3 border-blue-300  border-[3px]  bg-blue-50 dark:bg-[#7b2c5d] px-2 py-1"
                                    : "hover:underline hover:text-blue-500 px-2 py-1 mx-3 border-[3px] border-none dark:border-gray-800"
                            }

                        >
                            <Link to="/news">News</Link>
                        </li>
                        <li
                            className={
                                focus === 2
                                    ? "hover:underline mx-3 border-blue-300  border-[3px]  bg-blue-50 dark:bg-[#7b2c5d] px-2 py-1"
                                    : "hover:underline hover:text-blue-500 px-2 py-1 mx-3 border-[3px] border-none dark:border-gray-800"
                            }

                        >
                            <Link to="/projects">
                                Projects
                            </Link>
                        </li>

                        <li
                            className={
                                focus === 2
                                    ? "hover:underline mx-3 border-blue-300  border-[3px]  bg-blue-50 dark:bg-[#7b2c5d] px-2 py-1"
                                    : "hover:underline hover:text-blue-500 px-2 py-1 mx-3 border-[3px] border-none dark:border-gray-800"
                            }

                        >
                            <Link to="/team">
                                Team
                            </Link>
                        </li>
                        <li
                            className={
                                focus === 1
                                    ? "hover:underline mx-3 border-blue-300  border-[3px]  bg-blue-50 dark:bg-[#7b2c5d] px-2 py-1"
                                    : "hover:underline hover:text-blue-500 px-2 py-1 mx-3 border-[3px] border-none dark:border-gray-800"
                            }

                        >
                            <Link to="/gallery">Gallery</Link>
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
                        className="animate-pulse md:hidden text-gray-900 bg-blue-50 hover:bg-blue-50 border border-gray-200 focus:ring-[2.5px] focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center dark:focus:ring-gray-400 dark:bg-gray-800 dark:border-gray-900 dark:text-white dark:hover:bg-gray-700 mr-2"
                    >
                        {!menu ? <HiMenuAlt3 /> : <FiX />}
                    </button>
                </div>
            </div>
            {menu && (
                <div className="md:hidden fixed top-[4rem] right-0 bg-white rounded-xl w-[12rem] py-2 mr-5 shadow-md text-gray-800 dark:text-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 border">
                    <ul>
                        <li>
                            <Link to="/">
                                <button
                                    onClick={() => {
                                        setMenu(false);
                                        // setFocus(0);
                                    }}
                                    className="hover:underline hover:border-blue-300 dark:hover:border-blue-300  border-4 border-white dark:border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-400 text-left"
                                >
                                    Home
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/events">
                                <button
                                    onClick={() => {
                                        setMenu(false);
                                        // setFocus(0);
                                    }}
                                    className="hover:underline hover:border-blue-300 dark:hover:border-blue-300  border-4 border-white dark:border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-400 text-left"
                                >
                                    Events
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects">
                                <button
                                    onClick={() => {
                                        setMenu(false);

                                    }}
                                    className="hover:underline hover:border-blue-300 dark:hover:border-blue-300  border-4 border-white dark:border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-400 text-left"
                                >
                                    Projects
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery">
                                <button
                                    onClick={() => {
                                        setMenu(false);

                                    }}
                                    className="hover:underline hover:border-blue-300 dark:hover:border-blue-300  border-4 border-white dark:border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-400 text-left"
                                >
                                    Gallery
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/team">
                                <button
                                    onClick={() => {
                                        setMenu(false);

                                    }}
                                    className="hover:underline hover:border-blue-300 dark:hover:border-blue-300  border-4 border-white dark:border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-400 text-left"
                                >
                                    Team
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/news">
                                <button
                                    onClick={() => {
                                        setMenu(false);

                                    }}
                                    className="hover:underline hover:border-blue-300 dark:hover:border-blue-300  border-4 border-white dark:border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-400 text-left"
                                >
                                    Newsletter
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