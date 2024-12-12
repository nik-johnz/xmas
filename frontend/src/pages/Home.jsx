import React from 'react'
import Card from '../components/Card'
import Banner from '../components/Banner'

const Home = () => {
  const card = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_NSDIQK5NdG_V5_Yqeu3YKeqYV6l6cqKjQ&s",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_NSDIQK5NdG_V5_Yqeu3YKeqYV6l6cqKjQ&s",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_NSDIQK5NdG_V5_Yqeu3YKeqYV6l6cqKjQ&s",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_NSDIQK5NdG_V5_Yqeu3YKeqYV6l6cqKjQ&s",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_NSDIQK5NdG_V5_Yqeu3YKeqYV6l6cqKjQ&s",
    },
  ]
  return (
    <div className='relative' >
      <Banner
        heading="MERRY CHRISTMAS"
        imageUrl="https://i.pinimg.com/736x/0f/53/38/0f5338fc757fc63f04d7a369ed1478e2.jpg"
      />

      <div className='bg-white h-auto flex flex-col justify-center items-center py-10'>
        <h2 className='text-2xl px-5 font-bold text-center'>Let's Share Your Wishes to Friends & Realatives</h2>
        <div className='grid md:grid-cols-2 jusitfy-center items-center px-5 md:px-20 py-10 gap-10'>
          <div className='flex justify-center items-center'>
            <img className='object-cover' src="https://i.pinimg.com/236x/67/ad/cf/67adcf98dc20b51fdc82ecf0766206c6.jpg  " alt="" />
          </div>
          <div className='flex flex-col justify-center items-center gap-3'>
            <h2 className='text-xl font-semibold text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className='text-gray-500 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi eaque laboriosam corporis mollitia non illo optio eveniet possimus, ab maiores! Eveniet quos architecto hic? Dolore deserunt veritatis voluptatibus possimus dicta culpa cum esse explicabo, est reprehenderit amet itaque maxime temporibus quod accusantium fugit eaque enim perspiciatis nisi fuga nam! Earum!</p>
          </div>
        </div>
      </div>

      <section>
        <div>
          <h2>Gift </h2>
          <div className='flex'>
          {card.map((card, index) => (
          <Card
            key={index}
            image={card.image}
          />
        ))} 
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home


