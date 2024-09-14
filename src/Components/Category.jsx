import React from 'react'
import { categories } from '../data/data'

const Category = () => {
    return (
            <div className='max-w-[1640px] m-auto px-4 py-12'>
        <div className=''>
                <h1 className='text-center text-orange-500 text-4xl font-bold'>Top Rated Menu Items</h1>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 pt-5 gap-6'>
                {categories.map((item, index) => (
                    <div key={index} className='border bg-gray-200  duration-300 rounded-xl flex h-[100px] justify-between items-center py-[4rem] px-4' >

                        <p className='font-bold text-[1.2rem]'>{item.name}</p>
                        <img src={item.image} alt={item.name} className='h-[100px]' />

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category