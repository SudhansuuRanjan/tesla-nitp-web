import React, { useEffect, useState } from 'react';


const ScrollStatus = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement || document.body;
        const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollPercent(percent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='h-[0.02rem] bg-[#0e0e0e] w-full'>
            <div className='h-[0.09rem] bg-sky-500' style={{ width: `${scrollPercent}%` }}></div>
        </div>
    );
};

export default ScrollStatus;
