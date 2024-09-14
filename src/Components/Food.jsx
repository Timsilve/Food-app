import React, { useState } from 'react'
import { data } from '../data/data'

const Food = () => {

    const [food, setFood] = useState(data)

    const filterType = (category) => {
        setFood(data.filter(item => {
            return item.category === category
        }))
    }

    const filterPrice=(price) => {
        setFood(data.filter((item) => {
            return item.price === price
        }))
    }

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-center text-orange-500 text-4xl font-bold'>Top Rated Menu Items</h1>

            {/* filtertypes */}
            <div className='flex flex-col lg:flex-row justify-between mx-4 text-orange-500'>
                <div>
                    <p className='text-gray-500 m-2'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button className='border-orange-500 py-2 px-4 rounded-xl mx-2 my-1 hover:bg-orange-500 hover:text-white' onClick={() => setFood(data)}>All</button>
                        <button className='border-orange-500 py-2 px-4 rounded-xl mx-2 my-1 hover:bg-orange-500 hover:text-white ' onClick={() => filterType('burger')}>Burger</button>
                        <button className='border-orange-500 py-2 px-4 rounded-xl mx-2 my-1 hover:bg-orange-500 hover:text-white ' onClick={() => filterType('pizza')}>Pizza</button>
                        <button className='border-orange-500 py-2 px-4 rounded-xl mx-2 my-1 hover:bg-orange-500 hover:text-white' onClick={() => filterType('salad')}>Salad</button>
                        <button className='border-orange-500 py-2 px-4 rounded-xl mx-2 my-1 hover:bg-orange-500 hover:text-white' onClick={() => filterType('chicken')}>Chicken</button>
                    </div>
                </div>
                <div>
                    <p className='text-gray-500 m-2'>Filter Price</p>

                    <div className='flex justify-between flex-wrap max-w-[390px] w-full'>

                        <button className='border-orange-500 py-2 px-4 rounded-xl mx-2 hover:bg-orange-500 hover:text-white' onClick={() => filterPrice('$')}>$</button>
                        <button className='border-orange-500 py-2 px-4 rounded-xl mx-2 hover:bg-orange-500 hover:text-white' onClick={() => filterPrice('$$')}>$$</button>
                        <button className='border-orange-500 py-2 px-4 rounded-xl mx-2 hover:bg-orange-500 hover:text-white' onClick={() => filterPrice('$$$')}>$$$</button>
                        <button className='border-orange-500 py-2 px-4 rounded-xl mx-2 hover:bg-orange-500 hover:text-white' onClick={() => filterPrice('$$$$')}>$$$</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 pt-5 gap-6'>
                {food.map((item, index) => (
                    <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-t-lg'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] rounded-t-lg object-cover' />
                        <div className='flex justify-between p-4 items-center'>
                            <p className='font-bold text-[12px] md:text-xl'>{item.name}</p>
                            <p className='bg-orange-600 text-white px-2 py-1 rounded-full'>{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Food