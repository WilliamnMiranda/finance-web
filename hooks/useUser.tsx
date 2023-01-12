import userServices from "../services/user"
import { ILogin } from "../types/user"

const useUser = () => {
  const login = async (data: ILogin) => {
    const user = await userServices.login(data)
    console.log(user)
  }

  return {
    login
  }
}

export default useUser