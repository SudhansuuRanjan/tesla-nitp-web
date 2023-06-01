import React, { useEffect, useState } from 'react';


/**
 * ScrollStatus component
 * @returns {JSX.Element} ScrollStatus component
 * @constructor null
 * @component ScrollStatus
 * @example <caption>Display scroll status.</caption>
 * return (
 *  <ScrollStatus />
 * )
 */
const ScrollStatus = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement || document.body;
            const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setScrollPercent(percent);
        };

        // Add event listener to update scroll percentage on scroll
        window.addEventListener('scroll', handleScroll);
        return () => {
            // Clean up the event listener on unmount
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='h-0.5 w-full'>
            <div className='h-0.5 bg-sky-500' style={{ width: `${scrollPercent}%` }}></div>
        </div>
    );
};

export default ScrollStatus;
