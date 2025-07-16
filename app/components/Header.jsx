import { assets } from '@/assets/assets'
import Image from 'next/image' 
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='w-11/12 max-w-3xl text-center mx-auto h-[calc(100vh-4rem)] flex flex-col
      items-center justify-center gap-4'>
        <Image src={assets.asmaback} alt='' className='rounded-full w-32' />
     
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
          Hi! I am Asma Hashar <Image src={assets.hand_icon} alt='' className='w-6'/>
        </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Open for Co-op and Internship Roles. </h1>
            <p className='max-w-2xl mx-auto font-Ovo'>
                I’m a third-year Computer Science student at York University, actively seeking co-op and internship opportunities 
                in the software development field. I’m passionate about building creative digital solutions and excited to bring my skills to 
                a team where I can learn, collaborate, and make a real impact.

            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact"
                className='px-10 py-3 border border-white rounded-full bg-black 
                text-white flex items-center gap-2'

                >contact me<Image src={assets.right_arrow_white} alt=''
                className='w-4'/></a>

                <a href="/Asma_RESUME.pdf" download
                className='px-10 py-3 border rounded-full border-gray-500 flex
                items-center gap-2'> 
                my resume<Image src={assets.download_icon} alt=''
                className='w-4'/></a>

            </div>
    </div>
    </div>
  )
}
export default Header
