import React, { FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faPlay, faImage } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { motion, AnimatePresence } from 'framer-motion'
import work1 from '../assets/image/work-01.e03b5ee2.jpg'
import work2 from '../assets/image/work-02.3d214bf8.jpg'
import work3 from '../assets/image/work-03.47c30c8c.jpg'
import work4 from '../assets/image/work-04.10377661.jpg'
import work5 from '../assets/image/work-05.9996d9b7.jpg'
import work6 from '../assets/image/work-06.jpg'
import work7 from '../assets/image/work-07.d494f586.jpg'
import work8 from '../assets/image/work-08.c3c81b34.jpg'
import work9 from '../assets/image/work-09.0be7dc99.jpg'

interface PortfolioItem {
  id: number
  category: string
  image: string
  title: string
  description: string
  icon: IconDefinition
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: 'web-design',
    image: work1,
    title: 'Babel Admin',
    description: 'An admin template design.',
    icon: faClone
  },
  {
    id: 2,
    category: 'motion-graphic',
    image: work2,
    title: 'George Motion',
    description: 'An motion graphic design.',
    icon: faPlay
  },
  {
    id: 3,
    category: 'photography',
    image: work3,
    title: 'Amazon Travel',
    description: 'Nature photography work.',
    icon: faImage
  },
  {
    id: 4,
    category: 'web-design',
    image: work4,
    title: 'My Workspace',
    description: 'My current workspace design.',
    icon: faImage
  },
  {
    id: 5,
    category: 'web-design',
    image: work5,
    title: 'Recoba Template',
    description: 'Html template design.',
    icon: faImage
  },
  {
    id: 6,
    category: 'illustration',
    image: work6,
    title: 'Doddy App',
    description: 'Mobile app ui kit design.',
    icon: faImage
  },
  {
    id: 7,
    category: 'illustration',
    image: work7,
    title: 'Bob Stayler',
    description: 'Illustration character design.',
    icon: faImage
  },
  {
    id: 8,
    category: 'web-design',
    image: work8,
    title: 'Exmag Wordpress Theme',
    description: 'Multiconcept Blog Theme.',
    icon: faImage
  },
  {
    id: 9,
    category: 'web-design',
    image: work9,
    title: 'Babel Admin Html Code',
    description: 'An admin template design.',
    icon: faImage
  }
]

const Portfolio: FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web-design', label: 'Web Design' },
    { id: 'motion-graphic', label: 'Motion Graphic' },
    { id: 'illustration', label: 'Illustration' },
    { id: 'photography', label: 'Photography' }
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <div id='portfolio' className='visible p-6 md:p-8'>
      <div className='mb-10 section-title'>
        <h2>
          Portfolio
        </h2>
      </div>

      {/* Portfolio Filters */}
      <div className='text-center mb-10'>
        <ul className='flex flex-wrap justify-center gap-2'>
          {filters.map(filter => (
            <li
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                px-5 py-2 rounded-full cursor-pointer font-medium text-gray-600
                transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:opacity-70
                ${activeFilter === filter.id ? 'bg-yellow-400 text-black' : ''}
                sm:inline-block
                ${filter.id === 'all' ? 'w-full sm:w-auto' : 'w-full sm:w-auto'}
              `}
            >
              {filter.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Portfolio Grid */}
      <motion.div 
        className='flex flex-wrap -mx-4'
        layout
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div 
              key={item.id}
              className='w-full sm:w-1/2 lg:w-1/3 p-4'
              layout
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.3 }}
            >
              <div className='group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full'>
                <a href='#' className='block relative'>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110'
                  />
                  {/* Overlay Icon */}
                  <motion.div 
                    className='absolute top-[70%] left-[40%] w-[20%] aspect-square rounded-full bg-yellow-400 opacity-0 
                      group-hover:opacity-100 group-hover:top-[30%] transition-all duration-300 flex items-center justify-center'
                    whileHover={{ scale: 1.1 }}
                  >
                    <FontAwesomeIcon 
                      icon={item.icon} 
                      className=' text-white text-xl'
                    />
                  </motion.div>

                  {/* Content */}
                  <div className='absolute bottom-0 left-0 right-0 p-5 bg-white'>
                    <h3 className='text-base font-medium mb-1'>{item.title}</h3>
                    <p className='text-sm text-gray-600'>{item.description}</p>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className='flex justify-center mt-10'>
        <button 
          className='bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 cursor-pointer'
        >
          No More Works
        </button>
      </div>
    </div>
  )
}

export default Portfolio
