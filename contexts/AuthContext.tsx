import { setCookie } from "nookies";
import { createContext, ReactNode, useState } from "react";
import userServices from "../services/user";
import Router from "next/router";
interface IProps {
  children: ReactNode
}
interface ISignInData {
  email: string,
  password: string,
}
interface IUser {
  name: string,
  email: string,
  last_name: string,
  cpf: number,
  wallet: {
    _id: string,
    value: number,
  }
  token: string
}

interface AuthContextType {
  isAuthenticated: boolean
  user: IUser | undefined
}
export const AuthContext = createContext({} as AuthContextType)
export const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser | undefined>()
  const isAuthenticated = false;

  const signIn = async ({ email, password }: ISignInData) => {
    const data = { email, password }
    const user = await userServices.login(data)
    if (user) {
      setCookie(undefined, 'finance-token', user.token, { maxAge: 20000000000 })
      setUser(user)
      Router.push('/dashboard')
    } else {
      Router.push('/register')
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}