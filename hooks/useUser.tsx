import userServices from "../services/user"
import { ILogin } from "../types/user"
const useUser = () => {

  const login = async (data: ILogin) => await userServices.login(data)

  return {
    login
  }
}

export default useUser