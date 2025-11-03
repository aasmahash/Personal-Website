import React from 'react'
import Image from 'next/image'
import { workData, assets } from '@/assets/assets'
import { useDarkMode } from './DarkModeContext'

function Work() {
  const { darkMode } = useDarkMode()
  
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center text-2xl font-Ovo'>
        My portfolio 
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
        My latest work 
      </h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Welcome to my portfolio! Here are projects I have worked on so far!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workData.map((project, i) => (
          <div
            key={i}
            className="relative w-full h-64 rounded-lg overflow-hidden group cursor-pointer"
          >
            {/* background image */}
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url("${project.bgImage}")` }}
            />

            {/* overlay content */}
            <div className={`absolute bottom-4 left-1/2 w-11/12 -translate-x-1/2 rounded-md px-4 py-3 flex items-center justify-between duration-500 group-hover:bottom-6 ${
              darkMode 
                ? 'bg-purple-900/90 backdrop-blur-sm' 
                : 'bg-white bg-opacity-90'
            }`}>
              {/* text block */}
              <div>
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>
                  {project.title}
                </h3>
                {project.description && (
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                )}
              </div>

              {/* link icon */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`border rounded-full w-9 aspect-square flex items-center justify-center transition ${
                  darkMode 
                    ? 'border-white shadow-[2px_2px_0_#fff] group-hover:bg-purple-500' 
                    : 'border-black shadow-[2px_2px_0_#000] group-hover:bg-lime-300'
                }`}
              >
                <Image
                  src={assets.send_icon}
                  alt="send"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
