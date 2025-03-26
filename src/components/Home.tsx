import webDevelopment from '../assets/icons/browser-coding.svg'
import brandingIdentity from '../assets/icons/attach.svg'
import illustrator from '../assets/icons/vector-pen.svg'
import scheduleCalendar from '../assets/icons/schedule-calendar.svg'
import { FC } from 'react'

interface Service {
  name: string
  icon: string
  description: string
}

interface Skill {
  name: string
  percentage: number
}

const Home: FC = () => {

  const myServices: Service[] = [
    {
      name: 'Web Development',
      icon: webDevelopment,
      description: 'I have been working on web design for 10 years.'
    },
    {
      name: 'Branding Identity',
      icon: brandingIdentity,
      description: 'We will make you a brand that is catchy and leaves a trace.'
    },
    {
      name: 'Illustrator',
      icon: illustrator,
      description: 'I have been working on illustration design for 6 years.'
    },
    {
      name: 'Fast Delivery',
      icon: scheduleCalendar,
      description: 'I deliver your business as fast as possible.'
    }
  ]

  const designSkills: Skill[] = [
    {
      name: 'Photoshop',
      percentage: 80
    },
    {
      name: 'Sketch',
      percentage: 60
    },
    {
      name: 'Adobe Xd',
      percentage: 30
    }   
  ]

  const codeSkills: Skill[] = [
    {
      name: 'Javascript',
      percentage: 80
    },
    {
      name: 'HTML5',
      percentage: 60
    },
    {
      name: 'CSS3',
      percentage: 30
    }
  ]

  return (
    <div id='home' className=''>
      {/* About Me Section */}
      <section className='p-6 md:p-8 mx-1'>
        <div className='mb-6 section-title'>
          <h2 className=''>About Me</h2>
        </div>
        <p className='text-gray-700 leading-relaxed'>
          Started earnest brother believe an exposed so. Me he
          believing daughters if forfeited at furniture. Age again
          and stuff downs spoke. Late hour new nay able fat each
          sell. Nor themselves age introduced frequently use
          unsatiable devonshire get. They why quit gay cold rose
          deal park. One same they four did ask busy. Reserved
          opinions fat him nay position. Breakfast as zealously
          incommode do agreeable furniture. One too nay led fanny
          allow plate.
        </p>
        <p className='text-gray-700 leading-relaxed mt-4'>
          Quick six blind smart out burst. Perfectly on furniture
          dejection determine my depending an to. Add short water
          court fat. Her bachelor honoured perceive securing but
          desirous ham required. Questions deficient acuteness to
          engrossed as. Entirely led ten humoured greatest and
          yourself. Besides ye country on observe. She continue
          appetite endeavor she judgment interest the met. For she
          surrounded motionless fat resolution may.
        </p>
      </section>

      {/* My Services Section */}
      <section className='bg-[#f5f5f5] p-6 md:p-8 mx-1'>
        <div className='mb-8 section-title'>
          <h2 className=''>My Services</h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {myServices.map((service) => (
            <div key={service.name} className='bg-white rounded-lg p-6 shadow-md transition-all hover:shadow-lg min-h-[200px]'>
              <img className='w-10 mb-2' src={service.icon} alt={service.name} />
              <h3 className='mb-2'>{service.name}</h3>
              <p className='text-gray-600 text-sm'>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className='p-6 md:p-8 mx-1'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Design Skills */}
          <div>
            <div className='mb-6 section-title'>
              <h2 className=''>Design Skills</h2>
            </div>
            <ul className='space-y-6'>
              {designSkills.map((skill) => (
                <li key={skill.name}>
                  <div className='flex justify-between mb-2'>
                    <p className='font-medium'>{skill.name}</p>
                  </div>
                  <div className='h-1 bg-gray-200 rounded overflow-hidden'>
                    <div className='h-full bg-yellow-400 rounded' style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Skills */}
          <div>
            <div className='mb-6 section-title'>
              <h2 className=''>Code Skills</h2>
            </div>
            <ul className='space-y-6'>
              {codeSkills.map((skill) => (
                <li key={skill.name}>
                  <div className='flex justify-between mb-2'>
                    <p className='font-medium'>{skill.name}</p>
                  </div>
                  <div className='h-1 bg-gray-200 rounded overflow-hidden'>
                    <div className='h-full bg-yellow-400 rounded' style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
