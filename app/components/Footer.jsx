
'use client'              
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useDarkMode } from './DarkModeContext'


function Footer() {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            < Image src={assets.asmabiglogo} alt='' className='w-36 mx-auto
            mb-2'/>
        </div>
        <div className='w-max flex items-center gap-2 mx-auto'>
             < Image src={assets.mail_icon} alt='' className='w-6'/>
             asma001@my.yorku.ca
        </div>
               <div className="sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
          <p className="text-center sm:text-left">
            © 2025 Asma Hashar. All rights reserved.
          </p>
          <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
         
            <li>
              <a
                href="https://www.linkedin.com/in/asma-hashar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aasmahash"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        </div>
  )
}
export default Footer