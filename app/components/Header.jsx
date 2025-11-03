import { assets } from '@/assets/assets'
import Image from 'next/image' 
import React from 'react'
import { useDarkMode } from './DarkModeContext'

const Header = () => {
  const { darkMode } = useDarkMode()
  
  return (
    <div className={darkMode ? 'bg-[#11001F]' : ''}>
      <div className='w-11/12 max-w-3xl text-center mx-auto h-[calc(100vh-4rem)] flex flex-col
      items-center justify-center gap-4 pt-37'>
        <Image src={assets.asmaback} alt='' className='rounded-full w-50' />
     
        <h3 className={`flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo ${darkMode ? 'text-white' : 'text-black'}`}>
          Hi! I am Asma Hashar <Image src={assets.hand_icon} alt='' className='w-7'/>
        </h3>
        
        <h1 className={`text-3xl sm:text-6xl lg:text-[66px] font-Ovo ${darkMode ? 'text-white' : 'text-black'}`}>
          Open for Co-op and Internship Roles.
        </h1>
        
        <p className='max-w-2xl mx-auto font-Ovo'></p>
        
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
          <a 
            href="#contact"
            className={`px-10 py-3 border rounded-full flex items-center gap-2 transition ${
              darkMode 
                ? 'border-purple-400 bg-purple-700 text-white hover:bg-purple-600' 
                : 'border-white bg-black text-white hover:bg-gray-800'
            }`}
          >
            contact me
            <Image 
              src={assets.right_arrow_white} 
              alt=''
              className='w-4'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header