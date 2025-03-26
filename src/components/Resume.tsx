import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import client1 from '../assets/image/client-01.476776c4.jpg'
import client2 from '../assets/image/client-02.d87a23ab.jpg'
import client3 from '../assets/image/client-03.d69017c7.jpg'
import client4 from '../assets/image/client-04.1e2c6375.jpg'
import Slider from 'react-slick'
import { FC, useState } from 'react'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import testimonial1 from '../assets/image/testimonial-1.8a9a67cc.jpg'
import testimonial2 from '../assets/image/testimonial-2.5ec26184.jpg'
import testimonial3 from '../assets/image/testimonial-3.43b19380.jpg'

interface WorkingHistory {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface EducationHistory {
  school: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Client {
  image: string;
}

interface Testimonial {
  name: string;
  position: string;
  text: string;
  image: string;
}

const Resume: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const workingHistory: WorkingHistory[] = [
    {
      company: 'Facebook Inc',
      position: 'Art Director',
      startDate: '2010',
      endDate: 'Present',
      description: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.'
    },
    {
      company: 'Google',
      position: 'Senior Designer',
      startDate: '2008',
      endDate: '2010',
      description: 'So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.'
    },
    {
      company: 'Creative Shake',
      position: 'Junior Designer',
      startDate: '2005',
      endDate: '2008',
      description: 'Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.'
    }
  ]

  const educationHistory: EducationHistory[] = [
    {
      school: 'Abc University of Los Angeles',
      startDate: '2004',
      endDate: '2009',
      description: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.'
    },
    {
      school: 'Abc High School',
      startDate: '2000',
      endDate: '2003',
      description: 'So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.'
    },
    {
      school: 'Abc High School',
      startDate: '2000',
      endDate: '2003',
      description: 'So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.'
    }
  ]

  const clients: Client[] = [
    {
      image: client1
    },
    {
      image: client2
    },
    {
      image: client3
    },
    {
      image: client4
    }
  ]


  // Cấu hình cho slider
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    // slidesToScroll: 1,
    swipeToSlide: true,  // Thêm thuộc tính này
    draggable: true,     // Thêm thuộc tính này
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1006,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,  // Thêm thuộc tính này
          draggable: true,     // Thêm thuộc tính này
        }
      }
    ],
    customPaging: (i: number) => (
      <div
        className={`w-2 h-2 mx-1 rounded-full transition-colors duration-300 ${i === currentSlide ? 'bg-yellow-400' : 'bg-gray-300'}`}
      ></div>
    ),
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    dotsClass: "slick-dots flex justify-center pt-20 block"
  }

  // Dữ liệu testimonials
  const testimonials: Testimonial[] = [
    {
      name: 'April M. Griffin',
      position: 'Founder',
      text: 'Our logo and business card design look great. Thanks Henry',
      image: testimonial2
    },
    {
      name: 'Larry M. Johnson',
      position: 'Freelancer',
      text: 'Henry is a very creative and talented designer. I do not hesitate to work again.',
      image: testimonial3
    },
    {
      name: 'Jack Garratt',
      position: 'Freelancer',
      text: 'Great designer! he finished our work wonderfully and just in time. thanks for everything.',
      image: testimonial1
    },
    {
      name: 'April M. Griffin',
      position: 'Founder',
      text: 'Our logo and business card design look great. Thanks Henry',
      image: testimonial2
    },
    {
      name: 'Larry M. Johnson',
      position: 'Freelancer',
      text: 'Henry is a very creative and talented designer. I do not hesitate to work again.',
      image: testimonial3
    },
    {
      name: 'Jack Garratt',
      position: 'Freelancer',
      text: 'Great designer! he finished our work wonderfully and just in time. thanks for everything.',
      image: testimonial1
    },
    {
      name: 'April M. Griffin',
      position: 'Founder',
      text: 'Our logo and business card design look great. Thanks Henry',
      image: testimonial2
    },
    {
      name: 'Larry M. Johnson',
      position: 'Freelancer',
      text: 'Henry is a very creative and talented designer. I do not hesitate to work again.',
      image: testimonial3
    }
  ]

  return (
    <div id="resume" className="visible">
      <div className="flex">
        <section className="resume p-6 md:p-8 w-full">
          <div className="section-title mb-8">
            <h2 className="text-2xl md:text-3xl font-bold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-yellow-400">Resume</h2>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-10 ">
            <div className="relative mb-10 md:mb-0 md:w-1/2">
              <ul className="pl-5">
                <li className="pb-15 border-l-2 border-gray-200">
                  <div className="absolute left-[-3px] top-[-10px] w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <h2 className="timeline-title ml-8 text-lg md:text-xl font-semibold">Working History</h2>
                </li>

                {workingHistory.map((work, index) => (
                  <li key={work.company} className={`${index !== workingHistory.length - 1 ? 'border-l-2 border-gray-200' : ''} pl-4 pb-8
                 before:content-[''] before:absolute before:left-[16.5px] before:bg-white before:rounded-full before:w-2 before:h-2 before:border-2 before:border-yellow-400
               `}>
                    <div className="relative top-[-10px]">
                      <h3 className="line-title font-medium text-lg">{work.company} - {work.position}</h3>
                      <span className="inline-block mb-2 text-sm text-gray-500">{work.startDate} - {work.endDate}</span>
                      <p className="text-gray-700">{work.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative md:w-1/2">
              <ul className="pl-5">
                <li className="pb-15 border-l-2 border-gray-200">
                  <div className="absolute left-[-3px] top-[-10px] w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>
                  <h2 className="timeline-title ml-8 text-lg md:text-xl font-semibold">Education History</h2>
                </li>

                {educationHistory.map((education, index) => (
                  <li key={education.school} className={`${index !== educationHistory.length - 1 ? 'border-l-2 border-gray-200' : ''} pl-4 pb-8
                 before:content-[''] before:absolute before:left-[16.5px] before:bg-white before:rounded-full before:w-2 before:h-2 before:border-2 before:border-yellow-400
               `}>
                    <div className="relative top-[-10px]">
                      <h3 className="line-title font-medium text-lg">{education.school}</h3>
                      <span className="inline-block mb-2 text-sm text-gray-500">{education.startDate} - {education.endDate}</span>
                      <p className="text-gray-700">{education.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="">
        <section className="my-services mx-1 bg-gray-100  p-6 md:p-8">
          <div className="section-title mb-10">
            <h2 className="text-2xl md:text-3xl font-bold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-yellow-400">Clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

            {clients.map((client) => (
              <div key={client.image} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center h-24">
                <img src={client.image} alt="Client 1" className="max-h-full max-w-full object-contain" />
              </div>
            </div>
            ))}
          </div>
        </section>
      </div>

      <div className="flex  p-6 md:p-8">
        <section className="w-full mx-1">
          <div className="section-title mb-10">
            <h2 className="text-2xl font-bold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-yellow-400">Testimonials</h2>
          </div>

          {/* Slider with React Slick */}
          <div className="testimonials-slider max-w-5xl mx-auto">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4 mb-10">
                  <div className="bg-white rounded-lg p-6 shadow-md transition-all hover:shadow-lg border border-gray-100  min-h-[180px]">
                    <div className="flex items-center pb-6 mb-1 border-b border-gray-200">
                      <div className="w-16 h-16 overflow-hidden rounded-full mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.src = 'https://via.placeholder.com/150';
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-yellow-400 text-lg font-medium">{testimonial.name}</h4>
                        <span className="text-gray-500">{testimonial.position}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume
