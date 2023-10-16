import React from 'react';
import { useEffect, useState } from 'react';
import { RxPinTop } from 'react-icons/rx';

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            <button onClick={scrollUp} className={`fixed border shadow-lg bg-opacity-70 z-50 border-gray-700 lg:bottom-10 md:bottom-10 bottom-10 lg:right-4 md:right-4 right-4 w-10 h-10 text-3xl text-gray-200 bg-gray-900 rounded-full flex items-center justify-center transition-all delay-75 ease-in-out ${!backToTopButton && "hidden"}`} >
                <RxPinTop size={16} />
            </button>
        </div>
    )
}

export default BackToTopButton;
