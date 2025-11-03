import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { useDarkMode } from './DarkModeContext'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const { darkMode, toggleDarkMode } = useDarkMode()
    const sideMenuRef = useRef();
    
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])
    
    return (
        <>
            <div className={`absolute top-0 right-0 w-full -z-10 ${darkMode ? 'hidden' : ''}`}>
                <Image src={assets.header_bg_color} alt='' className='w-full'/>
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
                flex items-center justify-between z-50 ${isScroll 
                ? darkMode 
                    ? "bg-[#11001F] bg-opacity-50 backdrop-blur-lg shadow-sm" 
                    : "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" 
                : ""}`}>

               <a href="#top">
    <Image 
        src={darkMode ? assets.whitelogo : assets.asmabiglogo} 
        alt="asmalogo" 
        className='w-28 cursor-pointer mr-14'
    />
</a>
                {/* Centered Navbar Links */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <ul className={`hidden md:flex items-center gap-6 lg:gap-8
                        rounded-full px-12 py-3 ${isScroll ? "" : darkMode ? "bg-white/10 shadow-sm" : "bg-white/20 shadow-sm bg-opacity-50"}`}>
                        <li><a className='font-ovo' href="#top">Home</a></li>
                        <li><a className='font-ovo' href="#about">About me</a></li>
                        <li><a className='font-ovo' href="#work">My Work</a></li>
                        <li><a className='font-ovo' href="#contact">Contact me</a></li>
                    </ul>
                </div>

               <div className='flex items-center gap-3'>
 {/* Dark Mode Toggle Button */}
<button 
  onClick={toggleDarkMode}
  className='w-24 h-24 flex items-center justify-center rounded-full 
             border-4 border-gray-300 dark:border-white/20 
             text-2xl shadow-md hover:bg-gray-200 dark:hover:bg-white/10 
             transition'
>
  {darkMode ? '☀️' : '🌙'}
                    </button>
                    
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6'/>
                    </button>
                </div>

                {/* Mobile menu */}
                <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                    top-0 bottom-0 w-64 z-50 h-screen transition duration-500 ${darkMode ? 'bg-[#1a0030]' : 'bg-rose-50'}`}>

                    <div className='absolute right-6 top-6' onClick={closeMenu}> 
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
                    </div>

                    <li><a className='font-ovo' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar