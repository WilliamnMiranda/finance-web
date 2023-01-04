import React from 'react'
import * as C from './styles'
import { useForm, SubmitHandler } from "react-hook-form";
function FormLogin() {

  interface IFormInput {
    firstName: String;
    gender: String;
  }
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
  return (
    <C.Form onSubmit={handleSubmit(onSubmit)}>
      <C.InputForm placeholder='Digite seu email' {...register("firstName")} />
      <C.InputForm placeholder='Digite sua senha' {...register("gender")} />
      <p>Esqueceu sua senha ?</p>
      <button>teste</button>

      <C.ContainerLoginSocial>
        <p> Or continue with </p>
      </C.ContainerLoginSocial>
    </C.Form>
  )
}

export default FormLogin