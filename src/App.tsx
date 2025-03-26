import './App.css'
import LeftContent from './components/LeftContent'
import RightContent from './components/RightContent'
import SelectColor from './components/SelectColor'

function App() {
  return (

        <>
        <SelectColor />
        <div className="min-h-screen flex justify-center mx-auto bg-[url('/src/assets/image/bg.280cef1c.png')] font-['Roboto',sans-serif] relative overflow-x-hidden">
          <div className='container mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16'>
            <div className='flex flex-col md:flex-row md:space-x-6'>
              <div className='w-full md:w-1/3 lg:w-3/12 mb-6 md:mb-0'>
                <LeftContent />
              </div>
              <div className='w-full md:w-2/3 lg:w-9/12'>
                <RightContent />
              </div>
            </div>
          </div>
        </div>
        </>
  )
}

export default App
