import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { infoList } from '@/assets/assets'
import { useDarkMode } from './DarkModeContext'

const About = () => {
  const { darkMode } = useDarkMode()

  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className={`text-center mb-2 text-3xl font-Ovo pt-10 ${darkMode ? 'text-purple-300' : 'text-black'}`}>
        Introduction 
      </h4>
      <h2 className={`text-center mb-2 text-5xl font-Ovo ${darkMode ? 'text-white' : 'text-black'}`}> 
        About me 
      </h2>

      <div className='flex w-full flex-col lg:flex-row items-start lg:items-start gap-5 my-5'>
        {/* Image container with crossfade */}
        <div className='w-64 sm:w-80 rounded-3xl max-w-none -mt-10 lg:-mt-20 relative h-[320px] overflow-hidden'>
          {/* Light version (shows when darkMode is false) */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <Image
              src={assets.aboutme}
              alt='About me'
              fill
              style={{ objectFit: 'cover' }}
              className='rounded-3xl'
            />
          </div>

          {/* White version (shows when darkMode is true) */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <Image
              src={assets.aboutmewhite}
              alt='About me (white)'
              fill
              style={{ objectFit: 'cover' }}
              className='rounded-3xl'
            />
          </div>
        </div>
        
        <div className='flex-1'>
          <p className='mb-10 max-w-3xl font-Ovo'>
            I'm a third-year Computer Science student at York University seeking co-op or internship opportunities in software development. 
            I'm passionate about creating impactful solutions and eager to contribute to a team where I can learn, collaborate, and make a meaningful difference.
            As an aspiring software developer, I love exploring new technologies and building projects that solve real-world problems and enhance user experiences. 
          </p>
          
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2x1'>
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <li 
                className={`border-[0.5px] rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 transition ${
                  darkMode 
                    ? 'border-white/20 hover:bg-purple-900/30 hover:shadow-white' 
                    : 'border-gray-400 hover:bg-light-hover hover:shadow-black'
                }`}
                key={index}
              >
                <Image 
                  src={darkMode && iconDark ? iconDark : icon} 
                  alt={title} 
                  className='w-7 mt-3'
                />
                <h3 className={`my-4 font-semibold ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                  {title}
                </h3>

                {Array.isArray(description) ? (
                  <ul className={`list-disc list-inside space-y-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {description.map((exp, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: exp }} />
                    ))}
                  </ul>
                ) : (
                  <p
                    className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
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
