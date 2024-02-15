import { createContext, useContext, useState } from "react"
import { useLocalStorage } from '../hooks/use-local-storage'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [isLoggedIn, setLogin] = useLocalStorage('isLoggedIn', false)

    const handleIsLogin = () => {
        setLogin(true)
    }

    const logout = () => {
        setLogin(false)
    }

    const context = {
        isLoggedIn,
        handleIsLogin,
        logout,
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}