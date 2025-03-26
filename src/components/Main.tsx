import { FC } from 'react'
import { useTab } from '../context/TabContext'
import Blog from './Blog'
import Contact from './Contact'
import Home from './Home'
import Portfolio from './Portfolio'
import Resume from './Resume'

const Main: FC = () => {
  const { activeTab } = useTab()

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />
      case 'resume':
        return <Resume />
      case 'portfolio':
        return <Portfolio />
      case 'blog':
        return <Blog />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div>
      <div className='bg-white rounded-lg shadow-[0_2px_92px_rgba(0,0,0,0.07)] overflow-hidden'>
        {renderContent()}
      </div>
    </div>
  )
}

export default Main
