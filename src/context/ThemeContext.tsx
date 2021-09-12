import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'
import Theme from '../types/Theme'
import colors from '@colors/colors'

type AccentColor = 'blue' | 'yellow' | 'pink' | 'purple' | 'orange' | 'green'

interface Colors {
    background: string
    backgroundSecond: string
    backgroundLight: string
    backgroundHover: string
    backgroundDimmed: string
    colorText: string
    colorTextLight: string
    colorTextDimmed: string
    colorTextDimmed15: string
    colorTextDimmed20: string
    colorBorder: string
}

interface Context {
    theme: Theme
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
    colorPalette: Colors
    accentColor: AccentColor
    setAccentColor: React.Dispatch<React.SetStateAction<AccentColor>>
}

const ThemeContext = createContext<Context>({
    theme: 'dimmed',
    setTheme: () => null,
    colorPalette: colors['dimmed'],
    accentColor: 'pink',
    setAccentColor: () => {},
})

export function useTheme() {
    return useContext(ThemeContext)
}

export const ThemeProvider: React.FC = ({ children }) => {
    const { currentUser } = useAuth()
    console.log(currentUser)

    const [theme, setTheme] = useState<Theme>((currentUser && currentUser.theme) || 'dimmed')
    const [colorPalette, setColorPalette] = useState(colors[theme])
    const [accentColor, setAccentColor] = useState<AccentColor>('pink')

    useEffect(() => {
        setColorPalette(colors[theme])
    }, [theme])

    useEffect(() => {
        if (currentUser) setTheme(currentUser.theme)
    }, [currentUser])

    const value = {
        theme,
        setTheme,
        colorPalette,
        accentColor,
        setAccentColor,
    }
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
