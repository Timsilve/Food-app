import React, { useState } from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite ,MdHelp} from 'react-icons/md'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { BsFillSaveFill } from 'react-icons/bs'

const Navbar = () => {
    const [text, setText] = useState('');
    const [nav,setNav] = useState(false)

    return (
        <div className='flex justify-between items-center p-3'>
            <div className='flex items-center p-3'>
                <AiOutlineMenu size={40} className='cursor-pointer' onClick={() => setNav(!nav)}/>
                <h1 className='text-[17px] sm:text-[40px] lg:text-[35px]'>Best <span className='font-bold'>Eats</span></h1>
                <div className='bg-gray-200 hidden md:flex p-1 rounded-full items-center mx-2' >
                    <p className='bg-black text-white p-2 rounded-full'>Delivery</p>
                    <p className='mx-2'>Pickup</p>
                </div>
            </div>
            <div className='flex bg-gray-200 items-center sm:w-[400px] lg:w-[500px] rounded-full py-1 px-2
            '>
                <AiOutlineSearch size={20} />
                <input type="text" className='p-2 w-full focus:outline-none bg-transparent' placeholder='search food' value={text} onChange={e => setText(e.target.value)} />
            </div>
            <button className='hidden lg:flex text-white bg-black rounded-full px-3 py-2 items-center'>
                <AiOutlineShoppingCart size={20} className='mr-2' /> cart
            </button>

            {/* mobile menu */}
          {nav ?  <div className='fixed bg-black/80 h-screen z-10 top-0 w-full left-0'></div>
            : ''}
            {/* sidebar */}
            <div className= {nav ?  'fixed bg-white h-screen z-10 top-0 w-[300px] left-0 duration-300': 'fixed bg-white h-screen z-10 top-0 w-[300px] left-[-100%] duration-300'}>

                <h2 className='text-[30px] p-1'>Best <span className='font-bold'>Eats</span></h2>
                <AiOutlineClose className='absolute right-4 top-4' size={20} onClick={() => setNav(!nav)}/>
                <nav>
                    <ul className='flex flex-col py-7 px-4'>
                        <li className='flex  px-2 py-4 items-center text-gray-800 font-semibold'><TbTruckDelivery size={30} className='mr-3' /> Order</li>
                        <li className='flex  px-2 py-4 items-center text-gray-800 font-semibold'><MdFavorite size={30} className='mr-3' /> Favorite</li>
                        <li className='flex  px-2 py-4 items-center text-gray-800 font-semibold'><FaWallet size={30} className='mr-3' /> Wallet</li>
                        <li className='flex  px-2 py-4 items-center text-gray-800 font-semibold'><MdHelp size={30} className='mr-3' /> Help</li>
                        <li className='flex  px-2 py-4 items-center text-gray-800 font-semibold'><AiFillTag size={30} className='mr-3' /> Promotion</li>
                        <li className='flex  px-2 py-4 items-center text-gray-800 font-semibold'><BsFillSaveFill size={30} className='mr-3' /> Best Ones</li>
                        <li className='flex  px-2 py-4 items-center text-gray-800 font-semibold'><FaUserFriends size={30} className='mr-3' /> Invite Friends</li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Navbar