import { createContext } from 'react'

interface ContextProps {
    // ! properties
    isMenuOpen: boolean

    // ! methods
    toggleSideMenu: () => void
}

export const UiContext = createContext({} as ContextProps)
