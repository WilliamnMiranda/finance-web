import React from 'react'
import * as C from './styles'
import { useForm, SubmitHandler } from "react-hook-form";
import userServices from '../../../services/user';
function FormLogin() {

  interface IFormInput {
    email: String;
    password: String;
  }
  type Login = {
    email: string,
    password: string,
  }
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => userServices.login(data as Login);
  return (
    <C.Form onSubmit={handleSubmit(onSubmit)}>
      <C.ContainerInfoLogin>
        <C.InputForm placeholder='Digite seu email' {...register("email")} />
        <C.InputForm placeholder='Digite sua senha' {...register("password")} />
        <p> Esqueceu sua senha ? </p>
      </C.ContainerInfoLogin>
      <C.ButtonLogin>Login</C.ButtonLogin>

      <C.ContainerLoginSocial>
        <span> Or continue with </span>
      </C.ContainerLoginSocial>
    </C.Form>
  )
}

export default FormLogin