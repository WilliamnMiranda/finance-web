import { setCookie } from "nookies"
import nookies from 'nookies'
import userServices from "../services/user"
import { ILogin } from "../types/user"
const useUser = () => {
  const login = async (data: ILogin) => {
    const user = await userServices.login(data)
    console.log(user)
    setCookie(null, 'finance.token', user.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
  }

  return {
    login
  }
}

export default useUser