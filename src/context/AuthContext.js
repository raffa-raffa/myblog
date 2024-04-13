import { createContext } from "react"
import { useContext } from "react"

const AuthContext = createContext()

export function AuthProvider({children, value}){
return <AuthContext.Provider value={value}> children={children}</AuthContext.Provider> }

export function useAuthValue(){
return useContext(AuthContext)}