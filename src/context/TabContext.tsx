import { createContext, useContext, useState, ReactNode } from 'react'

export type TabType = 'home' | 'resume' | 'portfolio' | 'blog' | 'contact'

interface TabContextType {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
}

const TabContext = createContext<TabContextType | undefined>(undefined)

export const TabProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<TabType>('home')

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTab = () => {
  const context = useContext(TabContext)
  if (context === undefined) {
    throw new Error('useTab must be used within a TabProvider')
  }
  return context
} 
