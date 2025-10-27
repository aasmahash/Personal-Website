import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { infoList } from '@/assets/assets'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-3xl font-Ovo pt-10'>
            Introduction </h4>
        <h2 className='text-center mb-2 text-5xl font-Ovo'> 
            About me </h2>
      
      <div className='flex w-full flex-col lg:flex-row items-center
      gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'> 
             <Image src={assets.aboutme} alt='' className='w-full
            rounded-3xl'/>
        </div>
        <div className= 'flex-1'>
            <p className='mb-10 max-w-3xl font-Ovo'
            >
               I’m an aspiring software developer who’s always learning new technologies and building projects that solve real problems that improves user experiences. I’m driven by curiosity, creativity, and a desire to make an impact.

                </p>
        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 
        max-w-2x1'>
            {infoList.map(({icon, iconDark, title: title, description}, 
            index)=>(
                <li className='border-[0.5px] border-gray-400
                rounded-xl p-6 cursor-pointer hover:bg-light-hover
                hover:-translate-y-1 duration-500 hover:shadow-black'
                key={index}>
                    <Image src={icon} alt={title} className='w-7
                    mt-3'/>
                    <h3 className='my-4 font-semibold
                    text-gray-700'>{title}</h3>
                    

                {/* If this is the Experience item (i.e. description is an array), render bullets */}
    {Array.isArray(description) ? (
      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
        {description.map((exp, i) => (
          <li key={i}>{exp}</li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-600 text-sm">{description}</p>
    )}
                </li>
            ))}
        </ul>
        </div>
      </div>
    </div>
  )
}

export default About