import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='relative'>
            <div></div>
            <div className='flex justify-center items-center gap-2 px-10 py-4'>
                <div className='flex justify-between items-center gap-4'>
                    <Link to={'/'} className='text-lg font-semibold scale-100 hover:scale-110 hover:text-gray-500'>Home</Link>
                    <Link to={'/about'} className='text-lg font-semibold scale-100 hover:scale-110 hover:text-gray-500'>About</Link>
                </div>
                <div>
                    <p>X'mas</p>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <Link to={'/gift'} className='text-lg font-semibold scale-100 hover:scale-110 hover:text-gray-500'>Gifts</Link>
                    <Link to={'/gift'} className='text-lg font-semibold scale-100 hover:scale-110 hover:text-gray-500'>Products</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
