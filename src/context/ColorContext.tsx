import { createContext, useContext, useState, ReactNode } from 'react'

interface ColorContextType {
  primaryColor: string
  setPrimaryColor: (color: string) => void
}

const ColorContext = createContext<ColorContextType | undefined>(undefined)

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [primaryColor, setPrimaryColor] = useState('#eab308') // yellow-500 default

  // Cập nhật CSS variable khi primaryColor thay đổi
  const updateCssVariables = (color: string) => {
    document.documentElement.style.setProperty('--primary-color', color)
  }

  const handleSetPrimaryColor = (color: string) => {
    setPrimaryColor(color)
    updateCssVariables(color)
  }

  return (
    <ColorContext.Provider value={{ primaryColor, setPrimaryColor: handleSetPrimaryColor }}>
      {children}
    </ColorContext.Provider>
  )
}

export const useColor = () => {
  const context = useContext(ColorContext)
  if (context === undefined) {
    throw new Error('useColor must be used within a ColorProvider')
  }
  return context
} 
