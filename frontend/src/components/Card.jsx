import React from 'react'

const Card = ({image}) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='px-2 py-2 border shadow-xl'>
        <div className='relative overflow-hidden group'>
            <img className='rounded-lg object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in' src={image} alt="" />
        </div>
        <div className='flex justify-around items-center gap-5 py-2'>
            <button className='text-green-500 px-4 py-1 rounded-full font-semibold border-[2px] border-green-500 hover:bg-green-500 hover:text-white'>Gift</button>
            <button className='text-green-500 px-4 py-1 rounded-full font-semibold border-[2px] border-green-500 hover:bg-green-500 hover:text-white'>Buy</button>
        </div>
      </div>
    </div>
  )
}

export default Card


