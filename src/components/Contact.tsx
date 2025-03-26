import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { FC } from 'react'

const Contact: FC = () => {
  return (
    <div id='contact' className='visible'>
      <div className='flex flex-col lg:flex-row gap-8 p-6 md:p-8'>
        {/* Contact Form */}
        <div className='w-full lg:w-1/2'>
          <div className='mb-8 section-title'>
            <h2 className=''>
              Contact Form
            </h2>
          </div>

          <form className='space-y-4'>
            <div className='flex flex-col md:flex-row gap-4'>
              <input 
                className='w-full px-3 h-[45px] text-sm text-black border-b border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors' 
                placeholder='Name' 
                type='text'
                id='name' 
              />
              <input 
                className='w-full px-3 h-[45px] text-sm text-black border-b border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors' 
                placeholder='E-mail'
                type='email' 
                id='email' 
              />
            </div>
            <textarea 
              className='w-full min-h-[100px] p-3 text-sm text-black border-b border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors ' 
              placeholder='Message'
              id='message'
            ></textarea>
            <button 
              className='bg-yellow-400 text-white px-8 py-2 rounded-full hover:bg-yellow-500 transition-colors duration-300 cursor-pointer'
              type='submit'
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className='w-full lg:w-1/2'>
          <div className='mb-8 section-title'>
            <h2 className=''>
              Contact Information
            </h2>
          </div>
          <div className=''>
            <ul className='space-y-4'>
              <li className='flex gap-2'>
                <span className='text-[13px]'>Address:</span>
                <p>107727 Santa Monica Boulevard Los Angeles</p>
              </li>
              <li className='flex gap-2'>
                <span className='text-[13px]'>Phone:</span>
                <p>+38 012-3456-7890</p>
              </li>
              <li className='flex gap-2'>
                <span className='text-[13px]'>Job:</span>
                <p>Freelancer</p>
              </li>
              <li className='flex gap-2'>
                <span className='text-[13px]'>E-mail:</span>
                <p>chris@domain.com</p>
              </li>
              <li className='flex gap-2'>
                <span className='text-[13px]'>Skype:</span>
                <p>chrisjohnson85</p>
              </li>
              <li className='flex gap-4 mt-6'>
              <a href="" className={`w-[24px] h-[24px] hover:text-[#3b5998]! hover:scale-[1.2] hover:translate-x-[2px] hover:translate-y-[-5px] transition-all duration-200`}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="" className={`w-[24px] h-[24px] hover:text-[#1da1f2]! hover:scale-[1.2] hover:translate-x-[2px] hover:translate-y-[-5px] transition-all duration-200`}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="" className={`w-[24px] h-[24px] hover:text-[#c32aa3]! hover:scale-[1.2] hover:translate-x-[2px] hover:translate-y-[-5px] transition-all duration-200`}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="" className={`w-[24px] h-[24px] hover:text-[#ea4c89]! hover:scale-[1.2] hover:translate-x-[2px] hover:translate-y-[-5px] transition-all duration-200`}>
                <FontAwesomeIcon icon={faDribbble} />
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Map */}
      <div className='mt-12 p-6 md:p-8'>
        <div className='mb-8 section-title'>
          <h2 className=''>
            Contact Map
          </h2>
        </div>
        <iframe
          className='w-full h-[400px] rounded-lg'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130939095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1646830593465!5m2!1svi!2s'
          allowFullScreen 
          loading='lazy'
        />
      </div>
    </div>
  )
}

export default Contact
