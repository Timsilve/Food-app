import React from 'react'

const HeadlineCards = () => {
  return (

        <div className='max-width-[1640px] py-12 px-2 mx-auto grid md:grid-cols-3'>

            <div className='relative m-4'>
                <div className='absolute bg-black/40 w-full h-full px-3 py-5 text-white rounded-xl  '>
                <p className=' text-2xl font-bold'> Sun's out,Bogo's out</p>
                <p className='py-2'>Through 8/26</p>
                <button className='border-white bg-white text-black rounded-full absolute bottom-4'>Order Now</button>
            </div>
            <img src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="/" className='rounded-xl '/>
        </div>
            <div className='relative m-4'>
                <div className='absolute bg-black/40 w-full h-full px-3 py-5 text-white rounded-xl '>
                <p className=' text-2xl font-bold'> New Restaurants</p>
                <p className='py-2'>Added Daily</p>
                <button className='border-white bg-white text-black rounded-full absolute bottom-4'>Order Now</button>
            </div>
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="/" className='rounded-xl '/>
        </div>
            <div className='relative m-4'>
                <div className='absolute bg-black/40 w-full h-full px-3 py-5 text-white rounded-xl '>
                <p className=' text-2xl font-bold'> We Deliver Desserts Too</p>
                <p className='py-2'>Tasty Treats</p>
                <button className='border-white bg-white text-black rounded-full absolute bottom-4'>Order Now</button>
            </div>
            <img src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="/" className='rounded-xl '/>
        </div>
    </div>
  )
}

export default HeadlineCards