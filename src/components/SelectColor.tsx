import { useState, useEffect, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { useColor } from '../context/ColorContext'

const SelectColor: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { primaryColor, setPrimaryColor } = useColor()

  const colors = [
    '#ffb100', '#52bf00', '#d81300', '#425cbb', '#bf55ec',
    '#00b4d9', '#029a83', '#f62459', '#ff5a14', '#abb7b7'
  ]

  // Set initial color when component mounts
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor)
  }, [])

  const handleColorChange = (color: string) => {
    setPrimaryColor(color)
  }

  const handleReset = () => {
    setPrimaryColor('#eab308') // Reset to yellow-500
  }

  return (
    <div className='fixed top-[20%] left-0 z-[1000]'>
      {/* Settings Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`relative bg-white w-10 h-10 flex items-center justify-center rounded-r-md shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer hover:bg-gray-50
          ${isOpen ? 'left-[250px]' : '-left-[0px]'}
        `}
      >
        <FontAwesomeIcon 
          icon={faCog} 
          className='text-xl text-gray-700 animate-spin'
        />
      </button>

      {/* Color Selection Panel */}
      <div className={`
        absolute top-0 w-[250px] bg-white p-5 rounded-l-md shadow-[0_2px_10px_rgba(0,0,0,0.1)]
        transition-all duration-300 ease-in-out
        ${isOpen ? 'left-0' : '-left-[250px]'}
      `}>
        <h5 className='text-sm font-semibold text-gray-500 text-center mb-4'>
          SELECT A COLOR
        </h5>
        
        <hr className='my-4 text-gray-500' />

        <div className='grid grid-cols-5 gap-2 justify-center'>
          {colors.map((color, index) => (
            <div key={index} className='flex justify-center'>
              <button 
                onClick={() => handleColorChange(color)}
                className={`
                  w-[30px] h-[30px] rounded transition-all duration-200 
                  hover:scale-110 hover:shadow-md
                  ${color === primaryColor ? 'ring-2 ring-offset-2 ring-gray-400' : ''}
                `}
                style={{ backgroundColor: color }}
              />
            </div>
          ))}
        </div>

        <hr className='my-4' />

        <button 
          onClick={handleReset}
          className='
            block mx-auto px-8 py-2 rounded-full bg-[var(--primary-color)] text-white text-xs
            transition-all duration-200 hover:shadow-md
          '
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default SelectColor
