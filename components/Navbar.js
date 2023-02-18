import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose,AiOutlineShoppingCart } from 'react-icons/ai'
import { useRouter } from 'next/router'

export const Navbar = () => {
    const router = useRouter
    const [nav, setNav] = useState(false)

    function isActive(route){
        if(route== router.pathname){
            console.log(route);
        }
        else ""
     }
  return (
    <>
    <nav>
    <div className='fixed top-0 left-0 w-full z-10 ease-in bg-[#fefeff]'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
            <Link href='/'>
                <div className='text-2xl flex p-4'>
                    
                    <h1 className='p-1 text-[#6765f0]'>
                    E
                    </h1>
                    <h1 className='p-1 object-cover object-center rounded text-gray-600'>
                    - Commerce
                    </h1>
                </div>
            </Link>
            <ul className='hidden sm:flex'>
                <li className='p-4 text-xl hover:text-blue-600'>
                    <Link href='/product'>Products</Link>
                </li>
                <li className='p-4 text-xl hover:text-blue-600'>
                    <Link href='/'> 
                    <div className='flex justify-center items-center'>
                    Cart <AiOutlineShoppingCart size={25}/>
                    </div> </Link>
                </li>
                <li className='p-4 w-24 text-xl bg-[#274374] text-center object-cover object-center rounded-xl text-white hover:bg-blue-600'>
                <Link href='/login'>Login</Link>
                </li>
            </ul>

            <div className='block sm:hidden z-10'>
            {nav? <AiOutlineClose onClick={()=> setNav(false) } size={30}/> : <AiOutlineMenu onClick={()=> setNav(true) }  size={30}/>}
        </div>

        <div className={nav? 'sm:hidden absolute top-0 left-0 bottom-0 right-0 text-center flex justify-center items-center w-full h-screen bg-white ease-in': 'hidden'}>
        <ul>
                <li className='p-4 text-3xl hover:text-blue-600'>
                    <Link href='/product'>Product</Link>
                </li>
                <li className='p-4 text-3xl hover:text-blue-600'>
                <Link href='/'> 
                    <div className='flex justify-center items-center'>
                    Cart <AiOutlineShoppingCart size={25}/>
                    </div> </Link>
                </li>
                <li className='p-2 bg-[#274374] text-center object-cover object-center rounded-xl text-white text-3xl hover:bg-blue-600'>
                <Link href='/login'>Login</Link>
                </li>
            </ul>
        </div>
        </div>
    </div>
    </nav>
  
    </>
  )
}
