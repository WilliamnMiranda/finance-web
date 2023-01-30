import { setCookie } from "nookies"
import nookies from 'nookies'
import userServices from "../services/user"
import { ILogin } from "../types/user"
import { useRouter } from "next/router"
const useUser = () => {
  const router = useRouter();
  const login = async (data: ILogin) => {
    const user = await userServices.login(data)
    setCookie(null, 'finance.token', user.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    router.push('/dashboard')
  }
  return {
    login
  }
}

export default useUser