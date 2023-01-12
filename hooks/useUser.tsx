import userServices from "../services/user"
import { ILogin } from "../types/user"
import React from 'react'
const useUser = () => {

  const login = async (data: ILogin) => await userServices.login(data)
  
  return {
    login
  }
}

export default useUser