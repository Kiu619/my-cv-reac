import profile from '../assets/image/profile.ba9daec7.jpg'
import glasses from '../assets/image/glasses.3e8381e1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'

interface Info {
  Name: string
  Job: string
  Email: string
  Skype: string
  Birthday: string
}

const LeftContent: FC = () => {

  const info: Info = {
    Name: 'Henry Rooney',
    Job: 'Creative Designer',
    Email: 'henry@domain.com',
    Skype: 'henryrooney85',
    Birthday: '06 December 1987'
  }

  return (
    <div className='bg-white rounded-md w-full inline-block shadow-[0_2px_92px_rgba(0,0,0,0.07)]'>
      <div className='p-5 leading-tight'>
        <h1 className='text-[17px] font-bold uppercase'>Henry Rooney</h1>
        <span className='text-gray-500! text-[13px]'>Creative Designer</span>
      </div>
      <figure className='mt-[-18px] [clip-path:polygon(0%_9%,100%_0,100%_94%,0%_100%)]'>
        <img src={profile} alt='Profile' className='w-full' />
      </figure>

      <ul className='pl-10 relative'>
        <li className='pb-15 border-l-2 border-gray-200 relative'>
          <div className='absolute left-[-20px] top-[-14px] w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center'>
            <img src={glasses} alt='Glasses' className='w-6' />
          </div>
        </li>

        {Object.entries(info).map(([key, value], index, array) => (
          <li className={`pl-4 pb-3 ${index !== array.length - 1 ? 'border-l-2 border-gray-200' : ''}
          before:content-[''] before:absolute before:left-[37px] before:bg-white before:rounded-full before:w-2 before:h-2 before:border-2 before:border-yellow-400
        `}>
          <p className='relative top-[-5px]'><span>{key}:</span> {value}</p>
        </li>
        ))}
        
      </ul>

      <div className='flex justify-center pb-8 mt-3'>
        <button className='bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full py-1 px-4 flex items-center text-[14px]'>
          Download CV
          <span className='bg-white rounded-full w-8 h-8 flex items-center justify-center ml-1'>
            <FontAwesomeIcon icon={faDownload} className='text-black text-sm' />
          </span>
        </button>
      </div>
    </div>
  )
}

export default LeftContent
