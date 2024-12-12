import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-red-500 shadow-md" : "bg-transparent"}`}>
            <div>
                {/* animation of merry christmas here */}
            </div>
            <div className='flex justify-center items-center gap-2 px-10 py-4'>
                <div className='flex justify-between items-center gap-4'>
                    <Link to={'/'} className='text-lg font-semibold scale-100 hover:scale-110 text-gray-100 hover:text-white'>Home</Link>
                    <Link to={'/event'} className='text-lg font-semibold scale-100 hover:scale-110 text-gray-100 hover:text-white'>Events</Link>
                </div>
                <div className=''>
                    <p>Logo</p>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <Link to={'/gift'} className='text-lg font-semibold scale-100 hover:scale-110 text-gray-100 hover:text-white'>Gifts</Link>
                    <Link to={'/products'} className='text-lg font-semibold scale-100 hover:scale-110  text-gray-100 hover:text-white'>Products</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar


